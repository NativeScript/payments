import { BaseFailure } from './common';
export { FailureTypes } from './common';
export declare class Failure extends BaseFailure {
  constructor(errorCode: number | null);
}
