var xData=[0,5,10,15,20];
var dataAll = [
    [
        8.04,
        6.95,
        7.58,
        8.81,
        8.33,
        9.96,
        7.24,
        4.26,
       10.84,
        4.82,
        5.68
    ],
    [
       9.14,
       8.14,
       8.74,
       8.77,
       9.26,
       8.10,
       6.13,
       3.10,
       9.13,
       7.26,
       4.74
    ],    [
        7.46,
        6.77,
       12.74,
        7.11,
        7.81,
        8.84,
        6.08,
        5.39,
        8.15,
        6.42,
        5.73
    ],
    [
       6.58,
       5.76,
       7.71,
       8.84,
       8.47,
       7.04,
       5.25,
        12.50,
       5.56,
       7.91,
       6.89
    ]
];
//饼图数据
var pieData = [
    [{
        "name": "A系统",
        "value": 2
    }, {
        "name": "B系统",
        "value": 4
    }, {
        "name": "C系统",
        "value": 3
    }, {
        "name": "D系统",
        "value": 3
    }],
    ["A系统", "B系统", "C系统", "D系统"]
];

var markLineOpt = {
    animation: false,
    label: {
        formatter: 'y = 0.5 * x + 3',
        align: 'right'
    },
    lineStyle: {
        type: 'solid'
    },
    tooltip: {
        formatter: 'y = 0.5 * x + 3'
    },
    data: [[{
        coord: [0, 3],
        symbol: 'none'
    }, {
        coord: [20, 13],
        symbol: 'none'
    }]]
};

option = {
    title: {
        text: 'Anscombe\'s quartet',
        left: 'center',
        top: 0
    },
    grid: [
        {x: '7%', y: '10%', width: '38%', height: '15%'},
        {x: '7%', y: '30%', width: '38%', height: '15%'},
        {x: '7%', y: '50%', width: '38%', height: '15%'},
        {x: '7%', y: '70%', width: '38%', height: '15%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})',
          trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [
        {gridIndex: 0,  data: xData,},
        {gridIndex: 1, data: xData,},
        {gridIndex: 2,data: xData,},
        {gridIndex: 3,data: xData,}
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15},
        {gridIndex: 2, min: 0, max: 15},
        {gridIndex: 3, min: 0, max: 15}
    ],
    series: [
        {
            name: 'I',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
            markLine: markLineOpt
        },
        {
            name: 'II',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1],
            markLine: markLineOpt
        },
        {
            name: 'III',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2],
            markLine: markLineOpt
        },
        {
            name: 'IV',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3],
            markLine: markLineOpt
        },
         {
            name: '面积模式',
            type: 'pie',
            radius: [70, 120],
            center: ['75%', '45%'],
            color:['#3498DB','#26B99A','#E74C3C','#BDC3C7'],//蓝，绿，红，灰
            data: pieData[0] //饼图数据赋值
        }
    ]
};