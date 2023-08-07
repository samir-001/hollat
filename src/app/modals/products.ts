
interface subproduct{
    name:string
}
interface Mainproduct {
    id:Number,
    name:string,
    price:Number,
    quantity:Number,
    type:string,
    subs:subproduct[]

}
export {subproduct,Mainproduct}