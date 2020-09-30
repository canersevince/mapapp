import {Pin} from "src/models/pin";
// @ts-ignore
import {latLng} from "leaflet";

export interface MapStateInterface {
  pins: Pin[]
}

const state: MapStateInterface = {
  pins: [
    {
      _id: "r21f21",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.99226800, 29.0284900),
      CREATOR: "Caner Sevince",
      ADDRESS: "Kıvanç Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL:"https://www.artkolik.net/wp-content/uploads/2018/12/davut.jpg",
      TITLE: "Heykel Projesi",
      IS_DONE: false
    }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Altyapı Çalışması",
      IS_DONE: false
      }, {
      _id: "r2132c",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Örnek Cad. Örnek Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek Bina Restorasyonu",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Yol Bakımı ve Onarımı",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.021149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987590, 29.022149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987520, 29.023149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987990, 29.024149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987890, 29.027149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Örnek Son",
      IS_DONE: false
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987790, 29.026149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Tamamlanmış örnek proje",
      IS_DONE: true
      }, {
      _id: "r21f221",
      CONTENT: "Example.",
      CREATED: new Date(),
      LAT_LNG: latLng(40.987690, 29.025149),
      CREATOR: "Caner Sevince",
      ADDRESS: "Moda Cad. Zuhal Sk.",
      DESCRIPTION: "Bu bir örnek projedir.",
      STEPS: [],
      THUMBNAIL: "https://www.diyarbakirgazete.com/wp-content/uploads/2018/08/alt-yap%C4%B1.jpg",
      TITLE: "Tamamlanmış proje",
      IS_DONE: true
      }
  ]
};

export default state
