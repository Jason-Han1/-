let list = [
    {
        name: '南越天辰弃土场',
        value: 36,
    },
];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 10;

option = {
    backgroundColor: '#000',
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    grid: {
        containLabel: true,
        left: 10,
        top: 0,
        right: 50,
        bottom:'-5%',
    },
    yAxis: [
        {
            inverse: false,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: [1],
        },
    ],
    series: [
        {
            name: '外框',
            type: 'bar',
            // barGap: '-100%',
            data: [100],
            barWidth: barWidth + 10,
            itemStyle: {
                normal: {
                    color: 'transparent', // 填充色
                    barBorderColor: '#FFFFFF', // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: 'top', // insideTop 或者横向的 insideLeft
                    },
                },
            },
            z: 3,
        },
        {
            //内
            type: 'bar',
            barWidth,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            barGap: '-76%',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(255, 255, 255, 255)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 204, 0, 1)', // 100% 处的颜色
                        },
                    ],
                },
            },
            label: {
                normal: {
                    show: true,
                    position: [0, -35],
                    offset: [0, 2],
                    distance: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    formatter: function (a, b) {
                        return `${a.name}`;
                        //名字
                    },
                },
            },
            data: list,
            z: 1,
            animationEasing: 'elasticOut',
        },
        {
            // 背景分隔
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [6, barWidth],
            symbolOffset: [0, 3],
            itemStyle: {
                normal: {
                    color: 'rgba(0, 255, 253, .1)',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 0],
                    distance: 10,
                    formatter: function (a, b) {
                        // return `${a.value}%`;
                        return '{text|处理率}\n{number|' + a.value + '}';
                    },
                    rich: {
                        text: {
                            fontSize: 12,
                            color: 'rgba(255, 255, 255, 1)',
                            align: 'center',
                            padding: [0, 4],
                        },
                        number: {
                            fontSize: 20,
                            color: 'rgba(255, 186, 0, 1)',
                            align: 'center',
                            padding: [20, 4],
                            textShadowColor: 'rgba(255, 186, 0, 1)',
                            textShadowBlur: 5,
                            textShadowOffsetX: 2,
                            textShadowOffsetY: 2,
                        },
                    },
                },
            },
            data: xData,
            z: 0,
            animationEasing: 'elasticOut',
        },
        {
            //上部分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, barWidth],
            symbolPosition: 'start',
            symbolOffset: [0, 2],
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
            label: {
              normal: {
                show: true,
               position: 'right',
                    offset: [-120, -30],
                textStyle: {
                  fontSize: 14,
                  color: '#DEDEDE',
                  lineHeight: -20
                },
                formatter: function (data) {
                  var result = ''
                  result +=  "{mr|当月处理}{blue|" + 0 + "}{mr|次/总数}{blue|" + 0 + "}{mr|次}";
                  return result
                },
                rich: {
                  blue: {
                    fontSize: 12,
                    lineHeight: 5,
                    color: 'rgba(28, 254, 255, 1)'
                  },
                  mr: {
                    fontSize: 12,
                    color: '#fff'
                  }
                }
              }
            },
        },
    ],
};
