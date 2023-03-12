var top = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NjU2RUJDOUI1RDExRUI4MjVCQjVCQkQzRDBENjREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5NjU2RUJEOUI1RDExRUI4MjVCQjVCQkQzRDBENjREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDk2NTZFQkE5QjVEMTFFQjgyNUJCNUJCRDNEMEQ2NEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDk2NTZFQkI5QjVEMTFFQjgyNUJCNUJCRDNEMEQ2NEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5TcH7bAAAA5klEQVR42mK0+vOYAQ1IAXEGEHsDsRZU7BkQHwDixVAaBTAiGcIIxJVAXAPEnAy4wTYgTgLilzABJiTJKUDcSsAAEPAC4qNALIpuSDoQZzEQD5SBeC3U9WBD+KEuIBXYAnEozJBgIBZmIA+kwwxxYSAfgFzDDjJEngJDWEFJgomBcsAGMuQhBQb8BuLHIEN2U2DIISD+BjJkHRC/IdOQWbDY+QjE1WS6YjVyigWZOJUEA24DcQgQ/0fPO7nQDPiNgAHboOnjNbYMCDK1A4hVgLgRiM9ADfwDjcG5QGwHLSJeIpsKEGAA8eArKIvsV08AAAAASUVORK5CYII="

var data = [
    {x: "1", value: 120,value1:55},
    {x: "2", value: 120,value1:75},
    {x: "3", value: 120,value1:90},
    {x: "4", value: 120,value1:120},
    {x: "5", value: 90,value1:130},
    {x: "6", value: 50,value1:150},
    {x: "7", value: 50,value1:155}
]
var imgList = []
data.forEach((item, index) => {
    imgList.push({
        coord: [index, item.value1 + item.value],
        symbolSize: [15, 15],
        symbolOffset: [0, 0],
        symbol: "image://" + top,
        value: item.value,
        label: {
            show: false,
            offset: [0, -30],
            fontSize: 16,
            color: "#00baff"
        }
    }, {
        coord: [index, item.value1],
        symbolSize: [15, 15],
        symbolOffset: [0, 0 ],
        symbol: "image://" + top,
        value: item.value,
        label: {
            show: false,
            offset: [0, 0],
            fontSize: 16,
            color: "#00baff"
        }
    })
})

option = {
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['热响应试验', '低压放电试验', '热真空第一循环', '热真空第二循环', '整形综合测试1', '整形综合测试2', '整形综合测试3']
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel : {
            formatter: function (value,index) {
                // value格式化成月/日，只在第一个刻度显示年份
                var date = new Date(2021,04);
                var texts = [];

                if (index === 1) {
                    texts = [(date.getMonth()+1), date.getDate()];
                    texts.unshift(date.getFullYear());
                }
                else {
                    texts = [(date.getFullYear()),(date.getMonth() + parseInt(index)), date.getDate()];
                }
                return texts.join('-');
            }
        },
        data:['2021/3/26',]
    },
    series: [{
            name: '',
            type: 'bar',
            stack: 'A',
            barWidth: 28,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            markPoint: {
               data: imgList
            },
            data: [55, 75, 90, 120, 130, 150, 155]
        },
        {
            name: '',
            type: 'bar',
            stack: 'A',
            barWidth: 28,
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 1,
                        color: '#3bffdf'
                    }, {
                        offset: 0,
                        color: '#15b6d0'
                    }], false),
                },
            },

            data: [120, 120, 120, 120, 90, 50, 50]
        }
    ]
};