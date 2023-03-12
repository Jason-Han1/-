var radius = [80, 90]
var centerRadius = [17,16]



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
    backgroundColor: '#1bceb2',

    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{

            max: 500,
            splitNumber: 5,
            name: '业务指标',
            type: 'gauge',
            detail: {
                fontSize: 50,
                fontWeight: 650,
                color:'#422ce5',
                offsetCenter: [0, '55%']
            },
         
            
            startAngle: 215, //刻度起始
            endAngle: -35,          
            data: [{
                value: 50
            }],
            itemStyle: {
                opacity: 1,
                show: false,
                color: '#fc5086'
            },
            radius: (radius[1] - 0.4) + "%",
            axisTick: {
                show: false
            },      
           splitLine: {
                show: false,
            },       
            axisLabel:{
               show:false
            },            
            axisLine: {
                lineStyle: {
                    width: 35.3,
                    color: [
                        [0, '#5c56d7'],
                        [1, '#fff992']
                    ]
                }
            },
            pointer: {
                show: true,
                length: "45%",
                width: '10%'
            },
            zlevel: 3
        },
        //  刻度
        {
            max: 500,
            splitNumber: 5,
            startAngle: 215,
            endAngle: -35,
            detail: {
                show: false
            },
            type: 'gauge',
            title: {
                show: false  
            },
            axisTick: {
                show: false
            },      
           splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    color: '#fff992'
                }
            }, 
            title: {
                show: true,
                color: '#422ce5',
                offsetCenter: [0,'38%'],
                fontSize: '27',
                fontWeight: '550',
                fontFamily: 'sans-serif'
            },
            data: [{value: 0, name: 'Mbps'}],
            
            axisLabel:{
               distance: 20,
               fontWeight: 550,
               show:true,
               color: '#5c56d7',
               fontSize: 30
            },            
            axisLine: {
                show: false
            },
            pointer: {
                show: false,
                length: "60%"
            },
            zlevel: 2
        },
        
        // 后面的扇形
        {
            zlevel: 1,
            type: 'pie',
            radius: [(radius[0] + 0.9) + '%', (radius[1] - 2.2) + '%'],
            title: {
                
            },
            data: [{
                    value: 1.5,
                    itemStyle: {
                        normal: {
                            borderWidth: 12,
                            borderColor: '#5c56d7',
                            color: '#5c56d7'
                            
                        }
                    }
                },{
                    value: 1.5,
                    itemStyle: {
                        normal: {
                            borderWidth: 12,
                            borderColor: '#fff992',
                            color: '#fff992'
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

        },
        {
            type: 'pie',
            radius: ['0%', '63%'],
            backgroundColor: '#fff',
            data: [{ value: '1', 
                     itemStyle: {
                        normal: {
                            backgroundColor: '#fff',
                            color: '#fff'
                        }
                    } 
                
            }],
            label: {
                show: false
            },
        },
        
        
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },            
            "radius": [ centerRadius[0] + '%', (centerRadius[0] + 1) + '%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#1a00df"
                    }
                }
            }],
            zlevel: 5,
            
        },
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', (centerRadius[0] + 1) + '%'],
            "tooltip": {
                show: false
            },
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#fff"
                    }
                }
            }],
            zlevel: 3,
            
        },    
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "tooltip": {
                show: false
            },
            "radius": ['0%', (centerRadius[0] - 5) + '%'],
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [ {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: "#847dea"
                    }
                }
            }],
            zlevel: 4,
            
            
        }                
        
    ]
};


setInterval(function () {
    var data = (Math.random() * 500).toFixed(2)
    option.series[0].axisLine.lineStyle.color[0] = [data/500, '#5c56d7']
    option.series[0].data[0].value = data - 0;
    myChart.setOption(option, true);
},1000);






