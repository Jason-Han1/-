var val = 0;
var warrow=200;
var totlnum=1000;
var num=300;
option = {
    backgroundColor: '#000',
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: '温度: {c} ℃',
    },

    series: [
        {
            name: '温度',
            type: 'gauge',
            radius: "70%",
              startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 15,
                    shadowBlur: 0,
                    color: [
                        [0, '#cd6703'],
                        [0.1, '#cd6703'],
                        [0.2, '#cd6703'],
                        [0.3, '#cd6703'],
                        [0.4, '#65b2e8'],
                        [0.5, '#65b2e8'],
                        [0.6, '#65b2e8'],
                        [0.7, '#65b2e8'],
                        [0.8, '#24476d'],
                        [0.9, '#24476d'],
                        [1, '#24476d']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:true,
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0";
                        case "20":
                            return "20";
                        case "40":
                            return "告警";
                        case "60":
                            return "60";
                        case "80":
                            return "80";
                        case "100":
                            return "100";
                        default:
                            return "";
                    }
                },
                distance: 0,
                textStyle: {
                    fontSize: 14,
                    fontWeight: ""
                }
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: "6%",
                length: '80%',
                color: "black"
            },
            detail: {
                offsetCenter: [0, '84%'],
                formatter: '{value} ℃',
                textStyle: {
                    fontWeight: '100',
                    fontSize: 20
                }
            },

            data: [{
                value: 66,
                name: ''
            }],
        },
        {
            name: '1212',
            type: 'gauge',
            radius: '90%',
        startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            min: 0,
            max: 100,
            z:-1,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 40,
                    shadowBlur: 20,
                    color: [
                        [0, '#fff'],
                        [0.1, '#'],
                    
                        [0.2, '#fff'],
                    
                        [0.3, '#fff'],
                    
                        [0.4, '#fff'],
                       
                        [0.5, '#fff'],
                  
                        [0.6, '#fff'],
                        
                        [0.7, '#fff'],
                    
                        [0.8, '#fff'],
                       
                        [0.9, '#fff'],
                      
                        [1, '#fff']
                    ],
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "";
                        case "20":
                            return "";
                        case "40":
                            return "告警";
                        case "60":
                            return "";
                        case "80":
                            return "";
                        case "100":
                            
                            return "项目金额";
                        default:
                            return "";
                    }
                },
                distance: -20,
                textStyle: {
                    fontSize: 14,
                    fontWeight: ""
                }
            },
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [{
                show: false,
            }]
        },
    ]
};
var steps=totlnum/warrow;

app.timeTicket = setInterval(function() {

    // val === 100 ? val = 0 : val++;

    // option.series[0].data[0].value = val;
// series[0].axisLine.lineStyle.color=[];


    myChart.setOption(option, true);
}, 100);