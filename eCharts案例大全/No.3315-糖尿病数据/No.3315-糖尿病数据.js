var mellcolor = ["#5cffd2", "#ffa05c", "#5c87ff", "#ff00c8", "#ff5e00"]
var mellcolor2 = ["#1BC85E", "#CE5A60", "#1D9DFF", "#AC4ED3", "#E6AF08"]
option = {
    title: {
        text: '糖尿病数据',
        top:20,
        left:'center',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    backgroundColor:'#0a47ac',
    grid: {
        top: '20%',
        right: '3%',
        left: '8%',
        bottom: '20%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ["1型糖尿病", "2型糖尿病", "妊娠糖尿病", "其他糖尿病", "其他糖尿病"],
        axisPointer: {
            type: 'line'
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
            margin: 10,
            color: '#fff',
            textStyle: {
                fontSize: 12
            },
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
        },
        axisLine: {
            show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#fff",
              opacity: 0.3,
            },
        }
    }],
    series: [{
        type: 'bar',
        data: [952, 221, 450, 251, 910,621],
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: function(params) {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: mellcolor2[params.dataIndex], // 0% 处的颜色
                    opacity: 0.1
                }, {
                    offset: 1,
                    color: mellcolor[params.dataIndex] // 100% 处的颜色
                }], false)
                },
                barBorderRadius: [30, 30, 0, 0],
                shadowColor:  function(params) {
                    return mellcolor[params.dataIndex];
                    // opacity: 0.8
                },
                shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 20,
                height: 20,
                backgroundColor: '#1e61c2',
                borderRadius: 20,
                position: ['-8', '-38'],
                distance: 1,
                formatter: [
                    '  {d|●}',
                    ' {a|{c}人}  \n',
                    '    {b|}'
                ].join(''),
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 15,
                        borderWidth: 1,
                        borderColor: '#2f6fcd',
                        align: 'left'
                    },
                }
            }
        }
    }]
};