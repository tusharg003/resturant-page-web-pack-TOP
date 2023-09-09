export function contact() {

    const contentDiv = document.querySelector('#content');

    //remove any existing DOM children if present
    contentDiv.innerHTML = "";

    //Dom for heading 
    const heading = document.createElement('h1');
    heading.textContent = "This is how to contact us!";
    heading.classList.add('heading');
    contentDiv.appendChild(heading);

    //DOM for phone number
    const phnNum = document.createElement('h3');
    phnNum.textContent = "Phone: 070444 94849";
    contentDiv.appendChild(phnNum);

    //Dom for address
    const address = document.createElement('p')
    address.textContent = "Address: Little Flower Valley, 266/4, Grand Trunk Rd, Vivekananda Colony, Liluah, Howrah, West Bengal 711204"
    contentDiv.appendChild(address);
}