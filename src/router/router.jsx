import { createBrowserRouter } from "react-router-dom";
import Project01 from "../Component/AllProjects/Project01";
import FirstPage from "../Component/FirstPage/FirstPage";
import ProjectLayout from "../Layout/ProjectLayout";

const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/home", element: <FirstPage /> },
  { path: "/laptop-mart", element: <Project01 /> },
  { path: "/laptop-mart", element: <Project01 /> },
  { path: "/laptop-mart", element: <Project01 /> },
]);

export default router;
