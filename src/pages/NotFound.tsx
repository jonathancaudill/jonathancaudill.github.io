import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GradientBackground from "@/components/GradientBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
            <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
            <Link to="/">
              <Button className="bg-white text-black hover:bg-white/90">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
