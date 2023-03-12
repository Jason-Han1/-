var obj = 
    {
        "negative": '12',//-
        "maxNegativeVal": null,
        "maxPositiveVal": null,
        "maxNegativeTime": null,
        "positive": '88',//+
        "maxPositiveTime": null
    }

var option = {
    title: {
        text: '发电资源评估',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} :{d}%"
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '65%',
        center: ['50%', '60%'],
        formatter: '{a}',
        data: [{
                value: obj.positive,
                name: '正调峰',
                label: {
                    color: "rgba(255,255,255,.45)",
                    fontSize: 14,
                    position: 'outside',
                    formatter: '{p10| 正调峰}\n{a| {d}%}',
                    rich: {
                        a: {
                            //color: "orange",
                            fontSize: 22,
                            //lineHeight: 60,
                            // padding: [0, 10, 0, 0]
                        },
                        p10: {
                            // padding: [10, 10, 38, 0],
                            //color: '#fff',
                            fontSize: 22
                        }
                    }
                }
            },
            {
                value: obj.negative,
                labelLine: {
                    show: true,
                    length: 20,
                    length2: 60,
                    lineStyle: {
                        color: 'skyblue'
                    }

                },
                name: '反调峰',
                label: {
                    color: "rgba(255,255,255,.45)",
                    fontSize: 14,
                    position: 'outside',
                    formatter: '{p10| 反调峰}\n{a| {d}%}',
                    rich: {
                        a: {
                            //color: "orange",
                            fontSize: 22,
                            //lineHeight: 60,
                            // padding: [0, 10, 0, 0]
                        },
                        p10: {
                            // padding: [10, 10, 38, 0],
                            //color: '#fff',
                            fontSize: 22
                        }
                    }
                }
            }

        ],
        itemStyle: {
            color: function(params) {
                //自定义颜色
                var colorList = [
                    'rgb(191,145,4)', 'rgb(3,155,202)',
                ];
                return colorList[params.dataIndex]
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};