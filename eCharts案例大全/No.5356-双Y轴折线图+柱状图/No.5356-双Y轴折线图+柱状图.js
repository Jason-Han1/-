var xData = ['9号线', '7号线', '6号线', '11号线', '8号线', '1号线', 
'2号线', '3号线', '4号线', '5号线', '12号线', '13号线', '10号线', 
'16号线', '17号线', '2号线', '浦江线', '18号线'],
    yData1 = [2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7,7,7,8,8,9,10,11],
    yData4 = [3, 5, 3, 2, 5, 7, 4,3, 5, 3, 2, 5, 2, 4,6,5,3,7],
    borderData = [],
    legend = ['行车间隔(min)', '平均满载率(min)'],
    colorArr = [
        {
            start: 'rgba(82, 249, 107,',
            end: 'rgba(18, 58, 86,0.5)',
        },
        {
            color: '#00EAFF',
        },
    ];
var normalColor = '#254081';
var labelColor = '#8FBEE7';
let seriesData = [];
var borderHeight = 4;
xData.forEach((element) => {
    borderData.push(borderHeight);
});
[yData1, yData4].forEach((item, index) => {
    var obj1 = {};
    if (index < 1) {
        obj1 = {
            name: legend[index],
            type: 'bar',
            stack: legend[index],
            data: item,
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: function (params) {
                        if (params.dataIndex < 3) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#BAFF4D',https://echarts.apache.org/zh/index.html
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(23, 223, 160, 0)',
                                },
                            ]);
                        } else if (params.dataIndex > (yData1.length)-4) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#E02929',
                                },
                                {
                                    offset: 0.75,
                                    color: 'rgba(115, 62, 140, 0.46)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(23, 79, 223, 0)',
                                },
                            ]);
                        } else {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#29A9E0',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(23, 79, 223, 0)',
                                },
                            ]);
                        }
                    },
                },
            },
        };
        seriesData.push(obj1);
    } else {
        var obj3 = {
            name: legend[index],
            type: 'line',
            yAxisIndex: 1,
            smooth: false,
            symbol: 'circle',
            symbolSize: 9,
            lineStyle: {
                normal: {
                    width: 2,
                },
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#F62D2D',
                                },
                                {
                                    offset: 1,
                                    color: '#FFEF99',
                                },
                            ]),
                    borderColor: '#F7473B',
                    borderWidth: 3,
                },
            },
            data: item,
            label: {
                normal: {
                    show: false,
                },
            },
        };
        seriesData.push(obj3);
    }
});
option = {
    backgroundColor: '#020933',
    grid: {
        left: '2%',
        top: '16%',
        right: '2%',
        bottom: '2%',
        containLabel: true,
    },
    legend:  [
  {
    icon: "bar",
    textStyle: {
      color: "#2efcfa",
    },
    data: legend[0],
    x: "left"
  },
  {
    // icon: "bar",
    textStyle: {
      color: "#2efcfa",
    },
    data: legend[1],
    x: "right",
  }
],
    // {
        
    //     show: true,
    //     // icon: "rect",
    //     // itemWidth: 50,
    //     // itemHeight: 5,
    //     // left: "27%",
    //     // top: "5%",
    //     align:''
    //     textStyle: {
    //         color: "#fff"
    //     },
    //     data: legend
    // },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var str = '';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== '') {
                    str += params[i].name + ' ' + params[i].seriesName + ': ' + params[i].value + '<br/>';
                }
            }
            return str;
        },
    },
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                textStyle: {
                    color: labelColor,
                    fontSize: 14,
                },
                rotate:'30'
            },
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            // name: "个数",
            // nameTextStyle: {
            //     color: normalColor,
            //     fontSize: 15
            // },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: labelColor,
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
        },
        {
            type: "value",
            // name: "分钟",
            // nameTextStyle: {
            //     color: normalColor,
            //     fontSize: 14,
            // },
            // min: 0,
            // max: 200,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: labelColor,
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: normalColor,
                },
            },
        },
    ],
    series: seriesData,
};
