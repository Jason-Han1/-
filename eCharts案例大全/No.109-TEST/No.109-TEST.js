var bg1 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyQjFDRTg1QkQyMjExRUJBQURCRDc0MzMxNjQwMTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyQjFDRTg2QkQyMjExRUJBQURCRDc0MzMxNjQwMTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjJCMUNFODNCRDIyMTFFQkFBREJENzQzMzE2NDAxMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjJCMUNFODRCRDIyMTFFQkFBREJENzQzMzE2NDAxMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46mwWBAAAAXklEQVR42mL8MdvvPwMDwzUgdgDi1wxQwATEd4BYC4h3ADE/soQTED8BYiMg3gbEXDCJx0DsCMQvgdgKiDcBMRsTVCfIOFcgfgfEzkA8EyYBApeB2AuIPwKxCkCAAQCD5RDuLTy8VwAAAABJRU5ErkJggg==';
var bg2 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyN0FFNEFEQkQyMzExRUJCMzYzQUMxQzcwQzJCMEJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyN0FFNEFFQkQyMzExRUJCMzYzQUMxQzcwQzJCMEJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzI3QUU0QUJCRDIzMTFFQkIzNjNBQzFDNzBDMkIwQkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzI3QUU0QUNCRDIzMTFFQkIzNjNBQzFDNzBDMkIwQkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZmSuuAAAAHklEQVR42mJgPP/7P1/78v9AwICMmRhwAHpIAAQYAB4sEQR8cDgJAAAAAElFTkSuQmCC';
var bg3 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBRjNFRUYzQkQyMzExRUJCNDZFRUIwNjlEOTAwODQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBRjNFRUY0QkQyMzExRUJCNDZFRUIwNjlEOTAwODQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUFGM0VFRjFCRDIzMTFFQkI0NkVFQjA2OUQ5MDA4NDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUFGM0VFRjJCRDIzMTFFQkI0NkVFQjA2OUQ5MDA4NDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6AeY+7AAAAJklEQVR42mK8U1j9nwELYHn1/Rs2cQbG//+xamBgYsABSJcACDAAIHYIqPld1nQAAAAASUVORK5CYII=';
var bg4 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NEVFMUNFQkQyMzExRUJBMkMwRDI5QkJEOTBEOTUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5NEVFMUNGQkQyMzExRUJBMkMwRDI5QkJEOTBEOTUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Nzk0RUUxQ0NCRDIzMTFFQkEyQzBEMjlCQkQ5MEQ5NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk0RUUxQ0RCRDIzMTFFQkEyQzBEMjlCQkQ5MEQ5NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6u9osTAAAAXUlEQVR42mI0drv4n4GB4RoQOwDxawYoYALiO0CsBcQ7gJgfWcIJiJ8AsREQbwNiLpjEYyB2BOKXQGwFxJuAmI0JqhNknCsQvwNiZyCeCZMAgctA7AXEH4FYBSDAACtREFeapDFtAAAAAElFTkSuQmCC';
var bg5 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFQTlBREQzQkQyMzExRUJCNjRCRkFDNENEMDJENTRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFQTlBREQ0QkQyMzExRUJCNjRCRkFDNENEMDJENTRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUVBOUFERDFCRDIzMTFFQkI2NEJGQUM0Q0QwMkQ1NEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUVBOUFERDJCRDIzMTFFQkI2NEJGQUM0Q0QwMkQ1NEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42n9C1AAAAb0lEQVR42mJ86RP6n4+ZmeH3//8MIMDKyMjw+e9fBiZeoOCpr98ZeDeuYAThY1++MXAzMTMwvPcN+w8EDMj4BdAUJogBmICJg4mJYbuzH1x+k5Pvfx6gGONroDZOIOPD339gCX5mJoYf//4zAAQYAIyaMCWj0xE+AAAAAElFTkSuQmCC';

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
    backgroundColor: '#212434',
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
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
                color: '#0B4A6B',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16,
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 25,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0B3E5E',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16,
        },
        splitLine: {
            show: false,
        },
    },
    calculable: true,
    series: [
        {
            stack: 'a',
            type: 'pie',
            radius: ['0%', '55%'],
            roseType: 'radius',
            center: ['30%', '55%'],
            zlevel: 10,
            itemStyle:{
                borderRadius:100
            },
            startAngle: 10,
            label: {
                normal: {
                    formatter: ['{b|{b}}', '{c|{c}}'].join('\n'),
                    rich: {
                        b: {
                            color: '#aab2cd',
                            lineHeight: 20,
                        },
                        c: {
                            color: '#3bd2fe',
                            fontFamily: 'Lato',
                            fontWeight: '100',
                            fontSize: 14,
                            height: 20,
                        },
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 45,
                    smooth: true,
                    lineStyle: {
                        width: 2,
                    },
                },
                emphasis: {
                    show: false,
                },
            },
            data: [
                {
                    value: 15,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back1,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 20,
                    name: 'B',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back2,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 17,
                    name: 'C',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back3,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 13,
                    name: 'D',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back4,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 19,
                    name: 'E',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back5,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
            ],
        },
        {
            stack: 'a',
            type: 'pie',
            radius: ['30%', '55%'],
            roseType: 'area',
            center: ['70%', '55%'],
            zlevel: 10,
            startAngle: 10,
            itemStyle:{
                borderRadius:10
            },
            label: {
                normal: {
                    formatter: ['{b|{b}}', '{c|{c}}'].join('\n'),
                    rich: {
                        b: {
                            color: '#aab2cd',
                            lineHeight: 20,
                        },
                        c: {
                            color: '#3bd2fe',
                            fontFamily: 'Lato',
                            fontWeight: '100',
                            fontSize: 14,
                            height: 20,
                        },
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 45,
                    smooth: true,
                    lineStyle: {
                        width: 2,
                    },
                },
                emphasis: {
                    show: false,
                },
            },
            data: [
                {
                    value: 15,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back1,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 20,
                    name: 'B',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back2,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 17,
                    name: 'C',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back3,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 13,
                    name: 'D',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back4,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
                {
                    value: 19,
                    name: 'E',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            color: {
                                image: back5,
                                repeat: 'repeat',
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, .6)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 5,
                        },
                    },
                },
            ],
        },
    ],
};
