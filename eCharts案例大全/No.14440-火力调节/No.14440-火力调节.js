
function detectionData(str) {
    var color = '#fecf05';
    return color;
}
var option = {
    backgroundColor: '#fff',
    
    series: [
    {
        name: "拜访率",
        type: "gauge",
        zlevel: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [0.1, "#eee"],
                    [0.2, "#fff0cc"],
                    [0.3, "#fecf05"],
                    [0.4, "#fff0cc"],
                    [1, '#eee']
                ],
                width: 15
            }
        },
        axisTick: {
        	show:false
        },
        axisLabel: {
            show:false
        },
       pointer: {
       	show:false,
       },
        splitLine: {
            show: true,
            length: 16,
            lineStyle: {
                color: '#fff',
                width: 10
            }
        },
        
        detail: {
            formatter: "{value}",
            offsetCenter: [0, 0],
            textStyle: {
            fontSize: 40,
            color: "#fecf05"
            }
        },
        title: {
            offsetCenter: [0, "100%"],
        },
        data: [{
            name: "",
            value: 31
        }]
    },
   {
            name: '火力显示',
            type: 'gauge',
            radius: '40%',
            startAngle: 359.9,
            endAngle: 0,
            splitNumber: 4,
            zlevel: 0,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#fff0cc']
                    ],
                    width: '100%',
                    shadowColor: '#fff0cc', //默认透明
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 0,
                    opacity: 1,
                }

            },
            splitLine: { //分隔线样式
                show: false,
            },
            axisLabel: { //刻度标签
                show: false,
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail:{
            	show: false,
            },
            data: [{
            	show: false,
            }]
        },
        //火力显示结束
    ]
}

myChart.setOption(option);
