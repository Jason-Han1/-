//此图用来展示有3个维度的图形报表

var colors = ['#3A85D3', '#5AD8A6', '#008000', '#5470c6', '#61a0a8'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        
        axisPointer: {     // 坐标轴指示器，坐标轴触发有效
            type: 'cross' // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影
        },
    },
    grid: {
        left: '8%', //柱状图距离左边的距离，也可以用像素px
        right: '18%', //柱状图距离右边的距离，也可以用像素px
        bottom: '10%', //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
        containLabel: false //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 100,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            // min: 0,
            // max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
     // 缩放组件
    dataZoom: {
        type: 'slider',
        start:0,
        end:80  //缩放组件显示70%的位置
    },
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            barWidth: '40%', //barWidth设置每根柱状图的宽度
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '降水量',
            type: 'bar',
            barWidth: '30%', //barWidth设置每根柱状图的宽度
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
