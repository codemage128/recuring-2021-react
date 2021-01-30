// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import PagesPricing from "../pages/Utility/pages-pricing"

// Landing
import Landing from "../pages/Landing/index"

//Dashboard
import UserProfile from "../pages/Authentication/user-profile"
import Jobs from '../pages/Jobs/JobList'
import JobCreate from '../pages/Jobs/JobCreate'
import JobDetail from '../pages/Jobs/JobDetail'
import JobInterview from "pages/Jobs/JobInterview"

const landingRoutes = [
  { path: "/", exact: true, component: Landing },
]

const userRoutes = [
  // Recuriter Dashboard
  { path: "/job-list", component: Jobs },
  { path: "/job-create", component: JobCreate },
  {path: "/job-detail", component: JobDetail},
  { path: "/dashboard", component: Dashboard },
  { path: "/membership", component: PagesPricing },
  { path: "/profile", component: UserProfile },
]
const authRoutes = [
  {path: "/jobs/:id", component: JobInterview},
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },


  { path: "/chat", component: PagesComingsoon },
]

export { userRoutes, authRoutes, landingRoutes }
