app.title = '嵌套环形图';

option = {
    title: {
        text: '25',
        subtext: '                   天\n\n距 离 出 科',
        x: 'center',
        y: 'center',
        itemGap: -50,
        textStyle: {
            color: '#84CCC9',
            fontSize: 100,
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: '#000000',
            fontSize: 30
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#80C26A', '#84CCC9'],
    series: [{
        name: '轮转情况',
        type: 'pie',
        radius: ['50%', '60%'],
        itemStyle: { //图形样式 
            normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。 
                label: { //饼图图形上的文本标签 
                    show: false //平常不显示 
                },
                labelLine: { //标签的视觉引导线样式 
                    show: false //平常不显示 
                }
            },
            emphasis: {
                //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。 
                label: { //饼图图形上的文本标签 
                    show: false //平常不显示 
                },
                labelLine: { //标签的视觉引导线样式 
                    show: false //平常不显示 
                }
            }
        },
        data: [{
            value: 75,
            name: '已出科天数'
        }, {
            value: 25,
            name: '剩余出科天数'
        }]
    }]
};