let dice = [];

let color = ["pink", "blue", "red"]
let newDie = document.getElementById('newDie').addEventListener("click", () => {
    let newDice = new Die()
    dice.push(newDice)

})
let allDie = document.getElementById('allDie').addEventListener("click", () => {
    getRandomColor().newDie()
})
let sumDie = document.getElementById('sumDie')

class Die {
    constructor(value) {
        this.value = value
        this.div = document.createElement("div");
        document.body.appendChild(this.div);
        this.div.style.backgroundColor = 'black'
        this.div.style.width = "100px";
        this.div.style.height = "100px";
        this.div.style.cssFloat = "left";



    }

}



function getRandomColor() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
}