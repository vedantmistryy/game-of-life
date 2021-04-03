import { GameOfLifeEngine } from './engine';
import {
  createElement,
  ID,
  APPEND,
  CANVAS,
  INPUT,
  DATALIST,
  OPTION,
  SET_ATTRIBUTE,
  ADD_EVENT_LISTENER,
  MAIN,
  VALUE,
  CHANGE,
  FOR_EACH,
  SPELLCHECK,
} from 'noliter';
import patterns from './patterns';

const canvas = createElement(CANVAS);
const engine = new GameOfLifeEngine(canvas, patterns[0].life);
const DATALIST_ID = 'patterns';

document.body[APPEND](
  createElement(MAIN, (main) => {
    main[APPEND](
      createElement(DATALIST, (datalist) => {
        datalist[ID] = DATALIST_ID;
        patterns[FOR_EACH](({ title }) =>
          datalist[APPEND](
            createElement(OPTION, (option) => {
              option[VALUE] = title;
            })
          )
        );
      }),
      createElement(INPUT, (input) => {
        input[SPELLCHECK] = false;
        input[VALUE] = patterns[0].title;
        input[SET_ATTRIBUTE]('list', DATALIST_ID);
        input[ADD_EVENT_LISTENER](CHANGE, () => {
          const pattern = patterns.filter(
            ({ title }) => title === input[VALUE]
          )[0];
          if (pattern) {
            engine.setLife(pattern.life);
          }
        });
      })
    );
  }),
  canvas,
);
