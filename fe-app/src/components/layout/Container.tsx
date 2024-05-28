import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container h-screen mx-auto flex flex-col px-4 gap-14">
      {children}
    </div>
  );
};

export default Container;
