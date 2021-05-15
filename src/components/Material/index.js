import './style.sass';

const Material = ({name, count, onFilterByMaterial}) => {
    return (
        <div className="material">
            <li onClick={() => onFilterByMaterial(name)} className="material__name">{`${name}:`}</li>
            <li className="material__count">{`${count} ramps`}</li>
        </div> 
    );
}

export default Material