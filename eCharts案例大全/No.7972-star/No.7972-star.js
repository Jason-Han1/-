var spirit = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUREMDZDQjE3QjNEMTFFQUI5OUVCOTdCNEUzNEE2NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUREMDZDQjI3QjNEMTFFQUI5OUVCOTdCNEUzNEE2NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1REQwNkNBRjdCM0QxMUVBQjk5RUI5N0I0RTM0QTY0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1REQwNkNCMDdCM0QxMUVBQjk5RUI5N0I0RTM0QTY0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkmcSIYAAAH3SURBVHjaXFS7SkNBEN25Bi2UEDsLQewECxVtQ0AiCEECaYQUdiG/YP5A/QJNmc7aWi1CPsAPCAg+SKWBKIIg49nd2dndbDJ3dndeZx73UvVhZsIi/Oxi/Izbs5HtKZ636TWR6DKrfREceDtOhOydkyljew0qa0DyMZyuNSd/V3CMnnFrJLIWbipA0gpxBVJ6cP8iPWepsl60JfW2s2GOukRaIIdM06QAX53Ywxqeh07GluNMRlNLS+Jq5vOmCC048ssWfkFSAndnUeUsI8tLgLoFNOtAuMq+6Ivgy1LojhbZG3RAP1KObyb+9Z0wn/DzWoLyBJIr8BOnT6ydtYhtXSSI5dtQuTFZJ53jO8jOCihPcdUEneP2T2FTnkrSkEgG+sb0IGvC4bTgMKVkLrE7Ak3SEcgaQkm9GXpWn81FiFqYvCaPQLqP3VAM4rSn/SEawubA6qdBCzO3APkdkAcko6LjkqMd4PE2j7bI2hvHoqFvxtygy2rowGqNSZzlY7YEdPWsEWye9VXzqw6dpXwmOUEW4dYQdUUUv3Dugm+CutiHT4yV19IX36cZZyUgacgYjEC7OPdF1gfbg9FImtDQeeT0EyRzJF2z49FzkdmM4+Q4h2NB1MPdcdY5C6h6P0trUQFtgJ7y4U1LQeHzs4PtC/hHMP4XYABw2eYijmlwZgAAAABJRU5ErkJggg=='
var spirits = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUREMDZDQjU3QjNEMTFFQUI5OUVCOTdCNEUzNEE2NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUREMDZDQjY3QjNEMTFFQUI5OUVCOTdCNEUzNEE2NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1REQwNkNCMzdCM0QxMUVBQjk5RUI5N0I0RTM0QTY0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1REQwNkNCNDdCM0QxMUVBQjk5RUI5N0I0RTM0QTY0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoPYpDcAAAJBSURBVHjabJQ5aJVBEMdnPjwRsfLGo1Ai2AQMgsezC4gRPAqF12hlI4gStJAUQqy01MJWhA8jWCioATGFAbFRUfAobMTKdGpAIcr6m73e7of73uzMzvHf2dnZTw/MzIvjp/ycc2JDVb3O/qjNdhLblMl+uMhVso9NTTJ6IA2GDBSG+VxHP5QRNAHU4I0PLHbUtNC8c495E9Sv05LaD33jbW6wk2WoIb3AVfpsOOXBXCebDm7TrUOul3rgJYjHAb2I6S+63VW9tAZsqox1cAlxHCTgPeBfsbaDoxaZFYCLWG0RddvhqwiyTNHJSp+cah/wNtakRTeL/MHfvLhf2H8HXPcdNkeg+4ZwGf8zJPUGh48AzEen57A7sW0+Y7sE3+/Up7IMWo/PKPqX6E9o6jP+pzBeI+4Cchv7qz521VcyjHwPoGnix5EXQmsEx9vMoyyvIN+AL/XNrIaqXaDTyE+RJ/A5x3rB/JrUBvEC3rEcYb2B5d3czM6VxT4P2e32LLMUa36Dpk2BIj+gm+jW5YYvMxNZjfwQ+lS1h0ps2u5QOYz+caybssle+Ip4xCfQWI4r2qPx9ahw/LGPwB7BN5L5NOoW/ha+B3oBrYU2q2gns/JRh67fAV+Mbgj+Gu0stA0aJ/g+uknkZ5adK2sp6ZhapTzGvAaagA5BV9H9gT8gu2H4TuhY9Ku+Hk339bO7AdyCdkGvqgftZI75KHQWeQTn5bkb7B57Mz/LL4E9p33+2ch/vlmaa2Fsa3gk8iX5/hNgAJPE9lPeaEzjAAAAAElFTkSuQmCC'
var maxData = 2000;

option = {
    tooltip: {
    },
    xAxis: {
        show:false
    },
    yAxis: {
        data: ['2013', '2014', '2015', '2016'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 20,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 370,
        right: 500
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '65%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 1
            }
        },
        label: {
            show: true,
            formatter: function (params) {
                return (params.value / maxData * 100).toFixed(1) + ' %';
            },
            position: 'right',
            offset: [15, 0],
            color: 'green',
            fontSize: 18
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '65%',
        symbol: spirits,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        z: 5
    }]
};

