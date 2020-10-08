
let button = document.getElementById("generate");

button.addEventListener("click", function() {
    button.innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        return response.json();
        })
        .then(function(data) {
            let dogImage = document.createElement('img');
            dogImage.setAttribute('src', data.message);
            document.body.appendChild(dogImage);
            button.innerHTML = "Generate Doggo";
        })
    });
    
    
fetch('https://dog.ceo/api/breeds/list').then(response => {
    return response.json();
}).then(data => {
    let breeds = data.message;
    let breedlist = document.getElementById('breed-list')
    breeds.forEach(breed => {
        let breedElement = document.createElement('option');
        breedElement.setAttribute('value',breed);
        breedElement.innerHTML = breed;
        breedlist.appendChild(breedElement)
    });
});

let dogs = document.getElementById('breed-list');

dogs.addEventListener('change', function() {
    let breedName = this.value;
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`).then(response => {
        return response.json();
    }).then(data => {
        let dogImage = document.createElement('img');
        dogImage.setAttribute('src', data.message);
        document.body.appendChild(dogImage);
    }).catch(err => {
    throw new Error(`somthing is wrong`)
    })
});
