data = [{
        name: "数据1",
        value: 754,
    },
    {
        name: "数据2",
        value: 611
    },
    {
        name: "数据3",
        value: 450
    },
    {
        name: "数据4",
        value: 400
    },
    {
        name: "数据5",
        value: 300
    },
    {
        name: "数据6",
        value: 200
    }
];
legend_data = {
    '数据1': ' 数据1  8 | 4%'
};
colors = ["RGB(15,204,152)", "RGB(54,197,246)", "RGB(1,149,233)", "RGB(195,231,3)", "RGB(238,190,59)", "RGB(248,44,96)"]
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = data.reduce((pre, item) => {
    return pre + item.value
}, 0);
console.log(sumValue);
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
        series: [],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: [70 - i * 12 + '%', 68 - i * 12 + '%'],
            center: ["50%", "55%"],
            label: {
                show: true,
                formatter: '{d}%',
                color: 'RGB(246,175,101)',
                fontSize: 25,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: data[i].value,
                    name: data[i].name,
                    itemStyle: {
                        color: colors[i]
                    }
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
            ]
        });
        res.series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: [70 - i * 12 + '%', 68 - i * 12 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "RGB(13,46,49)",
                    borderWidth: 0
                },
                tooltip: {
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
    backgroundColor: 'RGB(0,10,16)',
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(10,31,95,1)'
        }, {
            offset: 1,
            color: 'rgba(1,232,254,1)'
        }],
        global: false
    }],
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    legend: [{
            x: '70%',
            y: '3%',
            icon:'rect',
            data: ['数据1'],
            formatter: function(name) {
                console.log(name);
                return legend_data[name];
            },
            textStyle:{
                color:colors[0],
            }
        },
        {
            x: '85%',
            y: '3%',
            data: ['数据2'],
            formatter: function(params) {
                console.log(params);
                return 'Legend ' + name;
            },
        },

        {
            x: 'right',
            y: '6%',
            data: ['数据3', '数据4']
        },
        {
            x: 'right',
            y: '8%',
            data: ['数据5', '数据6']
        },
    ],

    yAxis: [{
        type: 'category',
        inverse: true,
        z: 3,
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