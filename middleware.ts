import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    // publicRoutes : ["/chat", "/chat/:id*", "/register"]
    publicRoutes : ["/", "/api/clerk"],
    // ignoredRoutes: ["/api/clerk(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};