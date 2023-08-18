import { FunctionComponent } from "react";
import { Category } from "@/../types";

export const NavItem: FunctionComponent<{
  value: Category | "All";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = `capitalize cursor-pointer hover:border-b-4 border-green-500 ${active=== value ? "border-b-4" : ""}`;
  //if (active === value) className += "text-gree";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Python" {...props} />
    </div>
  );
};

export default ProjectsNavbar;