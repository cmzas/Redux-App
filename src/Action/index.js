export const incNumber = (number) => {
    return{

        type:"INCREMENT",
        payload:number
    }
       
    
}
export const decNumber = () => {
    return{

        type:"DECREMENT"
    }
       
    
}