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