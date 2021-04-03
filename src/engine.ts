import {
  CANVAS,
  HEIGHT,
  WIDTH,
  MAP,
  CLEAR_INTERVAL,
  SET_INTERVAL,
  FILL_STYLE,
  FILL_RECT,
  FOR_EACH,
} from "noliter";

enum DOTS_STYLE {
  WIDTH = 16,
  HEIGHT = 16,
  MARGIN = 2,
  DEAD_COLOR = '#FFF',
  SURVIVE_COLOR = '#000',
}

const BACKGROUND_COLOR = '#FFF';

const getCoordinateX = (x: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
};

const getCoordinateY = (y: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
};

export class GameOfLifeEngine {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  private life: Life[][];
  private intervalKey: null | number = null;

  constructor(cvs: HTMLCanvasElement, life: Life[][]) {
    const ctx = cvs.getContext('2d');
    if (ctx) {
      this[CANVAS] = cvs;
      this.context = ctx;
      this.setLife(life);
      this.startLife();
    } else {
      throw 'Failed to create context';
    }
  }

  setLife(life: Life[][]): void {
    this.life = life;
    this[CANVAS][WIDTH] = getCoordinateX(life[0].length);
    this[CANVAS][HEIGHT] = getCoordinateY(life.length);
  }

  public clear(): void {
    this.context[FILL_STYLE] = BACKGROUND_COLOR;
    this.context[FILL_RECT](0, 0, this[CANVAS][WIDTH], this[CANVAS][HEIGHT]);
  }

  public startLife(): void {
    if (!this.intervalKey) {
      this.drawDots();
      this.intervalKey = window[SET_INTERVAL](() => {
        this.life = this.life[MAP]((children, i) =>
          children[MAP]((isSurvive, j) => this.nextLife(j, i, isSurvive))
        );
        this.drawDots();
      }, 500);
    }
  }

  public stopLife(): void {
    if (this.intervalKey !== null) {
      window[CLEAR_INTERVAL](this.intervalKey);
      this.intervalKey = null;
    }
  }

  protected drawDot(x: number, y: number): void {
    this.context.fillRect(
      getCoordinateX(x),
      getCoordinateY(y),
      DOTS_STYLE.WIDTH,
      DOTS_STYLE.HEIGHT,
    );
  }

  protected drawDots(): void {
    this.clear();
    this.life[FOR_EACH]((children, i) => {
      children[FOR_EACH]((isSurvive, j) => {
        this.context[FILL_STYLE] = isSurvive
          ? DOTS_STYLE.SURVIVE_COLOR
          : DOTS_STYLE.DEAD_COLOR;
        this.drawDot(j, i);
      });
    });
  }

  protected isSurvive(x: number, y: number): Life {
    return this.life[y] && this.life[y][x] ? 1 : 0;
  }

  protected nextLife(x: number, y: number, isSurvive: Life): Life {
    const count =
      this.isSurvive(x - 1, y - 1) +
      this.isSurvive(x, y - 1) +
      this.isSurvive(x + 1, y - 1) +
      this.isSurvive(x - 1, y) +
      this.isSurvive(x + 1, y) +
      this.isSurvive(x - 1, y + 1) +
      this.isSurvive(x, y + 1) +
      this.isSurvive(x + 1, y + 1);
    return count === 3 || (isSurvive && count === 2) ? 1 : 0;
  }
}
