export let handleIncrement = (setQuantity) =>{
  setQuantity(prevValue => prevValue + 1)
}

export let handleDecrement = (setQuantity) =>{
    setQuantity(prevValue => {
        if (prevValue === 0) {
            alert("quantity can not be less than 0");
            return  prevValue = 1
        } else {
            return prevValue - 1
        }
    });
}

export const handleVisilityState = (setPopUpvisibility) =>{
    setPopUpvisibility(prevValue => {
        prevValue = true
        console.log(prevValue)
    });
}