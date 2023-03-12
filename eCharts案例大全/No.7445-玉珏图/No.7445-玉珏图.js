var data = [{
        name: "车间1",
        value: 654
    },
    {
        name: "车间2",
        value: 511
    },
    {
        name: "车间3",
        value: 400
    },
    {
        name: "车间4",
        value: 200
    },
    {
        name: "车间5",
        value: 100
    },
    {
        name: "车间5",
        value: 150
    }
];
arrName = getArrayValue(data, "name");
sumValue = 1000;
optionData = getData(data);

function getArrayValue(array, key) {
    var key = key || "value";
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
            name: "大环",
            type: 'gauge',
            splitNumber: 15,
            radius: '70%',
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
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inner'
                    }
                }
            }
        }],
        yAxis: []
    };
    for (var i = 0; i < data.length; i++) {
        res.series.push({
            name: '按单位',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: [65 - i * 7 + '%', 60 - i * 7 + '%'],
            center: ["50%", "50%"],
            label: {
                show: true,
                position: 'inside',
                color: '#99FFFF',
                formatter: function(params) {
                    return params.value;
                }
            },
            labelLine: {
                show: false
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
    title: {
        text: '分布情况',
        x: 'center',
        y: 5,
        textStyle: { // 文本样式
            fontSize: 32,
            fontWeight: 700,
            color: '#99FFFF'
        }
    },
    color: ['#D6B420', '#723EC9', '#655AB8', '#11AAB0', '#1582E8', '#4F7FD3', '#38BFB8'],
    legend: {
        show: true,
        data: arrName,
        left: 'center',
        bottom: 40,
        textStyle: {
            color: '#99FFFF',
            fontSize: 20
        }
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