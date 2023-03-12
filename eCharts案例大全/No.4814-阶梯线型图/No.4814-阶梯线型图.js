var rawData = [
    [2002, 14, 21, 25, 21, 26, 32, 27, 20, 10, 11, 5, 5],
    [2003, 18, 24, 28, 24, 33, 37, 30, 25, 13, 14, 6, 6],
    [2004, 22, 31, 36, 28, 37, 43, 35, 30, 13, 13, 7, 7],
    [2005, 25, 32, 38, 34, 39, 48, 38, 29, 14, 14, 8, 8],
    [2006, 29, 38, 47, 33, 44, 57, 41, 39, 16, 16, 9, 8],
    [2007, 29, 35, 49, 34, 43, 57, 41, 37, 20, 17, 9, 10],
    [2008, 22, 32, 37, 30, 35, 44, 38, 31, 16, 17, 8, 7],
    [2009, 25, 34, 41, 33, 39, 47, 44, 32, 17, 17, 9, 8],
    [2010, 26, 35, 46, 40, 47, 61, 47, 41, 20, 18, 9, 10],
    [2011, 29, 39, 55, 38, 55, 67, 53, 41, 19, 20, 11, 11],
    [2012, 38, 48, 60, 49, 57, 79, 62, 54, 26, 26, 13, 11],
]

//总共多少年，用来计算每个月的平均宽度
const yearCount = rawData.length

function renderTrendItem(params, api) {
    //第几个月
    var monthIndex = api.value(0)

    //每个月的平均宽度
    var unitBandWidth = ((api.size([0, 0])[0]) / (yearCount - 1) )

    var points = echarts.util.map(rawData, function(entry, index) {
        //该月 某年的值
        var value = rawData[index][monthIndex + 1]

        //换算得出坐标轴中的X/Y值
        var point = api.coord([monthIndex, value])

        //由于是同一个月的数据，X轴是相同的，需要计算和添加上X轴的偏移
        point[0] += unitBandWidth * (index - yearCount / 2)

        return point
    })


    //console.log(points);

    const stepPoints = [];

    const baseIndex = 0;
    const stepPt = [];
    const nextPt = [];
    const pt = [];

    
    if(monthIndex !== 0 /** 第一个月，连接上一个月末尾 */){
        //该月 某年的值
        var value = rawData[rawData.length-1][monthIndex]
        
        //换算得出坐标轴中的X/Y值
        var point = api.coord([monthIndex-1, value])

        //由于是同一个月的数据，X轴是相同的，需要计算和添加上X轴的偏移
        point[0] += unitBandWidth * 4.5
        
        stepPoints.push(point);
        
    }
    for (let i = 0; i < points.length; i++) {
        const pt1 = points[i];
        const pt2 = points[i + 1];
        stepPoints.push(pt1);

        if (pt2) {
            stepPoints.push([pt2[0], pt1[1]]);
        }
    }


    console.log(stepPoints);

    return {
        type: "group",
        children: [{
            //原生图形，非series.type
            type: 'polyline',
            shape: {
                points: stepPoints,
            },
            style: api.style({
                fill: null,
                stroke: api.visual('color'),
            }),
        }]
    }
}

option = {
    dataZoom: [{
            type: 'slider',
            showDataShadow: false,
            bottom: 10,
            height: 20,
            borderColor: 'transparent',
            backgroundColor: '#e2e2e2',
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
            handleSize: 20,
            handleStyle: {
                shadowBlur: 6,
                shadowOffsetX: 1,
                shadowOffsetY: 2,
                shadowColor: '#aaa',
            },
            labelFormatter: '',
        },
        {
            type: 'inside',
        },
    ],

    tooltip: {},
    xAxis: {
        // x轴非数值型，非数值型不会缩略
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
        max: 80,
    },
    series: [{
        type: 'custom',

        // 自定义渲染函数
        // data有多少行，则调用多少次，每次传入的是data的一行
        renderItem: renderTrendItem,

        encode: {
            x: 0,
            //假装有y轴，实际用途是自定计算y轴的最大值
            y: 0,
        },

        data: [
            //月份
            [0],
            [1],
            [2],
            [3],
            [4],
            [5],
            [6],
            [7],
            [8],
            [9],
            [10],
            [11],
        ],
    }, ],
}