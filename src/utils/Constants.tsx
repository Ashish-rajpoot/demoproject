import { ChartConfig } from "@/components/ui/chart";
import { Calendar, Home, Inbox, Popcorn, Search, Settings } from "lucide-react";

export const Item = [
  {
    title: "Men",
    subLinks: {
      title: "t-shirt",
      links: ["shoes", "jacket", "toys","chartpage"],
    },
  },
  // {
  //   title: "Women",
  //   subLinks: {
  //     title: "t-shirt",
  //     links: ["shoes", "jacket", "toys"],
  //   },
  // },
  // {
  //   title: "Kitchen",
  //   subLinks: {
  //     title: "Knife",
  //     links: ["Box", "pan", "Heater"],
  //   },
  // },
];

export const directLinks = [
  {
    name: "home",
    url: "/",
  },
];

export const sidebarItems = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "calender",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Open PopOver",
    url: "popover",
    icon: Popcorn,
  },
];


export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]


export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig