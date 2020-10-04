var table_row = document.querySelectorAll('.table-row');//all table rowa
var drop_down = document.getElementById('passengers-no');//no of passengers
var prev_element = null;// last selected row
let passengers = 0;
let price = 0;
let cost = 0;
window.onload = () => {//clear the localstorage from previous sessions
    localStorage.clear();
    table_row.forEach(element => {
        element.addEventListener('click', () => {

            //on click of a row
            id = element.getAttribute('data-id');
            state = element.getAttribute('data-state');


            if (state == 'off') {
                //unselected
                element.style.background = "#742173";
                element.style.color = "white";
                element.setAttribute('data-state', 'on');
                //changed the appearance of current element
                if (prev_element != null) {
                    //revert changes to last selection
                    console.log('prev_element:' + prev_element.childNodes[1].innerText);
                    prev_element.style.background = "#f0efed";
                    prev_element.style.color = "black";
                    prev_element.setAttribute('data-state', 'off');
                }

                //setting current element ad prev_element
                prev_element = document.getElementById(id);
                console.log('prev_element:' + prev_element.childNodes[1].innerText);




            }

            craft_name = element.childNodes[1].innerText;
            origin = element.childNodes[3].innerText;
            destination = element.childNodes[5].innerText;
            price = element.childNodes[7].innerText;
            console.log(craft_name, origin, destination, price);
            //using localStorage to send data to receipt page 
            localStorage.setItem('craft_name', craft_name);
            localStorage.setItem('origin', origin);
            localStorage.setItem('destination', destination);
            localStorage.setItem('price', price);
            findTotal();





        });

    });

}
window.addEventListener('scroll', () => {
    pgscroll = window.pageYOffset;

    let space_xplore = document.getElementById('space-xplore');
    let space_para = document.getElementById('space-para');
    //adding fade to these elements
    fadeElement(space_xplore, 350, pgscroll);
    fadeElement(space_para, 200, pgscroll);




});

drop_down.addEventListener('change', () => {
    findTotal();
})

function findTotal() {
    //calculates and update the total price
    passengers = document.getElementById('passengers-no').value;
    cost = (price * passengers);
    localStorage.setItem('passengers', passengers);
    if (passengers != 'No. of passengers')
        document.getElementById('rec-total').innerText = 'Cost:' + cost;
    else
        document.getElementById('rec-total').innerText = 'Cost:0';

    console.log(passengers, price);
}

function fadeElement(element, scrollLimit, pgscroll) {
    //adds fade effect on scroll on element
    //pgscroll = current offset in Y axis
    //scrollLimit =  offset when the fade starts
    if (pgscroll > scrollLimit) {
        opacity = 1 - pgscroll / scrollLimit;
        element.style.display = "none";
    }
    else {
        opacity = 1 + pgscroll / scrollLimit;
        element.style.display = 'block';
    }
    //removing the element so that it does not overlap
    if (pgscroll > 700) {
        element.style.display = "none";

    }
    else {
        element.style.display = 'block';

    }
    element.style.opacity = opacity;


}
