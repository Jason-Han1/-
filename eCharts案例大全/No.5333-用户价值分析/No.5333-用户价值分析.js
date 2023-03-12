var f = [0,1, 2, 3, 4, 5, 6, 7, 8];
var f_value = [45425, 34031, 21313, 18806, 15586, 12398, 11347, 8818, 7319];
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
        name: 'R',
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
            padding:[0,40,10,0]
        },
        splitLine: {
            show: false
        },
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