option = {
    title: {
        text: '占比情况',
        bottom: '2%',
        x: 'center',
        align: 'right',
        textStyle: {
            color: '#333',
            fontSize: 14,
            fontWeight: 'normal'
        }
    },

    tooltip: {
        trigger: 'item',
        // formatter: function(params) {


        // }
    },
    background: '#fff',
    radar: {
        shape: 'circle',
        radius: '60%',
        name: {
            textStyle: {
                color: '#666',
                fontSize: 12,
                borderRadius: 3,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#f2f2f2'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#f2f2f2'
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 12,
                color: '#999'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#fff', '#fafbfe']
            }
        },
        indicator: [{
                name: '2个月)',
                max: 100

            },
            {
                name: '2间值)',
                max: 100
            },
            {
                name: '4个月)',
                max: 100
            }
        ]
    },
    series: [{
        name: ['1个月', '36个月', '612个月', '124个月', '2个月以上'],
        type: 'radar',
        data: [{
            value: [90, 20, 30],
            name: '预测流失占比',
            areaStyle: {
                normal: {
                    color: 'rgba(65,98,255, .1)'
                }
            }
        }]
    }]
};