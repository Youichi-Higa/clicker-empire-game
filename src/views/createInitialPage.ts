export const createInitialPage = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add(
    'bg-dark',
    'vh-100',
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );
  container.innerHTML = `
    <div class="bg-white p-4">

      <h1 class="mb-4">Clicker Empire Game</h1>

      <input
        type="text"
        class="form-control mb-4"
        placeholder="Your name"
      />

      <div class="d-flex justify-content-between">
        <div class="col-6">
          <button type="button" class="btn btn-primary col-11">New</button>
        </div>
        <div class="col-6 text-end">
          <button type="button" class="btn btn-primary col-11">Login</button>
        </div>
      </div>  
    </div>
  `;

  return container;
};
