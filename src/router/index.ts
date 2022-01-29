import React from "react";
import Dashboard from "../pages/account/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Todo from "../pages/Todo";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/',
  TODO = '/todo',
  LOGIN = '/login',
  ACCOUNT = '/account'
}


export const publicRoutes:IRoute[] = [
  {path: RouteNames.HOME, component: Home},
  {path: RouteNames.TODO, exact: true, component: Todo},
  {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes:IRoute[] = [
  {path: RouteNames.ACCOUNT, exact: true, component: Dashboard},
]