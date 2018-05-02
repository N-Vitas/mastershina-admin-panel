import Dashboard from '../containers/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import TableList from '../views/TableList/TableList';
import Shiny from '../containers/Shiny';
import Disc from '../containers/Disc';
import Oil from '../containers/Oil';
import Battery from '../containers/Battery';
import ImageEdit from '../containers/ImageEdit'
// import Typography from '../views/Typography/Typography';
import ImagesSite from '../containers/Images/ImagesSite';
import Icons from '../views/Icons/Icons';
import Maps from '../views/Maps/Maps';
import Notifications from '../views/Notifications/Notifications';

const appRoutes = [
    { path: "/dashboard", name: "Статистика", icon: "pe-7s-graph", component: Dashboard },
    { path: "/images", name: "Картинки", icon: "pe-7s-note2", component: ImagesSite },
    { path: "/image-edit", hidden:true, name: "Картинки", icon: "pe-7s-note2", component: ImageEdit },
    { path: "/shiny", name: "Шины", icon: "pe-7s-note2", component: Shiny },
    { path: "/disc", name: "Диски", icon: "pe-7s-note2", component: Disc },
    { path: "/oil", name: "Масла", icon: "pe-7s-note2", component: Oil },
    { path: "/battery", name: "Аккумуляторы", icon: "pe-7s-note2", component: Battery },
    { redirect: true, path:"/", to:"/dashboard", name: "Статистика" }
];

export default appRoutes;
