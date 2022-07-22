import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
