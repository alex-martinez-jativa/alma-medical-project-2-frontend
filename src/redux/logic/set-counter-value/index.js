const setCounterValue = (arrayToSet, features) => {
    for(let i = 0; i < arrayToSet.length; i++) {
        for(let j = 0; j < features.length; j++) {
            if(arrayToSet[i].name === features[j].properties.material) {
                arrayToSet[i].count += 1; 
            }
        }
    }
    return arrayToSet;
}

export default setCounterValue;