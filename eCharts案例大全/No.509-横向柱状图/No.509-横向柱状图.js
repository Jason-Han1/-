var funcCount = 0;

var charts = {
    // 按顺序排列从大到小
    xList: ['钢铁', '卫生、社会保障和社会福利业', '电力、燃气及水的生产和供应业'],
    yData: [878, 203, 96],
};
var xList = charts.xList; //var top10CityList = charts.cityList
var yData = charts.yData; //var top10CityData = charts.cityData
var color = ['rgba(0,123,255', 'rgba(1255,193,7', 'rgba(7,255,232']; //['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']

let lineY = [];
for (var i = 0; i < charts.xList.length; i++) {
    var x = i;
    if (x > color.length - 1) {
        x = color.length - 1;
    }
    var data = {
        name: charts.xList[i],
        color: color[x] + ')',
        value: yData[i],
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                        {
                            offset: 0,
                            color: color[x] + ', 0.3)',
                        },
                        {
                            offset: 1,
                            color: color[x] + ', 1)',
                        },
                    ],
                    false
                ),
                barBorderRadius: 10,
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
        },
    };
    lineY.push(data);
}

var option = {
    backgroundColor: '#000',
    title: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '5%',
        right: '15%',
        bottom: '3%',
    },
    color: color,
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                inside: false,
            },
            data: xList,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                    color: function (val) {
                        funcCount++;
                        if (funcCount % 3 == 1) {
                            return '#02d8ff';
                        } else if (funcCount % 3 == 2) {
                            return '#ebb73a';
                        } else {
                            return '#1ef1b8';
                        }
                    },
                    fontSize: '16',
                    // fontFamily: 'Arail'
                },
                formatter: function (val) {
                    return `${val}`;
                },
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: yData,
        },
    ],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            animationDuration: 1500,
            data: [1000, 1000, 1000],
            barGap: '-100%',
            barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    color: 'rgba(20,127,203,0.4',
                    borderWidth: 0,
                    barBorderRadius: [15, 15, 15, 15],
                },
            },
        },
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            animationDuration: 1500,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 12,
                    },
                    formatter: function (a, b) {
                        return a.name;
                    },
                },
            },
        },
    ],
    animationEasing: 'cubicOut',
};
