import { ScrollTop, AppBar, Drawer } from '..';

interface Props {
  appBarBgColor?: string;
  children?: React.ReactNode;
  showButtonTheme?: boolean;
  showButtonShop?: boolean;
  showButtonCart?: boolean;
  showSearchInput?: boolean;
}

const PageWrapper: React.FC<Props> = ({
  children,
  appBarBgColor,
  showButtonTheme,
  showButtonShop,
  showButtonCart,
  showSearchInput,
}) => {
  return (
    <>
      <AppBar
        appBarBgColor={appBarBgColor}
        showButtonTheme={showButtonTheme}
        showButtonShop={showButtonShop}
        showButtonCart={showButtonCart}
        showSearchInput={showSearchInput}
      />
      {children}
      <Drawer />
      <ScrollTop />
    </>
  );
};

export default PageWrapper;
