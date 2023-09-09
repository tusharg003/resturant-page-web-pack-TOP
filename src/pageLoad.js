export function initialPageLoad() {

    const contentDiv = document.querySelector('#content');

    contentDiv.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Veggieeee Corner";
    heading.classList.add('heading');
    contentDiv.appendChild(heading);

    const mainImg = document.createElement("img");
    mainImg.src = "https://lh3.googleusercontent.com/p/AF1QipPqL83ZS5EEaQ_YXhHEwOe4xlMSM7ABV7Ow4yGt=s1360-w1360-h1020";
    mainImg.alt = "Image of VEGGIE Corner,a resturant in Liluah"
    contentDiv.appendChild(mainImg);

    const para=document.createElement("p");
    para.textContent="We serve the best food, Come dine with us!";
    contentDiv.appendChild(para);
}