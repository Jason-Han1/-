data = [{
        name: "车间1",
        value: 754
    },
    {
        name: "车间2",
        value: 611
    },
    {
        name: "车间3",
        value: 400
    },
    {
        name: "车间4",
        value: 200
    }
];
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = 1000;
objData = array2obj(data, "name");
optionData = getData(data)

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
                radius: '82%',
                center: ['50%', '55%'],
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
                }
            }

        ],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["50%", "55%"],
            label: {
                show: true,

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
            }, {
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
            }]
        });
        res.yAxis.push(data[i].name);
    }
    return res;
}

option = {
    color: ['red', 'green', '#111', '#434345'],
    legend: {
        show: true,
        data: arrName,
        bottom: 10,
        left: 'center'
    },
    grid: {
        top: '16%',
        bottom: '54%',
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
                color: "RGB(78,184,252)",
                fontSize: 25,
            },
            show: true
        },
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};