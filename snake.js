/**
 * Created by yubrajpokharel on 7/2/17.
 */

var COL = 26, row = 26;
var EMPTY = 0, SNAKE = 1, FRUIT = 2;

var grid = {
    height: null,
    width: null,
    _grid: null,

    init: function(d, c, r){
        this.height = r;
        this.width = c;

        this._grid = [];

        for(x = 0; x < c; x++){
            this._grid.push([]);
            for(y = 0; y< r; y++){
                this._grid[x].push(d);
            }
        }
    },

    set: function(val, x, y){
        this._grid[x][y] = val;
    },

    get: function(x, y){
        return this._grid[x][y];
    }

}


var snake = {
    direction: null,
    last: null,
    _queue: null,

    init: function (d, x, y) {
        this.direction = d;
        this._queue = [];
        this.insert(x, y);
    },

    insert: function (x, y) {
        this._queue.unshift({x:x, y:y});
        this.last = this._queue[0];
    },

    remove:function(){

    }
}

function setFood() {
    var empty = null;

    for(x = 0; x < grid.width; x++){
        for(y = 0; y < grid.height; y++){
            if(grid.get(x, y) === EMPTY){
                empty.push({x:x, y:y});
            }

        }
    }

    var randpos = empty[Math.floor(Math.random()*empty.length)];
    grid.set(FRUIT, randpos.x, randpos.y);
}

function init() {

}

function main() {

}

function loop() {

}

function update() {

}

function draw() {

}


main();


