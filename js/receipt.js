const craft_name = localStorage.getItem('craft_name');
const origin = localStorage.getItem('origin');
const destination = localStorage.getItem('destination');
const price = localStorage.getItem('price');
const passengers = localStorage.getItem('passengers');
window.onload = () => {
    //set the respective values
    console.log(craft_name, origin, destination, price, passengers);
    document.getElementById('craft_name').innerText = craft_name;
    document.getElementById('origin').innerText = origin;
    document.getElementById('destination').innerText = destination;
    document.getElementById('price').innerText = price;
    document.getElementById('passengers').innerText = passengers;
    document.getElementById('cost').innerText = 'Total cost: ' + (passengers * price);

}