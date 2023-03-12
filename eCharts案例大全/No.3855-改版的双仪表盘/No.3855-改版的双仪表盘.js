var value = 40;
var color = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#41D7F3",
        },
        {
            offset: 1,
            color: "#3D9FFF",
        }
    ]
);
option = {
    backgroundColor: 'black',
    tooltip: {
          formatter: "{a} <br/>{c} {b}"
    },
    series: [
        {
            name: '两区任务',
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
                    width: 0,
                    opacity: 1
                }
            },
            title: {
                show: false
            },
            detail: {
                show: true,
                fontFamily:'DIN',
                fontWeight:'500',
                color: '#3CBDFC',
                offsetCenter: [0, '70%'],
                formatter: function(value) {
                    return value
                },
            },
            axisTick: {
                length: 5,
                lineStyle: {
                    color: 'rgba(60,189,252,1)'
                }
            },
            splitLine: {
                  // 分隔线
                  length: 10, // 属性length控制线长
                  lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'rgba(60,189,252,1)',
                  }
            },
            axisLabel: {
                  //数字离圆的距离
                  distance: 12,
                  borderRadius: 1,
                  color: '#E6F5EE',
                  fontWeight:600,
                  padding: 1,
                  fontFamily:'Alibaba PuHuiTi',
                  fontSize:16
              },
            // axisLabel: {
            //     color: '#999'
            // },
            pointer: {
                // show:false,
                width:  10,
                length: 100
            },
            itemStyle: {
                color: color,
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            data: [{
                value: value,
                name: '两区面积'
            }]

        },
        {
            name: "已到人数",
            type: 'gauge',
            radius: '70%',
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
            axisLine: {
                show: true,
                lineStyle: {
                    width: 16,
                    color: [
                        [
                            value / 100, color
                        ],
                        [
                            1, '#314655'
                        ]
                    ],
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
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