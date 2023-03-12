var data = [];
var now = +new Date()+8*3600000;       // Init time，GMT+8
var AngleX = Math.random() * 120 - 60; // Init AngleX
var AngleY = Math.random() * 120 - 60; // Init AngleY

function randomData() {
    now = new Date(+now + 200);             // time plus 200ms (each time calls the random function)
    AngleX += Math.random() * 8 - 4;       // Change Value of AngleX
    AngleY += Math.random() * 8 - 4;       // Change Value of AngleY
    return {
            name: now.toString() + AngleX + AngleY, 
            value: [
                // now.toLocaleDateString()+" "+[now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':'),
                now.valueOf(),
                Math.round(AngleX),
                Math.round(AngleY)
            ]
    };
}
// init data
for (var i = 0; i < 100; i++) {
    data.push(randomData());
}

function parseData(item){
    return [
        new Date(item.value[0]).toLocaleTimeString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0]+":"+new Date(item.value[0]).getMilliseconds(),
        // new Date(item.value[0]).toLocaleDateString()+ " " +new Date(item.value[0]).toLocaleTimeString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0]+":"+new Date(item.value[0]).getMilliseconds(),
        item.value[1],
        item.value[2]
    ]
}

var data0 = []
var data1 = []
var data2 = []
for (i=0;i<100;i++){
    _temp = parseData(data[i]);
    data0.push(_temp[0]);
    data1.push(_temp[1]);
    data2.push(_temp[2]);
}

// console.log(data0, data1, data2)

option = {
    title: {
        text: 'Dynamic Date'
    },
    legend: {},
    tooltip: {
        trigger: 'axis',
        formatter: {},
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        splitLine: {show: true},
        data: data0
    },
    yAxis: {
        name: 'Angle',
        type: 'value',
        min: -90,
        max: 90,
        splitLine: {
            show: true
        }
    },
    series: [
        {
            name: 'AngleX',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data1
        },
        {
            name: 'AngleY',
            type: 'line',
            // showSymbol: false,
            hoverAnimation: false,
            data: data2
        },
    ],
    animation: true,
};

setInterval(function () {
    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
        _temp = parseData(data[data.length-1]);
        data0.shift()
        data0.push(_temp[0]);
        data1.shift()
        data1.push(_temp[1]);
        data2.shift()
        data2.push(_temp[2]);
        // console.log(data0)
    }
    
    myChart.setOption({
        xAxis: {
            data: data0
        },
        series: [{
            data: data1
        },
        {
            data: data2
        }]
    });
}, 200);