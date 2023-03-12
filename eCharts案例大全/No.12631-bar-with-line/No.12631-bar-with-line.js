app.title = 'bar-plot';
var plotData = [20, 62, 210, 344, 400, 340, 230];

function renderPlotItem(param, api) {
    var categoryIndex = api.value(0);
    var bandWidth = api.size([0, 0])[0] * 0.85;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'line',
        shape: {
            x1: point[0] - bandWidth / 2,
            x2: point[0] + bandWidth / 2,
            y1: point[1],
            y2: point[1]
        },
        style: api.style({
            fill: null,
            stroke: api.visual('color'),
            lineWidth: 2
        })
    };
}

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'访问人数',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            type: 'custom',
            name: 'Plot',
            renderItem: renderPlotItem,
            encode: {
                x: 0,
                y: 1
            },
            data: plotData
        }
    ]
};
