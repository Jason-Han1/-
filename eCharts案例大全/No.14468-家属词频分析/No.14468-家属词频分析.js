app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: [ '家属词频分析',]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['家属','丈夫','婆婆','钱','赔偿','妈妈','渣','嫁','良心','妻子','说谎','女儿','推卸','监护']
    },
    series: [
        {
            name: '家属词频分析',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [264, 53, 29, 21, 15, 27,11,10,7,7,12,6,6,5]
        },

    ]
};