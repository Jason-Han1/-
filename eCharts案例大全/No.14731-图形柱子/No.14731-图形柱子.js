var PatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAMAAAAhxq8pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YzMTg3NEJCNDgyMTFFN0I0MTFFQkI5N0NGOEQ1MTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YzMTg3NENCNDgyMTFFN0I0MTFFQkI5N0NGOEQ1MTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjMxODc0OUI0ODIxMUU3QjQxMUVCQjk3Q0Y4RDUxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjMxODc0QUI0ODIxMUU3QjQxMUVCQjk3Q0Y4RDUxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph+JTZsAAAAGUExURRIl3gAAACTTdIEAAAACdFJOU/8A5bcwSgAAABZJREFUeNpiYMQCGIgXHH6AsgABCDAAUBAAeW3y/DcAAAAASUVORK5CYII='
var PatternImg = new Image();
PatternImg.src = PatternSrc;
function generateNumber(max, min = 0, fixed) {
    var num = Math.random() * (max - min) + min
    return fixed ? Number(num.toFixed(fixed)) : Math.floor(num)
}
var highways = [{
    name: 'G6',
    cnName: '京藏高速',
    amount: {
        inValue: generateNumber(150, 20),
        outValue: generateNumber(150, 20)
    }
}, {
    name: 'G0613',
    cnName: '共玉高速',
    amount: {
        inValue: generateNumber(150, 20),
        outValue: generateNumber(150, 20)
    }
}, {
    name: 'G0615',
    cnName: '德马高速',
    amount: {
        inValue: generateNumber(150, 20),
        outValue: generateNumber(150, 20)
    }
}, {
    name: 'S1113',
    cnName: '西塔高速',
    amount: {
        inValue: generateNumber(150, 20),
        outValue: generateNumber(150, 20)
    }
}, {
    name: 'G3012',
    cnName: '吐和高速',
    amount: {
        inValue: generateNumber(150, 20),
        outValue: generateNumber(150, 20)
    }
}]
option = {
    color: ['#1CEDFF', '#FD923D'],
    legend: {
        data: ['进省', '出省'],
        itemWidth: 8,
        itemHeight: 8
    },
    xAxis: {
        axisLabel: {
            rotate: 15,
            interval: 0,
        },
        data: highways.map(function(highway) {
            return highway.cnName
        })
    },
    yAxis: {
        name: '/次'
    },
    series: [{
        type: 'bar',
        name: '进省',
        barWidth: 26,
        stack: 'all',
        data: highways.map(function(highway) {
            return highway.amount.inValue
        })
    }, {
        type: 'bar',
        name: '出省',
        barWidth: 26,
        stack: 'all',
        itemStyle: {
            normal: {
                color: {
                    image: PatternImg
                },
                // barBorderRadius: [2, 2, 0, 0]
            }
        },
        data: highways.map(function(highway) {
            return highway.amount.outValue
        })
    }],
    animationDuration: 2000
};