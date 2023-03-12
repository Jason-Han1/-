const arr = ['面包饮品', '特色湘菜', '小吃烤肉', '江湖海鲜', '农家私房', '西餐日料', '火锅', '其他'];
          
option = {
    backgroundColor: '#00265f',
    title: {
        text: '美食',
        x: 'center',
        y: '4%',
        textStyle: {
            color: '#fff',
            fontSize: '22',
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',
        },
    },
    tooltip: {
        trigger: 'axis',
          show: false,
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',

            data: [5000, 2600, 1300, 1300, 1250, 1500, 1300,1000],
            axisTick: {
                //纵坐标轴的刻度 不显示
                show: false,
            },
            nameTextStyle: {
                color: '#82b0ec',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#82b0ec',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
                margin: 30,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },

            axisTick: {
                //纵坐标轴的刻度 不显示
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: [5000, 2600, 1300, 1300, 1250, 1500, 1300,1000],

            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            'rgba(21,177,255,1)',
                            'rgba(229,115,63,1)',
                            'rgba(240,189,108,1)',
                            'rgba(237,214,102,1)',
                            'rgba(77,168,222,1)',
                            'rgba(25,168,164,1)',
                        ];
                        var colorList2 = [
                            'rgba(11,94,255,0.8)',
                            'rgba(229,115,63,0.8)',
                            'rgba(240,189,108,0.8)',
                            'rgba(237,214,102,0.8)',
                            'rgba(77,168,222,0.8)',
                            'rgba(25,168,164,0.8)',
                        ];
                        var color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: colorList[params.dataIndex % 6],
                            },
                            {
                                offset: 1,
                                color: colorList2[params.dataIndex % 6],
                            },
                        ]);
                        return color; //大概最新的柱子颜色始终一样的 不太理解
                    },
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 15,
                    width: 100,
                    height: 30,
                    borderRadius: 200,
                    position: ['5', '-80'],
                    distance: 1,
                    formatter: function (param) {
                        return '{a|' + arr[param.dataIndex].split("").join("\n") + '}';
                    },
                    rich: {
                        a: {
                            color: 'rgba(21,177,255,1)',
                        },
                    },
                },
            },
        },
    ],
};
