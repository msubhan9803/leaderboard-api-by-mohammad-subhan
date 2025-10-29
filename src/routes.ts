import { Router } from "express";
import userRoute from "@/users/user.routes";
import pointRoute from "@/points/points.routes";
import leaderboardRoute from "@/leaderboard/leaderboard.routes";

const router = Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/points',
    route: pointRoute,
  },
  {
    path: '/leaderboard',
    route: leaderboardRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;
