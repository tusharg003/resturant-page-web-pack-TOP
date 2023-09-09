export function menubar() {

    const contentDiv = document.querySelector('#content');

    //remove any existing DOM children if present
    contentDiv.innerHTML = "";
   
    const picDiv = document.createElement('div');
    picDiv.classList.add('pic-div');
    //Dom for heading 
    const heading = document.createElement('h1');
    heading.textContent = "These are what we serve!";
    heading.classList.add('heading');
    contentDiv.appendChild(heading);

    //DOM for red sause pasta
    const redPasta = document.createElement('img');
    redPasta.src = "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    redPasta.alt = "Pic of our dish, Red sause pasta";
    redPasta.classList.add('menu-img');
    picDiv.appendChild(redPasta);

    //Dom for Chowmin
    const chow = document.createElement('img')
    chow.src = "https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvd21laW4lMjBub29kbGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
    chow.classList.add('menu-img');
    picDiv.appendChild(chow);

    contentDiv.appendChild(picDiv);

}