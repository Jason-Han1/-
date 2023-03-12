var xAxisData = ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10'];
var seriesData = [0.5, 0.2, 0.1, 0.4, 0.5, 1, 0.5, 0.2, 0.1, 0.4, 0.5, 1];
var preditDate = '09-06';

var index = 0;
var actualPercent = ''
xAxisData.forEach(function(item, i){
    if(item == preditDate){
        index = i;
    }
})

//实测比例
//预测比例

//xAxis



option = {
    color: ['#259e72', '#178fcd'],
     tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        axisLine : {
            show : false,
            lineStyle : {
                color : '#787878'
            }
        },
       axisLabel : {
            color : '#787878'
        },
        boundaryGap: false,
        data: xAxisData
    },
    {
        "gridIndex": 1,
        "type": "category",
        "position": "bottom",
        "name": "保障前",
        "nameLocation": "center",
        "nameTextStyle": {
            //"fontWeight": "bold"
        },
        "nameGap": -5,
        "offset": 40,
        "data": [""],
        "axisTick": {
            "length": 40,
            "inside": true,
            "show": true
        },
        "axisLabel": {
            "inside": false,
            "show": true
        },
        "axisLine": {
            "show": false,
            "onZero": false
        }
    },
    {
        "gridIndex": 2,
        "type": "category",
        "position": "bottom",
        "name": "保障中",
        "nameLocation": "center",
        "nameTextStyle": {
            //"fontWeight": "bold"
        },
        "nameGap": -5,
        "offset": 40,
        "data": [""],
        "axisTick": {
            "length": 40,
            "inside": true,
            "show": true
        },
        "axisLabel": {
            "inside": false,
            "show": true
        },
        "axisLine": {
            "show": false,
            "onZero": false
        }
    },
    {
        "gridIndex": 3,
        "type": "category",
        "position": "bottom",
        "name": "保障后",
        "nameLocation": "center",
        "nameTextStyle": {
            //"fontWeight": "bold"
        },
        "nameGap": -5,
        "offset": 40,
        "data": [""],
        "axisTick": {
            "length": 40,
            "inside": true,
            "show": true
        },
        "axisLabel": {
            "inside": false,
            "show": true
        },
        "axisLine": {
            "show": false,
            "onZero": false
        }
    },
     {
        "gridIndex": 4,
        "type": "category",
        "position": "top",
        "name": "实测",
        "nameLocation": "center",
        "nameTextStyle": {
            //"fontWeight": "bold"
        },
        "nameGap": -5,
        "offset": 10,
        "data": [""],
        "axisTick": {
            "length": 10,
            "inside": true,
            "show": true
        },
        "axisLabel": {
            "inside": false,
            "show": true
        },
        "axisLine": {
            "show": false,
            "onZero": false
        }
    },
    {
        "gridIndex": 5,
        "type": "category",
        "position": "top",
        "name": "预测",
        "nameLocation": "center",
        "nameTextStyle": {
            //"fontWeight": "bold"
        },
        "nameGap": -5,
        "offset": 10,
        "data": [""],
        "axisTick": {
            "length": 10,
            "inside": true,
            "show": true
        },
        "axisLabel": {
            "inside": false,
            "show": true
        },
        "axisLine": {
            "show": false,
            "onZero": false
        }
    },
    ],
    "grid": [{
         "left": "5%",
         "right" : "5%",
         
        "show": true
    }, // 
    {
        "show": true,
        tooltip : {
             trigger: 'item',
            axisPointer : {
                type: 'none'
            }
        },
        "borderWidth": 0,
        "shadowColor": "rgba(0, 0, 0, 0.3)",
        "shadowBlur": 1,
        axisLabel:{
            padding: [10, 0]
        },
        "width": "30%",
        "left" : "5%"
    },
    {
        "show": true,
        "borderWidth": 0,
        "shadowColor": "rgba(0, 0, 0, 0.3)",
        "shadowBlur": 1,
         tooltip : {
             trigger: 'item',
            axisPointer : {
                type: 'none'
            }
        },
        axisLabel:{
            padding: [10, 0]
        },
        "width": "25%",
        "left": "35%"
    },{
        "show": true,
        "borderWidth": 0,
        "shadowColor": "rgba(0, 0, 0, 0.3)",
        "shadowBlur": 1,
         tooltip : {
             trigger: 'item',
            axisPointer : {
                type: 'none'
            }
        },
        axisLabel:{
            padding: [10, 0]
        },
        "width": "30%",
        "left": "65%"
    },{
        "show": true,
        "borderWidth": 0,
        "shadowColor": "rgba(0, 0, 0, 0.3)",
        "shadowBlur": 1,
         tooltip : {
             trigger: 'item',
            axisPointer : {
                type: 'none'
            }
        },
        axisLabel:{
            padding: [10, 0]
        },
        "width": "60%",
        "left": "5%"
    },{
        "show": true,
        "borderWidth": 0,
         tooltip : {
             trigger: 'item',
            axisPointer : {
                type: 'none'
            }
        },
        "shadowColor": "rgba(0, 0, 0, 0.3)",
        "shadowBlur": 1,
        axisLabel:{
            padding: [10, 0]
        },
        "width": "40%",
        "left": "55%"
    }],
    yAxis: [{
        name: '',
         axisLine : {
            show : false,
            lineStyle : {
                color : '#787878'
            }
        },
       axisLabel : {
            color : '#787878'
        },
    },{
        "gridIndex": 1,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    },{
        "gridIndex": 2,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    },{
        "gridIndex": 3,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    },{
        "gridIndex": 4,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    },{
        "gridIndex": 5,
        "type": "value",
        "interval": 20,
        "max": 100,
        "min": 0,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false,
            "onZero": true
        },
        "axisLabel": {
            "show": false
        }
    }],
    "visualMap": [{
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": index,
            "color": "#259e72"
        }, {
            "gt": index,
            "lte": seriesData.length+1,
            "color": "#51d9a7"
        }]
    }],
    series: [{
            name: '温度',
            type: 'line',
            smooth: true,
            "xAxisIndex": "0",
            data: seriesData,
            markLine: {
                label: {
                    color: '#666',
                    position: 'middle',
                    textStyle: {
                        padding: -50
                    }
                },
                lineStyle: {
                    color: '#666'
                }
            }
        }, {
        name: '平行于y轴的趋势线',
        type: 'line',
        color: ['black'],
        markLine: {
            data: [
                [{
                        symbol: "line",
                        coord: [preditDate, 0]
                    }, {
                        symbol: "line",
                        coord: [preditDate, 1]
                    } 
                ]
            ]
        }
    }
    ]
};