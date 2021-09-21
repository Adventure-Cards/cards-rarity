/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import decks from './constants/decks.json';
import { rarityStats, Decks } from './lib/rarity';

const stats = rarityStats(decks as Decks);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).stats = stats  // instead of casting window to any, you can extend the Window interface: https://stackoverflow.com/a/43513740/5433572

console.log('Data "stats" was added to the window object. You can try it yourself by just entering "stats"')