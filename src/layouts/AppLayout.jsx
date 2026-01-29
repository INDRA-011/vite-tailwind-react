import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 px-6">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
