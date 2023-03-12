option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: 'bottom',
        data: ['浙江省', '金华市', '义乌市']
    },
    grid: {
        x: 40,
        y: 60,
        x2: 70,
        y2: 50
    },
    xAxis: {
        type: 'category',
        data: ['地区生产总值', '农业增加值', '工业增加值', '服务业增加值', '高新技术产业增加值','数字经济产业增加值','战略性新兴产业增加值'],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel:{
        alignWithLabel: true,
        interval:0,
        rotate:0
        }
    },
    yAxis: {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 100,
        interval: 20,
        axisLine:{
            show:true,
            lineStyle:{
                color:'#000',
                width:1,
                type:'solid',
            },
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        name: '浙江省',
        data: [70, 65, 45, 80, 70, 78, 14],
        type: 'bar',
        barWidth:18,
        itemStyle: {
            color: '#228de8'
        }

    },
    {
        name: '金华市',
        data: [70, 65, 45, 80, 70, 78, 14],
        type: 'bar',
        barWidth:18,
        itemStyle: {
            color: '#6ad27e'
        }
    },
    {
        name: '义乌市',
        data: [70, 65, 45, 80, 70, 78, 14],
        type: 'bar',
        barWidth:18,
        itemStyle: {
            color: '#fcd352'
        }
    }]
};