data = [{
        name: "总进场车辆",
        value: 18
    },
    {
        name: "总出厂车辆",
        value: 20
    }
];

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
};
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = eval(arrValue.join('+'));
optionData = getData(data)



function getData(data) {
    var res = {
        series: [],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [53 - i * 15 + '%', 48 - i * 15 + '%'],
            center: ["30%", "50%"],
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
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [53 - i * 15 + '%', 48 - i * 15 + '%'],
            center: ["30%", "50%"],
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
                value: 7.5,
                itemStyle: {
                    color: "rgba(3, 31, 62,0.05)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }, {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.yAxis.push(data[i].value+'辆');
    }
    return res;
}

option = {
    backgroundColor: '#fff',
    legend: {
        show: true,
        top: "center",
        right: '5%',
        data: arrName,
        width: 30,
        padding: [0, 5],
        itemGap: 25,

    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}"
    },
    color: ['rgb(24, 183, 142)', 'rgb(1, 179, 238)'],
    grid: {
        top: '22%',
        bottom: '65%',
        left: "30%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        offset:0,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval:0,
            inside: true,
            textStyle: {
                color: "#666",
                fontSize: 14,
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