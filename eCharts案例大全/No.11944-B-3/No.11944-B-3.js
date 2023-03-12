app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [390, 200, 334, 330, 220],
        itemStyle: {

            normal: {

                color: new echarts.graphic.LinearGradient(

                    0, 0, 0, 1,

                    [

                        {
                            offset: 0,
                            color: '#EEA926'
                        }, //定义颜色

                        {
                            offset: 0.5,
                            color: '#F2BF4C'
                        },

                        {
                            offset: 1,
                            color: '#FDDC75'
                        }

                    ]

                )

            },

            emphasis: { //hover时的颜色

                color: new echarts.graphic.LinearGradient(

                    0, 0, 0, 1,

                    [

                        {
                            offset: 0,
                            color: '#2378f7'
                        },

                        {
                            offset: 0.7,
                            color: '#2378f7'
                        },

                        {
                            offset: 1,
                            color: '#83bff6'
                        }

                    ]

                )

            }
        }
    }]
};