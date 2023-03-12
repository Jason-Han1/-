var colors = ['#73A0FA', '#5AD8A6'];

option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    grid: {
        right: '5%',
        bottom:70
    },
    legend: {
        bottom: 0,
        itemWidth:16,
        itemHeight:16,
        textStyle:{
            lineHeight:16,
            height:16,
            padding:[4,0,0,0]
        },
        data: ['灌桩宝测桩（次）', '新建开孔单数量（单）'],
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0.15)',
                },
            },
            axisLabel: {
                formatter: '{value}',
                color: 'rgba(0, 0, 0, 0.65)',
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '灌桩宝测桩（次）',
            nameTextStyle: {
                fontSize: 14,
                color: colors[0],
                align:"left",
                padding:[0,0,0,-25]
            },
            min: 0,
            max: 25,
            splitNumber: 5,
            interval: 25 / 5,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                     color: 'rgba(0, 0, 0, 0.15)',
                },
            },
            axisLabel: {
                formatter: '{value}',
                color: colors[0],
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "rgba(0,0,0,.1)"
              }
            }
        },
        {
            type: 'value',
            name: '新建开孔单数量（单）',
            nameTextStyle: {
                fontSize: 14,
                color: colors[1],
                align:"right",
                padding:[0,-40,0,0]
            },
            min: 0,
            max: 250,
            splitNumber: 5,
            interval: 250 / 5,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0.15)',
                },
            },
            axisLabel: {
                formatter: '{value}',
                color: colors[1],
            },
            splitLine: {
              show: false,
              
            }
        },
        
    ],
     dataZoom: [
          {
            type: "slider",
            show: true,
            handleSize: 2,
            height: "15px",
            start: 0,
            end: 40,
            bottom: 30
            //end: computedPosition(1,xArraylength)//xArraylength是x轴返回的数据的个数
          },
          {
            type: "inside",
            start: 40,
            end: 100
          }
        ],
    series: [
        {
            name: '灌桩宝测桩（次）',
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0.85)',
                        },
                        formatter: function (params) {
                            let str = params.data + '次';
                            return str;
                        }
                    },
                },
            },
            yAxisIndex: 0,
            barWidth: 16,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
        {
            name: '新建开孔单数量（单）',
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0.85)',
                        },
                        formatter: function (params) {
                            let str = params.data + '单';
                            return str;
                        }
                    },
                },
            },
             yAxisIndex: 1,
            barWidth: 16,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        
    ],
};
