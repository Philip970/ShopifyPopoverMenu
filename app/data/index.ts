import { ImageSourcePropType } from "react-native";

/* import {
  Shrine_Alphi,
  Shrine_Lmb,
  Shrine_Logo6,
  Shrine_Mal,
  Shrine_Squiggle,
} from "../components/Shrine_SVG"; */

export enum Vendor {
  Alphi = "Alphi",
  Lmbrjk = "Lmbrjk",
  Mal = "Mal",
  Six = "Six",
  Squiggle = "Squiggle",
}

export enum Category {
  All = "All",
  Accessories = "Accessories",
  Clothing = "Clothing",
  Home = "Home",
}

export interface ItemData {
  id: number;
  title: string;
  price: number;
  vendor: Vendor;
  category: Category;
  photo: ImageSourcePropType;
  isPhotoPortrait?: boolean;
}

export function groupByVendor(items: ItemData[]): ItemData[][] {
  // Regrouper les items par leur vendor
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.vendor]) {
      acc[item.vendor] = [];
    }
    acc[item.vendor].push(item);
    return acc;
  }, {} as Record<Vendor, ItemData[]>);

  // Convertir l'objet en tableau de tableaux en respectant l'ordre des Vendors dans l'énum
  return Object.values(Vendor).map((vendor) => grouped[vendor] || []);
}

/* export function getVendorRes(vendor: Vendor): () => JSX.Element {
  switch (vendor) {
    case Vendor.Alphi:
      return Shrine_Alphi;
    case Vendor.Lmbrjk:
      return Shrine_Lmb;
    case Vendor.Mal:
      return Shrine_Mal;
    case Vendor.Six:
      return Shrine_Logo6;
    default:
      return Shrine_Squiggle;
  }
} */

export const SampleItems: ItemData[] = [
  {
    id: 0,
    title: "Vagabond sack",
    price: 120,
    vendor: Vendor.Squiggle,
    category: Category.Accessories,
    photo: require("../assets/images/photo_0.jpg"),
  },
  {
    id: 1,
    title: "Stella sunglasses",
    price: 58,
    vendor: Vendor.Mal,
    category: Category.Accessories,
    photo: require("../assets/images/photo_1.jpg"),
  },
  {
    id: 2,
    title: "Whitney belt",
    price: 35,
    vendor: Vendor.Lmbrjk,
    category: Category.Accessories,
    photo: require("../assets/images/photo_2.jpg"),
  },
  {
    id: 3,
    title: "Garden stand",
    price: 98,
    vendor: Vendor.Alphi,
    category: Category.Accessories,
    photo: require("../assets/images/photo_3.jpg"),
  },
  {
    id: 4,
    title: "Strut earrings",
    price: 34,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photo: require("../assets/images/photo_4.jpg"),
  },
  {
    id: 5,
    title: "Varsity socks",
    price: 12,
    vendor: Vendor.Lmbrjk,
    category: Category.Accessories,
    photo: require("../assets/images/photo_5.jpg"),
  },
  {
    id: 6,
    title: "Weave key ring",
    price: 16,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photo: require("../assets/images/photo_6.jpg"),
  },
  {
    id: 7,
    title: "Gatsby hat",
    price: 40,
    vendor: Vendor.Six,
    category: Category.Accessories,
    photo: require("../assets/images/photo_7.jpg"),
  },
  {
    id: 8,
    title: "Shrug bag",
    price: 198,
    vendor: Vendor.Squiggle,
    category: Category.Accessories,
    photo: require("../assets/images/photo_8.jpg"),
  },
  {
    id: 9,
    title: "Gilt desk trio",
    price: 58,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photo: require("../assets/images/photo_9.jpg"),
  },
  {
    id: 10,
    title: "Copper wire rack",
    price: 18,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photo: require("../assets/images/photo_10.jpg"),
  },
  {
    id: 11,
    title: "Soothe ceramic set",
    price: 28,
    vendor: Vendor.Mal,
    category: Category.Home,
    photo: require("../assets/images/photo_11.jpg"),
  },
  {
    id: 12,
    title: "Hurrahs tea set",
    price: 34,
    vendor: Vendor.Six,
    category: Category.Home,
    photo: require("../assets/images/photo_12.jpg"),
  },
  {
    id: 13,
    title: "Blue stone mug",
    price: 18,
    vendor: Vendor.Mal,
    category: Category.Home,
    photo: require("../assets/images/photo_13.jpg"),
  },
  {
    id: 14,
    title: "Rainwater tray",
    price: 27,
    vendor: Vendor.Six,
    category: Category.Home,
    photo: require("../assets/images/photo_14.jpg"),
  },
  {
    id: 15,
    title: "Chambray napkins",
    price: 16,
    vendor: Vendor.Six,
    category: Category.Home,
    photo: require("../assets/images/photo_15.jpg"),
  },
  {
    id: 16,
    title: "Succulent planters",
    price: 16,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photo: require("../assets/images/photo_16.jpg"),
  },
  {
    id: 17,
    title: "Quartet table",
    price: 175,
    vendor: Vendor.Squiggle,
    category: Category.Home,
    photo: require("../assets/images/photo_17.jpg"),
  },
  {
    id: 18,
    title: "Kitchen quattro",
    price: 129,
    vendor: Vendor.Alphi,
    category: Category.Home,
    photo: require("../assets/images/photo_18.jpg"),
  },
  {
    id: 19,
    title: "Clay sweater",
    price: 48,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_19.jpg"),
  },
  {
    id: 20,
    title: "Sea tunic",
    price: 45,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_20.jpg"),
  },
  /* {
    id: 21,
    title: "Plaster tunic",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_21.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 22,
    title: "White pinstripe shirt",
    price: 70,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_22.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 23,
    title: "Chambray shirt",
    price: 70,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_23.jpg"),
  },
  {
    id: 24,
    title: "Seabreeze sweater",
    price: 60,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_24.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 25,
    title: "Gentry jacket",
    price: 178,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_25.jpg"),
  },
  {
    id: 26,
    title: "Navy trousers",
    price: 74,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_26.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 27,
    title: "Walter henley white",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_27.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 28,
    title: "Surf and perf shirt",
    price: 48,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_28.jpg"),
  },
  {
    id: 29,
    title: "Ginger scarf",
    price: 98,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_29.jpg"),
  },
  {
    id: 30,
    title: "Ramona crossover",
    price: 68,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_30.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 31,
    title: "Chambray shirt",
    price: 38,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_31.jpg"),
  },
  {
    id: 32,
    title: "Class white collar",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_32.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 33,
    title: "Cerise scallop tee",
    price: 42,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_33.jpg"),
  },
  {
    id: 34,
    title: "Shoulder rolls tee",
    price: 27,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_34.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 35,
    title: "Grey slouch tank",
    price: 24,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_35.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 36,
    title: "Sunshirt dress",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_36.jpg"),
    isPhotoPortrait: true,
  },
  {
    id: 37,
    title: "Fine lines tee",
    price: 58,
    vendor: Vendor.Lmbrjk,
    category: Category.Clothing,
    photo: require("../assets/images/photo_37.jpg"),
    isPhotoPortrait: true,
  }, */
];
