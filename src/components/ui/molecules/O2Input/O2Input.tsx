import cx from 'classnames';
import { useState } from 'react';
import Label, { type LabelOptions } from 'components/ui/atoms/Label/Label';
import { type ValidationStatus, type Validation } from 'types/validations';

type O2InputProps = {
  label?: LabelOptions;
  placeholder?: string;
};

const O2Input = ({ label, placeholder }: O2InputProps) => {
  const [status, setStatus] = useState<ValidationStatus>('ok');

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