export const createUserInfo = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add('d-sm-flex', 'flex-wrap', 'text-white', 'text-center');

  container.innerHTML = `
    <div class="bg-steelblue col-sm-6 border border-3 border-dark">
      <p class="my-2">がっち</p>
    </div>
    <div class="bg-steelblue col-sm-6 border border-3 border-dark">
      <p class="my-2">36 years old</p>
    </div>
    <div class="bg-steelblue col-sm-6 border border-3 border-dark">
      <p class="my-2">10000 days</p>
    </div>
    <div class="bg-steelblue col-sm-6 border border-3 border-dark">
      <p class="my-2">￥500</p>
    </div>
  `;

  return container;
};
