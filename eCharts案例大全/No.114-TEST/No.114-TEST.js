var data1 = [50, 60, 76, 40, 65];
var data2 = [100, 100, 100, 100, 100];
var path = 'path://M554.86,430h-20a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h20a5,5,0,0,1,5,5h0A5,5,0,0,1,554.86,430Z';
var back = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAbCAYAAAAQ2f3dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCM0M2NzMwOTEzMTExRUJCNUEzRDYwRDIzREY4RjQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCM0M2NzMxOTEzMTExRUJCNUEzRDYwRDIzREY4RjQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkIzQzY3MkU5MTMxMTFFQkI1QTNENjBEMjNERjhGNDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkIzQzY3MkY5MTMxMTFFQkI1QTNENjBEMjNERjhGNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v6qQyAAABLUlEQVR42uzWsUtCURTHcV9IODS5tAq1i7jlVFFTgxCCuDlIboprQzkFEYJrUJC0pqBLW4sgglv/QIQNDVEOYUF1+z44bxFRKn3vhF748IZ7hx/v3nPutYwxPo1jwad0zIPNg81sMP+oSatc/td/zMIJzCT5/xhqEWcIIYhnV7ZyzFjCFV6xjb6GrVzGDe6QmHSo3wZbQRMN7OFzKlX5w8qLoo4iTj1rFwNjC5fISLipt4s3qaY2Slgbsi6FCnbdCOUEC0i55/GEc3SwLmsKOMKmnC1XO38PLWGHiEtAux10EZOvp53/C1VEEJYD/6DprnzBDq5xgENnwuRynt+V70giK39O1SX+iH0ca3xdXGBVzpyqYB/yikhrfI/VpBjUBbvFhtYX7L1bwb4FGAByIkuqxQjPnAAAAABJRU5ErkJggg=='
option = {
    backgroundColor: '#08071A',
    yAxis: {
        show: false,
        data: ['A', 'B', 'C', 'D', 'E', ]
    },
    xAxis: {
        show: false,
    },
    series: [{
            "type": "pictorialBar",
            "symbolSize": [8, 8],
            "symbolOffset": [0, 0],
            "z": 10,
            "symbolPosition": "end",
            itemStyle: {
                color: '#0ff',
                opacity: 1,
            },
            "data": data2
        },
        {
            type: "pictorialBar",
            symbolSize: [8, 8],
            symbolOffset: [0, 0],
            z: 10,
            itemStyle: {
                opacity: 1,
                color: '#0ff',
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            type: 'bar',
            barWidth: 1,
            z: 0,
            itemStyle: {
                color: '#00FFFF',
                opacity: 1,
            },
            data: data2
        },
        {
            type: 'pictorialBar',
            z: 1,
            barWidth: '10',
            data: data2,
            symbolOffset: ['0', '24'],
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [8, 35],
            itemStyle: {
                normal: {
                    color: '#1B60FF',
                    borderWidth: 15,
                    borderColor: '#050f18',
                }
            },
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [50, 15],
            symbolOffset: [0, 0],
            z: 7,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 255, 255, .2)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 255, 255, .7)',
                    }
                ]),

                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: "end",
            data: data1
        },
        {
            type: "effectScatter",
            rippleEffect: {
                period: 5,
                scale: 6,
                brushType: 'fill'
            },
            symbol: path,
            symbolSize: [10, 4],
            symbolOffset: [-25, 0],
            z: 7,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 255, 255, .2)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 255, 255, .7)',
                    }
                ]),

                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: "end",
            data: data1
        },
        {
            type: "effectScatter",
            rippleEffect: {
                period: 5,
                scale: 20,
                brushType: 'stroke'
            },
            symbolSize: [1, 1],
            symbolOffset: [40, -26],
            z: 6,
            itemStyle: {
                color: '#73FFFF',
                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: "end",
            data: data1
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [56, 19],
            symbolOffset: [3, 0],
            z: 6,
            itemStyle: {
                color: 'rgba(0, 0, 0, .8)',
                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: "end",
            data: data1
        },
        {
            type: "pictorialBar",
            symbol: path,
            symbolSize: [58, 21],
            symbolOffset: [4, 0],
            z: 5,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 255, 255, .5)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 255, 255, 1)',
                    }
                ]),

                opacity: 1,
                borderWidth: 0,
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 5,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
            },
            symbolPosition: "end",
            data: data1
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol: back,
            symbolSize: [40, 20],
            symbolOffset: [33, -15],
            z: 5,
            itemStyle: {
                opacity: 1,
                color: 'rgba(0,0,0,0)',
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideTopRight',
                    distance: 0,
                    offset: [-4, -2],
                    color: '#0ff',
                    fontSize: 12,
                }
            },
            symbolPosition: "end",
            data: data1
        },
    ]
};