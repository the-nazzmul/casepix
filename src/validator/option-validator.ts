// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iPhonex",
    },
    {
      label: "iPhone 11",
      value: "iPhone11",
    },
    {
      label: "iPhone 11 Pro",
      value: "iPhone11pro",
    },
    {
      label: "iPhone 11 Pro Max",
      value: "iPhone11promax",
    },
    {
      label: "iPhone 12",
      value: "iPhone12",
    },
    {
      label: "iPhone 12 Pro",
      value: "iPhone12pro",
    },
    {
      label: "iPhone 12 Pro Max",
      value: "iPhone12promax",
    },
    {
      label: "iPhone 13",
      value: "iPhone13",
    },
    {
      label: "iPhone 13 Pro",
      value: "iPhone13pro",
    },
    {
      label: "iPhone 13 Pro Max",
      value: "iPhone13promax",
    },
    {
      label: "iPhone 14",
      value: "iPhone14",
    },
    {
      label: "iPhone 14 Pro",
      value: "iPhone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iPhone14promax",
    },
    {
      label: "iPhone 14",
      value: "iPhone14",
    },
    {
      label: "iPhone 14 Pro",
      value: "iPhone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iPhone14promax",
    },
    {
      label: "iPhone 15",
      value: "iPhone15",
    },
    {
      label: "iPhone 15 Pro",
      value: "iPhone15pro",
    },
    {
      label: "iPhone 15 Pro Max",
      value: "iPhone15promax",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      desciption: undefined,
      price: PRODUCT_PRICES.materials.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      desciption: "Scratch-resistant coating",
      price: PRODUCT_PRICES.materials.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finishes",
  options: [
    {
      label: "Smooth",
      value: "smooth",
      desciption: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured",
      value: "textured",
      desciption: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
