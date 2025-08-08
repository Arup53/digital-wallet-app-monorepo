import NextAuth from "next-auth";

import { authOptionsGoogle } from "../../../lib/auth/authGoogle";


const handler = NextAuth(authOptionsGoogle);

export { handler as GET, handler as POST };
