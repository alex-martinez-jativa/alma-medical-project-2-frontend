import Material from '../Material';

const MaterialList = ({materials, onFilterByMaterial}) => {
    return (
        materials.map((material, index) => {
            return (
                <Material 
                    key={index}
                    name={material.name} 
                    count={material.count} 
                    onFilterByMaterial={onFilterByMaterial}
                />
            )
        })
    );
}

export default MaterialList;