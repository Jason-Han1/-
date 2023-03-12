var charts = {
    unit: '气温/℃',
    names: ['最高气温', '最低气温'],
    lineX: ["8-25", "8-26", "8-27", "8-28", "8-29", "8-30", "8-31"],
    value: [
        ['25', '27', '26', '23', '25', '29', '26'],
        ['35', '37', '36', '33', '35', '39', '36'],
    ],
};
var color = ['rgba(68, 203, 255', 'rgba(57,253,196'];
var lineY = [];

for (var i = 0; i < charts.names.length; i++) {
    var x = i;
    if (x > color.length - 1) {
        x = color.length - 1;
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x],
        smooth: true,
        lineStyle: {
            normal: {
                color: color[x],
                shadowColor: '#509dc8',
                shadowBlur: 10,
            },
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i],
    };
    lineY.push(data);
}
var option = {
    backgroundColor: '#1b2735',
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'white',
        },
        right: '10%',
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
        
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        min: 0,
        max: 40,
        interval:10,
        axisLabel: {
            formatter: function (value, index) {
                return (value );
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)',
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
    },
    series: lineY,
    dataZoom:[
              {
                type: "slider", //slider表示有滑动块的，
                show: true,
                xAxisIndex: [0], //表示x轴折叠
                start: 20, //数据窗口范围的起始百分比,表示1%
                end: 100, //数据窗口范围的结束百分比,表示35%坐标
                height: 10,
                bottom: "5%",
                borderColor: "#2cab7c",
                fillerColor: "#2cab7c",
                textStyle: {
                  color: "#2cab7c",
                },
              },
            ]
};
