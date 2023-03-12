var data = [-46.21 ,-53.77 ,-45.10 ,-32.95 ,-13.34 ,28.35 ,111.23 ,82.22 ,38.23 ,22.65 ,16.06 ,-2.45 ,0.37 ,9.80 ,-0.50 ,3.57 ,-4.18 ,-9.24 ,2.33 ,26.02 ,20.83 ,14.57 ,-1.02 ,-23.84 ];
option = {
    title: {
        text: '基于时间段的PV环比',
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b0} : {c0}%'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['环比 23点', '环比 0点', '环比 1点', '环比 2点', '环比 3点', '环比 4点', '环比 5点', '环比 6点', '环比 7点', '环比 8点', '环比 9点', '环比 10点', '环比 11点', '环比 12点', '环比 13点', '环比 14点', '环比 15点', '环比 16点', '环比 17点', '环比 18点', '环比 19点', '环比 20点', '环比 21点', '环比 22点'],
        axisLabel: {
            margin: 20,
            interval: 0,
            formatter: function(value) {
                return value.split(" ").join("\n");
            }
        },
        boundaryGap: true,
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}%',
        }
    }],
    series: [{
        type: 'bar',
        data: data,
        label: {
            show: true,
            position: 'top',
        },
    }, {
        type: 'bar',
        data: data,
        barGap: '-100%',
        itemStyle: {
            normal: {
                color: function(params) { //展示负值的柱子，正数设为透明
                    let colorArr = params.value > 0 ? 'rgba(0,0,0,0)' : '#4d4d4d'
                    return colorArr
                },
            },
        }
    }]
};