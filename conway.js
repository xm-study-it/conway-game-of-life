class Conway {
    constructor(height, weight) {
        this.height = height
        this.weight = weight
        this.world = new Array(height).fill(0).map(
            () => new Array(weight).fill(0))
    }

    randomSeed(probability = 0.5) {
        this.world = new Array(this.height).fill(0).map(
            () => new Array(this.weight).fill(0))
        for (let i = 0; i < this.height; i++) {    
            for (let j = 0; j < this.weight; j++) {
                if(Math.random() < probability) {
                    this.world[i][j] = 1
                }     
            }   
        }
        return this
    }

    countNeighbors(world,row, col) {
        var count = 0

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if(world[r]?.[c] == 1) count++

            }

        }

        return count - world[row][col]
    }

    next() {
        var oldworld = this.world
        this.world = new Array(this.height).fill(0).map(
            () => new Array(this.weight).fill(0))


        for (let h = 0; h < this.height; h++) {
            for (let w = 0; w < this.weight; w++) {
                var n = this.countNeighbors(oldworld, h, w)
                if (n < 2 || n > 3 ) {
                    this.world[h][w] = 0
                } else if (n === 3) {
                    this.world[h][w] = 1
                } else if(n === 2) {
                    this.world[h][w] = oldworld[h][w] 
                }
            }
            
        }

        return this
    }
}


export default Conway





