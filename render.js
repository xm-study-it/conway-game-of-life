function render(ctx, world, cellSize) {
    for (let r = 0;  r< world.length; r++) {
        for (let c = 0; c < world[0].length; c++) {
            ctx.fillStyle = world[r][c] === 1 ? 'black' : 'white'
            ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize)
            
        }
        
    }
}

export { render }