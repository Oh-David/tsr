import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("clicked")}>
      Button
    </Child>
  );
};

export default Parent;
