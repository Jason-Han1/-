var tickColor = ['#BC090E','#CA6F0E','#722291','#3B24A4','#254EC9','#1973B4','#2BDAD2','#64D41D'];
var startAngle = 225;
var endAngle = -45;
var splitWidth = 15;
var splitNumber = 5;
var series = getSeries(80).concat(getAxisTick());

option = {
    backgroundColor:'#0B1A30',
    series: series
};

function getSeries(data){
    return [
        {
            type: 'gauge',
            startAngle: startAngle,
            endAngle: endAngle,
            radius: '50%',
            center: ['50%','55%'],
            min: 0,
            max: 100,
            splitNumber:splitNumber,
            axisLine: {
                lineStyle: {
                    width: 3,
                    color: [[1, '#fff']]
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                distance:-70,
                fontSize:20
            },
            splitLine: {
                lineStyle: {
                    width: 0
                }
            },
            itemStyle:{
                color:'#04A4CE'
            },
            pointer: {
                show:true,
                length: '100%'
            },
            detail: {
                offsetCenter: [0, '70%'],
                textStyle: {
                    fontSize: 20,
                    color:'#04A4CE'
                },
                
            },
            data: [{
                name: "",
                value: data
            }]
        }
    ];
}

function getAxisTick(){
    var tickWidth = (startAngle - endAngle - (splitNumber - 1) * splitWidth) / splitNumber;
    var ticks = [];
    for(var i=0; i<splitNumber; i++){
        ticks.push({
                type: 'gauge',
                splitNumber: 1,
                startAngle: startAngle-i*(tickWidth+splitWidth),
                endAngle: startAngle-tickWidth-i*(tickWidth+splitWidth),
                radius: '80%',
                center:['50%','55%'],
                axisLine: {
                    lineStyle: {
                        width: 0,
                        shadowBlur: 0
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: tickColor[i],
                        width: 5
                    },
                    length: '10%',
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: '12%',
                    lineStyle: {
                        width: 5,
                        color: tickColor[i]
                    }
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                },
                markPoint: {
                    symbol:'circle',
                    symbolSize:5,
                    itemStyle: {
                        color: "#fff"
                    },
                    data: [
                        {
                            x: "50%",
                            y: "55%"
                        }
                    ]
                }
            });
    }

    return ticks;
}