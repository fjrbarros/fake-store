import { ScrollTop, AppBar } from '..';

interface Props {
  appBarBgColor?: string;
  children?: React.ReactNode;
  showButtonTheme?: boolean;
  showButtonShop?: boolean;
}

const PageWrapper: React.FC<Props> = ({
  children,
  appBarBgColor,
  showButtonTheme,
  showButtonShop,
}) => {
  return (
    <>
      <AppBar
        appBarBgColor={appBarBgColor}
        showButtonTheme={showButtonTheme}
        showButtonShop={showButtonShop}
      />
      {children}
      <ScrollTop />
    </>
  );
};

export default PageWrapper;
