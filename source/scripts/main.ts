import { Clock } from './clock';

const clock = new Clock(<HTMLElement>document.querySelector('#clock'));
clock.start();

(<any>window).clock = clock;
