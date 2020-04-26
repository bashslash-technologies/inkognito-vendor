import LoginPage from "../containers/MainContent/Pages/Pages_login";

export default [
  {
    path: "/auth/",
    component: LoginPage,
  },
  {
    path: "/auth/register",
    component: null,
  },
  {
    path: "/auth/verify-mail",
    component: null,
  },
  {
    path: "/auth/forgot-password",
    component: null,
  },
  {
    path: "/auth/reset-password",
    component: null,
  },
  {
    path: "/auth/verification-code",
    component: null,
  },
];
