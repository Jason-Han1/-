option = {
    tooltip: {
        showContent: true,
        trigger: 'axis',
        backgroundColor: 'rgba(8,36,68,.7)',
        color: '#fff',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '1%',
        right: '5%',
        itemWidth: 13,
        itemHeight: 13,
        itemStyle: {
            color: '#24C384',
        },
        icon: 'rect',
        padding: 0,
        textStyle: {
            color: '#c0c3cd',
            fontSize: 15,
            padding: [2, 0, 0, 0],
        },
    },
    grid: [
        // 左边柱子
        {
            show: false,
            left: '12%',
            top: '20%',
            bottom: '0',
            width: '36%',
        },
        // 右边柱子
        {
            show: false,
            left: '62%',
            top: '20%',
            bottom: '0',
            width: '36%',
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            show: false,
        },
        {
            gridIndex: 1,
            show: false,
            max: 100,
        },
    ],
    yAxis: [
        {
            gridIndex: 0,
            type: 'category',
            inverse: true,
            position: 'left',
            offset: 30,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                align: 'left',
                // textStyle: {
                //   color: '#66cc00',
                // },
                  formatter: function (value, index) {
                    var num = ''
                    var str = '';
                    num = (index + 1);
                    if (index === 0) {
                      str = '{num1|' + num + '}'
                    } else if (index === 1) {
                      str = '{num2|' + num + '}'
                    } else if (index === 2) {
                      str = '{num3|' + num + '}'
                    } else {
                      str = '{num|' + num + '}'
                    }
                    return str;
                  },
                rich: {
                    num: {
                        color: '#fff',
                        backgroundColor: 'rgba(255,255,0,0.5)',
                        // {
                            // image: 'img/icon_terminal4.png'
                        // },
                        width: 24,
                        height: 24,
                        fontSize: 16,
                        align: 'center',
                        verticalAlign: 'bottom',
                        borderRadius: 100,
                    },
                    num1: {
                        color: '#fff',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        // {
                        //     image: 'img/icon_terminal1.png',
                        // },
                        width: 24,
                        height: 24,
                        fontSize: 16,
                        align: 'center',
                        borderRadius: 100,
                    },
                    num2: {
                        color: '#fff',
                        backgroundColor: 'rgba(0,255,0,0.5)',
                        // {
                        //     image: 'img/icon_terminal2.png',
                        // },
                        width: 24,
                        height: 24,
                        fontSize: 16,
                        align: 'center',
                        borderRadius: 100,
                    },
                    num3: {
                        color: '#fff',
                        backgroundColor: 'rgba(255,0,255,0.5)',
                        // {
                        //     image: 'img/icon_terminal3.png',
                        // },
                        width: 24,
                        height: 24,
                        fontSize: 16,
                        align: 'center',
                        borderRadius: 100,
                    },
                },
            },
            data: ['1', '2', '3', '4'],
        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            offset: 30,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                align: 'left',
                // textStyle: {
                //   color: '#66cc00',
                // },
                formatter: function (value, index) {
                    var num = '';
                    var str = '';
                    num = index + 5;
                    str = '{num|' + num + '}';

                    return str;
                },
                rich: {
                    num: {
                        color: '#fff',
                        backgroundColor: 'rgba(255,255,0,0.5)',
                        // {
                        //     image: 'img/icon_terminal4.png',
                        // },
                        width: 24,
                        height: 24,
                        fontSize: 16,
                        align: 'center',
                        // verticalAlign: 'bottom',
                        borderRadius: 100,
                    },
                },
            },
            data: ['5', '6', '7', '8'],
        },
    ],
    series: [
        {
            name: '终端数量(个)',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 5,
            showBackground: true,
            backgroundStyle: {
                color: '#073461',
            },
            itemStyle: {
                normal: {
                    color: '#26d18a',
                },
            },
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        if (series.name.length > 8) {
                            series.name = `${series.name.slice(0, 8)}...`;
                        }
                        return series.name + ' （' + series.value + '）';
                    },
                    // rich: {
                    //   name: {
                    //     width:120,
                    //     // width: '110%',
                    //     padding: [-18,0,0,0]
                    //   },
                    //   value: {
                    //     // width: '110%',
                    //     padding: [18,0,0,50],
                    //   }
                    // },
                    position: 'insideTopLeft',
                    // position: 'left',
                    textStyle: {
                        color: '#80c5ff',
                        fontSize: 14,
                    },
                    offset: [0, -25],
                },
            },
            data: [
                { value: 150, name: "强我弱JFK那就诺夫卡了发发" },
                { value: 140, name: "附件是女的理解" },
                { value: 120, name: "发觉我们去" },
                { value: 80, name: "那就面积一点" },
            ],
        },
        {
            name: '终端数量(个)',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            showBackground: true,
            backgroundStyle: {
                color: '#073461',
            },
            barWidth: 5,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        if (series.name.length > 8) {
                            series.name = `${series.name.slice(0, 8)}...`;
                        }
                        // return '{name|'+series.name+'}'+'{value|'+series.value+'}';
                        return series.name + ' （' + series.value + '）';
                    },
                    // rich: {
                    //   name: {
                    //     width: 140,
                    //     padding: [-18,0,0,0]
                    //   },
                    //   value: {
                    //     padding: [18,0,0,0],
                    //   }
                    // },
                    position: 'insideTopLeft',
                    textStyle: {
                        color: '#80c5ff',
                        fontSize: 14,
                    },
                    offset: [0, -25],
                },
            },
            itemStyle: {
                normal: {
                    color: '#26d18a',
                },
            },
            data: [
                { value: 50, name: "发射点发顺丰" },
                { value: 10, name: "沟通如何获得的" },
                { value: 15, name: "时间佛麻烦你" },
                { value: 9, name: "解耦为木兰" },
            ],
        },
    ],
};
