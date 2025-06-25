import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "../routes/PrivateRoutes";
import AddVolunteerPost from "../Pages/AddVolunteerPost";
import VolunteerDetails from "../Pages/VolunteerDetails";
import Error from "../Components/Error";
import AllPosts from "../Pages/AllPosts";
import MyPosts from "../Pages/MyPosts";
import UpdatePost from "../Components/UpdatePost";
import MyVolunteerRequests from "../Pages/MyVolunteerRequests";
import TermsOfService from "../Components/TermsOfService";
import Privacy from "../Components/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoutes>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",

        element: (
          <PrivateRoutes>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-drab.vercel.app/posts/${params.id}`
          ),
      },
      {
        path: "all-posts",
        Component: AllPosts,
        loader: () =>
          fetch("https://volunteer-management-server-drab.vercel.app/posts"),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoutes>
            <MyPosts></MyPosts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-post/:id",
        loader: ({ params }) =>
          fetch(
            `https://volunteer-management-server-drab.vercel.app/posts/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdatePost></UpdatePost>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-requests",
        element: (
          <PrivateRoutes>
            <MyVolunteerRequests></MyVolunteerRequests>
          </PrivateRoutes>
        ),
      },
      { path: "/terms-of-service", Component: TermsOfService },
      { path: "/privacy", Component: Privacy },
    ],
  },
]);
