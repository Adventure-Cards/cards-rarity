import decks from './constants/decks.json';
import { commonCreature, rareCreature, legendaryCreature, mythicCreature } from './constants/rarity';

export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  await delayMillis(1000)
  console.log('done')
  return true
}

type Decks = {
  [index: string]: {
    items: string[]
    imageItems: string[]
    image: string
  }
}

const rarityDetector = (deck: Decks) => {
  [
    { label: 'Commons', items: commonCreature },
    { label: 'Rare', items: rareCreature },
    { label: 'Legendary', items: legendaryCreature },
    { label: 'Mythical', items: mythicCreature }
  ].map(creatures => {
    console.log(`\n${creatures.label}`)
    const commons = creatures.items;
    commons.map(common => {
      const totalCommon = Object.values(deck).reduce((acc, val) => {
        const count = val.items.reduce((prev, curr) => curr.includes(common) ? prev += 1 : prev, 0)
        return Object.assign({}, { [common]: acc[common] + count })
      }, { [common]: 0 })
      console.log(common, totalCommon)
    })
  })
}

rarityDetector(decks as Decks)