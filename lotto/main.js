function getRandomNumber(from, to) {
    return parseInt(String(Math.random() * (to - from) + from))
}

function buildArrayWithRandomNumbers() {
    const randomNumbers = Array.from({ length: 6 })

    for (let i = 0; i < randomNumbers.length; i++) {
        const element = randomNumbers[i];
        randomNumbers[i] = getRandomNumber(1, 49);
    }

    return randomNumbers;
}

function template(content) {
    //return '<div class="circle">' + content + '</div>'; // Konkatenacja
    return `<div class="circle">${content}</div>`; // TSL
}

function render(numbers) {
    const page = document.querySelector("#page");
    numbers.forEach(function (number) {
        if (page != null) {
            page.innerHTML = page.innerHTML + template(number);
        }
    });
}

function main() {
    const numbers = buildArrayWithRandomNumbers();
    render(numbers.sort(function(a,b){
        if(a > b){
            return 1;
        }else if(a < b){
            return -1;
        }else{
            return 0;
        }
    }));
}

window.addEventListener('DOMContentLoaded', main)



