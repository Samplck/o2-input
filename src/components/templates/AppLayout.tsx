import { type ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="c-layout -app">
      { children }
    </div>
  );
};

export default AppLayout;