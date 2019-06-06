import Enemy from './Enemy.js';
let bigRedChestAscii = [ '••••••___________•••••',
  "••. '            ' .••",
  ' /___________________\\',
  '|         ___  (RED) |',
  '|        / O \\       |',
  '|        \\___/       |',
  '|____________________|' ]
export default class BigRedChest extends Enemy{
  constructor(){
    super(800,0,bigRedChestAscii, "melvinsBarnKey", 100, 100);
  }
}
