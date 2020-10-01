import {Event} from "src/models/event";

export interface EventStateInterface {
  events: Event[],
  pastEvents: Event[]
}

const state: EventStateInterface = {
  events: [
    {
      _id: "1",
      ATTENDERS: ["Örnek Katılımcı"],
      BANNER: "https://image.freepik.com/free-vector/music-event-banner-design-template-festival-concert-party_85212-64.jpg",
      CATEGORY: "Music Concert",
      CONTENT: "",
      CREATED: new Date(),
      CREATOR: "Caner Sevince",
      DESCRIPTION: "Bu efsane konserde hepinizi görmek istiyoruz",
      ICON: "music",
      TAGS: ["Müzik", "Konser", "Eğlence", "Ücretli"],
      THUMBNAIL: "https://image.freepik.com/free-vector/music-event-banner-design-template-festival-concert-party_85212-64.jpg",
      TITLE: "Örnek Konser Etkinliği",
      FREE: false,
      TICKET_LINKS:[]
    },
    {
      _id: "2",
      ATTENDERS: ["Örnek Katılımcı"],
      BANNER: "https://image.freepik.com/free-vector/music-event-banner-design-template-festival-concert-party_85212-64.jpg",
      CATEGORY: "Music Concert",
      CONTENT: "",
      CREATED: new Date(),
      CREATOR: "Caner Sevince",
      DESCRIPTION: "Bu harika açık hava konserine tüm halkımız davetlidir",
      ICON: "music",
      TAGS: ["Müzik", "Konser", "Eğlence", "Ücretsiz"],
      THUMBNAIL: "https://image.freepik.com/free-vector/music-event-banner-design-template-festival-concert-party_85212-64.jpg",
      TITLE: "Örnek Konser Etkinliği 2",
      FREE: true,
      TICKET_LINKS:[]
    }
  ],
  pastEvents: []
};

export default state
