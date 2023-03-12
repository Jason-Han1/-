var data = [{
        name: "水耗",
        value: 536
    },
    {
        name: "能耗指标",
        value: 500
    }
    
];
arrName = getArrayValue(data, "name");
sumValue = 1000; //总数
optionData = getData(data);

function getArrayValue(array, key) {
    // var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}

function getData(data) {
    var res = {
        series: [{
            // name: "大环",
            type: 'gauge',
            // splitNumber: 15,
            radius: '90%',
              
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -270,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            // itemStyle: {
            //     normal: {
            //         label: {
            //             show: true,
            //             position: 'inner'
            //         }
            //     }
            // }
        }],
        yAxis: []
    };
    for (var i = 0; i < data.length; i++) {
        res.series.push({
            // name: '按单位',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            // radius: [65 - i * 7 + '%', 60 - i * 7 + '%'],
              radius: [65 - i * 25 + '%', 50- i * 5 + '%'],
            // center: ["50%", "50%"],
            label: {
                show: true,
                position: 'inside',
                color: '#ffff',
                formatter: function(params) {
                    return params.value;
                }
            },
            labelLine: {
                // show: false
            },
            data: [{
                    value: data[i].value,
                    name: data[i].name
                },
                {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    label: {
                        show: false
                    },
                    hoverAnimation: false
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        });
        res.yAxis.push(data[i].name);
    }
    return res;
}

option = {
       backgroundColor: '#0b214a',
    title: {
        text: '水',
        x: 'center',
        y: 15,
        textStyle: { // 文本样式
            fontSize: 32,
            fontWeight: 700,
            color: '#99FFFF'
        }
    },
    color: ['#5DC4C4', '#C43CA9', '#655AB8', '#11AAB0', '#1582E8', '#4F7FD3', '#38BFB8'],
    // legend: {
    //     show: true,
    //     data: arrName,
    //     left: 'center',
    //     bottom: 40,
    //     textStyle: {
    //         color: '#99FFFF',
    //         fontSize: 20
    //     }
    // },
     tooltip: {
        show: true,
        trigger: 'item', //提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
        // formatter: function(params, ticket, callback) { //第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
        //     return params.seriesName + ": " + params.value + "℃"; //系列名称：数据值
        // }
    },
    grid: {
        top: '16%',
        bottom: '60%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
                color: '#99FFFF',
                fontSize: 15,
            },
            show: true
        },
        max: 5,
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};


