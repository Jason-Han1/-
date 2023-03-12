option = {
    backgroundColor: 'transparent',
    title: {
        text: '付费项目（新签）产品分布',
        left: 'center',
        top: 70,
        textStyle: {
            color: '#FFFFFF'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 32,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '付费项目（新签）产品分布',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 31.62,
                name: '推荐'
            },
            {
                value: 15.46,
                name: 'NLP'
            },
            {
                value: 15.46,
                name: 'NLP-SaaS'
            },
            {
                value: 9.97,
                name: '搜索'
            },
            {
                value: 8.25,
                name: 'RPA'
            },
            {
                value: 6.87,
                name: 'IDPS'
            },
            {
                value: 4.47,
                name: '其它'
            },
            {
                value: 4.12,
                name: '抓取'
            },
            {
                value: 2.41,
                name: '图谱'
            },
            {
                value: 1.37,
                name: 'OCR'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}%}', '{b|{b}}'].join('\n\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 30,
                        fontWeight:'bold',
                        lineHeight: 9
                    },
                    b: {
                        color: 'rgb(255,251,240)',
                        fontSize: 24,
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
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 50,
            }
        }
    }]
};