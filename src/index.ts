import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import './style.css';

import { createInitialPage } from '@/views/createInitialPage';
import { createMainPage } from '@/views/createMainPage';

const app = document.getElementById('app') as HTMLDivElement;
const initialPage = createInitialPage();
const mainPage = createMainPage();
app.append(mainPage);
