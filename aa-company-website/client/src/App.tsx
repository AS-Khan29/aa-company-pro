import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeOffer from "./pages/WhatWeOffer";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/services"} component={WhatWeOffer} />
      <Route path={"/products"} component={Products} />
      <Route path={"/contact"} component={ContactUs} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
