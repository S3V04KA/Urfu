import React from "react"

export default React.memo(function IsFive({value}) {
    const getResult = React.useMemo(() => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? 'Это пять!!' : 'Это не пять :(';
    }, [value])
    
    return(
        <h3>{getResult}</h3>
    )
},
(prev, next) => {
    if (next.value === 5 || prev.value === 5) return false
    else return true
})