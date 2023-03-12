option = {
    backgroundColor: '#093036',
    title: {
        text: '南丁格尔玫瑰图',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '农房信息',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5',"#F3972F"], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 285,
                name: '10年以下楼龄'
            },
            {
                value: 410,
                name: '10-20年以下楼龄'
            },
            {
                value: 274,
                name: '20-30年以下楼龄'
            },
            {
                value: 235,
                name: '30年以上楼龄'
            },
            {
                value: 232,
                name: '危房'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}户}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: '#8DEF8B',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        height: 40
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};
