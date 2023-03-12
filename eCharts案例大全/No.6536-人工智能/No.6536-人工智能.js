var uploadedDataURLblue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2RTc0RDJERDNBQjExRUFBRjA5RkExRUYzQjc0QjU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2RTc0RDJFRDNBQjExRUFBRjA5RkExRUYzQjc0QjU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTZFNzREMkJEM0FCMTFFQUFGMDlGQTFFRjNCNzRCNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTZFNzREMkNEM0FCMTFFQUFGMDlGQTFFRjNCNzRCNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uAuj3AAAAnUlEQVR42mL8//8/AwiIl19UAFLJDBAw92Wn/gMQg4UBAbSBuAbKPgHEYAVMSAp+YGMjK/iPjY2sgBEbmwnoOE0o+z6SgvtQh2sxipVduAJkn4HiiVAF+UBsAsSmIAXGUElku2FWmDAB/XsWyAhFkoBJhoDkwI4EMtYgGQ8CE4Bia8E6YCEJddRLIPUPKCkJE0MOSRDwRAsPBoAAAwCytzBsqWObCQAAAABJRU5ErkJggg==";

var uploadedDataURLgreen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBNEFFMkFERDNBQjExRUFBMjBERjBGNjQwMUIwOTMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBNEFFMkFFRDNBQjExRUFBMjBERjBGNjQwMUIwOTMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUE0QUUyQUJEM0FCMTFFQUEyMERGMEY2NDAxQjA5MzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUE0QUUyQUNEM0FCMTFFQUEyMERGMEY2NDAxQjA5MzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz475tTKAAAAnUlEQVR42mL8//8/AwzYHAwwAlL/j9hvOA8TY2FABduB+B8QS8IEmJB0TwBSYkAsAWT3w8QZQVYABUKA7NVopoUArVrLaH3A3xjIOQMVhDmIEUqbgKxYCMW5UAX/oWyQ2CKQglCgUQlAehvUTSC8DSoWygRkXIcap4hkP5gNlLvGhCT4HxsbWQEjNjayAg5sbOSQvArELUhsMAAIMACTaC52fFy0LgAAAABJRU5ErkJggg==";

let data = [{
    name: '氧气',
    value: 0.001,
    icon: uploadedDataURLgreen
}, {
    name: '一氧化碳',
    value: 0.001,
    icon: uploadedDataURLblue
}, {
    name: '硫化氢',
    value: 0.001,
    icon: uploadedDataURLgreen
}, {
    name: '甲烷',
    value: 0.002,
    icon: uploadedDataURLblue
}];


let titleArr = [],
    legendArr = [],
    seriesArr = [],
    total = 0,
    colors = [
        ['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
        ['#0b2a50', '#1265ce', '#1987d2', '#1c94d4'],
        ['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
        ['#0b2a50', '#1265ce', '#1987d2', '#1c94d4'],

    ]
for (let i = 0; i < data.length; i++) {
    total += data[i].value
}

for (let i = 0; i < data.length; i++) {

    if (i < 2) {

        titleArr.push({
            text: data[i].name,
            left: (i) * 40 + 28 + '%',
            top: '39%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: '#a7d4e2',
                textAlign: 'center',
            },
        });
        legendArr.push({
            left: (i) * 40 + 43 + '%',
            top: '3%',
            itemWidth: 8,
            itemHeight: 12,

            data: [{
                name: data[i].name,
                icon: 'image://' + data[i].icon

            }],
            textStyle: {
                fontSize: 12, //字体大小
                color: 'transparent', //字体颜色
            },

        })
        seriesArr.push({
            name: data[i].name,
            type: 'pie',
            clockWise: true,
            center: [(i) * 40 + 30 + '%', '20%'],
            radius: ['25%', '35%'],
            itemStyle: {
                normal: {

                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,

            data: [{
                value: data[i].value,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colors[i][1]
                            }, {
                                offset: 0.5,
                                color: colors[i][2]
                            },
                            {
                                offset: 1,
                                color: colors[i][3]
                            }
                        ]),

                        shadowColor: colors[i][1],
                        shadowBlur: 0,

                    }
                },
                label: {
                    normal: {
                        formatter: function(params) {
                            return params.value;
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold',
                            fontFamily: 'Verdana',
                            color: '#eefafb'
                        }
                    }
                },
            }, {
                value: data[i].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: colors[i][0]
                    },
                    emphasis: {
                        color: colors[i][0]
                    }
                }
            }]
        })

    } else {
        titleArr.push({
            text: data[i].name,
            left: (i - 2) * 40 + 28 + '%',
            top: '91%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: '#a7d4e2',
                textAlign: 'center',
            },
        });
        legendArr.push({
            left: (i - 2) * 40 + 40 + '%',
            top: '50%',
            itemWidth: 8,
            itemHeight: 12,

            data: [{
                name: data[i].name,
                icon: 'image://' + data[i].icon

            }],
            textStyle: {
                fontSize: 12, //字体大小
                color: 'transparent', //字体颜色
            },

        })
        seriesArr.push({
            name: data[i].name,
            type: 'pie',
            clockWise: true,
            center: [(i - 2) * 40 + 30 + '%', '72%'],
            radius: ['25%', '35%'],

            itemStyle: {
                normal: {

                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,

            data: [{
                value: data[i].value,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colors[i][1]
                            }, {
                                offset: 0.5,
                                color: colors[i][2]
                            },
                            {
                                offset: 1,
                                color: colors[i][3]
                            }
                        ]),

                        shadowColor: colors[i][1],
                        shadowBlur: 0,


                    }
                },
                label: {
                    normal: {
                        formatter: function(params) {
                            return params.value;
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold',
                            color: '#eefafb'
                        }
                    }
                },
            }, {
                value: data[i].value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: colors[i][0]
                    },
                    emphasis: {
                        color: colors[i][0]
                    }
                }
            }]
        })
    }
}


option = {
    backgroundColor: '#000f1e',
    title: titleArr,
    legend: legendArr,
    series: seriesArr
}