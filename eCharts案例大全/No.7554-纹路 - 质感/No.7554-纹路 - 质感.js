// var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MENCOEUzNDZENkVFMTFFQUFEQ0FDQUUyRDE0QzdDODkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MENCOEUzNDVENkVFMTFFQUFEQ0FDQUUyRDE0QzdDODkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk3QkIwOEQ5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk3QkIwOEU5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aJis5AAAAKElEQVR42mJk+P//EAMDkGRgsAfSDExAzMiABBj/g+SQABMDGgAIMACYXggCW+fctAAAAABJRU5ErkJggg==';
// var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODA3QjhDMDVENkVFMTFFQUI3QUZFMDRCMzAxRUE3RjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODA3QjhDMDRENkVFMTFFQUI3QUZFMDRCMzAxRUE3RjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk3QkIwOEQ5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk3QkIwOEU5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7USgYOAAAALUlEQVR42mJg+P9/OhB7AjEDGAOJIiD+CcSxMAEGKAckWMwIEQUDTyD2AwgwAMHpHvCcI/EhAAAAAElFTkSuQmCC';
// var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ3NDI0QTJENkVFMTFFQUJERjNCODFBQTEzNUFFNTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ3NDI0QTFENkVFMTFFQUJERjNCODFBQTEzNUFFNTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk3QkIwOEQ5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk3QkIwOEU5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7n5CpxAAAAJUlEQVR42mJg+P/fF4gZYJgRzGBg8GWAgM0wGYQqZM5/IAYIMACSthzOFsmOvAAAAABJRU5ErkJggg==';
var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDZERkM3Q0ZENkVGMTFFQUJCMTRDNzIzMUEyREY5N0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDZERkM3Q0VENkVGMTFFQUJCMTRDNzIzMUEyREY5N0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk3QkIwOEQ5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk3QkIwOEU5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6aUAdUAAAAI0lEQVR42mJk+P+fAQk0MIAF/v9vgNIMDHAGTBBFFogBAgwAJc4b6GkjVLsAAAAASUVORK5CYII=';

var back1 = new Image();
back1.src = bg1;

option = {
    backgroundColor: "#101736",
    title: {
        text: '类似应该比纯色好',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '10',
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        show: true,
        backgroundColor: 'rgba(0,0,0,0.9)',
        textStyle: {
            align: 'left',
            fontSize: 12,
            color: '#c8c8c8',
        },
        extraCssText: 'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)' //添加阴影
    },
    color: ['#4BFFFC'],
    grid: {
        left: '0',
        right: '3%',
        top: '14%',
        bottom: '6%',
        containLabel: true
    },
    legend: {
        itemWidth: 14,
        itemHeight: 14,
        show: true,
        icon: 'roundRect',
        top: 20,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
        data: ['A', ]
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,


        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#c8c8c8"
            }
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    }],
    yAxis: [{
            splitNumber: 2,
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#0F0'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#646464'
                },
                interval: 0,
            },
            axisLabel: {
                fontSize: '10px',
                color: '#C8C8C8',
                formatter: '{value}',
                padding: [0, 10, 0, 0],
            },

        },
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#5c5d89'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#5c5d89'
                }
            },

        },
    ],
    series: [{
        name: 'A',
        type: 'line',
        symbol: 'roundRect',
        lineStyle: {
            normal: {
                width: 2
            }
        },
        symbolSize: [10, 10],
        areaStyle: {
            normal: {
                color: {
                    image: back1,
                    repeat: 'repeat'
                },
                shadowColor: 'rgba(0,202,149, 0.9)',
                shadowBlur: 50
            }
        },
        data: [1, 4, 1, 4, 10, 8, 1]
    }, ]
};