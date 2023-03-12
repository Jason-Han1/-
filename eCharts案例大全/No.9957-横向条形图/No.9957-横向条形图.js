app.title = '条形图';

option = {
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
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['JAVA','CSS','HTML']
    },
    series: [
        {
            name: '占比',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: '#06d3cd',
                    barBorderRadius: [20, 20, 20, 20],
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            z:  10,
            data: [20, 35,50]
        } 
    ]
};