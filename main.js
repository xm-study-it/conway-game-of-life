import Conway from "./conway.js";
import { render } from "./render.js";



const canvas = document.getElementById('canvas')
const randomBtn = document.getElementById('randomBtn')
const nextBtn = document.getElementById('nextBtn')
const autoplayBtn = document.getElementById('autoplayBtn')
const ctx = canvas.getContext('2d')
const SPEED = 200
const CELL_SIZE = 10
const COLS = canvas.width / CELL_SIZE
const ROWS = canvas.height / CELL_SIZE

const game = new Conway(ROWS, COLS)

randomBtn.addEventListener('click', function() {
    game.randomSeed()
    render(ctx, game.world, CELL_SIZE)
})

nextBtn.addEventListener('click', function() {
    game.next()
    render(ctx, game.world, CELL_SIZE)
})

const cancelBtn = document.getElementById('cancelBtn')

let running = false
let intervalid = null
let started = false

autoplayBtn.addEventListener('click', function() {
    if (!started) {
        game.randomSeed()
        render(ctx, game.world, CELL_SIZE)
        intervalid = setInterval(function() {
            game.next()
            render(ctx, game.world, CELL_SIZE)
        }, SPEED)
        started = true
        running = true
        autoplayBtn.textContent = '暂停'
        cancelBtn.style.display = 'inline'
    } else if (running) {
        clearInterval(intervalid)
        running = false
        autoplayBtn.textContent = '继续'
    } else {
        intervalid = setInterval(function() {
            game.next()
            render(ctx, game.world, CELL_SIZE)
        }, SPEED)
        running = true
        autoplayBtn.textContent = '暂停'
    }
})

cancelBtn.addEventListener('click', function() {
    clearInterval(intervalid)
    running = false
    started = false
    intervalid = null
    autoplayBtn.textContent = '自动演化'
    cancelBtn.style.display = 'none'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})