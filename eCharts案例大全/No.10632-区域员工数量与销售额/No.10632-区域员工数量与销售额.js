app.title = '';

var data = [
    [[28604,77,17096869,'江苏1区','一大区'],[31163,77.4,27662440,'江苏2区','一大区'],[1516,79,27662440,'江苏3区','一大区'],[13670,74.7,10582082,'山东1区','一大区'],[28599,75,4986705,'山东2区','一大区'],[29476,77.1,56943299,'北方1区','一大区'],[31476,75.4,78958237,'北方2区','一大区'],[28666,78.1,254830,'北方3区','一大区']],
    [[44056,81.8,23968973,'四川区域','二大区'],[43294,81.7,35939927,'湖南湖北','二大区'],[13334,76.9,1048943,'广西1区','二大区'],[21291,78.5,11389562,'广西2区','二大区'],[38923,80.8,5503457,'福建区域','二大区'],[37599,81.9,64395345,'广东区域','二大区'],[44053,81.1,80688545,'浙江区域','二大区'],[42182,82.8,329425,'北京区域','二大区']]
    ];

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: ''
    },
    legend: {
        right: 0,
        data: ['一大区', '二大区']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '一大区',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '二大区',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};