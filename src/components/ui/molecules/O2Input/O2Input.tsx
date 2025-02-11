import cx from 'classnames';
import { useState, useEffect } from 'react';
import Label, { type LabelOptions } from 'components/ui/atoms/Label/Label';
import { type ValidationStatus, type Validation } from 'types/validations';

type O2InputProps = {
  label?: LabelOptions;
  placeholder?: string;
  disabled?: boolean;
  defaultStatus?: ValidationStatus;
};

const O2Input = ({ 
  label, 
  placeholder, 
  disabled, 
  defaultStatus = 'ok' 
}: O2InputProps) => {
  const [status, setStatus] = useState<ValidationStatus>(defaultStatus);

  useEffect((): void => setStatus(defaultStatus), [defaultStatus]);

  const validate = (value: string): void => {
    const validations: Validation[] = [
      { length: 8, status: 'warning' },
      { length: 12, status: 'error' }
    ];

    setStatus(
      validations
        .filter((validation) => value.length >= validation.length)
        ?.sort((a, b) => (b.length - value.length + a.length - value.length))?.[0]?.status
        ?? 'ok'
    )
  };

  return (
    <div className="o2-input-wrapper">
      { label &&
        <Label 
          bound="O2input"
          { ...label }
        />
      }
      <input 
        id="O2input"
        placeholder={placeholder}
        disabled={disabled}
        className={cx('c-o2-input', {
          '-error': status === 'error',
          '-warning': status === 'warning'
        })}
        onKeyUp={(e) => validate((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default O2Input;