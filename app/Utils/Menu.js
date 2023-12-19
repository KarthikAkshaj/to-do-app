import { list, check, todo, home } from "./Icons";

const Menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/Important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: check,
    link: "/Completed",
  },
  {
    id: 4,
    title: "Incomplete",
    icon: todo,
    link: "/Incomplete",
  },
];

export default Menu;