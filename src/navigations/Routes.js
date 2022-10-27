import light from 'assets/images/desktop-basic-light.png'
import BasicLight from 'screens/BasicLight';
import UserDashboard from 'screens/UserDashboard';
import Admin from 'screens/Admin';

const routes = [
  {
    path: '/admin',
    title: 'Admin',
    component: <Admin />,
    preview: light,
  },
  {
    path: '/dashboard',
    title: 'User Dashboard',
    component: <UserDashboard />,
    preview: light,
  },
  {
    path: '/',
    title: 'Basic Light',
    component: <BasicLight />,
    preview: light,
  },
]

export { routes }
