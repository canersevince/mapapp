import {Step} from "src/models/step";

export class Pin {
  _id!: string;
  TITLE!: string;
  DESCRIPTION!:string;
  THUMBNAIL!:string;
  CONTENT!:string;
  LAT_LNG: any;
  ADDRESS!:string;
  STEPS!:Step[];
  CREATOR!:string;
  CREATED!: Date;
  IS_DONE!:boolean
}
