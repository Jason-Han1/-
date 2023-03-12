let legend = ["吸尘", "洒水", "洗扫"];
let yData = [
    { name: "宿州大道", text: "1标段" },
    { name: "宿州大道", text: "1标段" },
    { name: "宿州大道", text: "1标段" },
    { name: "宿州大道", text: "1标段" }
]
var disk = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjczMjI5MjI3MjcxMUU4OTIzNUNGREYwREM2MEQ2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjczMjI5MzI3MjcxMUU4OTIzNUNGREYwREM2MEQ2RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2NzMyMjkwMjcyNzExRTg5MjM1Q0ZERjBEQzYwRDZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2NzMyMjkxMjcyNzExRTg5MjM1Q0ZERjBEQzYwRDZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e59NdAAACT1JREFUeNrsXTuPHEUQ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'

let xDataFormat = yData.map((v, i) => {
    // let color = i > 2 ? '#333333' : labelColor[i];
    let item = {
        value: `${v.name}**${v.text}`,
        textStyle: {
            rich: {
                a: {
                    color: "#fff",
                    width: 64,
                    height: 17,
                    align: 'center',
                    backgroundStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#3D9FFF'
                    }, {
                        offset: 1,
                        color: '#41D7F3'
                    }], false),
                    symbol: disk
                    },
                    verticalAlign: 'middle',
                    lineHeight: 30
                },
                b: {
                },
                value: {
                    align: 'center',
                    fontSize: 16,
                    color: 'rgba(2,247,253,1)'
                }
            }
        }
    }
    return item;
})
option = {
    backgroundColor: "#0f375f",
    tooltip: {
        trigger: "axis"
    },
    legend: {
        show: false
    },
    barWidth: 10,
    xAxis: {
        type: "value",
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变x轴颜色
            show:false
        },
        axisLabel: { //  改变x轴字体颜色和大小
            show: false
        }
    },
    yAxis: {
        type: "category",
        data: xDataFormat,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            show: false
        },
        axisLabel: { //  改变y轴字体颜色和大小
            formatter: function(value) {
                // console.log(value);
                let valueArr = value.split("**");
                console.log(value)
                return '{value|' + valueArr[0] + '}{b|\n}{a|' + valueArr[1] + '}'
            },
            textStyle: {
                color: "rgba(2,247,253,1)",
                fontSize: 16
            }
        }
    },
    series: [{
            type: "bar",
            name: legend[0],
            barGap: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: "right", //在上方显示
                        formatter: function(param) {
                            return `${param.seriesName} ${param.value}%`;
                        },
                        textStyle: { //数值样式
                            color: "rgba(255,255,255,1)",
                            fontSize: 12
                        }
                    },
                    color: "rgba(0,144,236,1)",
                    borderWidth: 0
                }
            },
            data: [19, 29, 39, 81]
        },
        {
            type: "bar",
            name: legend[1],
            barGap: 1,
            itemStyle: {
               normal: {
                    label: {
                        show: true, //开启显示
                        position: "right", //在上方显示
                        formatter: function(param) {
                            return `${param.seriesName} ${param.value}%`;
                        },
                        textStyle: { //数值样式
                            color: "rgba(255,255,255,1)",
                            fontSize: 12
                        }
                    },
                    color: "rgba(255,229,38,1)",
                    borderWidth: 0
                }
            },
            data: [12, 23, 35, 100]
        },
        {
            type: "bar",
            name: legend[2],
            barGap: 1,
            itemStyle: {
               normal: {
                    label: {
                        show: true, //开启显示
                        position: "right", //在上方显示
                        formatter: function(param) {
                            return `${param.seriesName} ${param.value}%`;
                        },
                        textStyle: { //数值样式
                            color: "rgba(255,255,255,1)",
                            fontSize: 12
                        }
                    },
                    color: "rgba(45,230,255,1)",
                    borderWidth: 0
                }
            },
            data: [12, 23, 35, 100]
        }
    ]
};