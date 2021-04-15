import { GameOfLifeEngine } from './engine';

const select = document.getElementById('patterns') as HTMLSelectElement;
const h2 = document.getElementById('title') as HTMLHeadingElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const engine = new GameOfLifeEngine(canvas, [[]]);
const fetchLife = (path: string) =>
  fetch(`./patterns/${path}`)
    .then((res) => res.json())
    .then(({ title, life }) => {
      h2.textContent = title;
      engine.stopLife();
      engine.setLife(life);
      engine.startLife();
    });

select.addEventListener('change', () => fetchLife(select.value));
fetchLife((select.firstElementChild as HTMLOptionElement).value);
