option = {
    backgroundColor: 'rgba(23,63,154,0.90)',
    grid:{
      top:'80%'
    },
    radar: {

        name: {
            formatter: function(name, indicator) {

                indicator.value;
                return '{a|' + name + '  }{b|' + indicator.value + '}{a|件}'
            },
            rich: {
                a: {
                    color: '#ffffff',
                    fontSize: 14
                },
                b: {
                    color: '#13FEDA',
                    fontSize: 16,
                    fontWeight:700
                }
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)',
                    'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)',
                    'rgba(255,255,255,0.2)', 'rgba(0,145,255,1)'
                ]
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        indicator: [{
                name: '事故灾害',
                max: 8,
                value: 8
            },
            {
                name: '自然灾害',
                max: 8,
                value: 2
            },
            {
                name: '社会安全',
                max: 8,
                value: 5
            },
            {
                name: '公共卫生',
                max: 8,
                value: 3
            }

        ]
    },
    series: [{

        type: 'radar',

        data: [{
            value: [8, 2, 5, 3],
            name: '预算分配（Allocated Budget）'
        }],
        itemStyle: {
            normal: {
                color: '#13FEDA'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.1
            }
        }
    }]
};
