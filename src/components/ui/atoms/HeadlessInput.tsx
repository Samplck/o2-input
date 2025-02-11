import { useState } from 'react';

type HeadlessInputEvent = 'change' | 'focus';

type HeadlessInputProps = {
  id?: string;
  type?: 'text' | 'number' | 'email' | 'tel';
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
};

const HeadlessInput = ({
  id,
  type = 'text',
  placeholder,
  value,
  className,
  onChange,
  onFocus
}: HeadlessInputProps) => {
  const [inputValue, setInputValue] = useState<string>();

  const emit = (event: HeadlessInputEvent, value?: string): void => {
    const emits: Record<HeadlessInputEvent, () => void> = {
      change: (): void => {
        setInputValue(value);
        onChange?.(value);
      },
      focus: (): void => {
        onFocus?.();
      }
    };

    emits[event]();
  };

  return (
    <input 
      id={id}
      type={type} 
      placeholder={placeholder}
      value={inputValue ?? value}
      className={className}
      onKeyUp={
        (e): void => emit('change', (e.target as HTMLInputElement).value)
      }
      onFocus={
        (e): void => emit('focus')
      }
    />
  );
};

export default HeadlessInput;