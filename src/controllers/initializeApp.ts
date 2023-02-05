import { createInitialPage } from '@/views/createInitialPage';
import { createMainPage } from '@/views/createMainPage';
import { createInitialUserAccount } from '@/controllers/createInitialUserAccount';

export const initializeApp = () => {
  const app = document.getElementById('app') as HTMLDivElement;
  app.append(createInitialPage());

  const newGameBtn = document.getElementById('newGame') as HTMLElement;
  newGameBtn.addEventListener('click', () => {
    const userName = document.querySelector('input')?.value;
    if (userName === undefined) return;

    if (userName === '') {
      alert('Please put your name');
    } else {
      const user = createInitialUserAccount(userName);
      app.innerHTML = '';
      app.append(createMainPage(user));
    }
  });
};
