let button = document.querySelector('.btn')
let totalCalories = document.getElementById('totalCalories')
let calorieForm = document.getElementById('calorieForm')

button.addEventListener('click', calculateCalories)

function calculateCalories () {
    const walkingTime = document.getElementById('walkingTime').value
    const runningTime = document.getElementById('runningTime').value
    const cyclingTime = document.getElementById('cyclingTime').value

    const caloriesForWalking = walkingTime * 5
    const caloriesForRunning = runningTime * 10
    const caloriesForCycling = cyclingTime * 8

    const totalCaloriesBurned = caloriesForWalking + caloriesForRunning + caloriesForCycling

    totalCalories.innerText = totalCaloriesBurned

    calorieForm.reset()
}


// new way to add data to an object
// const username = 'Michio Kaku'
// const country = 'China'

// const userdetails = {
//     username,
//     country
// }
// console.log(userdetails)


// const nameofmovie = 'nameofmovie'

// const moviename = {
//     [nameofmovie] : 'new hope',

// }
// console.log(moviename)

const scientistrecords = [
    {
        username: 'Hakeem Oluseyi',
        occupation: 'Astrophysicsist',
        skin_color: 'dark'
    },

    {
        username: 'Michelle Thaller',
        occupation: 'Astronomer',
        skin_color: 'white'
    },

    {
        username: 'Moogega Cooper',
        occupation: 'Biochemist',
        skin_color: 'brown'
    }
]

