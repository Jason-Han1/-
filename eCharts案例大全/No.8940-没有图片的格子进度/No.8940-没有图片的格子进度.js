
var maxData = 150;
var greenBar = [50, 44, 124]
var symbolMargin = "50"

var titleLeft = "9%"

var titleTop = ["6.5%","35.5%","62.5%"]
var gridLeft = "10%"
var gridRight = "30%"

option = {
    tooltip: {},
    title:[
        {
            text:"项",
            top:"0%",
            right:"6%",
            textStyle:{
                color: '#fff',
                fontWeight:100,
                fontSize:14
            }
        },
        {
        text:"985",
        top:titleTop[0],
        left:titleLeft,
        textStyle:{
            color: '#16fffc',
            fontWeight:100,
        }
    },
    {
        text:"211",
        top:titleTop[1],
        left:titleLeft,
        textStyle:{
            color: '#16fffc',
            fontWeight:100,
        }
    },
    {
        text:"其他",
        top:titleTop[2],
        left:titleLeft,
        textStyle:{
            color: '#16fffc',
            fontWeight:100,
        }
    }

      
    ],
    xAxis: {
        max: maxData,
        splitLine: {
            show: false
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        data: ['', '', ""],
        offset:20,
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        }
    },
    grid: {
        top: '10%',
        bottom:"3%",
        // height: "100%",
        left: gridLeft,
        right: gridRight
    },
    series: [
        {
            // current data
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#16fffc',

                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: symbolMargin + "%",
            symbolClip: true,
            symbolSize: [10,20],
            symbolBoundingData: maxData,
            data: greenBar,
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }, 
        {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(54,215,182,0.27)'
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return (params.value);
                    },
                    position: 'right',
                    offset: [110, 0],
                    
                    textStyle: {
                        color: '#16fffc',
                        fontSize: 32,
                        fontWeight:100,
                    },
                    align:"right",
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: symbolMargin + "%",
            symbol: 'rect',
            symbolSize: [10,20],
            symbolBoundingData: maxData,
            data: greenBar,
            z: 99999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }
    ]
};