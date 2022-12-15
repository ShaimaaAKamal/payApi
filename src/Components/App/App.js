import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
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
       <Online>
              <RouterProvider router={routes}></RouterProvider>
       </Online>
       <Offline>
             <div className="vh-100 d-flex justify-content-center align-items-center">
                     <div className="alert alert-secondary w-75 mx-auto text-center">
                        Your are Offline
                    </div>
             </div>
       </Offline>
    </div>
  );
}

export default App;
