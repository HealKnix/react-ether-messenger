import { FC } from 'react';
import './TextArea.scss';

interface ButtonProps {
  id: string;
  title?: string;
  value: string | number;
}

const TextArea: FC<ButtonProps> = ({ id, title, value }) => {
  return (
    <>
      <label htmlFor={id} className="input__wrapper">
        {title}
        <textarea id={id} className="input" value={value} />
      </label>
    </>
  );
};

export default TextArea;
