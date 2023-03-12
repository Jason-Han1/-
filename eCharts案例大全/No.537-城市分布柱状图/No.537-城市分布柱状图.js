var salvProName = ["上海", "四川", "重庆", "西安", "云南"];
var dataArray = [22000, 15000, 9000, 8000, 7000];
var maxValue = []; //背景按最大值
var barImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozODBBRTU4RkZGNjUxMUU4Qjg0M0MyQjk1NEVFQTRCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODBBRTU5MEZGNjUxMUU4Qjg0M0MyQjk1NEVFQTRCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MEFFNThERkY2NTExRThCODQzQzJCOTU0RUVBNEIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM4MEFFNThFRkY2NTExRThCODQzQzJCOTU0RUVBNEIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8z6pYgAAAOVJREFUeNpiFBQUZAACfiD+yMQAAR9BAkxQUbAAQAAxApXBlaBIfwQIIEaoCQzI6lE0w7QABBDMEAYkCQaYgShGIDsELoFuJgOyShQJgADC5iQGdIuRdSM7kwHNMXAH8WMxBUMDE7pOXBpYsFiF7mUwGyCA0EMNq0ewhSQ20xlwhS5WxUy4rMIVXwQV4wpHDMCEI/o+4lJIUDETviDBlSjwKgYI0EoZ3AAAhCDMsP+ybuAEWrjc3zSKDaRZOV/bVuxrcNP0An4BC86KwTKyi8CiTFKw3LBdsNIvEliverjdVFAUTbIP88I1kSgGzWQAAAAASUVORK5CYII=';
var PatternImgA = new Image();
PatternImgA.src = barImage;
for (let i = 0; i < dataArray.length; i++) {
    maxValue.push(dataArray[0])
}
option = {
    backgroundColor: "#fff",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        top: '5%',
        containLabel: true
    },
    title: {
        left: 'center',
        text: '城市分布',
        top: 15,
        textStyle: {
            fontSize: '15',
            fontWeight: 500
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                // color: 'red',
                fontSize: 13,
                fontWeight: 500
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#4B4B4B',
                fontSize: '12'
            },
            formatter: function(value) {
                return (value * 10 / 10).toLocaleString() + '人';
            },
        },
        data: dataArray
    }],
    series: [{
            name: '值',
            type: 'bar',
                zlevel:1,
            barCategoryGap: 23,
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(253,188,121)'
                    }, {
                        offset: 1,
                        color: 'rgb(249,131,71)'
                    }]),
                },
            },
            barWidth: 16,
            data: dataArray
        },
        {
            //这里设置包含关系，只需要这一句话
            barGap: "-100%",
            type: 'bar',
            zlevel:1,
            data: dataArray,
            barWidth: 16,
            barCategoryGap: 23,
            itemStyle: {
                //此处引入条纹背景
                color: {
                    image: PatternImgA,
                    repeat: 'repeat'
                },
                barBorderRadius: [16, 16, 0, 0],
                xAxisIndex: 2,
                yAxisIndex: 2,
                zlevel: 2
            }
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: maxValue,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,0.1)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};