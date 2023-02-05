import { User } from '@/models/user';
import { displayItemIncome} from "./displayItemIncome"

export const createItemList = (user: User): HTMLDivElement => {
  const container = document.createElement('div');

  user.itemList.forEach((item) => {
    container.innerHTML += `
      <div class="selectItem d-flex align-items-center my-2 p-4">
        <div class="col-4 d-none d-sm-block">
          <img
            src=${item.url}
            alt="item"
            width="80%"
          />
        </div>
        <div class="col-12 col-sm-8">
          <div class="d-flex justify-content-between text-white">
            <p class="h2">${item.name}</p>
            <p class="h2">${item.currentAmount}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="h5 text-white">￥${item.price}</p>
            <p class="h5 text-success">${displayItemIncome(item)}</p>
          </div>
        </div>
      </div>
    `;
  });

  return container;
};
