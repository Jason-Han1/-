var option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0, color: '#061B31' // 0% 处的颜色
            },
            {
                offset: 0.25, color: '#123457' // 25% 处的颜色
            },
            {
                offset: 0.75, color: '#0C254A' // 75% 处的颜色
            },
            {
                offset: 1, color: '#0A213E' // 100% 处的颜色
            }
        ],
        global: false // 缺省为 false
    },
    legend: {
        top:'3%',
        icon: "roundRect",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，nonei
        // data:['检查','维修','更换','未处理'],
        data:[
            {
                name:'检查',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MUU3NjczREFFMDExRUE4NjNBRUQ3Q0YzMjU3NzM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MUU3Njc0REFFMDExRUE4NjNBRUQ3Q0YzMjU3NzM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUxRTc2NzFEQUUwMTFFQTg2M0FFRDdDRjMyNTc3MzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUxRTc2NzJEQUUwMTFFQTg2M0FFRDdDRjMyNTc3MzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uGex9AAAA8UlEQVR42qyTzQpBQRiGP8fPUUQKF2CBjdyEpWzEBdgr2VnYKVvJ2g1gI67DxsICFyClDso/73sOyYLCvPX0TTO9zyymsaUGV7loYnK2SxCUQfrkkCjQsRZMk6PTmtjbY05AH+umEZSl3KPJM1kwBRWQALq8D8+SoApmnpXZfRFyowP88n187LoNS0phCLSBTX4Pu23XRsIUFu+3/Bs6ShRmRF3SFMYVCmOaqM2BwolC4ZzCvkLhkMIWMBTI6GhQuAAFcP1Dxm7h4JXF41F6IA/WP8jYye18puPlL3dBBNTBGBw/SLZgBGrsbAOWjLkJMAA6VT0Xnw8T+AAAAABJRU5ErkJggg=='
            },
            {
                name:'维修',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0QjYzN0RDREFFMDExRUFCMTNERUYzMzIwNDg2NkVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0QjYzN0REREFFMDExRUFCMTNERUYzMzIwNDg2NkVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDRCNjM3REFEQUUwMTFFQUIxM0RFRjMzMjA0ODY2RUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDRCNjM3REJEQUUwMTFFQUIxM0RFRjMzMjA0ODY2RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sIgPBAAAA60lEQVR42qyUoQrCUBiF/7ti06I+gEEt4osMy9CyrdgFsRlsglVk2bIt6Yrgc1gMBvUBxKQY1KDnwIYwUFDvgY9d/sv5LmPcKc/zhFFKkTyWPTxNUAaZeJ7mCjZgASau6x4ljiGvWGAL+qAGMvI+3KuDAdj5vm+lhRzMQE6+T5bdIAisRFgAU761/B52p2EYFinsxKf8Gzq6FDZEX0wKqxqFFUP05kbhRqNwT+FCo3BJIa/KSYOMjjGFB9AGjz9k7LZt2z4kHyUCLXD+QcZO03GcKH2X56AERmAN7h8kF7ACQ3bwc4iSjacAAwB2iDAXnvpxpwAAAABJRU5ErkJggg=='
            },
            {
                name:'更换',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0M0M0RTZDREFFMDExRUFBOEYzRDg3NEUwRTk5NEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0M0M0RTZEREFFMDExRUFBOEYzRDg3NEUwRTk5NEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQzQzRFNkFEQUUwMTFFQUE4RjNEODc0RTBFOTk0RTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQzQzRFNkJEQUUwMTFFQUE4RjNEODc0RTBFOTk0RTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Z4lYBAAABA0lEQVR42mL8u1+SgYGRkYGBgQlIM4kAcREDI7MPIyOTGgMTMzuQzQDHTHD2TyC+AVSzCUhPYtDf+4YBChiRDAwGGjYXiPlBmoCKkQ1AN5ABroaR+RNQTxKD3u61DBBngUEwEK8GYn4G0gEfWO9l92CYC0WBVt0Bms3HALaRiYFEF0L1MIFcqgpyYS7UFkoByIwCkIF+DNQDPiADNahooDoTA3XBL5CBN6ho4D2QgZuoaOBWkIFTgPgTFQwDmTEBZOArIE4C4v8UGPYfbIbO9lewSAFlmzAg/kyGYSA9oQy6O1GyHgisAWIlIG4H4itA/BuPIV+B+DwQt4D1QPMxCAAEGABP7i/m/Ud0VQAAAABJRU5ErkJggg=='
            },
            {
                name:'未处理',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0M5OUMzREFFMDExRUE5MUNCQUQ3MDg0NUQwQzAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzQ0M5OUM0REFFMDExRUE5MUNCQUQ3MDg0NUQwQzAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDNDQzk5QzFEQUUwMTFFQTkxQ0JBRDcwODQ1RDBDMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDNDQzk5QzJEQUUwMTFFQTkxQ0JBRDcwODQ1RDBDMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f/hMyAAAA50lEQVR42mL8b2nJwMDIAAGMDCJAXATEPkCsBsTsYDlkzASmfwLxDSDeBMSTGLYde8MAMwLJwGAgPReI+TEMwTQQGX8C4iSGrcfWMkClIYYxMKwGYn4G0gEfWK+3VTDMhaJAG+6AJfC5DLcLYT4EuVQVJJ0LtYVSADKjAGSgHwP1gA/IQA0qGqjOxEBd8Atk4A0qGngPZOAmKhq4FWTgFHCUUw5AZkwAGfgKiJOA+D8Fhv0Hm7Hl2CtYpICyTRgQfybDMJCeUPSsBwJrgFgJiNuB+AoQ/8ZjyFcgPg/ELWA9UMNAACDAAJmDMHg7mYDCAAAAAElFTkSuQmCC'
            },
        ],
        itemGap:30,
        itemWidth: 20,
        itemHeight:14,
        textStyle: {
            color:'#fff',
            padding:[3,0,0,0]
        }
    },
    grid: [
        {
            //左侧的柱状图grid
            width: "100%",
            left: '1%',
            top: '0',
            right: '0',
            bottom: '0'
        }
    ],
    xAxis: [
        {
            //左侧柱状图的X轴
            gridIndex: 0,//x 轴所在的 grid 的索引
            show: false
        }],
    yAxis: [
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                verticalAlign: 'bottom',
                align: 'left',
                padding: [0, 0, 15, 15],
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: '16',
                }
            },
            data: ['检查', '维修', '更换', '未处理'],
            inverse: true,
        },
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: [555,444,333,222],
            inverse: true,
            axisLabel: {
                show: true,
                verticalAlign: 'bottom',
                align: 'right',
                padding: [0, 160, 15, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                },
                formatter: function (value) {
                    return value + '个'
                },
                rich: {
                    y: {
                        color: '#befbff',
                        fontSize: 16
                    },
                    x: {
                        color: '#f6cf42',
                        fontSize: 16
                    }
                }
            }
        },
        {
            //左侧柱状图的Y轴
            gridIndex: 0,//y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        }
    ],
    series: [{
            name: '检查',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [555,,,],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            'rgba(68, 180, 255, 0.2)', 'rgba(68, 180, 255, 1)'
                        ].map((color, offset) => ({
                            color,
                            offset
                        })))
                },
            },
            z: 2
        },{
            name: '维修',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [,444,,],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            'rgba(22, 231, 56, 0.2)', 'rgba(22, 231, 56, 1)'
                        ].map((color, offset) => ({
                            color,
                            offset
                        })))
                },
            },
            z: 2
        },{
            name: '更换',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [,,333,],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            'rgba(253, 191, 25, 0.2)', 'rgba(253, 191, 25, 1)'
                        ].map((color, offset) => ({
                            color,
                            offset
                        })))
                },
            },
            z: 2
        },
        {
            name: '未处理',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: [,,,222],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            'rgba(255, 57, 57, 0.2)', 'rgba(255, 57, 57, 1)'
                        ].map((color, offset) => ({
                            color,
                            offset
                        })))
                },
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 0,//使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
            yAxisIndex: 0,//使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            barGap: '-100%',
            data: [1554,1554 , 1554, 1554],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.15)',
                    barBorderRadius: 6,
                }
            },
            z: 0
        },{
            name: '检查',
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            data: [{
                value: 555,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            }]
        },{
            name: '维修',
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            data: [{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 444,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            }]
        },{
            name: '更换',
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            data: [{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 333,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            }]
        },{
            name: '未处理',
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            data: [{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 0,
                symbolPosition: 'end'
            },{
                value: 222,
                symbolPosition: 'end'
            }]
        },
    ]
};