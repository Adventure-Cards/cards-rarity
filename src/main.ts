import decks from './constants/decks.json';
import { commonCreature, rareCreature, legendaryCreature, mythicCreature } from './constants/rarity';

type Decks = {
  [index: string]: {
    items: string[]
    imageItems: string[]
    image: string
  }
}

const rarityStats = (deck: Decks) => {
  return [
    { label: 'Commons', items: commonCreature },
    { label: 'Rare', items: rareCreature },
    { label: 'Legendary', items: legendaryCreature },
    { label: 'Mythical', items: mythicCreature }
  ].map(creatures => {
    const commons = creatures.items;
    return commons.map(common => {
      const totalCommon = Object.values(deck).reduce((acc, val) => {
        const count = val.items.reduce((prev, curr) => curr.includes(common) ? prev += 1 : prev, 0)
        return Object.assign({}, { [common]: acc[common] + count })
      }, { [common]: 0 })
      return totalCommon
    })
  }).reduce((prev, curr) => curr.concat(prev)).reduce((prev, curr) => Object.assign(curr, prev))
}

const stats = rarityStats(decks as Decks)

export { stats }
