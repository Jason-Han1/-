var data = [50, 60, 70, 20, 30, 10, 20, 23, 43, 52, 51];
var className = ['100+', '91-100', '81-90', '71-80', '61-70', '51-60', '41-50', '31-40', '21-30', '11-20', '0-10'];
var defaultData = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
option = {
    grid: {
        left: '5%',
        right: '0%',
        bottom: 25,
        top:20,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis', //axis , item
          backgroundColor: 'RGBA(0, 49, 85, 1)',
          borderColor: 'rgba(0, 151, 251, 1)',
          textStyle: {
            color: '#BCE9FC',
            // fontSize: this.$fontSize(0.16),
            align: 'left'
          },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
              
                params[0].seriesName +
                ' : ' +
                params[0].value
            );
        },
    },
    backgroundColor: '#002D54',
    xAxis: {
        type: 'value',
        splitLine: {
            
            lineStyle: {
                color: "rgba(77, 128, 254, 0.2)",
                 type: 'line'
            }
        },
        axisTick: {
            show: false
        },

        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#80CFF0",
                fontSize: 16
            }
        }
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#80CFF0',
                    fontSize: '16',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: className,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: false,
            axisLabel: {
                textStyle: {
                    color: '#CFEFFF',
                    fontSize: '16',
                },

                formatter: function (value) {
                    return '均' + value + '岁';
                },
            },
            data: data,
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(0, 151, 251, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(48, 236, 166, 1)',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: defaultData,
            label: {
                normal: {
                    show: true,
                    color: '#CFEFFF',
                    fontSize: '16',
                    position: 'insideRight',
                       formatter: function (value) {
                           console.log(value)
                        return '均:' + data[value.dataIndex] + '岁';
                },
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0, 151, 251, 0.2)',
                    barBorderRadius: 0,
                },
            },
        },
    ],
};
