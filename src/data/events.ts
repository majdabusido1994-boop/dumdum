export interface Event {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  ticketUrl?: string;
  isPast: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Underground Frequencies",
    venue: "Canvas Amman",
    location: "Jabal Amman",
    date: "2026-04-10",
    time: "22:00",
    ticketUrl: "#",
    isPast: false,
  },
  {
    id: "2",
    title: "Rooftop Sessions Vol. 5",
    venue: "Blue Fig",
    location: "Abdoun, Amman",
    date: "2026-04-18",
    time: "21:00",
    ticketUrl: "#",
    isPast: false,
  },
  {
    id: "3",
    title: "After Dark",
    venue: "Maestro",
    location: "Rainbow Street, Amman",
    date: "2026-05-02",
    time: "23:00",
    ticketUrl: "#",
    isPast: false,
  },
  {
    id: "4",
    title: "Warehouse Rave",
    venue: "Secret Location",
    location: "Al-Hashmi, Amman",
    date: "2026-03-15",
    time: "00:00",
    isPast: true,
  },
  {
    id: "5",
    title: "Neon Nights",
    venue: "Copas Central",
    location: "Amman",
    date: "2026-02-20",
    time: "22:00",
    isPast: true,
  },
  {
    id: "6",
    title: "Concrete & Bass",
    venue: "The Garage",
    location: "Amman",
    date: "2026-01-10",
    time: "23:00",
    isPast: true,
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Started mixing at house parties and small gatherings across Amman. Fell in love with the decks.",
  },
  {
    year: "2020",
    title: "First Residency",
    description:
      "Landed a weekly slot at a rooftop bar in Jabal Amman. Built a loyal following during lockdown livestreams.",
  },
  {
    year: "2021",
    title: "Going Underground",
    description:
      "Started playing warehouse parties and secret locations. Became part of Amman's growing underground scene.",
  },
  {
    year: "2022",
    title: "Festival Debut",
    description:
      "Played her first festival set. Started getting booked across Jordan and the region.",
  },
  {
    year: "2023",
    title: "Regional Recognition",
    description:
      "Played sets in Beirut, Dubai, and Cairo. Featured in regional music publications.",
  },
  {
    year: "2024",
    title: "Sound Evolution",
    description:
      "Started producing original tracks. Blending Arabic-infused electronica with deep techno.",
  },
  {
    year: "2025",
    title: "The Movement",
    description:
      "Co-founded an underground collective in Amman. Curating events that push the scene forward.",
  },
];
