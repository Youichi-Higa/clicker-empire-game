import { User } from '@/models/user';

export const createUserInfo = (user: User): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('d-sm-flex', 'flex-wrap', 'text-white', 'text-center');

  container.innerHTML = `
    <div class="bg-cornflowerblue col-sm-6 border border-3 border-dark">
      <p class="my-2">${user.name}</p>
    </div>
    <div class="bg-cornflowerblue col-sm-6 border border-3 border-dark">
      <p class="my-2">${user.age} years old</p>
    </div>
    <div class="bg-cornflowerblue col-sm-6 border border-3 border-dark">
      <p class="my-2">${user.days} days</p>
    </div>
    <div class="bg-cornflowerblue col-sm-6 border border-3 border-dark">
      <p class="my-2">￥${user.money}</p>
    </div>
  `;

  return container;
};
