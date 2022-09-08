import Upload from '~/pages/Upload';
import TimePicker from '~/pages/Timepicker';
import Home from '~/pages/Home';
// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/upload', component: Upload },
  { path: '/time', component: TimePicker },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
