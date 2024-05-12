import { Home, Statistics, Search, Payments, Profile } from "./pages";
import { HomeIcon, SearchIcon, User, CreditCard, PieChart } from "../assets/icons";
export const tabs = [
    {
        name: "Home",
        component: Home,
        icon: HomeIcon,
    },
    { name: "Statistics", component: Statistics, icon: PieChart },
    { name: "Search", component: Search, icon: SearchIcon },
    { name: "Payments", component: Payments, icon: CreditCard },
    { name: "Profile", component: Profile, icon: User },
];
