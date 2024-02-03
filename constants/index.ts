import { IconType } from "react-icons";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiTreehouse,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { LuCastle, LuSailboat } from "react-icons/lu";
import { MdSurfing } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { PiParkDuotone } from "react-icons/pi";

interface CategoryIcons {
  label: string;
  icon: IconType;
  description: string;
}
export type CategoryIconsType = CategoryIcons;

export const CategoryIcons: CategoryIcons[] = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
  {
    label: "Treehouses",
    icon: GiTreehouse,
    description: "This property is a house in a tree",
  },
  {
    label: "Boats",
    icon: LuSailboat,
    description: "This property is a boat",
  },
  {
    label: "Surfing",
    icon: MdSurfing,
    description: "This property is best for surfing",
  },
  {
    label: "Campers",
    icon: RiCaravanLine,
    description: "This property is a caravan",
  },
  {
    label: "National parks",
    icon: PiParkDuotone,
    description: "This property is best for nation parks",
  },
];
