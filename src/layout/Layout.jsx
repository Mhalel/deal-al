import Favicon from "react-favicon";
import { Helmet } from "react-helmet";
import SideNav from "../components/SideNav";
export default function Layout({ children }) {
  console.log(window.location.href)
  return (
  <>
    <Favicon url={'/icon.png'}/>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Deal 360° AI</title>
          <link rel="canonical" href="http://example.com/example" />
      </Helmet>
      <main>
      { children }
      </main>
    </>
  );
}
