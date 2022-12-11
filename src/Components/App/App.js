import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';


function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout/>,errorElement:<NotFound/>,  children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'pricing',element:<Pricing/>},
      {path:'contact',element:<Contact/>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
