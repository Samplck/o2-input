export type LabelOptions = {
  text: string;
  description?: string;
};

type LabelProps = {
  bound: string;
} & LabelOptions;

const Label = ({ bound, text, description }: LabelProps) => {
  return (
    <label className="c-label" htmlFor={bound}>
      { text }
      { description &&
        <span className="description">{ description }</span>
      }
    </label>
  );
};

export default Label;