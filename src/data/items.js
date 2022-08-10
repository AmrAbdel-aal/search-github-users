import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGlobalContext } from "../components/Context";

const { user } = useGlobalContext();

export default [
  {
    id: 1,
    icon: <GoRepo className="icon" />,
    label: "repos",
    value: user.public_repos,
    color: "pink",
  },
  {
    id: 2,
    icon: <FiUsers className="icon" />,
    label: "followers",
    value: user.followers,
    color: "green",
  },
  {
    id: 3,
    icon: <FiUserPlus className="icon" />,
    label: "following",
    value: user.following,
    color: "purple",
  },
  {
    id: 4,
    icon: <GoGist className="icon" />,
    label: "gists",
    value: user.public_gists,
    color: "yellow",
  },
];
