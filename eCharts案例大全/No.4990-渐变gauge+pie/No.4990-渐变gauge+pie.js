var data=0.4;
var colorList = [
    [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#58ffc8'
          }, {
            offset: 1,
            color: '#ffffae'
          }]), "#0d5e6d"],
    [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#f99b4e'
    }, {
        offset: 1,
        color: '#ffcc96'
    }]), "#0d5e6d"],
];
option = {
    backgroundColor: "#031845",
    color: ['#293041', '#293041', '#fcfa3c', '#f44061','1b6783'],
    series: [
        {
            name: '外环',
            type: 'pie',
            clockWise: false,
            radius: ["40%", "32%"],
            startAngle: 90,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,
            center: ['50%', '50%'],
            data:[{
                name: '暗部',
                value: 100-data*100,
                itemStyle: {
                    normal: {
                        color: colorList[0][1],
                        shadowColor: colorList[0][1],
                        shadowBlur: 0
                    }
                },
            }, {
                name: '亮部',
                value: data*100,
                itemStyle: {
                    normal: {
                        color: colorList[0][0],
                         shadowColor: colorList[0][0],
                        shadowBlur: 40,
                    },
                    emphasis: {
                        color: colorList[0][0],
                    }
                }
            }],
            },
           {
            name: "内环",
            type: 'gauge',
            splitNumber: 100,
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269,
            detail: {
              formatter: "{value}%",
              show: true,
              offsetCenter: ["0", "0%"],
              fontWeight: "bold",
              fontSize: 40,
              color:'#18ffd9',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[data, colorList[0][0]],[1, colorList[0][1]]]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5
                }
            },
            axisLabel: {
              show: false
            },
            title: {
              show: false
            },
            pointer: {
              show: false
            },
                    data: [{
              value: data*100,
            }],
        },
      
    ]
};