const rand = (min,max) => Math.random() * (max - min + 1) + min;
const randInt = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
const container = document.querySelector("#fruits")

const spawner = setInterval(() => {
    if (document.hasFocus()){
        const item = document.createElement('img');
        const speed = +5
        const rotationSpeed = rand(-3, 3)
        let y = -230
        let rotation = 0

        item.style.top = `${y}px`
        item.className = "fruit"
        item.src = `src/assets/fruit${randInt(1, 5)}.svg`
        item.style.left = `${rand(0, window.innerWidth)}px`

        container.appendChild(item)
        const animation = setInterval(() => {
            y += speed
            rotation += rotationSpeed
            item.style.transform = `translateY(${y}px) rotate(${rotation}deg)`
            if (y >= window.innerHeight + 100){
                container.removeChild(item)
                clearInterval(animation)
                }
        }, 1000/60)
    }
}, 1000)
