var value = 70;
let level = {
    code: "1",
    name: "安全",
    num: 1
};

var  colors = ['#ff0101', '#fadd1d', '#008b48']
option = {
    backgroundColor: '#fff',
    series: [
        {
            name: '信用分',
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            radius: '60%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#999']
                    ],
                    width: 1,
                    opacity: 1
                }
            },
            title: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, '6%'],
                formatter: function(value) {
                    return '{value|' + value.toFixed(0) + '}\n\n\n{level|' + level.name +'}\n{des|发现}{num|' + level.num + '}{des|条风险}';
                },
                rich: {
                    value: {
                        fontSize: 26,
                        fontWeight: 500,
                        lineHeight: 33,
                        color: colors[level.code]
                    },
                    level: {
                        fontSize: 16,
                        fontWeight: 500,
                        color: colors[level.code]
                    },
                    des: {
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: 25,
                        color: "#666666"
                    },
                    num: {
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: 25,
                        color: colors[level.code]
                    }
                }
            },
            // axisTick: {
            //     length: 0,
            //     lineStyle: {
            //         color: '#999'
            //     }
            // },
            splitLine: {
                length: 15,
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#999'
            },
            pointer: {
                show:true,
                icon: "circle"
                // width: 28.5,
                // length: 60
            },
            itemStyle: {
                color: colors[level.code],
                shadowColor: colors[level.code],
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 4
            },
            data: [{
                value: value,
                name: '年售电量情况'
            }]

        },
        {
            name: "已到人数",
            type: 'gauge',
            radius: '65%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    width:5,
                    color:[[0.6,colors[0]],[0.8,colors[1]],[1,colors[2]]]
                }
            },
            // axisLine: {
            //     show: true,
            //     lineStyle: {
            //         width: 8,
            //         color: [
            //             [
            //                 value / 100, color
            //             ],
            //             [
            //                 1, 'rgba(225,225,225,0.4)'
            //             ]
            //         ],
            //         // shadowColor: 'rgba(0,138,255,0.35)',
            //         // shadowBlur: 5,
            //     }
            // },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#54F200',
                }
            },
            data: [{
                value: value,
                name: '年售电量情况'
            }]
        }
    ]

}