var xData = ["2016年", "2017年", "2018年", "2019年"];
var cityData = ['呼和浩特市', '包头市', '乌海市', '赤峰市', '鄂尔多斯市', '呼伦贝尔市', '乌兰察布市',
    '兴安盟', '锡林郭勒盟', '阿拉善盟'
];
var seriesData = [];

for (var i = 0; i < cityData.length; i++) {
    var subData = [];
    var total = parseInt(Math.random() * 20000);
    if (total < 5000) {
        total += 2000;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 3000);
    if (total < 0) {
        total += 1000;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 5000);
    if (total < 0) {
        total += 1000;
    }
    subData.push(total);
    total = total + parseInt(Math.random() * 5000);
    if (total < 0) {
        total += 1000;
    }
    subData.push(total);
    seriesData.push(subData);
}

var series = [];
for (var i = 0; i < cityData.length; i++) {
    series.push({
        name: cityData[i],
        type: 'line',
        data: seriesData[i]
    });
}

option = {
    title: {
        top: '0',
        left: 'left',
        text: '各盟市贫困户人均收入扶贫前后对比',
        textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        }

    },
    backgroundColor: '#043491',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        x: 'center',
        y: '40px',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 13,
        },
        data: cityData
    },
    grid: {
        right: '20',
        bottom: '20',
        left: '20',
        top: '100',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        nameTextStyle: {
            color: '#d4ffff'
        },
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFF",
                fontSize: 12,
            },
            //interval:0,
            //rotate:30
        },
    }],
    yAxis: [{
        type: 'value',
        name: '贫困人口',
        nameTextStyle: {
            color: '#d4ffff'
        },
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#0B4CA9",
            }

        },
        axisLabel: {
            color: '#d4ffff',
            fontSize: 12,
        }
    }, ],
    series: series
};