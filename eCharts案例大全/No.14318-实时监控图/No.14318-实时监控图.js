var barImg = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAEECAYAAAAs3cQfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3YjU4MmJjMi01MzdmLTQ4ZjAtYmM1Mi00NDg2YjQ4MDE3NmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE5Q0Y2NkFDRTg2MTFFN0I5RTc5MkYwNDIzM0ZDMkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE5Q0Y2NjlDRTg2MTFFN0I5RTc5MkYwNDIzM0ZDMkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWI1ZGZlYmUtZjczNS1iMjRkLWFjZWUtODcxMGFlYTEzYTQxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2YzZjIxNzAtYzM4Ni0xMTdhLTk0NDYtOWQ0YTU0ODc3YzNhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AlRFNQAAAVVJREFUeNrs3N1ugkAQhuFlVaqtRNP7v8UmrUZs/QFnyE5tFajWXU98J/kOIPFhHZaTPZisrmv3Rz1J8pN7W8lGUnX9aNhxfyApJGOJ73loKVmFB/2qrGXFRcg1pfhHHzyXPLv/la76zdrjI6FaI8mrXRg8vhG1yq2NBs9cvHrRl+/DSgcR4cb0oQ2xq4HzBHDTCp8AToMCAwMDAwMDAwMDAwMDAwMDAz8mrMe8y1RwQY+BgYGBgYGBgYGBgYGBgYGBgYGBgYFPioNpYGBgYGBgYGBgYGBgYGBgYGBgYOB7wJzGAgMDAwMDAwMDAwMDAwMDAwMDAyeGq1TwJoG7VbhMAJcKf0r2EVFt7dpe3ntEeKG4wV8uzjlyaa39ud0UXt2Ifv/ztjHFOqB2fsUer9oWlXVMbFZ0Ipm67vG6e3ccrHz2LWQXjIJWeOiO0513Ib076SDAAAIqP/cGFqsKAAAAAElFTkSuQmCC';

var data = [];
var xData = [];
var lineData = [];
var barData = [];
for (var i = 0; i < 12; ++i) {
    data.push({
        month: Number(i) + 1 + '月',
        value: Math.random() * 1000 + 100,
        rate: (Math.random() * 999 / 100 + 10).toFixed(2),
    });
}


function dealChats(data) {
    data.map((value, index) => {
        xData.push(value.month);
        lineData.push(value.rate);
        if (index === 0) {
            barData.push({
                value: value.value,
                itemStyle: {
                    normal: {
                        barBorderRadius: [50, 50, 0, 35]
                    }
                }
            })
        } else if (index === data.length - 1) {
            barData.push({
                value: value.value,
                itemStyle: {
                    normal: {
                        barBorderRadius: [50, 50, 35, 0]
                    }
                }
            });
        } else {
            barData.push(value.value)
        }
    });
}

dealChats(data)

console.log(xData)

option = {
    backgroundColor:'rgb(6,29,75)',
    title:{
        text:'实时监控图',
        left:'center',
        top:'10',
        textStyle:{
            color:"#fff",
        }
    },
    legend: {
        data: ['服务数量', '基准线'],
        left:'center',
        top:'50',
        textStyle:{
            color:"#fff",
        }
    },
    grid: {
        left: 10,
        right: -35,
        bottom: 40,
        top: 100,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        "formatter": function(param) {
            return param[0].name + ':' + '<br>' + param[0].seriesName + ":" + param[0].value + '<br>' +
                '合格率：' + param[2].value + '%'
        },
    },
    xAxis: {
        offset: 35,
        data: xData,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#b6b5ab",
            },
            interval: 0
        },
    },
    yAxis: [{
        axisLabel: {
            show: true,
            textStyle: {
                color: "#b6b5ab"
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }, {
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        
    }, {
        show: false,
    }],
    series: [{
        type: 'bar',
        name:'服务数量',
        barWidth: '60%',
        barGap: "-100%",
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00c6f4' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00db97' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth: 0,
                barBorderRadius: [50, 50, 0, 0]
            }
        },
        data: barData
    }, {

        type: 'bar',
        barWidth:'60%',
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00c6f4' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00db97' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth: 0,
                barBorderRadius: [-30, -30, 0, 0]
            }
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, -30, 0, 0]
                }
            }

        }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {
            value: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [-30, 0, 0, 0]
                }
            }
        }],
    }, {
        name: '基准线',
        type: 'line',
        symbolSize: 6,
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                color: '#eba538'
            }
        },
        itemStyle: {
            normal: {
                color: '#eba538'
            }
        },
        data: lineData
    }, {
        value: 60,
        symbol: barImg,
        type: 'pictorialBar',
        barWidth: '60%',
        // barGap: "-98%",
        name: 'pictorial element',
        symbolSize: ['100%', '100%'],
        symbolPosition: 'center',
        yAxisIndex: 2,
        z: 10,
        data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
    }, ]
};