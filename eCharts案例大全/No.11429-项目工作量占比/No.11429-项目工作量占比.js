option = {
    backgroundColor: '#2c343c',


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
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        color: ['#e72325', '#98e002'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 285,
                name: '无合同'
            },
            {
                value: 410,
                name: '有合同'
            },

        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}人日}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
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