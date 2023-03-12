option = {
    tooltip: {},
    backgroundColor: '#fff',
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '外倾', max: 11},
           { name: '理性', max: 11},
           { name: '内倾', max: 11},
           { name: '感性', max: 11}
        ],
        splitNumber: 3,
		    center: ['50%','40%'],
		    name: {
                    formatter:'{value}',
                    textStyle: {
                        fontSize:20,
                        color:'rgba(87, 203, 204, 1)'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(0, 0, 0, 0)',
                        'rgba(87, 203, 204, 0.2)', 'rgba(0, 0, 0, 0)',
                        'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
                        shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowBlur: 40
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(87, 203, 204, 0.3)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(87, 203, 204, 0.6)',
                    }
                },
            radius: 100
    },
    series: [{
        name: '荣格心理类型',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [5, 6, 7, 8],
                name : '荣格心理类型'
            }
        ]
    }]
};