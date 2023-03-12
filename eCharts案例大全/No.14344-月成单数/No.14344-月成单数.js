app.title = '坐标轴刻度与标签对齐';

option = {
    title: {
        text: '经营系统-月成单数',
        x:'center'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            name:'（月份）',
            type : 'category',
            data : ['1月', '2月', '3月', '4月', '5月',
                    '6月', '7月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name:'（单数）',
            type : 'value',
            min:40
        }
    ],
    series : [
        {
            name:'成交量',
            type:'bar',
            barWidth: '60%',
            data:[50, 52, 49, 51, 54, 48, 46],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        }
    ]
};
