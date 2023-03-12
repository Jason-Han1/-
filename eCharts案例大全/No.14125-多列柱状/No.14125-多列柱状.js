option = {
    backgroundColor:'#000',
        color:['#00b4ff','#fdf66d','#ff1774','#24cc79'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['派出所', '民警', '辅警','责任区'],
        x: 'center',
        itemGap:40,
        right: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    grid: {
        top:'10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['武汉','黄石','十堰','宜昌','襄阳','鄂州','荆门','孝感','荆州','黄冈','咸宁','随州','恩施','仙桃','潜江','天门','油田','林区'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        max:25000
    }],
    series: [{
        name: '派出所',
        type: 'bar',
        barWidth: '10',
        data: [9806, 9623, 12406, 12514, 12043,9806, 9623, 12406, 12514, 12043,9806, 9623, 12406, 12514, 12043, 12043,9806, 9623],
        itemStyle:{
            normal:{
                // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#fff'
                // }, {
                //     offset: 0.3,
                //     color: '#d3beff'
                // }, {
                //     offset: 1,
                //     color: '#6862ff'
                // }], false),
                barBorderRadius:4
            }
        }
    }, {
        name: '民警',
        type: 'bar',
        barWidth: '10',
        data: [17370, 18437, 20143, 19852, 19634,17370, 18437, 20143, 19852, 19634,17370, 18437, 20143, 19852, 19634,, 19852, 19634],
        itemStyle:{
            normal:{
                // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#fff'
                // }, {
                //     offset: 0.3,
                //     color: '#b9fffd'
                // }, {
                //     offset: 1,
                //     color: '#00fff6'
                // }], false),
                barBorderRadius:4
            }
        }
    }, {
        name: '辅警',
        type: 'bar',
        barWidth: '10',
        data: [7135, 7214, 9642, 8487, 7851, 19852, 19634,17370, 18437, 20143, 9642, 8487, 7851, 19852, 19634, 18437, 20143, 9642],
        itemStyle:{
            normal:{
                // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#fff'
                // }, {
                //     offset: 0.3,
                //     color: '#fff0bd'
                // }, {
                //     offset: 1,
                //     color: '#ffc600'
                // }], false),
                barBorderRadius:4
            }
        }
    }, {
        name: '责任区',
        type: 'bar',
        barWidth: '10',
        data: [12708, 16423, 16058, 16315, 16479, 8487, 7851, 19852, 19634,17370, 16058, 16315, 16479, 8487, 7851],
        itemStyle:{
            normal:{
                // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#fff'
                // }, {
                //     offset: 0.6,
                //     color: '#6ee1fe'
                // }, {
                //     offset: 1,
                //     color: '#07b8fe'
                // }], false),
                barBorderRadius:4
            }
        }
    }]
};