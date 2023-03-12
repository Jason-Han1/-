let datas = {
    title: "上证指数",
    value: "5.9"
};

let max = 10;
let value = datas.value;
let degrees = 180 - (180 * value) / max;

//图表配置
let centerArr = ["50%", "70%"];
let label = {
    0: '冷',
    10: '热'
}
let colorList = ['#FF951A', '#FB1A1A']
if(value < max/3){
    colorList = ['#1AC1FF', '#1A32FF']
}else if(value < (max/3*2)){
    colorList = ['#FFBD1A', '#FF8420']
} 
let colorSet = new echarts.graphic.LinearGradient(
        0, 1, 0, 0, [{
                offset: 0,
                color: colorList[0],
            },
            {
                offset: 1,
                color: colorList[1],
            }
        ]
    );

option = {
    backgroundColor: '#fff',
    series: [
        {
            name: "最外圈冷热标签",
            type: "gauge",
            z: 2,
            radius: "120%",
            splitNumber: 1,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: max,
            center: centerArr, //整体的位置设置
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            detail: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#D7D5D5",
                    fontSize: 12
                },
                formatter: function(val) {
                    return label[val]
                }
            }
        },
        {
            name: "灰色刻度尺", 
            type: "gauge",
            z: 4,
            radius: "95%",
            splitNumber: 2,
            startAngle: 180,
            endAngle: 0,
            center: centerArr, //整体的位置设置
            max: max,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0.8, "#D7D5D5"],
                        [1, "#D7D5D5"]
                    ],
                    width: 25,
                    
                    opacity: 0 //刻度背景宽度
                }
            },
            axisLabel: {
                show: true
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#efefef",
                    width: 3
                },
                length: 8,
                splitNumber: 15
            },
            detail: {
                formatter: function(params) { //图表中间文字数据展示
                    return (
                        "{v|" + value + "\n" + "}{t|" + datas.title + "}"
                    );
                },
                rich: {
                    v: {
                        fontSize: 48,
                        color: "#000",
                        padding: 20
                    },
                    t: {
                        fontSize: 14,
                        color: "#929292"
                    }
                },
                offsetCenter: ["0", "-10%"]
            },
            splitLine: {
                length: 25, //刻度节点线长度
                lineStyle: {
                    width: 4,
                    color: "#efefef"
                } //刻度节点线
            }
        },
        {
            type: "pie",
            color: ["transparent", 'transparent','transparent'],
            animationEasingUpdate: 'cubicOut',
	        startAngle: 180,
	        center: centerArr,
            radius: ['96.5%', '98%'],
            hoverAnimation: false,
            labelLine: {
                show: false
            },
            data: [{
                name: "",
                value: value,
    			itemStyle: {
                    normal: {
                        show: true,
                        color: colorSet,
                         shadowBlur: 8,
                    shadowColor: colorList[0],
                    shadowOffsetX: 0,
                    shadowOffsetY: 4,
                    width: 6
                    },
                },
            },
            { //画中间的图标
                name: "",
                value: 0,
                label: {
                    rotate: 90,
                    position: 'inside',
                    width: 20,
                    height: 20,
                    padding: 20,
                    verticalAlign: 'bottom',
                    backgroundColor: colorList[0],
                    borderRadius: 20,
                  
                    borderWidth: 6,
                    // borderColor: colorList[0],
                    shadowColor: 'rgba(255,130,26,0.60)',
                    shadowBlur: 10,
                    shadowOffsetY: 4
                }
            }, { //画剩余的刻度圆环
                name: "",
                value: 10 - value,
                itemStyle: {
                    color: '#fafafa'
                }
            }, { //画剩余的刻度圆环
                name: "",
                value: 10,
            }
        ]
        }
    ],
  
};