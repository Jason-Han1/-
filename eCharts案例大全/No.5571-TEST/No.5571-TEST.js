let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAcCAYAAAByBEr4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzQ1RjI0M0IwRDI3MTFFQjlFOUVGNjY4OUM1MkVEQ0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzQ1RjI0M0EwRDI3MTFFQjlFOUVGNjY4OUM1MkVEQ0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjAgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI2N0JBQzlEMzIxNDRFNjhGNDIxMjJCNDQzN0Q2MERDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iNjdCQUM5RDMyMTQ0RTY4RjQyMTIyQjQ0MzdENjBEQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60aFQsAAAKHklEQVR42uxdW5LjNgwESPoM+cpX7n/AxCKRn3UV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';
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#565e67'
    }, {
        offset: 1,
        color: '#2d3037'
    }]),
    title: [{
        text: 'Donut Chart',
        x: '50%',
        y: 50,
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '68%',
        left: '49.5%',
        top: '46%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '100',
            color: '#000',
            textAlign: 'center',
            textShadowColor:'#888',
            textShadowBlur:'0',
            textShadowOffsetX:0,
            textShadowOffsetY:1,
        },
    }, ],
    graphic: {
        elements: [{
            type: "image",
            z: 1,
            style: {
                image: imgSrc,
                width: 300,
            },
            left: 'center',
            top: "62.5%",
            position: [100, 100]
        }]
    },
    polar: {
        radius: ['25%', '31%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name: '',
        type: 'bar',
        roundCap: true,
        barWidth: 60,
        showBackground: true,
        backgroundStyle: {
            color: '#48484a',
        },
        data: [60],
        coordinateSystem: 'polar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                    offset: 0,
                    color: '#ef29b1'
                }, {
                    offset: 1,
                    color: '#fd7225'
                }]),
            }
        },
    }, ]
};