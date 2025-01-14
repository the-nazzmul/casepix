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
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 13 Pro",
      value: "iphone13pro",
    },
    {
      label: "iPhone 13 Pro Max",
      value: "iphone13promax",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 14 Pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iphone14promax",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 14 Pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iphone14promax",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone 15 Pro",
      value: "iphone15pro",
    },
    {
      label: "iPhone 15 Pro Max",
      value: "iphone15promax",
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
