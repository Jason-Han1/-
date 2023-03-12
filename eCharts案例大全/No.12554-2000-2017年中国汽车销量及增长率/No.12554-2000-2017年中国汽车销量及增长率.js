app.title = '2000-2017年中国汽车销量及增长率';

option = {
    title: {
        text: '2000-2017年中国汽车销量及增长率'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['增速','销量']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
    }],
    yAxis: [{
        type: 'value',
        name: '增速',
        min: 0,
        max: 50,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '销量',
        min: 0,
        max: 3000,
        position: 'left'
    }],
    series: [{
        name: '增速',
        type: 'line',
        stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
        lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
        data: [1,13,37,35,15,13,25,21,6,45,32,2,4,13,6,4,11,5]
    }, {
        name: '销量',
        type: 'bar',
        yAxisIndex: 1,
        stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        data: [209,236,325,439,507,576,722,879,938,1364,1806,1851,1931,2198,2349,2460,2735,2888]
    }]
};