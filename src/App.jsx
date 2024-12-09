import { BrowserRouter, NavLink, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const PostPage = lazy(() => import("./pages/PostPage.jsx"));



function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path:"/post/:id",
      element:<PostPage />
    }
  ]);
}

export default function App() {

  return (<>
      <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <div>
          <NavLink to="/">
            {({ isActive }) => (
              <p style={{ color: isActive ? "red" : "black" }}>Home</p>
            )}
          </NavLink>
          <NavLink to="/post/:id">
            {({ isActive }) => (
              <p style={{ color: isActive ? "red" : "black" }}></p>
            )}
          </NavLink>
        </div>
        <Routes />
      </BrowserRouter>
    </Suspense>

  </>)
  
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               