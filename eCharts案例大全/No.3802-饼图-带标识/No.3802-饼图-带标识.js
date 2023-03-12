chart_pie_school('echart', '升学率', 75.6, '#b25846', 1)

function chart_pie_school(el, name, value, color, type) {
    let upimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAMAAACn6Q83AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n' +
        'AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEX///9KulJKulJKulJK\n' +
        'ulJKulJKulJKulJKulJKulJKulJKulJKulJKulJKulJKulL///8tQVTZAAAAD3RSTlMAZjz5HOkK\n' +
        'y6JxcjAzh2nPVP2mAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UDHxcgIpwKzTsAAAA+SURBVAjXncy5\n' +
        'EQAgDANBgfk/9d8tNlABF22gEaA5h5cX8VchkjGYUqaWk7LwVIDKV0Mf0zBH18UyrvPwww37wgQc\n' +
        'NUTtbQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0zMVQxNTozMjozNCswODowMOdTocgAAAAl\n' +
        'dEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMzFUMTU6MzI6MzQrMDg6MDCWDhl0AAAAIHRFWHRzb2Z0\n' +
        'd2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6\n' +
        'UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEzbcWq4AAAABZ0RVh0VGh1\n' +
        'bWI6OkltYWdlOjpXaWR0aAAxMAxjO9cAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/\n' +
        'slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYxNzE3NTk1NDBrtScAAAARdEVYdFRodW1iOjpTaXpl\n' +
        'ADE5MkJC/UFMUAAAAEV0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2\n' +
        'aWV3Ml85XzE2MDk5MDM2NjI3OTQyMzA2XzNfWzBd/+8aCAAAAABJRU5ErkJggg=='
    let dowmimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANBAMAAABiGeI2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n' +
        'AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEX/////20z/20z/20z/\n' +
        '20z/20z/20z/20z/20z/20z/20z/20z/20z/20z/20z////YWt/+AAAADnRSTlMAaTAzh3KiCssc\n' +
        '6Tz5Zikt+0cAAAABYktHRACIBR1IAAAAB3RJTUUH5QMfFx4RYh+3UAAAADhJREFUCNdjYJB795CB\n' +
        'AT+p7PfuiRFD3Lt3754ysAHJBAb2vncvChgYZr1bCVTDfWYDkGS4y8AAAFWmHLHXwVI5AAAAJXRF\n' +
        'WHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTMxVDE1OjMwOjE3KzA4OjAwkGtsFQAAACV0RVh0ZGF0ZTpt\n' +
        'b2RpZnkAMjAyMS0wMy0zMVQxNTozMDoxNyswODowMOE21KkAAAAgdEVYdHNvZnR3YXJlAGh0dHBz\n' +
        'Oi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7\n' +
        'LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTNtxargAAAAFnRFWHRUaHVtYjo6SW1hZ2U6\n' +
        'OldpZHRoADEwDGM71wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVY\n' +
        'dFRodW1iOjpNVGltZQAxNjE3MTc1ODE3zMxLrgAAABF0RVh0VGh1bWI6OlNpemUAMTkzQkL8gyZn\n' +
        'AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYw\n' +
        'OTkwMzUzMjYxMDY4MDBfOThfWzBdO1mFrwAAAABJRU5ErkJggg=='
    let option = {
        backgroundColor: '#081c47',
        title: {
            text: '{a|' + value + '}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 18,
                        color: '#fff'
                    },

                    c: {
                        fontSize: 14,
                        color: '#ffffff',
                    }
                }
            }
        },
        graphic: {
            elements: [{
                    type: "text",
                    z: 4,
                    style: {
                        text: name,
                        fill: '#75adde'
                    },
                    left: 'center',
                    top: '35%'
                },
                {
                    type: "image",
                    z: 3,
                    style: {
                        image: type ? upimg : dowmimg,
                        width: 10,
                        height: 13
                    },
                    left: 'center',
                    top: '60%'
                }
            ]
        },
        legend: {
            show: false,
        },
        series: [{
                name: "外层细线",
                z: 0,
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                            startAngle: 0,
                            endAngle: 360
                        },
                        style: {
                            stroke: color,
                            fill: "transparent",
                            lineWidth: 0.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: "外层圆点下",
                z: 0,
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8
                    let point = getCirlPoint(x0, y0, r, 45)
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 1.2
                        },
                        style: {
                            stroke: color,
                            fill: color
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: "外层圆点上",
                z: 0,
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8;
                    let point = getCirlPoint(x0, y0, r, 225)
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 1.2
                        },
                        style: {
                            stroke: color,
                            fill: color
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: name,
                type: 'pie',
                radius: ['65%', '75%'],
                silent: true,
                clockwise: false,
                startAngle: 90,
                z: 1,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",

                    }
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: color,
                            }
                        }
                    },
                    {
                        value: 100 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)"
                            }
                        }
                    }
                ]
            },
            {
                name: "刻度间隔",
                z: 2,
                type: "gauge",
                radius: '75%',
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 30,
                hoverAnimation: true,
                axisTick: {
                    show: true,
                    splitNumber: 1,
                    length: '14%',
                    lineStyle: {
                        width: 2,
                        color: "#061740"
                    }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0,
                    }
                },
                detail: {
                    show: false
                },
                data: [0]
            },
            {
                name: "内层细线",
                type: "pie",
                radius: ['54%', '55%'],
                hoverAnimation: false,
                startAngle: 135,
                color: [color],
                labelLine: {
                    show: false
                },
                data: [100]
            },
            {
                name: '内层饼图',
                type: "pie",
                radius: ['53%', '56%'],
                hoverAnimation: false,
                startAngle: 90,
                color: [color],
                labelLine: {
                    show: false
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            color: color,
                        }
                    },
                    {
                        value: 100 - value,
                        name: "",
                        itemStyle: {
                            color: 'rgba(0,0,0,0)',
                        }
                    }
                ]
            }
        ]
    };

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    }

    myChart.setOption(option)
}