//Populate the json server with a fetch request 

// {
//     "name": 'Destiny',
//     "Link": 'https://www.bungie.net/7/en/destiny/newlight',
//     "image": 'https://upload.wikimedia.org/wikipedia/en/0/05/Destiny_2_%28artwork%29.jpg',
//     "Genre": 'FPS',
//     "Tag": 'MMORPG',
//     "Price": "Free",
//     "Rating": 3.9
// },
// {
//     "name": 'OverWatch 2',
//     "Link": 'https://overwatch.blizzard.com/en-us/',
//     "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Overwatch_2_full_logo.svg/1920px-Overwatch_2_full_logo.svg.png',
//     "Genre": 'FPS',
//     "Tag": 'Multiplayer',
//     "Price": "Free",
//     "Rating": 1.8
// }

// {
//     "name": '',
//     "Link": '',
//     "image": '',
//     "Genre": '',
//     "Tag": '',
//     "Price": "",
//     "Rating": 0,
//     "Owned" : false,
//     "Favorite" : false
// },


let gameArray = [
    {
        "name": '',
        "Link": '',
        "image": '',
        "Genre": '',
        "Tag": '',
        "Price": "",
        "Rating": 0,
        "Owned" : false,
        "Favorite" : false
    },
  
]



for(val in gameArray){
    fetch("http://localhost:3000/Games", {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(gameArray[val])
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
}
