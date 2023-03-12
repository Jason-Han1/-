var normalSpeed = 2.5;
var obj = {
    "timeList": ["09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00"],
    "dataList": [{
        "value": "18",
    }, {
        "value": "42",
    }, {
        "value": "44",
    }, {
        "value": "78",
    }, {
        "value": "50",
    }, {
        "value": "96",
    }, {
        "value": "48",
    }, {
        "value": "46",
    }, {
        "value": "66",
    }, {
        "value": "43",
    }, {
        "value": "42",
    }, {
        "value": "20",
    }, {
        "value": "44",
    }, {
        "value": "10",
    }, {
        "value": "40",
    }, {
        "value": "42",
    }, {
        "value": "30",
    }, {
        "value": "44",
    }, {
        "value": "18",
    }, {
        "value": "46",
    }]
}

var option = {
    grid: {
        left: '1%',
        right: '10%',
        bottom: '3%',
        top: '4%',
        containLabel: true
    },
    dataZoom: {
        startValue: obj.timeList[obj.timeList.length-20],
        endValue: obj.timeList[obj.timeList.length],
    },
    xAxis: {
        type: 'category',
        name: '时间',
        boundaryGap: false,
        nameGap: 5,
        axisLine: {
            onZero: false,
        },
        splitLine: {
            show: false
        },
        // data: timelist
        data: obj.timeList,
    },
    yAxis: {
        type: 'value',
        boundaryGap: false,
        nameGap: 5,
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [{
        type: 'line',
        lineStyle: {
            normal: {
                color: "blue",
            }
        },
        itemStyle: {
            normal: {
                color: "red",
            }
        },
        data: obj.dataList,
    }, ]
};

// myChart.on('dataZoom', function(param) {
//     var i = Math.ceil(param.start / 100 *obj.timeList.length)
//     var e = parseInt(param.end / 100 *obj.timeList.length)
//     console.log(e)
//     console.log([obj.timeList[e], obj.dataList[e]]);
//     myChart.setOption({
//         series: [{
//             markPoint: {
//                 data: [{
//                     coord: [obj.timeList[i], obj.dataList[i].value],
//                     value: obj.dataList[i].floor,
//                     symbol: 'circle',
//                     symbolSize: 20,
//                     itemStyle:{
//                         normal:{
//                             borderColor:'rgb(255,0,0)',
//                             color:obj.dataList[i].hasPeople=='有人'?'rgba(255,0,0,1)':'rgba(255,255,255,1)',
//                         }
//                     }
//                 },{
//                     coord: [obj.timeList[e], (normalSpeed*1.25).toFixed(2)],
//                     value:obj.dataList[e].doorStr,
//                     symbol: 'rect',
//                     symbolSize: [40,25],
//                 }]
//             }
//         }]
//     })
// })