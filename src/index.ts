import { renderTitle, renderLife } from './renderer';

renderTitle('Still Life', 1);

import _15BentPaperclip from './life/still-life/15-bent-paperclip';
import _29BitStillLifeNo1 from './life/still-life/29-bit-still-life-no1';
import _31_4 from './life/still-life/31_4';
import AircraftCarrier from './life/still-life/aircraft-carrier';
import Amphisbaena from './life/still-life/amphisbaena';
import AriesBetwixtTwoBlocks from './life/still-life/aries-betwixt-two-blocks';
import AsymmetricAmphisbaena from './life/still-life/asymmetric-amphisbaena';
import Barge from './life/still-life/barge';
import BargeSiameseLoaf from './life/still-life/barge-siamese-loaf';
import BargeWithLongTail from './life/still-life/barge-with-long-tail';
import BargeWithVeryLongTail from './life/still-life/barge-with-very-long-tail';
import BeeHat from './life/still-life/bee-hat';
import Beehive from './life/still-life/beehive';
import Block from './life/still-life/block';
import Boat from './life/still-life/boat';
import Loaf from './life/still-life/loaf';
renderTitle('Strict Still Life', 2);
[
  _15BentPaperclip,
  _29BitStillLifeNo1,
  _31_4,
  AircraftCarrier,
  Amphisbaena,
  AriesBetwixtTwoBlocks,
  AsymmetricAmphisbaena,
  Barge,
  BargeSiameseLoaf,
  BargeWithLongTail,
  BargeWithVeryLongTail,
  BeeHat,
  Beehive,
  Block,
  Boat,
  Loaf,
].forEach(v => renderLife(v.title, v.life as Life[][]));

// renderTitle('Pseudo Still Life', 2);
// renderTitle('Quasi Still Life', 2);
// renderTitle('Enumerating Still Life', 2);

import Lighthouse from './life/oscillator/lighthouse';
import Toad from './life/oscillator/toad';
import Pulsar from './life/oscillator/pulsar';
renderTitle('Oscillator', 1);
[
  Lighthouse,
  Toad,
  Pulsar,
].forEach(v => renderLife(v.title, v.life as Life[][]));

import Blinker from './life/oscillator/blinker';
renderTitle('Muttering moat', 2);
[
  Blinker,
].forEach(v => renderLife(v.title, v.life as Life[][]));

import _7x9Eater from './life/eater/7x9-eater';
renderTitle('Eater', 1);
[
  _7x9Eater,
].forEach(v => renderLife(v.title, v.life as Life[][]));
