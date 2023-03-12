
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#25ABAA'
    },
    {
        offset: 0.2,
        color: '#25ABB4'
    },
    {
        offset: 0.3,
        color: '#FBB8AA'
    },
    {
        offset: 0.5,
        color: '#F89700'
    },

    {
        offset: 1,
        color: '#F63332'
    }
]);


option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
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
                color:'#2378f7',
                offsetCenter: [0, '5%']
            },
            title: {
                fontWeight: 'bold',
                offsetCenter: [0, '70%'] ,
            },             
            data: [{
                value: 50,
                name: 'CUP 占用',
               
            }],
            itemStyle: {
                opacity: 1
            },
            radius: "55%",
            axisTick: {
                show: false
            },      
           splitLine: {
                show: false
            },            
            axisLine: {
                lineStyle: {
                    width: 36,
                    color: [
                        [1, '#F4F4F4']
                    ]
                }
            },
            // axisLine: {    
            //     show: false,// 坐标轴线
            //     lineStyle: {       // 属性lineStyle控制线条样式
            //         width: 10,
            //         opacity: 0,
            //     }
            // },      
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '70';
                        case '1' : return '';
                        case '100' : return '100';
                    }
                },
                distance: -80,
            },              
            
            pointer: {
                show: false,
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
                            borderColor: axislineColor
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