
var sData = [21, 42, 67, 81, 86];
var sCategory = ['掉线', '越界', '夜间非法运营', '疲劳', '超速'];

option = {
    backgroundColor: "#101a3c",
    grid: {
        right: "20%",
        left: 0,
        top: 5,
        bottom: 20
    },
    tooltip: {
        trigger: "item",
        textStyle: {
            fontSize: 12
        },
        formatter: "{b0}:{c0}"
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        axisLabel: {
            show: true,
            formatter:function(){
                return 'aa';
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
            type: "category",
            inverse: false,
            data: sCategory,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:false
            }
        },

    ],
    series: [{
            type: "pictorialBar",
            z:5,
            itemStyle: {
                normal: {
                    color: '#FFF100'
                }
            },
            symbol: 'rect',
            symbolRepeat: true,
            symbolMargin: "60%",
            symbolClip: true,
            symbolSize: [8, 20],
            label: {
                normal: {
                    show: true,
                    color:'#fff',
                    fontSize:16,
                    position: [20, -12],
                    formatter: function(value, index) {
                        return `${value.name}`
                    }
                }
            },
            symbolOffset: [
                20,
                0
            ],
            data: sData,
        },
        {
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: '#414956'
                }
            },
            animationDuration: 0,
            symbolRepeat: "fixed",
            symbolMargin: "60%",
            symbol: 'rect',
            symbolSize: [8, 20],
            symbolPosition: "start",
            label: {
                normal: {
                    show: true,
                    formatter: function(value, index) {
                        return `${value.value}`
                    },
                    
                    position: 'right',
                    color: '#FFF100',
                    fontSize: 16,
                    fontWeight:'bolder'
                }
            },
            symbolOffset: [
                20,
                0
            ],
            data: sData,
        }
    ]
};
