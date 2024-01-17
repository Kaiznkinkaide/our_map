const CarItem = ({marke, farbe, modell, produktionsjahr, ps, wurst}) => {
    // console.log(props);
    ;

    return ( 
        <>
        <h1>das ist ein CarItem Component</h1>
        
            <h2>farbe:{farbe}</h2>
            <h2>marke:{marke}</h2>
            <p>modell:{modell}</p>
            <p>produktionsjahr:{produktionsjahr}</p>
            <p>ps:{ps}</p>
            <h5>wurst:{wurst}</h5>
        </>
     );
}
 
export default CarItem;