import { CgLogIn } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";

export const Navdata = [
  {
    id: 1,
    icon: <FaHome />,
    path: "/",
    feature: "Home",
  },
  {
    id: 2,
    icon: <CgLogIn />,
    path: "login",
    feature: "Login",
  },
  {
    id: 3,
    icon: <GoSignIn />,
    path: "signup",
    feature: "Signup",
  },
  {
    id: 4,
    icon: <MdAccountCircle />,
    path: "profile",
    feature: "profile",
  },
];
