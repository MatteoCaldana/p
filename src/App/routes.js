import Homepage from './pages/Homepage';
import CV from './pages/CV';
import Projects from './pages/Projects';

const appRoutes = [
  {
    id: 'homepage',
    path: 'homepage',
    component: Homepage,
    title: 'Homepage',
  },
  {
    id: 'cv',
    path: 'cv',
    component: CV,
    title: 'CV',
  },
  {
    id: 'projects',
    path: 'projects',
    component: Projects,
    title: 'Projects',
  },
  {
    id: 'no-match',
    path: '*',
    component: Homepage,
    title: 'Homepage',
  }
];

export default appRoutes;