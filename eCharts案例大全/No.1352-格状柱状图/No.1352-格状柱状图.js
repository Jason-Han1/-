let xData = [30,21,19,20,10,6,43,40,18];
let xLabel = ['改革案例','复制推广','揭榜挂帅','改革突破','试点争取','领跑者','省级简报','区级简报','领导批示']
 option = {
    tooltip:{
        show:false,
    },
    backgroundColor: 'rgb(1,11,30)',
    animation: false,
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: xLabel,
        axisLine:{
          show:false,
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 10,
            fontSize: 12,
            textStyle: {
                color: "#A3C0DF" //X轴文字颜色
            }
        },
         
    },
    yAxis: [
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 60,
            interval: 10,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    type:'dashed',
                    color: 'rgb(20,57,110)',
                    width: 1
                },
            },
            axisLine:{
              show:false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: "#A3C0DF" //Y轴文字颜色
                },
            },
        },
    ],
    series: [
        {
            name: "",
            type: "bar",
            barWidth: 20,
            showBackground:true,
            backgroundStyle: {
                color: 'transparent',
                borderColor:'rgb(20,57,110)',
                borderWidth:1,
                borderType:'solid'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(35,183,199)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(110,65,253)'
                        }
                    ])
                },
                decal:{
                    show:true,
                    symbol:'circle',
                    symbolSize:[0,60],
                },
            },
            data: xData,
            z: 10,
            zlevel: 0,
            label: {
                show: true,
                position: "top",
                distance: 10,
                fontSize:16,
                color: '#fff'
            }
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal:{
                    color:"#0F375F"
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [20, 2],
            symbolPosition: "start",
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: xData,
            width: 10,
            z: 0,
            zlevel: 1,
        },
    ]
}