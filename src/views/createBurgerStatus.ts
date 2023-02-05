import { User } from '@/models/user';

export const createBurgerStatus = (user: User): HTMLDivElement => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="bg-cornflowerblue text-white text-center border border-5 border-dark">
      <p class="h2 mt-0">${user.burgerCount} Burgers</p>
      <p class="m-1">one click ￥25</p>
    </div>
    <div class="hover text-center mt-5">
      <img
        src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png"
        alt="burger"
        width="80%"
      />
    </div>
  `;

  return container;
};
