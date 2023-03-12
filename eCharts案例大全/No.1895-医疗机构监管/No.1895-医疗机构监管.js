data = [{
        name: "数据筛查",
        value: 100
    },
    {
        name: "确定对象",
        value: 75
    },
    {
        name: "实施检查",
        value: 50
    },
    {
        name: "行政处2理",
        value: 25
    },{
        name: "数据筛查2",
        value: 100
    },
    {
        name: "确定对象2",
        value: 75
    },
    {
        name: "实施检查2",
        value: 50
    },
    {
        name: "行政处理2",
        value: 25
    }, {
        name: "行政处理22",
        value: 25
    }
];
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = eval(arrValue.join('+'));
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
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [70 - i * 5 + '%', 68 - i * 5 + '%'],
            center: ["30%", "55%"],
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
                value: data[i].value*0.75,
                name: data[i].name
            }, {
                value: 100 - data[i].value*0.75,
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
            radius: [70 - i * 5 + '%', 68 - i * 5 + '%'],
            center: ["30%", "55%"],
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
                borderWidth: 2,
            },
            data: [{
                value: 7.5,
                itemStyle: {
                    color: "rgb(3, 31, 62)",
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
        res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
    }
    return res;
}

option = {
    backgroundColor: '#000',
    title : {
        text : '医疗机构监管'
    },
    legend: {
        show: true,
        icon: "circle",
        top: "center",
        top: '20%',
        bottom: '53%',
        left: "30%",
        data: arrName,
        width: 40,
        padding: [0, 16],
        itemGap: 25,
        formatter: function(name) {
            return "{title|" + name + "} {value|" + (objData[name].value) + "}  {title|%}"
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 20,
                    lineHeight: 30,
                    color: "rgb(0, 178, 246)"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: "#fff"
                }
            }
        },
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}({d}%)"
    },
    color: ['rgb(9,187,247)', 'rgb(184,254,165)', 'rgb(253,218,23)', 'rgb(252,152,12)'],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};