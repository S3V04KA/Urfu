import { useEffect, useState } from "react";

export default function useCustomHook(productId){
    const [product, setProduct] = useState(null);

    function getResult(){
        fetch('https://fakestoreapi.com/products/'+productId)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)
            });
    }

    useEffect(()=>{
        console.log(product);
    }, [product])

    return [product, getResult];
}