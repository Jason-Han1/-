data = [{
        name: "aaaa",
        value: 754
    },
    {
        name: "bbbb",
        value: 611
    },
    {
        name: "dddd",
        value: 400
    },
    {
        name: "eeee",
        value: 200
    }, {
        name: "ccccc",
        value: 300
    }
];
let colorArr = ['#ff8700', '#ffc300', '#07e373', '#019dff','#0033ff'];
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
    let center=["40%", "50%"];
    for (let i = 0; i < data.length; i++) {
        let radius=[70 - i * 15 + '%', 65 - i * 15 + '%'];
        res.series.push({
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
             radius,
            center,
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
            radius,
            center,
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
// 环形图旁边的圆点颜色样式
let rich = {};
colorArr.map((item, index) => {
    rich['circle' + index] = {
        color: item,
        fontSize: 25,
        lineHeight:60
    };
})
// 图例的样式
let legendRich = {
    value: {
        fontSize: 18,
        lineHeight: 30,
        color: "#fff",
    },
    per:{
         fontSize: 14,
        lineHeight: 30,
        color: "#fff",
        padding:[0,0,0,20]
    }
};
colorArr.map((item, index) => {
    legendRich['title' + index] = {
        fontSize: 16,
        lineHeight: 15,
        color: item
    };
})
option = {
    backgroundColor: '#000',
    color: colorArr,
    legend: {
        show: true,
        icon: "circle",
        top: "center",
        right: '10%',
        data: arrName,
        width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter: function(name) {
            let str = ``;
            console.log("objData", objData)
            data.map((item, index) => {
                if (item.name == name) {
                    let per=(item.value/sumValue)*100;
                    str = `{${'title'+index}|${name}}\n{value|${(item.value)}}{per|${per.toFixed(2)}%}`
                }
            })
            return str;
        },
        textStyle: {
            rich: legendRich
        },
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}({d}%)"
    },
    grid: {
        top: '15%',
        bottom: '50%',
        left: "40%",
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
            show: true,
            interval: 0,
            inside: true,
            position:"right",
            formatter: function(v, i) {
                return `{${'circle'+i}|●}`
            },
            rich

        },
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};