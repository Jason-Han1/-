
const WIDTH = 20,
    HEIGHT = 20;

option = {
    animation: false,
    backgroundColor: '#aaa',
    grid: {
        show: true,
        borderColor: '#000',
        z: 2,
        top: 50,
        x:'center',
        height: 520,
        width: 520
    },
    legend: {
        show: false
    },
    xAxis: {
        interval: 1,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        max: 20,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        interval: 1,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        max: 20,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    series: [{
        data: [],
        type: 'scatter',
        symbol: 'rect',
        symbolSize: 26,
        symbolOffset: [13, -13],
        label: {
            emphasis: {
                show: false
            }
        },
    }, {
        data: [1,1],
        type: 'scatter',
        symbol: 'rect',
        symbolSize: 26,
        symbolOffset: [13, -13],
        label: {
            emphasis: {
                show: false
            }
        },
    }]
};

function Snake() {
    this.direction = this.toRight;
    this.body = [{
        x: 0,
        y: 0,
    }, {
        x: 1,
        y: 0
    }, {
        x: 2,
        y: 0
    }];
    this.head = {
        x: 2,
        y: 0
    };
}
Snake.prototype.toRight = function() {
    this.head.x = (this.head.x + 1) % WIDTH;
};

Snake.prototype.toDown = function() {
    this.head.y = (this.head.y + 1) % HEIGHT;
};

Snake.prototype.toLeft = function() {
    this.head.x = this.head.x - 1 < 0 ? this.head.x - 1 + WIDTH : this.head.x - 1;
};

Snake.prototype.toUp = function() {
    this.head.y = this.head.y - 1 < 0 ? this.head.y - 1 + HEIGHT : this.head.y - 1;
};

var snake = new Snake();

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    switch (e.keyCode) {
        case 39:
            (snake.direction != snake.toLeft) && (snake.direction = snake.toRight);
            break;
        case 38:
            (snake.direction != snake.toUp) && (snake.direction = snake.toDown);
            break;
        case 37:
            (snake.direction != snake.toRight) && (snake.direction = snake.toLeft);
            break;
        case 40:
            (snake.direction != snake.toDown) && (snake.direction = snake.toUp);
            break;
    }
};

 function Food(){
        this.x = 10;
        this.y = 10;
    }

Food.prototype.produce = function(){
    this.x = Math.round(Math.random()*19);
    this.y = Math.round(Math.random()*19);
    var self = this
    snake.body.forEach(function(each){
        if(each.x==self.x&&each.y==self.y){
            self.produce();
        }
    });
};

var food = new Food();

function startGame() {
    snake.direction();

    snake.body.push({
        x: snake.head.x,
        y: snake.head.y
    });
    if(snake.head.x==food.x&&snake.head.y==food.y)
        food.produce();
    else
        snake.body.shift();
    option.series[0].data = [];
    
    snake.body.forEach(each => {
        option.series[0].data.push([each.x, each.y]);
    });
    option.series[1].data = [[food.x, food.y]];

    myChart.setOption(option);
    setTimeout(startGame, 200);
}

startGame()









