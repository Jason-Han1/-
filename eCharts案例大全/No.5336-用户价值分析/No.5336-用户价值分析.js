var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 50, 51, 53, 55, 57, 58, 59, 61, 63, 65, 66, 67, 68, 69, 71, 72, 84, 87, 93, 118, 159];
var f_value = [59724, 40919, 26404, 16324, 10413, 6658, 4400, 2902, 1966, 1400, 987, 629, 506, 355, 311, 210, 179, 123, 91, 86, 65, 48, 51, 29, 32, 33, 25, 17, 19, 17, 11, 20, 10, 7, 4, 7, 5, 4, 4, 3, 5, 4, 5, 3, 2, 1, 2, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1];
option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    grid :{
       top:200,
       bottom:200
    },
    xAxis: [{
        type: "category",
        name: 'F',
        axisLabel: {
            //interval: 0,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: f,
    }],
    yAxis: [{
        type: "value",
        name: '人数',
        nameTextStyle:{
            padding:[0,40,20,0]
        },
        splitLine: {
            show: false
        },
    }],
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    series: [{
        name: "访问量",
        type: "line",
        symbolSize: 15,
        symbol: 'circle',
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: f_value
    }]
}