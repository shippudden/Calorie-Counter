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
