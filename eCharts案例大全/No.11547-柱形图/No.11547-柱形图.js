app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    // tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        //默认显示的状态
        itemStyle: {
            normal: {
                color: '#5197d5',
                barBorderRadius: [20, 20, 0, 0],//设置圆角
                shadowColor: '#BABABA', //阴影
                shadowBlur: 5 //阴影大小
            }
        },
        //鼠标移上高亮显示
        emphasis: {
            itemStyle: {
                color: '#5197d5',
                barBorderRadius: [20, 20, 0, 0],
                borderColor: 'rgba(184, 211, 235, 1)', //设置边框的的颜色
                borderWidth: 4,//设置边框线的大小
                shadowBlur: 10////阴影大小
            }
        },
        data: [10, 52, 200, 334, 390, 330, 220],

    }]
};