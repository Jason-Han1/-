var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZWYzODRmMC05YTU5LTAxNDQtOThlNi02NDA0NTVkOTI5ZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkxRTVENEZDMEI3MTFFQUI1Q0RFQTkzOTZCNERBQTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkxRTVENEVDMEI3MTFFQUI1Q0RFQTkzOTZCNERBQTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA3QUREMUY5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA3QUREMjA5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4umU5FAAAAHElEQVR42mKwT9v/HwgYQBhMwAQYYKIgAYAAAwDuiBkYSsjwugAAAABJRU5ErkJggg==';
var bg2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZWYzODRmMC05YTU5LTAxNDQtOThlNi02NDA0NTVkOTI5ZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkUyRDdDRTlDMEI3MTFFQTlDM0M4NzRGMjk2NzQ3NzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkUyRDdDRThDMEI3MTFFQTlDM0M4NzRGMjk2NzQ3NzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA3QUREMUY5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA3QUREMjA5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7qgGsPAAAAH0lEQVR42mJk+A8EDAyMDEDABGIAWf/BHBABEwAIMADCLQgD8y+PfAAAAABJRU5ErkJggg==';
var bg3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZWYzODRmMC05YTU5LTAxNDQtOThlNi02NDA0NTVkOTI5ZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQyMURBODdDMEI3MTFFQTlENzg4RUFDNEMzMUJENzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQyMURBODZDMEI3MTFFQTlENzg4RUFDNEMzMUJENzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA3QUREMUY5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA3QUREMjA5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kew/sAAAAHElEQVR42mL4V8LwHwhABAOYgAkwwERBAgABBgD2ShlCPzGCmAAAAABJRU5ErkJggg==';
var bg4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZWYzODRmMC05YTU5LTAxNDQtOThlNi02NDA0NTVkOTI5ZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdBNUFFMTJDMEI3MTFFQTg0Mzk4RThDNzE4QzFDOTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdBNUFFMTFDMEI3MTFFQTg0Mzk4RThDNzE4QzFDOTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA3QUREMUY5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA3QUREMjA5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5TSJmBAAAAHElEQVR42mJIWOL3HwgYQBhMwAQYYKIgAYAAAwDsBhji8kE52wAAAABJRU5ErkJggg==';
var bg5 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZWYzODRmMC05YTU5LTAxNDQtOThlNi02NDA0NTVkOTI5ZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTQ5NjY0QzlDMEI3MTFFQUEzNzNBQ0VDMTlENUQyRUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTQ5NjY0QzhDMEI3MTFFQUEzNzNBQ0VDMTlENUQyRUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA3QUREMUY5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA3QUREMjA5RkMwMTFFQTlERkVDRjgwNEM4NUY5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5wdTulAAAAHElEQVR42mJoYGj4DwQMIAwmYAIMMFGQAECAAQDYmBfsrxNieQAAAABJRU5ErkJggg==';

var back1 = new Image();
back1.src = bg1;

var back2 = new Image();
back2.src = bg2;

var back3 = new Image();
back3.src = bg3;

var back4 = new Image();
back4.src = bg4;

var back5 = new Image();
back5.src = bg5;

option = {
    backgroundColor:'#212121',
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        top: 20,
        left: 'center',
        itemWidth: 20,
        itemHeight: 8,
        textStyle: {
            color: '#aab2cd',
        },
    },
    polar: {
        center: ['50%', '55%'],
    },
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 25,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            show: false,
        }
    },
    calculable: true,
    series: [{
        stack: 'a',
        type: 'pie',
        radius: '60%',
        roseType: 'radius',
        center: ['50%', '55%'],
        zlevel: 10,
        startAngle: 10,
        label: {
            normal: {
                formatter: ['{b|{b}}', '{c|{c}}'].join('\n'),
                rich: {
                    b: {
                        color: '#aab2cd',
                        lineHeight: 20
                    },
                    c: {
                        color: '#3bd2fe',
                        fontFamily: 'Lato',
                        fontWeight: '100',
                        fontSize: 14,
                        height: 20
                    },
                },
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 45,
                smooth: true,
                lineStyle: {
                    width: 2

                }
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 15,
                name: 'A',
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            image: back1,
                            repeat: 'repeat'
                        },

                        borderWidth: 2,
                        borderColor: '#3F66BF',
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, .6)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,

                    }
                }
            },
            {
                value: 20,
                name: 'B',
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            image: back2,
                            repeat: 'repeat'
                        },
                        borderWidth: 2,
                        borderColor: '#0ff',
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, .6)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                    }
                }
            },
            {
                value: 17,
                name: 'C',
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            image: back3,
                            repeat: 'repeat'
                        },
                        borderWidth: 2,
                        borderColor: '#FF7400',
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, .6)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                    }
                }
            },
            {
                value: 13,
                name: 'D',
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            image: back4,
                            repeat: 'repeat'
                        },
                        borderWidth: 2,
                        borderColor: '#60a44e',
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, .6)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                    }
                }
            },
            {
                value: 19,
                name: 'E',
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            image: back5,
                            repeat: 'repeat'
                        },
                        borderWidth: 2,
                        borderColor: '#800080',
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, .6)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                    }
                }
            }
        ]
    }, ]
}