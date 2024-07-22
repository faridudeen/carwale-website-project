import product from './product.json'

 export const initial ={
    Name : "Carwale",
    arr : product.aob,nav:product.nav
}
 export const Reducer =(state,action)=>{
    if (action.type==="update"){
        return{
            ...state,arr:action.payload
        }
    }

}