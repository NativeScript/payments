const fs = require('fs');
const path = require('path');
const xcode = require('xcode');

module.exports = function ($logger, $projectData, hookArgs) {
  $logger.info('[After Prepare] Adding Build Phase for Square SDK');

  return new Promise((resolve, reject) => {
    // $logger.info("[After Prepare] Inside Promise");
    try {
      const args = hookArgs || { prepareData: {} };
      const prepareData = args.prepareData;

      // Safely access platform
      const platform = prepareData.platform || 'unknown';
      // $logger.info("The hook is running for platform: " + platform);

      if (platform.toLowerCase() !== 'ios') {
        $logger.info('ℹ️ Not iOS — skipping build phase injection.');
        return resolve();
      }

      const iosDir = path.join($projectData.platformsDir, 'ios');
      const pbxprojPath = path.join(iosDir, `${$projectData.projectName}.xcodeproj`, 'project.pbxproj');

      if (!fs.existsSync(pbxprojPath)) {
        $logger.warn('⚠️ Xcode project not found at ' + pbxprojPath);
        return resolve();
      }

      const project = xcode.project(pbxprojPath);
      project.parseSync();

      const target = project.getFirstTarget().uuid;
      const phases = project.hash.project.objects['PBXShellScriptBuildPhase'];

      // Avoid duplicates
      const alreadyExists = Object.values(phases).some((phase) => typeof phase === 'object' && phase.shellScript && phase.shellScript.includes('SquareInAppPaymentsSDK.framework/setup'));

      if (alreadyExists) {
        $logger.info('ℹ️ Script already exists in build phases. Skipping.');
        return resolve();
      }

      const scriptContent = '# Square In App Payments SDK Script\\n' + 'SETUP_SCRIPT=${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}"/SquareInAppPaymentsSDK.framework/setup"\\n' + 'if [ -f "$SETUP_SCRIPT" ]; then\\n' + '"$SETUP_SCRIPT"\\n' + 'fi\\n';

      project.addBuildPhase([], 'PBXShellScriptBuildPhase', 'Run Square SDK Setup Script', target, {
        shellPath: '/bin/sh',
        shellScript: scriptContent,
      });

      fs.writeFileSync(pbxprojPath, project.writeSync());
      $logger.info('✅ Square SDK Build Phase Script Added to Xcode Build Phases');

      resolve(); // done successfully
    } catch (err) {
      $logger.error('Error in after-prepare hook: ' + err.message);
      reject(err); // fail the hook if something went wrong
    }
  });
};
