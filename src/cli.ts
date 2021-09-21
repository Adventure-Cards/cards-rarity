#!/usr/bin/env node
import decks from './constants/decks.json';
import { rarityStats, Decks } from './lib/rarity';

const stats = rarityStats(decks as Decks)

console.log(stats);
