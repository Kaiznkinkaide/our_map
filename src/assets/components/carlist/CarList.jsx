import CarItem from "../caritem/CarItem";
import {v4 as uuidv4} from "uuid"

const CarList = ({cars}) => {
    console.log("cars", cars);
    return ( 
        <>
        {/* <div>
            <h2>farbe:{props.cars[0].farbe}</h2>
            <h2>marke:{props.cars[0].marke}</h2>
            <p>modell:{props.cars[0].modell}</p>
            <p>produktionsjahr:{props.cars[0].produktionsjahr}</p>
            <p>ps:{props.cars[0].ps}</p>
        </div> */}
        <h1>CarList Component</h1>

{/* bitte immer mit geschweiften klammern arbeiten weil wir im 
JSX Bereich sind und return innerhalb der Map Methode */}
        {cars.map((car, index)=>{
            return(
             <div key ={index}>
            <CarItem
            wurst={uuidv4()}
            marke={car.marke}
            farbe={car.farbe}
            modell= {car.modell}
            produktionsjahr ={car.produktionsjahr}
            ps={car.ps}
            />
            </div>
            )
            })}
        
        </>
     );
}
 
export default CarList;