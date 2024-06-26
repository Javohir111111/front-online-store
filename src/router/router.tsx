import { Home, About, Service, Posts, ErrorPage , PostItem } from "@pages";
// import {  }
// import HomeIcon from '@mui/icons-material/Home';

const router = [
  {
    path: "/signup",
    element: <Home />,
    content:"Enter",
  },
  {
    path: "/about",
    element: <About />,
    content:"Favourite",
  },
  {
    path: "/service",
    element: <Service />,
    content:"Basket",
    // icon: <HomeIcon />
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   content:"Contact"
  // },
  // {
  //   path: "/posts",
  //   element: <Posts />,
  //   content:"Posts"
  // },
  // {
  //   path: "/posts/:id",
  //   element: <PostItem />,
  //   content:"Posts"
  // },
  // {
  //   path: "/blog",
  //   element: <Blog/>,
  //   content:"Blog"
  // },
  {
    path: "*",
    element: <ErrorPage />
  }
];

export default router;
