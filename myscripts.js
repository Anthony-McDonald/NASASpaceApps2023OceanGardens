
function massAlgae(){

    let distance = document.getElementById("txt"); //distance in km
    let distanceValue = distance.value;

    let petrolEmi = 192 * 10**(-3); //emissions in Kg
    let dieselEmi = 171 * 10**(-3);
    let eletricEmi = 53  * 10**(-3);
    let algaeFix = 1.83; // kg of CO2

    let kiloAlgaePetrol = (petrolEmi * distanceValue)/(algaeFix);
    let kiloAlgaeDiesel = (dieselEmi * distanceValue)/(algaeFix);
    let kiloAlgaeEletric = (eletricEmi * distanceValue)/(algaeFix);
    
    let result = document.getElementById("result");
    result.innerText = ("For that distance " + kiloAlgaePetrol.toFixed(2) + " kg of Phytoplankton would be needed to offset the emissions of a Petrol Car, " + kiloAlgaeDiesel.toFixed(2) + " kg of Phytoplankton for a Diesel Car and " + kiloAlgaeEletric.toFixed(2) + " for an Electric Car." );
}