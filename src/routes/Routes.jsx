import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/shared/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path:"skills",
          Component: Skills
        },
        {
          path: "projects",
          Component: Projects
        },
        {
          path:"project/:id",
          Component:ProjectDetails
        }
    ]
  },
]);