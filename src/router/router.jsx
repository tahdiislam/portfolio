import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../Component/FirstPage/FirstPage";

const router = createBrowserRouter([
    { path: "/", element: <FirstPage /> },
    { path: "/home", element: <FirstPage /> },
]);

export default router;
