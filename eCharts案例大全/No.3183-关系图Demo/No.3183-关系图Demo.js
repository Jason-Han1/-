myChart.on('mouseover', function (param) {
    //这个params可以获取你要的图中的当前点击的项的参数
    console.dir(param);
    stopInterval();
});
myChart.on('globalout', function (param) {
    //这个params可以获取你要的图中的当前点击的项的参数
    console.dir(param);
    startInterval();
});
myChart.on('click', function (param) {
    console.log('click');
    console.dir(param);
    console.log(param.data.id);
    showSecondTree(param.data.id);
});

var colors = ['#9119FB', '#9119FB', '#14B2BF', '#68B998', '#AE9C9C', '#D0B34D', '#B84DCF'];
var names = ['', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
var secondTreeNames = ['1', '2', '3', '4', '5'];

var secondPosition = []
var clickPosition = {}
var position = [
        {
            x: 0,
            y: 0,
            angle: 0,
            index: 0,
            zoom: 1,
        },
        {
            x: 0,
            y: 150,
            angle: 0,
            index: 1,
            zoom: 1,
        },
        {
            x: 130,
            y: 75,
            angle: 60,
            index: 2,
            zoom: 1,
        },
        {
            x: 130,
            y: -75,
            angle: 120,
            index: 3,
            zoom: 1,
        },
        {
            x: 0,
            y: -150,
            angle: 180,
            index: 4,
            zoom: 1,
        },
        {
            x: -130,
            y: -75,
            angle: 240,
            index: 5,
            zoom: 1,
        },
        {
            x: -130,
            y: 75,
            angle: 300,
            index: 6,
            zoom: 1,
        },
    ]

var intervalId = []
var count = 0

let intervalIdFirst = setInterval(() => {
    drawGraphInterval();
    count++;
}, 30);
intervalId.push(intervalIdFirst);

function drawGraphInterval() {
    position.map((item) => {
        item.angle = (item.angle + 1) % 360;
        item.y = 0 + 150 * Math.cos(((2 * Math.PI) / 360) * item.angle);
        item.x = 0 + 150 * Math.sin(((2 * Math.PI) / 360) * item.angle);
    });
    drawGraph();
}
function stopInterval() {
    let flagCount = count;
    setTimeout(() => {
        console.log('stopInterval');
        console.log(intervalId);
        for (let index = 0; index < intervalId.length; index++) {
            clearInterval(intervalId[index]);
        }
        if (flagCount == count) {
            intervalId = [];
        }
    }, 50);
}
function startInterval() {
    secondPosition = [];
    let arr = Object.getOwnPropertyNames(clickPosition);
    if (arr.length > 0) {
        position[clickPosition.index] = clickPosition;
        clickPosition = {};
    }
    console.log('startInterval');
    let intervalIdFirst = setInterval(() => {
        drawGraphInterval();
        count++;
    }, 30);
    intervalId.push(intervalIdFirst);
    console.log(intervalId);
}
function showSecondTree(index) {
    if(index > 7){
        return;
    }
    secondPosition = [];
    let arr = Object.getOwnPropertyNames(clickPosition);
    var that = that;
    if (arr.length > 0) {
        position[clickPosition.index] = clickPosition;
    }
    clickPosition = position[index];
    position[index] = { x: 0, y: 0, angle: 0, index: index, zoom: 1.2 };
    let x = 180 * Math.sin(((2 * Math.PI) / 360) * clickPosition.angle);
    let y = 180 * Math.cos(((2 * Math.PI) / 360) * clickPosition.angle);
    for (let index = 0; index < 5; index++) {
        secondPosition.push({
            x:
                index === 0
                    ? x
                    : x +
                      80 *
                          Math.sin(
                              ((2 * Math.PI) / 360) * (360 - 60 * (index - 1) + ((clickPosition.angle + 90) % 360))
                          ),
            y:
                index === 0
                    ? y
                    : y +
                      80 *
                          Math.cos(
                              ((2 * Math.PI) / 360) * (360 - 60 * (index - 1) + ((clickPosition.angle + 90) % 360))
                          ),
            angle: index === 0 ? clickPosition.angle : (clickPosition.angle + 90) % 360,
            index: position.length + secondPosition.length + 1,
            zoom: index === 0 ? 1 : 0.25,
        });
    }

    drawGraph();
}

function drawGraph(){
var option;
//判断是否存在点击
let arr = Object.getOwnPropertyNames(clickPosition);

function createNodes(count) {
    var nodes = [];
    for (var i = 0; i < position.length; i++) {
        nodes.push({
            id: i,
            name: names[i],
            //symbolOffset: position[i],
            x: position[i].x,
            y: position[i].y,
            symbol: 'circle',
            symbolSize: i === 0 ? 0 : [120 * position[i].zoom, 120 * position[i].zoom],
            //symbolKeepAspect: true,
            itemStyle: {
                color: colors[i],
            },
            label: {
                color: '#FFFFFF',
                fontSize: 18,
                show: true,
            },
        });
    }
    //存在点击,将2级3级关系图放入节点
    if (arr.length > 0) {
        for (let j = 0; j < secondPosition.length; j++) {
            nodes.push({
                id: j + position.length + 1,
                name: secondTreeNames[j],
                //symbolOffset: position[i],
                x: secondPosition[j].x,
                y: secondPosition[j].y,
                symbol: 'circle',
                symbolSize: [120 * secondPosition[j].zoom, 120 * secondPosition[j].zoom],
                //symbolKeepAspect: true,
                itemStyle: {
                    color: j === 0 ? '#9FC9FB' : '#CDD4DE',
                },
                label: {
                    color: j === 0 ? '#FFFFFF' : '#2582D6',
                    fontSize: j === 0 ? 18 : 14,
                    show: true,
                },
            });
        }
    }

    return nodes;
}

var datas = [];
datas.push({
    nodes: createNodes(),
    //edges: createEdges(),
});

option = {
    series: datas.map(function (item) {
        return {
            type: 'graph',
            layout: 'force',
            animation: true,
            data: item.nodes,
            //width: "50%",
            //height: "50%",
            circular: {
                //rotateLabel: true,
            },
            force: {
                //initLayout: 'circular',
                gravity: -0,
                repulsion: 0,
                edgeLength: 0,
            },
            // edges: item.edges.map(function (e) {
            //   return {
            //     source: e[0],
            //     target: e[1],
            //     lineStyle: {
            //       width: 2,
            //     },
            //   };
            // }),
        };
    }),
};
myChart.setOption(option, true);
}

