import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "Post",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Category",
        component: TableList,
      },
      {
        path: "typography",
        name: "Advertisement",
        component: Typography,
      },
      {
        path: "icons",
        name: "Article",
        component: Icons,
      },
      {
        path: "maps",
        name: "Magazine",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Authors",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Setting",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
