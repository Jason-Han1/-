var abcolor=new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                             {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    ),


option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    title:{
        text:"这可能是个假的圆弧",
        subtext:"来自木可",
        left:"center",
       textStyle:{
          textShadowColor:"red",
          textShadowBlur:10
       }
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: '{value}%',
                color:'#2378f7'
            },
            data: [{
                value: 50,
                name: '完成率',
               
            }],
             title:{
                    color:"red"
                },
            axisLabel: {
                show: true,
                color:'#2378f7',
                fontSize:16
                
            },
            itemStyle: {
                opacity: 1
            },
            radius: "60%",
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: [
                        [1, abcolor]
                    ]
                }
            },
            pointer: {
                length: "60%"
            }
        },
        {
            zlevel: 1,
            type: 'pie',
            radius: ["48%", "50%"],
            data: [{
                    value: 3,
                    itemStyle: {
                        normal: {
                            borderWidth: 12,
                            borderColor:abcolor
                        }

                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        opacity: 0
                    }
                }
            ],
            tooltip:{show:false},
            startAngle: 225,
            hoverAnimation: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            }

        }
    ]
};

app.timeTicket = setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);