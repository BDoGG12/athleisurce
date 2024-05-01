import NavigationBar from '../navigationBar/navigationBar';

const Layout = ({children}) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;