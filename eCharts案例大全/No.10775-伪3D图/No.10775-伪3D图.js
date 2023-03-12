var imgDatUrl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAADmCAYAAAAk2P6SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMUQzNzQzM0E2QTcxMUU5QjQ4Mzk5OTAxNTZCNjgwOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMUQzNzQzNEE2QTcxMUU5QjQ4Mzk5OTAxNTZCNjgwOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxRDM3NDMxQTZBNzExRTlCNDgzOTk5MDE1NkI2ODA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxRDM3NDMyQTZBNzExRTlCNDgzOTk5MDE1NkI2ODA4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+N35XuwAAASdJREFUeNrs3D1KA1EUgNHJT5XeHWQPAatgaSHY2LkAS1cSRHAJWmmjYGuXLEGIIohNMKVg53gHXyBEY/XeVOfCx8wwxWF4t55O/XpZbZmT6KLKNB/L+UN3y7uD6DwntHi8G/+FjaKrqJcTau43sWF0Gw1yQ5vYTnSfrtmhdWyQvmhYClphvXRGo5LQCpuk7SsKNdOpp4d1rhV/fnn79323anFgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWCwVuYrOu23AH1Gx9F1aWxZ/fwtfdo8lMSeov1oXvrMZtHuOlQKu4n2ovfS23gWHaWl+DXfAgwAF05NA55JDM4AAAAASUVORK5CYII='
var dimensions = ['公交', '地铁', '长途客车', '出租', '铁路', '航空', '机场大巴'];
var currentMonth = [42, 36, 13, 56, 9, 28, 33];
var option = {
    backgroundColor: '#fff',

    xAxis: {
        data: dimensions,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    },
    series: [{
        name: '本月',
        type: 'pictorialBar',
        symbol: imgDatUrl,
        barGap: 0,
        symbolSize: ['100%', '100%'],
        data: currentMonth
    }]
};