var data = [{
    "name": "短信",
    "value": 1369
}, {
    "name": "客服",
    "value": 1476
}, {
    "name": "外呼",
    "value": 1845
}, {
    "name": "网厅",
    "value": 1476
}, {
    "name": "手厅",
    "value": 2997
}].sort(function(a,b){return b.value-a.value})
var max = Math.max(...data.map(item => item.value)) + 1000

function array2obj(array, key) {
    let resObj = {};
    for (let i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}

function getData(data) {
    let res = {
        series: [],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: i,
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [63 - i * 8 + '%', 58 - i * 8 + '%'],
            center: ["45%", "50%"],
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
                value: max - data[i].value,
                name: '',
                itemStyle: {
                    color: "rgb(2, 31, 62)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
    }
    return res;
}

var objData = array2obj(data, "name");
var optionData = getData(data)
option = {
    backgroundColor:'#333',
    legend: {
        x: 'right',
        y: 'center',
        itemGap: 20,
        itemWidth: 15,
        itemHeight: 15,
        icon: 'rect',
        formatter: function(name) {
            return "{title|" + name + "}{value|" + (objData[name].value) + "}"
        },
        textStyle: {
            rich: {
                title: {
                    width: 40,
                    fontSize: 16,
                    color: "#fff",
                    padding: [0, 0, 0, 10]
                },
                value: {
                    fontSize: 18,
                    color: "rgb(0, 222, 255)",
                    padding: [0, 40]
                }
            }
        },
    },
    color: ['rgb(14, 109, 233)', 'rgb(172, 78, 211)', 'rgb(230, 175, 8)', 'rgb(0, 175, 109)', ' rgb(211, 78, 106)'],
    grid: {
        top: '0',
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
            inside: true,
            textStyle: {
                color: "#fff",
                fontSize: 16,
            },
            show: true
        },
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
}