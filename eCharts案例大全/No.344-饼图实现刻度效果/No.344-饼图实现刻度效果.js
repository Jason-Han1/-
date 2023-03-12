option= {
    backgroundColor: "#000911",
    polar: {
        radius: ['61%', '57%'],
        center: ['50%', '50%'],
    },
    title: {
        zlevel: 0,
        text: 88,
        subtext: '总案件数',
        top: '42%',
        left: '50%',
        textAlign: 'center',
        textStyle: {
            color: '#FFA042',
            fontSize: 50,
        },
        subtextStyle: {
            fontSize: 40,
            color: '#fff',
        },
    },
    angleAxis: {
        max: 1,
        show: false,
        startAngle: 0,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
    },
    series: [
        // 外层刻度
        {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            data: [],
            radius: ['65%', '75%'],
            zlevel: -2,
            label: {
                normal: {
                    position: 'inside',
                    show: false,
                },
            },
        },
        // 内层饼图
        {
            type: 'pie',
            radius: ['56%', '60%'],
            center: ['50%', '50%'],
            data: [],
            labelLine: {
                length: 40,
            },
            // 提示线设置
            label: {
                formatter: '{a|{c}}\n{hr|}\n {per|{d}%} ',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#fff',
                        lineHeight: 26,
                        align: 'center',
                        fontSize: 16,
                    },
                    hr: {
                        borderColor: 'auto',
                        width: '100%',
                        borderWidth: 1,
                        height: 0,
                    },
                    per: {
                        color: '#1ef0ed',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        padding: [5, 5],
                        borderRadius: 4,
                        fontSize: 16,
                    }
                }
            },
        },
    ]
    }
chartData=[
    {color: '#a18cd1', data: 256,ratio: '0.54'}, 
    {color: '#fbc2eb', data: 82,ratio: '0.17'}, 
    {color: '#8fd3f4', data: 74,ratio: '0.15'}, 
    {color: '#fee140', data: 60,ratio: '0.12'}, 
]
total = 472
chartData.map(item=>{
        if (item.data > 0) {
            let num = Math.round((item.data / total) * 100)
            for (let i = 0; i < num; ++i) {
                option.series[0].data.push({
                    value: 2, // 有颜色部分的宽度
                    name: i,
                    ratio: item.ratio,
                    itemStyle: {
                        normal: {color: item.color,}
                    },
                }, {
                    value: 1, // 无颜色部分的宽度
                    name: '',
                    itemStyle: {
                        normal: {
                            label: { show: false },
                            labelLine: { show: false },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    }
                })
          }
        }
        // 内层饼图数据
        option.series[1].data.push({
            hoverOffset: 1,
            value: item.data,
            itemStyle: { color: item.color },
        })
    })
    // 如果总数据为0时，每个颜色的值设为25%（本文实现的是四色图），可视具体情况而定
    if (total == 0) {
        chartData.map(item=>{
            for (let i = 0; i < 25; ++i) {
                option.series[0].data.push({
                    value: 2,
                    name: i,
                    ratio: item.ratio,
                    itemStyle: {
                        normal: {color: item.color,}
                    },
                },{
                    value: 1,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: { show: false },
                            labelLine: { show: false },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                })
            }
        })

    }
