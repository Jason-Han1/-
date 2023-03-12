var data = [{
    name: '北京',
    value2: 18125,
}, {
    name: '广东',
    value2: 8497,
}, {
    name: '江苏',
    value2: 4298,
}, {
    name: '上海',
    value2: 1955,
}, {
    name: '浙江',
    value2: 1216,
}, {
    name: '福建',
    value2: 549,
}, {
    name: '山东',
    value2: 371,
}, {
    name: '陕西',
    value2: 240,
}, {
    name: '湖北',
    value2: 184,
}, {
    name: '江西',
    value2: 159,
}];


var resultdata2 = [];

var sum2 = 0;
var titledata = [];
for (var i = 0; i < data.length; i++) {
    var d2 = {
        name: data[i].name,
        value: data[i].value2
    };
    titledata.push(data[data.length - i - 1].name)

    resultdata2.push(d2);

    sum2 += data[i].value2;
}

function NumDescSort(a, b) {
    return a.value - b.value;
    // return b.value-a.value;
}


resultdata2.sort(NumDescSort);

option = {
    title: [{
        text: '地域分布',
        // subtext: '纯属虚构',
        left: 'center'
    }, {
        text: "前十省份统计: " ,
        right: 200,
        top: 40,
        width: 100,
        textStyle: {
            color: 'black',
            fontSize: 16
        }
    }, ],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['备案地'],
        selectedMode: 'single',
    },
    visualMap: {
        min: 0,
        max: 20000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#c05050', '#e5cf0d', '#5ab1ef'],
        dimension: 0
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        data: titledata,
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [{
        z: 1,
        name: '备案地',
        type: 'map',
        map: 'china',
        left: '10',
        right: '35%',
        top: 100,
        bottom: "5%",
        zoom: 0.9,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        //roam: true,
        data: resultdata2
    }, {
        name: '拼框门',
        z: 2,
        type: 'bar',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        data: resultdata2
    }]
};