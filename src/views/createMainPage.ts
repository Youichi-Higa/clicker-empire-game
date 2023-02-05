import { createBurgerStatus } from './createBurgerStatus';
import { createUserInfo } from './createUserInfo';
import { createItemList } from './createItemList';
import { User } from '@/models/user';

export const createMainPage = (user: User): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('bg-dark', 'vh-100', 'd-flex', 'justify-content-center', 'p-md-5');
  container.innerHTML = `
    <div class="bg-steelblue p-2 d-flex col-12 col-md-11 col-lg-10">

      <div class="bg-dark p-2 col-4" id="burgerStatus">
      </div>

      <div class="col-8 px-2">
        <div class="bg-dark mb-4 p-1" id="userInfo">
        </div>
        <div class="bg-dark px-2 overflow-auto" style="height: 500px" id="items">
        </div>
      <div>

      <div class="d-flex justify-content-end mt-3">
        <div class="hover border p-2 me-2" id="reset">
          <i class="fa-solid fa-rotate-left fa-3x text-white"></i>
        </div>
        <div class="hover border p-2" id=""save>
          <i class="fa-solid fa-save fa-3x text-white"></i>
        </div>
      </div>


    </div>
  `;

  container.querySelectorAll('#burgerStatus')[0].append(createBurgerStatus());
  container.querySelectorAll('#userInfo')[0].append(createUserInfo());
  container.querySelectorAll('#items')[0].append(createItemList());

  return container;
};
