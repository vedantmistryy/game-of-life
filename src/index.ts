import { GameOfLifeEngine } from './engine';

const select = document.getElementById('patterns') as HTMLSelectElement;
const engine = new GameOfLifeEngine([[]]);

function fetchLife(path: string) {
  fetch(`./patterns/${path}`)
    .then((res) => res.json())
    .then(({ life }) => {
      engine.stopLife();
      engine.setLife(life);
      engine.startLife();
    });
}

select.addEventListener('change', () => fetchLife(select.value));
fetchLife((select.firstElementChild as HTMLOptionElement).value);
