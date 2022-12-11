import { createBrowserRouter } from "react-router-dom";
import Project01 from "../Component/AllProjects/Project01";
import Project02 from "../Component/AllProjects/Project02";
import Project03 from "../Component/AllProjects/Project03";
import Blogs from "../Component/Blogs/Blogs";
import FirstPage from "../Component/FirstPage/FirstPage";

const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/home", element: <FirstPage /> },
  { path: "/laptop-mart", element: <Project01 /> },
  { path: "/snackdeck", element: <Project02 /> },
  { path: "/code-tutor", element: <Project03 /> },
  { path: "/blogs", element: <Blogs /> },
]);

export default router;
