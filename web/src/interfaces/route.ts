export default interface IRoute {
  icon: any;
  name: string;
  path: string;
  component: any;
  isPrivate: boolean;
  exact: boolean;
}
