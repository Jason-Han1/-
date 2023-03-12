var labelTop = {
    position: 'center',
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        color: '#F9A825',
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: 'rgba(48, 107, 230, .3)',
        label: {
            show: false,
            position: 'center',
            formatter: function(params) {
                return 'hoji'
            }
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        // color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    backgroundColor: 'rgb(19,27,81)',
    series: [{
            type: 'pie',
            center: ['15%', '30%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [{
                    name: '剧情',
                    value: 75,
                    itemStyle: labelTop
                },
                {
                    name: 'other',
                    value: 25,
                    itemStyle: labelBottom,
                    position: 'center'
                }
            ]
        },
        {
            type: 'pie',
            center: ['30%', '30%'],
            radius: radius,
            x: '20%', // for funnel
            itemStyle: labelFromatter,
            data: [{
                    name: '奇幻',
                    value: 24,
                    itemStyle: labelTop
                },
                {
                    name: 'other',
                    value: 76,
                    itemStyle: labelBottom
                }
            ]
        },
        {
            type: 'pie',
            center: ['45%', '30%'],
            radius: radius,
            x: '40%', // for funnel
            itemStyle: labelFromatter,
            data: [{
                    name: '爱情',
                    value: 14,
                    itemStyle: labelTop
                },
                {
                    name: 'other',
                    value: 86,
                    itemStyle: labelBottom
                }
            ]
        },
        {
            type: 'pie',
            center: ['10%', '60%'],
            radius: radius,
            x: '60%', // for funnel
            itemStyle: labelFromatter,
            data: [{
                    name: '惊悚',
                    value: 37,
                    itemStyle: labelTop
                },
                {
                    name: 'other',
                    value: 63,
                    itemStyle: labelBottom
                }
            ]
        },
        {
            type: 'pie',
            center: ['30%', '60%'],
            radius: radius,
            x: '80%', // for funnel
            itemStyle: labelFromatter,
            data: [{
                    name: '冒险',
                    value: 27,
                    itemStyle: labelTop
                },
                {
                    name: 'other',
                    value: 73,
                    itemStyle: labelBottom
                }
            ]
        }
    ]
};