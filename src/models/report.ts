import {ReportMessage} from "src/models/report_message";

export class Report {
  _id!:string;
  TITLE!:string;
  CATEGORY!:string;
  DESCRIPTION!:string;
  IMAGE_BASE64!:string;
  IMAGE_SRC!:string;
  CREATOR!:string;
  CREATED!:Date;
  STATUS!:string;
  REPLY!:ReportMessage[];
  LAT_LNG!:any[]
  RATING!:number | null
}
