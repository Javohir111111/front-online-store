import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import App from "../App";
import { Home, About, Service, Contact, Posts, ErrorPage , PostItem} from "@pages";
import { SignUp } from "@layout";



const index = () => {
    


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route path="/" element={<Posts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route path="/posts/:id" element={<PostItem />} />
          <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
