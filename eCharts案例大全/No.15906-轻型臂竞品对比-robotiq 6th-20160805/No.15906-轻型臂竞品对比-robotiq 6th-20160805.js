var data = [
    [481, 1.5, 11],
    [800, 8, 19.5],
    [500, 3, 11],
    [850, 5, 18.4],
    [1300, 10, 28.9],
    [911, 2, 230],
    [1813, 35, 990],
    [1384.5, 10, 28],
    [1423, 5, 127],
    [432, 2, 28],
    [771, 1.5, 16],
    [911, 7, 22.3],
    [931, 14, 29.5],
    [1260, 4, 19],
    [800, 1.5, 130],
    [500, 0.5, 38],
    [1041.4, 2.3, 75],
    [956, 0.5, 6]
];
var oName = ['F&P Personal Robotics -Prob 1U', 'ABB - Roberta', 'Universal Robots - UR3', 'Universal Robots - UR5', 'Universal Robots - UR10', 'BOSCH - APAS', 'Fanuc - CR-35iA', 'MABI -Speedy 10', 'MRK Systeme - KR 5 SI', 'Precise Automation - PAVP6', 'F&P Personal Robotics - Prob 1R', 'KUKA - IIWA', 'KUKA - IIWA', 'Rethink Robotics - Sawyer', 'Kawada - NEXTAGE', 'ABB - YuMi', 'Rethink Robotics - Baxter', 'Bionic Robotics - BioRob'];
var legendName = ['4-axis arm', '6-axis arm', '7-axis arm', 'Dual-arm 6-axis arms', 'Dual-arm 7-axis arms', 'One 4-5 axis arm'];
var lgdLength = [1, 2, 12, 15, 16, 18, 19];
var robotName = [];
var dataList = [];
var series = [];
for (var i = 0; i <= 5; i++) {
    robotName[i] = [];
    dataList[i] = [];
    for (var j = lgdLength[i] - 1; j < lgdLength[i + 1] - 1; j++) {
        dataList[i].push([data[j][0], data[j][1], data[j][1] / data[j][2], data[j][2], Math.sqrt(data[j][2])]);
        robotName[i].push([oName[j]]);
    }
    series.push({
        name: legendName[i],
        type: 'scatter',
        data: dataList[i]
    })
}
var axisCommon = {
    axisLabel: {
        textStyle: {
            color: '#8290a5'
        }
    },
    axisTick: {
        lineStyle: {
            color: '#8290a5'
        }
    },
    axisLine: {
        lineStyle: {
            color: '#414d5d'
        }
    },
    splitLine: {
        lineStyle: {
            color: '#414d5d',
            type: 'solid'
        }
    }
};
option = {
    title: {
        text: '轻型臂竞品对比',
        subtext: 'robotiq 6th',
        textStyle: {
            color: '#eee',
            fontSize: '30'
        },
        subtextStyle: {
            fontSize: '15'
        },
        x: 'center',
        align: 'right'
    },
    grid: {
        left: 40,
        right: 40,
        bottom: 40,
        top: 120
    },
    legend: {
        data: legendName,
        x: 'center',
        top: 90,
        textStyle: {
            color: '#eee'
        }
    },
    color: ['#2988b8', '#6a71ba', "#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"],
    backgroundColor: '#3c4656',
    xAxis: axisCommon,
    yAxis: axisCommon,
    visualMap: {
        show: true,
        max: 100,
        min: 0,
        left: 'right',
        bottom: '5%',
        dimension: 4,
        inRange: {
            symbolSize: [0, 400]
        },
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ['重量(*10kg)'],
        textGap: 30,
        textStyle: {
            color: '#fff'
        }
    },
    dataZoom: [{
        type: 'inside',
        realtime: true
    }],
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        formatter: function(params) {
            return params.seriesName + '<br/>' +
                '型号：' + robotName[params.seriesIndex][params.dataIndex] + '<br/>' +
                '臂展：' + params.value[0] + 'mm<br/>' +
                '抓重：' + params.value[1] + 'kg<br/>' +
                '重量：' + params.value[3] + 'kg<br/>' +
                '抓重/自重：' + (params.value[1] / params.value[3]).toFixed(3);
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    brush: {},
    series: series
};
myChart.on('click', function(param) {
    var googleUrl = 'https://www.google.com/#newwindow=1&q=';
    //console.log(robotName[param.seriesIndex][param.dataIndex]);
    window.open(googleUrl+robotName[param.seriesIndex][param.dataIndex]);
});