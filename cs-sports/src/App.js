import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/partners" component={Partners} />
      <Route path="/clients" component={Clients} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/news" component={News} />
      <Route path="/contactus" component={ContactUs} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
