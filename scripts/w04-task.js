/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jake Matheson",
    photo: "images/profile-pic.png",
    favoriteFoods: [
        "Chicken Tenders",
        "Fried Rice",
        "Banana Cake",
        "Grilled Tuna Sandwich"
    ],
    hobbies: [
        "Play Guitar",
        "Video Gaming",
        "Going Outdoors"
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Louisville, KY",length: "21 years",
    },
    {    
        place: "Provo, UT",length: "6 years",
    },
    {    
        place: "Portland, OR",length: "2 years"
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

const dlPlacesLived = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    
    dlPlacesLived.appendChild(dt);
    dlPlacesLived.appendChild(dd);
});
