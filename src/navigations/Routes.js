import light from 'assets/images/desktop-basic-light.png'
import BasicLight from 'screens/BasicLight';
import UserDashboard from 'screens/UserDashboard';

const routes = [
  {
    path: '/',
    title: 'Basic Light',
    component: <BasicLight />,
    preview: light,
  },
  {
    path: '/dashboard',
    title: 'Basic Light',
    component: <UserDashboard />,
    preview: light,
  },
]

export { routes }
