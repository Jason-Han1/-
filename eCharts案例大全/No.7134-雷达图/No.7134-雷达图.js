option= {
    backgroundColor:'#003366',
    tooltip: {
        show: false,
    },
    radar: {
        radius: "60%",
        name: {
            textStyle: {
                color: '#fff',
                fontSize:8
            }
        },
        splitArea: {
            areaStyle: {
                color: [
                    '#062d5b', '#07244e',
                    '#062d5b', '#07244e',
                ].reverse()
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 2,
                color: '#103373',
            }
        },
        indicator: [{
                text: '文盲',
                max: 43,
            },
            {
                text: '小学',
                max: 1100,
            },
            {
                text: '初中',
                max: 1450,
            },
            {
                text: '高中',
                max: 400,
            },
            {
                text: '本科',
                max: 1230,
            }
        ],
    },
    series: [{
            name: '服务人员文化程度分析',
            type: 'radar',
            symbolSize: 8,
            lineStyle: {
                color: 'transparent',
               
            },

            areaStyle: {
                normal: {
                    color: 'transparent',
                    
                }
            },

            data: [{
                value: [34, 877, 1153, 320, 974],
                name: '服务人员文化程度分析',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 8,
                            color: 'fff'
                        },
                        formatter: function(params) {
                            return params.value +"人";
                        }
                    }
                }
            }, ]
        }

    ]
};