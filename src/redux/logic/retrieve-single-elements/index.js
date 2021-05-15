const retrieveSingleElements = (array) => {
    let materialList = []
    array.forEach((ramp) => {
        if(!materialList.includes(ramp.properties.material)) {
            materialList.push(ramp.properties.material)
        }
    })
    return materialList  
}

export default retrieveSingleElements