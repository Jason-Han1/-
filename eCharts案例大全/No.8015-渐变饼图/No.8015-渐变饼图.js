var echartData = [{
    value: 2154,
    name: '曲阜师范大学',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#E58B44'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}, {
    value: 3854,
    name: '潍坊学院',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#D95CFF'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}, {
    value: 3515,
    name: '青岛职业技术学院',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#06A3F4'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}, {
    value: 3515,
    name: '淄博师范高等专科',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#29AF62'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}, {
    value: 3854,
    name: '鲁东大学',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#FF3939'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}, {
    value: 2154,
    name: '山东师范大学',
    itemStyle: {
        normal: { //颜色渐变
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#0b5263'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ]
            )
        }
    }

}]
var total_datas = 0;
for (var i = 0; i < echartData.length; i++) {
    total_datas += echartData[i].value
}

options = [{
    backgroundColor: '#031845',
    title: {
        text: '总数',
        subtext: total_datas,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}人 {d}%",

    },
    legend: {

        orient: 'horizontal',
        x: 'center',
        icon: "rect",
        itemWidth: 14,
        itemHeight: 14,

        textStyle: {
            color: "rgba(255,255,255,0.8)"
        }

    },
    series: [

        {
            name: '在校人数',
            type: 'pie',
            radius: ['38%', '50%'],
            color: ['#C6EB54', '#EB6B54', '#EBA954'],

            label: {
                normal: {
                    formatter: "{c|{c}人}\n{b|{d}%}",
                    rich: {
                        a: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: 23
                        },
                        b: {
                            color: 'ffffff',
                            fontSize: 18
                        },
                        c: {
                            color: '#ffffff',
                            fontSize: 18
                        },
                        d: {
                            color: '#EBA954',
                            fontSize: 18
                        }
                    }
                },

            },
            labelLine: {
                normal: {
                    length: 55,
                    length2: 10,
                    lineStyle: {
                        color: '#0b5263'
                    }
                }
            },
            data: echartData
        }
    ]
}];