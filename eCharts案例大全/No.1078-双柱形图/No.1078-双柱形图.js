let   departmentCard = {
    xData: ['设计部门1','设计部门2','设计部门3','设计部门4','设计部门5','设计部门6','设计部门7','设计部门8','设计部门9','设计部门10'],
    yData: [
        [11,22,33,44,55,66,77,88,99,100],
         [11,22,33,44,55,66,77,88,99,100]
        ]
  };
//   左右分布图例+x轴数据超过4字省略号显示
option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                  
                }
              },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '22%',
                containLabel: true,
            },
            legend: [
                {
                    orient: 'horizontal',
                    x: '2%',
                    y: '2%',
                    align: 'left',
                    data: ['刷卡次数'],
                    itemWidth: 14,
                    itemHeight: 14,
                    icon: 'rect',
                    itemGap: 20, //每条图例的距离
                    textStyle: {
                        color: '#ccc',
                        fontSize: 16,
                    },

                },
                {
                    orient: 'horizontal',
                    x: '93%',
                    y: '2%',
                    align: 'left',
                    data: ['违规次数'],
                    itemWidth: 14,
                    itemHeight: 14,
                    icon: 'rect',
                    itemGap: 20, //每条图例的距离
                    textStyle: {
                        color: '#ccc',
                        fontSize: 16,
                    },

                }],
            xAxis: {
                type: 'category',
                data: departmentCard.xData,
                axisLine: {
                    lineStyle: {
                        color: '#00E4FF',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: '#ccc',
                    fontSize: 16,
                    formatter: function (value, index) {
                        let values = value.length > 4 ? value.slice(0, 4) + '...' : value;
                        let num = index + 1;
                        let title = num >= 10 ? num : '0' + num;
                        let str = '{no|' + title + '.}' + values;

                        return str;
                    },
                    rich: {
                        no: {
                            color: '#ACEAF1',
                            fontSize: 16,
                        },
                    },
                    interval: 0,
                    rotate: 40,
                },
            },

            yAxis: [
                {
                    type: 'value',
                    nameTextStyle: {
                        color: '#ccc',
                        fontSize: 16,
                        align: 'left',
                        padding: 10,
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#cdd5e2',
                        },
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(142, 227, 255, 0.3)',
                            type: 'solid',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        fontSize: 16,
                        color: '#ccc',
                    },
                },
                {
                    type: 'value',
                    nameTextStyle: {
                        align: 'center',
                        margin: 10,
                        padding: 10,
                        color: '#ccc',
                        fontSize: 16,
                    },
                    position: 'right',
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(142, 227, 255, 0.3)',
                            type: 'solid',
                        },
                    },
                    axisLabel: {
                        fontSize: 16,
                        color: '#ccc',
                    },
                },
            ],
            series: [
                {
                    name: '刷卡次数',
                    left: '0%',
                    type: 'bar',
                    barWidth: '16',

                    itemStyle: {
                        normal: {
                            color: '#0079FE',
                        },
                    },
                    data: departmentCard.yData[0],
                },
                {
                    name: '违规次数',
                    yAxisIndex: 1,
                    type: 'bar',
                    barWidth: '16',
                    itemStyle: {
                        normal: {
                            color: '#00E4FF',
                        },
                    },
                    data: departmentCard.yData[1],
                },
            ],
        };
