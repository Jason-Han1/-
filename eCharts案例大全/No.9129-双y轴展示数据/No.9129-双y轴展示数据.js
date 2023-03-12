var option = {
    backgroundColor: '#000',
    tooltip: {
    show: true,
    formatter: function(chart) {
        var seriesName = chart.seriesName,
            name = chart.name,
            value = chart.value;
        if (seriesName.indexOf("值") > -1) {
            var html = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#276EAF;"></span>' + name + '：' + value + "家";
            return html;
        }
    }
    },
    grid: {
        left: '-60',
        top: '30',
        right: '-60',
        bottom: '-20',
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    dataset: {
        dimensions: [
          'value', 'max', 'name'
        ],
        source: [
            {
            	value: '84',
            	max: '150',
            	name: '1 区域'
            },
            {
            	value: '150',
            	max: '150',
            	name: '2 区域'
            },
            {
            	value: '60',
            	max: '150',
            	name: '3 区域'
            },
            {
            	value: '80',
            	max: '150',
            	name: '4 区域'
            },
            {
            	value: '45',
            	max: '150',
            	name: '5 区域'
            },
        ]
    },
    yAxis: [{
        type: 'category',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'left',
            padding: [0, 8, 10, 5],
            textStyle: {
                color: '#80F5FF',
                fontSize: '16',
            }
        },
        interval: 1
    }, {
        type: 'category',
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            show: true,
            verticalAlign: 'bottom',
            align: 'right',
            padding: [0, 8, 10, 0],
            textStyle: {
                color: '#fff',
                fontSize: '16',
            },
            formatter: '{y|{value}} {x|m2}',
            rich: {
                y: {
                    color: '#80F5FF',
                    fontSize: 18
                },
                x: {
                    fontSize: 14,
                    color: 'rgba(128,245,255, 0.5)'
                }
            }
        },
        interval: 1
    }],
    series: [{
        name: '值',
        type: 'bar',
        encode: {
            x: 'value',
            y: 'name'
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                verticalAlign: 'bottom',
                offset: [0, -10],
                color: 'rgba(128,245,255,1)',
                fontSize: 14,
                fontFamily: 'NotoSansHans-Regular',
                formatter: '{c}%'
            }
        },
        barWidth: 6,
        itemStyle: {
            normal: {
                color: 'rgba(128,245,255,1)',
                barBorderRadius: 5,
            }
        },
        z: 2
    }, {
        name: '外框',
        type: 'bar',
        barGap: '-100%',
        encode: {
            x: 'max',
            y: 'value'
        },
        barWidth: 6,
        yAxisIndex: 1,
        label: {
            normal: {
                show: false,
                position: 'right',
                verticalAlign: 'bottom',
                offset: [0, -10],
                color: 'rgba(128,245,255,1)',
                fontSize: 14,
                fontFamily: 'NotoSansHans-Regular',
                formatter: '{c}%'
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(17,101,255, 1)',
                opacity: .2,
                barBorderRadius: 5,
            }
        },
        z: 0
    },
    
]
};