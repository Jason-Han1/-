var data = {
    area: ['1#', '2#', '3#', '4#'],
    legend: ['1#', '2#', '3#', '4#'],
    data: [
        [3, 3, 9, 6, 1, 30, 20, 10, 50],
        [2, 2, 1, 4, 9, 30, 30, 1, 50],
        [3, 2, 1, 4, 9, 3, 20, 1, 5],
        [3, 3, 3, 3, 9, 3, 30, 10, 5],
        [3, 2, 1, 4, 5, 3, 30, 10, 5],
    ],
};

var colors = [
    '#5089FE',
    '#83CCE7',
    '#26C7C8',
    '#73DEBD',
    '#26C978',
    '#8CDF6C',
    '#FBD657',
    '#F56679',
    '#E07BCE',
    '#9D50E0',
    '#634FDA',
];
var offsetColor0 =['#5089FE','#FE7150','#A250FE','#FE6950']
var offsetColor1 =['#52C5FF','#FFB852','#CC52FF','#FF1430']
var option = {
    title: {
        text: '',
        left: 19,
        top: 15,
        textStyle: {
            color: '#fff',
        },
    },
    // color: colors,
    legend: {
        itemWidth: 12,
        itemHeight: 4,
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0],
        },
        data: data.legend,
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '13%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#999999',
        },
        axisLine: {
            lineStyle: {
                color: '#999999',
            },
            width: 5,
        },
        axisTick: {
            show: false,
        },
        data: data.area,
    },
    yAxis: {
        max:60,
        type: 'value',
        name: 'h',
        nameTextStyle: {
            //y轴上方单位的颜色
            color: '#999999',
            align: 'right',
            padding: [0, 6, 0, 0],
        },
        axisLabel: {
            color: '#999999',
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted', //设置网格线类型 dotted：虚线   solid:实线
                color: '#DDDDDD',
            },
        },

        axisLine: {
            show: true,
            lineStyle: {
                color: '#999999',
            },
            width: 5,
        },
        axisTick: {
            show: true,
        },
    },

    series: [],
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '25%',
        label: {
            show: false,
            position: 'insideRight',
        },
        itemStyle: {
            normal: {
               color: {
                 type: "linear",
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [
                   {
                     offset: 0,
                     color: offsetColor0[i], // 0% 处的颜色
                   },
                   {
                     offset: 1,
                     color: offsetColor1[i], // 100% 处的颜色
                   },
                 ],
                 global: false, // 缺省为 false
               },
            },
          },
        data: data.data[i],
    });
}
option.series[0].markLine = {
    silent: true,
    symbol: 'none',
    itemStyle: {
        normal: {
            color: '#EE0F0F',
        },
    },
    data: [
        {
            yAxis: 50,
        },
    ],
    label: {
        normal: {
            color: '#EE0F0F',
            formatter: '年度限60小时', // 这儿设置安全基线
        },
    },
};
myChart.setOption(option);
