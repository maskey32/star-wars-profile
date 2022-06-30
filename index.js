const image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3DgP-r2jcJjdzms_C_WYKnBPK0SdMUE8xA&usqp=CAU';
const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsjMZRq5tDcW-zaTDcZL01NOCrDYLglPqfQ&usqp=CAU';
const image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU';
const image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9byx9KMc1lzs_OfzqgwDdDIfroXhq9y7Ksg&usqp=CAU';
const image5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU';
const image6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWvHvt8TcPZoa6qU_D7zqj5vZkvF6WZY5fw&usqp=CAU';
const image7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqD7xJ06XxrDssN7j68ZR963BpSb0K5k8WQ&usqp=CAU';
const image8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBIRs_5I18DDPYqX1QWitGj978JY5Nj5QSA&usqp=CAU';
const image9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg&usqp=CAU';
const image10 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8r54g86MEGRzywLkkTTu8CVFuhz3XdIGGA&usqp=CAU';

const characterImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const date = new Date();

const container = document.querySelector('#container');
const body = document.querySelector('body');


window.onload = () => {
    fetch('https://swapi.dev/api/people')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const result = data['results'];
        const resultLength = result.length;
        console.log(result);
        
        for (let i = 0; i < resultLength; i++) {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'items');
            
            const imageDiv = document.createElement('div');
            imageDiv.setAttribute('class', 'imageContainer');
            imageDiv.style.backgroundImage = `url(${characterImages[i]})`
            
            const h4Element = document.createElement('h4');
            h4Element.innerHTML = result[i].name
            
            const details = document.createElement('div')
            details.setAttribute('class', 'details')
            
            const paragraphName = document.createElement('p');
            paragraphName.innerHTML = `Name: ${result[i].name}`;
            const paragraphGender = document.createElement('p')
            paragraphGender.innerHTML = `Gender: ${result[i].gender}`;
            const paragraphHeight = document.createElement('p')
            paragraphHeight.innerHTML = `Height: ${result[i].height}`;
            
            details.appendChild(paragraphName);
            details.appendChild(paragraphGender);
            details.appendChild(paragraphHeight);
            
            newDiv.appendChild(imageDiv);
            newDiv.appendChild(h4Element);
            newDiv.appendChild(details);
            container.appendChild(newDiv);
            
            h4Element.addEventListener('click', () => {
                if (details.style.visibility === 'hidden') {
                    details.style.visibility = 'visible';
                } else {
                    details.style.visibility = 'hidden';
                }
            })
            
        }
        const footer = document.createElement('footer');
        footer.innerHTML = `&copy; ${date.getFullYear()} Decagon API Assignment by Chukwuma Ezeobika. All rights reserved.`;
    
        body.appendChild(footer)
    }).catch((err) => {
        if (err) throw Error (err)
    })

}


