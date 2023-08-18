import { word } from "./lang";
interface details{
    ar:string[];
    en:string[]
}
interface Feature{
    icon:string;
    type:string;
    title:word;
    caption:word;
    details:details

}


export {Feature}