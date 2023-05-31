import {
  elementColor,
  rarityBgGradient,
  rarityBorderColorCard
} from "./data"
import type {
  ElementColorType,
  RarityBgGradientType,
  RarityBoderColorCardType
} from "./types"


export const getElementColor = (element: string) => {
  return elementColor[element as ElementColorType]
}

export const getRarityBorderColor = (rarity: number) => {
  return rarityBorderColorCard[rarity as RarityBoderColorCardType]
}

export const getRarityBgGradient = (rarity: number) => {
  return rarityBgGradient[rarity as RarityBgGradientType]
}
