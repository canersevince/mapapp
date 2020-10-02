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
      TICKET_LINKS:[],
      PHOTOS: [{SRC: "https://i.pinimg.com/originals/a4/74/a9/a474a9adfd14f90c8a4cb5aca6067efb.jpg", ALT: "Etkinlik Foto"}, {SRC: "https://www.yee.org.tr/sites/default/files/galeri/img_7185_0.jpg", ALT: "Etkinlik Foto"}]
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
      TICKET_LINKS:[],
      PHOTOS: [{SRC: "https://i.pinimg.com/originals/a4/74/a9/a474a9adfd14f90c8a4cb5aca6067efb.jpg", ALT: "Etkinlik Foto"}, {SRC: "https://www.yee.org.tr/sites/default/files/galeri/img_7185_0.jpg", ALT: "Etkinlik Foto"}]
    }
  ],
  pastEvents: []
};

export default state
