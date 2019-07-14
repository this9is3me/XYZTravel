// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewForm from "views/NewForm/NewForm.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/application",
    name: "Application",
    icon: "content_paste",
    component: NewForm,
    layout: "/admin"
  }
];

export default dashboardRoutes;
