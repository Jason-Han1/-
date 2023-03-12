app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
     "backgroundColor": "#fff",
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['认证后当天开店','认证后三天内开店（不含认证日）','认证后三天~一个月内开店','认证后一个月~三个月内开店','认证后未开店'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '60%',
            data:[100, 152, 200, 334, 390]
        }
    ]
};
