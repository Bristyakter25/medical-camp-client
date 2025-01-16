

const CampDetailsCard = ({detail}) => {
    const {name,image,location,healthcareName} = detail;
    return (
        <div>
            <img className="w-full h-[400px]" src={image} alt="" />
            <h2>{name}</h2>
            <p>{location}</p>
            <p>{healthcareName}</p>
        </div>
    );
};

export default CampDetailsCard;