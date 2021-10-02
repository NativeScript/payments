import { BaseFailure } from './failure.common';
export { FailureTypes } from './failure.common';
export declare class Failure extends BaseFailure {
  constructor(errorCode: number | null);
}
