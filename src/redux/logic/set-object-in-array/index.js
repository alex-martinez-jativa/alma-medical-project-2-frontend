const setObjectinArray = (array) => {
    if(array) {
        let newMaterialList = [];          
        array.forEach((item) => {
            const element = {
                name: item,
                count: 0
            }
            newMaterialList.push(element);
        })
        return newMaterialList;
    }
}

export default setObjectinArray;