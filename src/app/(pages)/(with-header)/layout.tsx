import Header from "@/app/components/Header";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
