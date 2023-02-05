export const createPurchasePage = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('bg-cornflowerblue', 'my-2', 'p-2');

  container.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div class="text-white">
        <p class="h4">Filp machine</p>
        <p>Max purchases: 500</p>
        <p>Price: 500</p>
        <p>Get: ¥25 /click</p>
      </div>
      <div class="col-4 d-none d-sm-block">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png"
          alt="item"
          width="100%"
        />
      </div>
    </div>

    <div>
      <p class="text-white">How many would you like to buy?</p>
      <input type="number" class="form-control" placeholder="0" />
      <p class="text-white text-end">total: ¥0</p>
    </div>

    <div class="d-flex justify-content-between mb-3">
      <button type="button" class="btn btn-light col-5">Go Back</button>
      <button type="button" class="btn btn-primary col-5">Purchase</button>
    </div>
  `;

  return container;
};
