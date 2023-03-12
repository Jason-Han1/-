app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor: '#123764',
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
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            //x轴颜色
            lineStyle: {
                type: 'solid',
                color: '#02FFFF', //左边线的颜色
                width: '1' //坐标线的宽度
            }
        },
        //刻度
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }, //去除网格线
    }],
    yAxis: [{
        // type : 'category',
        // data : ['10','20','30','40'],
        splitLine: {
            show: false
        }, //去除网格线
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            //y轴颜色
            lineStyle: {
                type: 'solid',
                color: '#02FFFF', //左边线的颜色
                width: '1' //坐标线的宽度
            }
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            data: [1, 3, 2, 3, 4, 2, 1, 3, 3, 2, 3, 2]
        },

    ],
    label: {
        
        normal: {
             //柱形图上面的数字
            color: '#ffffff',
            show: true,
            position: 'top',
            formatter: '{c}',
           
        }
    },
    itemStyle: {
        normal: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                //渐变颜色
                color: 'rgba(2, 255,255, 1)'
            }, {
                offset: 1,
                color: 'rgba(2, 255,255, 0.1)'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
        }
    }
};