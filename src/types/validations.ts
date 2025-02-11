export type ValidationStatus = 'ok' | 'warning' | 'error';

export type Validation = {
  length: number;
  status: ValidationStatus;
}