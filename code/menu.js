// route /code/menu.js

export const menuItems = [
  {
    title: "News",
    link: "https://www.tcgse.com/articles",
  },
  {
    title: "Software",
    link: "#",
    submenu: [
      { title: "TCGSE", link: "https://www.tcgse.com" },
      { title: "DeckMaker", link: "https://deckmaker.tcgse.com" },
      { title: "Leagues", link: "https://play.epicevils.com" },
    ],
  },
  {
    title: "Roaster",
    link: "https://www.epicevils.com/roaster",
  },
  {
    title: "Club",
    link: "#",
    submenu: [
      { title: "Team", link: "https://www.epicevils.com/team" },
      { title: "Clothes", link: "https://www.epicevils.com/clothes" },
      { title: "Standings", link: "https://www.epicevils.com/standings" },
    ],
  },
  {
    title: "Collab",
    link: "#",
    submenu: [
      { title: "x InZoi", link: "https://www.epicevils.com/collab" },
      { title: "Contact", link: "https://www.epicevils.com/contact" },
    ],
  },
];
