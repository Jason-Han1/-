var option = {
    backgroundColor: '#fff',
    series: [{
        type: 'liquidFill',
        radius: '70%',
        center: ['50%', '40%'],
        data: [0.48, 0.48],
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#459DBD',
            color: '#fff'
        },
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: 'rgba(73, 126, 255, 0.36)'
        }, {
            offset: 0,
            color: 'rgba(135, 241, 244, 0.7)'
        }]),
        itemStyle: {
             shadowBlur: 0,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 1,
                    color: 'rgba(135, 241, 244, 0.7)'
                }, {
                    offset: 0,
                    color: 'rgba(73, 192, 255, 0.7)'
                }]),
                opacity: 1,
        },
        outline: {
            show: false
        },
        label: {
            fontSize: 18,
            formatter: function(v) {
                return (v.data * 100).toFixed(0) + "%" + '\n感情度';
            },
            align: 'center',

        }
    }]
};