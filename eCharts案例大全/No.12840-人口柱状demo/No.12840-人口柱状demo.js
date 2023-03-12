var paperDataURI1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABHCAYAAAAz6qZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ3RUZBNDVFN0IxMTFFOEFGODA5QUYwODBBQzc2OTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ3RUZBNDZFN0IxMTFFOEFGODA5QUYwODBBQzc2OTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDdFRkE0M0U3QjExMUU4QUY4MDlBRjA4MEFDNzY5OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDdFRkE0NEU3QjExMUU4QUY4MDlBRjA4MEFDNzY5OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgzt4QwAAADxSURBVHja7JexCsJADIb/nAUVXCwI+hIOuri6uykIjj5JcfMl3HTq7GMUHBU3RxFx6qLG/9qCo+0gKl7gI2kuae7SgxKBlbn6qGAqFQxQRpt2nRrUZ7Khveba4t6Rk2CmfTpCLvh0Igt86syWNHlo+LgkPl5LnawMs1vIK4KmkR4NL1cwUKIyO1XEgB7ouJBrtn9LldRSpJomidkyoYB4uAPFErRowvsrfOGW/rGt6trqDu3a6trqKrhDf+b/4L6Du96/UsHghoggJ5GdUMZkn+PlNmYsiRmonQ4mZES6pJEFHUlEwmT0CSQWLTY+4CHAAD6vcTeodJt1AAAAAElFTkSuQmCC';
var paperDataURI2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABHCAYAAAAz6qZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTY2QjI1Q0NFN0IwMTFFOEI4MTI5NTBFNEEyQjQzRTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTY2QjI1Q0RFN0IwMTFFOEI4MTI5NTBFNEEyQjQzRTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjZCMjVDQUU3QjAxMUU4QjgxMjk1MEU0QTJCNDNFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjZCMjVDQkU3QjAxMUU4QjgxMjk1MEU0QTJCNDNFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiuViqMAAAEVSURBVHjaYmQAgmdbJCSBVAoQuwGxDhALMEDAByC+AsS7gHiOlM+L54xAxYFAzmIg5mbAD74BcRxIw3skEwmBD0x/mf4Rq5gBpJbpM+dXhj/MfwkqBqkBqWX5x/iP4RPnFwaWv8wMrH9ZGJj/MTMw/WcEK/rH+B9o6l+G38x/4IayIJtAjE0sDP//M5ACgBoYaKyBkYFhkDmJiYFUJzEOumAlxw+DLR6AyZvWwcpI82ClQwYafME6QuPh/5D3w6AsvWkdrIOv5BuUfhgtNUZLjSEUD/8HmR+YgH64C/YHcfguyIYoUDeICMNBaqLAZfGjyQw8QCoRiP2B2BCIhaCK3gHxeSDeCMTz5XIZvgDTHmm+BggwADUTf3KxrzZNAAAAAElFTkSuQmCC';

option = {
    backgroundColor:"##293C55",
    grid: {
        x: 40,
        y: 30,
        x2: 35,
        y2: 40,
    },
    title: {
        text: '单位(万人)',
        textStyle: {
            fontWeight: 200,
            fontSize: 12,
            color: '#ffffff',
        },
        top: '0',
        left: '2%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}:{c0}<br/>{a1}:{c1}'
    },
    legend: {
        data: ['常住人口', '流动人口'],
        textStyle: { color: '#ffffff' },
        right: '28%',
    },
    // grid: {
    //     borderWidth: 1,
    //     borderColor: '#ffffff',
    // },
    //calculable: true,
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    opacity: 0.5
                }
            },
            axisTick: {
                show: true,
                inside: true
            },
            data: ["张家港市", "太仓市", "相城区", "吴中区", "吴江区", "虎丘区", "姑苏区", "工业园区", "昆山市", "常熟市"]
        }
    ],
    yAxis: [
        {
            scale:true,
            splitLine: {
                show: true,
                lineStyle: {
                    opacity: 0.3,
                    type: 'dashed'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    opacity: 0.5
                }
            },
            axisLabel: {
                interval: 0,
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '常住人口',
            type: 'pictorialBar',
            symbol: 'image://' + paperDataURI2,
            symbolSize: ['50%', '100%'],
            symbolOffset: [5, 0],
            symbolMargin: '100%',
            barGap: '0',
            data: ["93.42", "49.72", "43.59", "68.49", "84.32", "40.75", "73.79", "54.20", "90.57", "107.50"]
        },
        {
            name: '流动人口',
            type: 'pictorialBar',
            symbol: 'image://' + paperDataURI1,
            symbolSize: ['50%', '100%'],
            symbolOffset: [0, 0],
            symbolMargin: '0%',
            barGap: '0',
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}',
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            data: ["70.64", "57.81", "58.96", "96.82", "109.13", "50.68", "38.98", "81.53", "188.42", "82.97"]
        }
    ]
}