import { ScrollTop, AppBar, Drawer } from '..';

interface Props {
  appBarBgColor?: string;
  children?: React.ReactNode;
  showButtonTheme?: boolean;
  showButtonShop?: boolean;
  showButtonCart?: boolean;
  showSearchInput?: boolean;
  afterChangeSearchInput?: (value: string) => void;
}

const PageWrapper: React.FC<Props> = ({
  children,
  appBarBgColor,
  showButtonTheme,
  showButtonShop,
  showButtonCart,
  showSearchInput,
  afterChangeSearchInput,
}) => {
  return (
    <>
      <AppBar
        appBarBgColor={appBarBgColor}
        showButtonTheme={showButtonTheme}
        showButtonShop={showButtonShop}
        showButtonCart={showButtonCart}
        showSearchInput={showSearchInput}
        afterChangeSearchInput={afterChangeSearchInput}
      />
      {children}
      <Drawer />
      <ScrollTop />
    </>
  );
};

export default PageWrapper;
