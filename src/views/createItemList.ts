export const createItemList = (): HTMLDivElement => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="selectItem d-flex align-items-center my-2 p-4">
      <div class="col-4 d-none d-sm-block">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png"
          alt="item"
          width="80%"
        />
      </div>
      <div class="col-12 col-sm-8">
        <div class="d-flex justify-content-between text-white">
          <p class="h2">Flip machine</p>
          <p class="h2">0</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="h5 text-white">￥15000</p>
          <p class="h5 text-success">￥25 /click</p>
        </div>
      </div>
    </div>
  `;

  return container;
};
