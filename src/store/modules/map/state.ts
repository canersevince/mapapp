import {Pin} from "src/models/pin";
// @ts-ignore
import {latLng} from "leaflet";

export interface MapStateInterface {
  pins: Pin[]
}

const state: MapStateInterface = {
  pins: [
    {
      _id: "1",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.98226800, 29.0284900),
      CREATOR: "Caner Sevince",
      ADDRESS: "Kıvanç Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [
        {
          _id: "1",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "construction",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin İlk Adımı"
        },
        {
          _id: "2",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin İkinci Adımı"
        },
        {
          _id: "3",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin Üçüncü Adımı"
        },
        {
          _id: "4",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin Dördüncü Adımı"
        }
      ],
      THUMBNAIL: "https://www.artkolik.net/wp-content/uploads/2018/12/davut.jpg",
      TITLE: "Restorasyon Projesi",
      IS_DONE: false
    },
    {
      _id: "2",
      CONTENT: "Example 2.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.997590, 29.075149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [
        {
          _id: "1",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "construction",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin İlk Adımı"
        },
        {
          _id: "2",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin İkinci Adımı"
        },
        {
          _id: "3",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin Üçüncü Adımı"
        },
        {
          _id: "4",
          CONTENT: "",
          CREATED: new Date(),
          CREATOR: "Caner Sevince",
          DESCRIPTION: "Bu bir proje adımıdır.",
          ICON: "settings",
          IMAGE: 'https://static.daktilo.com/sites/80/uploads/2020/04/20/attachment-19921-1-dac32a19cc1790e5a6f274f565c151ad-1587371515.jpeg',
          TITLE: "Projenin Dördüncü Adımı"
        }
      ],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Altyapı Çalışması",
      IS_DONE: false
    },
  ]
};

export default state
