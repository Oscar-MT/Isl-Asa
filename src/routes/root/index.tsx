import { Outlet, ScrollRestoration } from "react-router";
import AuthNav from "./components/auth-nav";
import Footer from "./components/footer";

export default function Root() {
 
  return (
   <div className="min-h-screen bg-background">
        <AuthNav />
          <Outlet />
        <Footer />
    </div>
  );
}
