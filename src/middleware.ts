export { auth as middleware } from "@/auth"

// import { auth } from "@/auth";
// import { NextResponse } from "next/server";

// const privateRoutes = ["/dashboard"];

// const authRoutes = ["/login"];

// const DEFAULT_REDIRECT_LOGIN_URL = "/login";

// const DEFAULT_REDIRECT_HOME_URL = "/dashboard";

// export default auth((req) => {
//   const route = req.nextUrl.pathname;
//   const isAuth = !!req.auth;
//   console.log(isAuth)
//   if (route === "/") return NextResponse.next();
//   if (!isAuth && privateRoutes.includes(route)) {
//     const newUrl = new URL(DEFAULT_REDIRECT_LOGIN_URL, req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   } else if (isAuth && authRoutes.includes(route)) {
//     const newUrl = new URL(DEFAULT_REDIRECT_HOME_URL, req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
//   return NextResponse.next();
// });
