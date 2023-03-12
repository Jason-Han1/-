option = {
    backgroundColor: "#000",
    dataset: {
        source: [
            ["product", "规划", "实际", "底数"],
            ["订货", 74, 80, 100],
            ["售罄", 65, 62, 100],
            ["到货", 83, 73, 100],
            ["库存", 62, 86, 100]
        ]
    },
    xAxis: {
        type: "value",
        max: 100,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: "category",
        inverse:true,
        axisLabel: {
            show:true,
            margin:10,
            formatter:function(value){
                return '{dot| }'
            },
            rich:{
                dot:{
                    width:6,
                    height:6,
                    borderRadius:5,
                    backgroundColor:'#3fd4ff',
                }
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        type: "category",
        inverse:true,
        axisLabel: {
            show: false,
            color: "#fff",
            align: "left",
            margin: -5,
            padding: [0, -75, 30, 0]
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        yAxisIndex: 1,
        barWidth: "20%",
        itemStyle: {
            color: "rgba(63,212,255,0.1)",
            barBorderRadius: 20,
        },
        label: {
            show: true,
            color:"#3fd4ff",
            position: "right",
            fontWeight: "bold",
            fontSize: 14,
            padding: [0, 0, 30, -60],
            formatter: "{@实际}%"
        },
        encode: {
            x: "底数"
        }
    },{
        type: 'bar',
        yAxisIndex: 1,
        barWidth: "20%",
        barGap: "-100%",
        itemStyle: {
            color: "rgba(63,212,255,0.1)",
            barBorderRadius: 20,
        },
        label: {
            show: true,
            color:"#fff",
            position: "right",
            fontWeight: "bold",
            fontSize: 14,
            padding: [0, 0, 30, -160],
            formatter: "{@规划}%"
        },
        encode: {
            x: "底数"
        }
    }, {
        type: 'bar',
        barWidth: "20%",
        itemStyle: {
            color: "#3fd4ff",
            barBorderRadius: 20
        },
        label: {
            show: true,
            position:"left",
            color: "#fff",
            align: "left",
            distance:-5,
            fontSize:12,
            formatter:function(param){
                return param.value[0]
            },
            padding: [0, -75, 30, 0],
        },
        encode: {
            x: "规划"
        }
    }]
};