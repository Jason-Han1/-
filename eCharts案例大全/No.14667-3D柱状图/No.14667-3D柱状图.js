
var xData = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var days = [''];

var data = [[0,0,5],[0,1,11],[0,2,3],[6,3,1],[6,4,2],[6,5,2],[6,6,6]];
option = {
    tooltip: {},
    visualMap: {
        show:false,
        max: 15,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        name:'x',
        nameGap: 1,
        type: 'category',
        data: xData
    },
    yAxis3D: {
        name:'',
        type: 'category',
        data: days
    },
    zAxis3D: {
        name:'',
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 20,
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl:{
            alpha: 0,
            beta: 0,
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',
        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                }
            },
        }
    }]
}