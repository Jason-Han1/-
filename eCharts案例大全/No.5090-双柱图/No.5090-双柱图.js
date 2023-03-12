var xName = ['2014', '2015', '2016', '2017', '2018', '2019'];
var data1 = [826, 673, 588, 782, 779, 855];
var data2 = [686, 703, 788, 882, 779, 785];

var legendName = ['文科', '理科']

var colorArry = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(0, 192, 240, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(101, 105, 255, 1)' // 100% 处的颜色
    }], false),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(27, 223, 202, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(8, 222, 149, 1)' // 100% 处的颜色
    }], false)
]




option = {
    // backgroundColor:'#000',
    color: colorArry,
    grid: {
        top: '20%',
        left: '7%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data:legendName ,
        left: "3%",
        top: "4%",
        textStyle: {
            color: "rgba(195, 240, 255, 1)",
            fontSize: 12
        },
        // itemWidth: 12, // 设置宽度
        // itemHeight: 16, // 设置高度
        // itemGap: 12 // 设置间距
    },
    xAxis: [{
        data: xName,
        axisLabel: {
            margin: 10,
            color: 'rgba(111, 132, 189, 1)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(70, 196, 255, 1)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: 'rgba(111, 132, 189, 1)',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(70, 196, 255, 1)',
            }
        }
    }],
    series: [{
        name: "文科",
        type: 'bar',
        data: data1,
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }, {
        name: "理科",
        type: 'bar',
        data: data2,
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }]
}