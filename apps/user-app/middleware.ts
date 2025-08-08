import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/api/auth/signin", // Redirect here if not authenticated
  },
});

export const config = {
  matcher: ["/dashboard", "/p2p", "/transactions", "/transfer"], // Protect all /dashboard routes
};