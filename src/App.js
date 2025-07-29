import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurentMenu from "./Components/RestaurentMenu";
import UserContext from "./Utils/UserContext";

const Contact = lazy(() => {
  return import("./Components/Contact");
});

const AppLayout = () => {
  const [userName, setuserName] = useState(null);

  useEffect(() => {
    //authenticated
    const data = {
      name: "Vikas",
    };
    setuserName(data.name);
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedinUser: userName, setuserName, userName }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Loading</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
