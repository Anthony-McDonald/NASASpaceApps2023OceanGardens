console.log("js is jsing")
var img = document.getElementById('img');
var img_array = ['../../imgs/algae1.png', '../../imgs/algae2.png',
'../../imgs/algae3.png','../../imgs/algae4.png'
,'../../imgs/algae5.png','../../imgs/algae6.png'
,'../../imgs/algae7.png'
,'../../imgs/algae8.png','../../imgs/algae9.png'
,'../../imgs/algae11.png'];

function setImage(obj)
{
    console.log("detected")
	var value = obj.value;
	img.src = img_array[value];
    
}

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