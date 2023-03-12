
let label = [ '水电维修', '管道维修', '管道疏通', '开锁换锁', '漏水堵塞', '设备故障']
let value = [212, 233, 200, 180, 199, 233]

option = {
    backgroundColor:"#101e44",
    grid: {
        top: 100,
        containLabel: true
    },
    tooltip: {
            trigger: 'axis',
            formatter: '{b0}: {c0}'
          },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}',
            fontSize:14,
            margin:20,
            textStyle: {
                color: "#7ec7ff"
            }
        },
        axisLine: {
            show:false,
            // lineStyle: {
            //     color: "#243753"
            // }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: "#243753"
            }
        },
        axisTick:{
            show:false
        },
        data: label
    }],
    yAxis: [
        {
            boundaryGap:false,
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "#7ec7ff"
                }
            },
            nameTextStyle: {
                color: "#fff",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    color: "#243753",
                    type:'dashed',
                }
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color:"#283352"
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
        name: "报名",
        type: "line",
        smooth: true,
        showSymbol: true,
        symbolSize: 0,
        zlevel: 3,
        itemStyle:{
            color:'#19a3df',
            borderColor:"#a3c8d8"
        },
        // label:{
        //                     show:true,
        //                     position: "top",
        //                     distance:0,
        //                     textStyle: {
        //                         color: "#000",
        //                         fontSize:14
        //                     },
        //                     backgroundColor:"#fff",
        //                     formatter: function (param) {
        //                         var res = "";
        //                         res +=   param.value + "人";
        //                         return res;
        //                     },
        //                 },
        lineStyle: {
            normal: {
                width:6,
                color: "#19a3df",
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(88,255,255,.6)"
                        },
                        {
                            offset: 1,
                            color: "rgba(88,255,255,0)"
                        }
                    ],
                    false
                ),
            }
        },
        data: value
    }]
};