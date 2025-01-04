import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Detail from "../Pages/Detail/Detail";

export const routes = [
  {
    path: "/",
    handle: { title: "Home" },
    errorElement: <NotFound />,

    children: [
        {
            index: true,
            Component: <Home />,
          },
      {
        path: "detail/:id",
        handle: { title: "Detail" },
        children: [
          {
            index: true,
            Component: <Detail />,
          },
        ],

       
      },
    ],
  },
];
