option = {
    title:{
        text:"种子培育成功率",
        textStyle:{
            color:"#fff",
            
            fontSize:16,
        },
        x:"50%",
        y:"2%"
        
    },
    backgroundColor: '#000E1A',
    color: ["#3cefff"],
    tooltip: {
        formatter(a){
          console.log(a);
            return a.name+'的种子培育成功率为:'+a.data+"%"
        }
    },
    grid: {
        containLabel: true
    },
    xAxis: [{
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        axisTick: {
            alignWithLabel: true
        },
        nameTextStyle: {
            color: "#82b0ec"
        },
        axisLine: {
            lineStyle: {
                color: "#82b0ec"
            }
        },
        axisLabel: {
            textStyle: {
                color: "#82b0ec"
            }
        }
    }],
    yAxis: [{
        type: "value",
        axisLabel: {
            textStyle: {
                color: "#82b0ec"
            },
            formatter: "{value}%"
        },
        splitLine: {
            lineStyle: {
                color: "#0c2c5a"
            }
        },
        axisLine: {
            show: false
        }
    }],
    series: [{
            name: "",
            type: "pictorialBar",
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            symbolPosition: "end",
            z: 12,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    formatter: "{c}%"
                }
            },
            data: [60, 70, 80, 90, 60, 70, 80, 90]
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            z: 12,
            data: [60, 70, 80, 90, 60, 70, 80, 90]
        }, {
            type: "bar",
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            barWidth: "20",
            data: [60, 70, 80, 90, 60, 70, 80, 90],
            markLine: {
                silent: true,
                symbol: "none",
                label: {
                    position: "middle",
                    formatter: "{b}"
                },

            }
        },
        {
            type: 'effectScatter',


            silent: true,
            tooltip: {
                show: false
            },
            zlevel: 3,

            symbolSize: [20, 10],
            // symbolOffset: [0, 0],
            symbolPosition: 'end',
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                color: '#3cefff',
                scale: 4
            },
            itemStyle: {
                color: '#3cefff'
            },
            hoverAnimation: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0]
        },
    ]
}