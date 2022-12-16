interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = (props: ChildProps) => {
  return (
    <div>
      {props.color}
      <button onClick={props.onClick}>Click Child</button>
      {props.children}
    </div>
  );
};

export const Child2: React.FC<ChildProps> = (props) => {
  return (
    <div>
      {props.color}
      <button onClick={props.onClick}>Click Child2</button>
    </div>
  );
};

Child2.displayName;
