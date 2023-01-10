import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createInitialPage } from '@/views/createInitialPage';

const app = document.getElementById('app') as HTMLDivElement;
const initialPage = createInitialPage();
app.append(initialPage);
