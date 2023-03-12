var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var data = [[0,0,5],[1,0,1],[2,0,2],[3,0,10],[4,0,5],[5,0,7],[6,0,10]];
option = {
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'category',
        data: days
    },
    yAxis3D: {
        type: 'category' 
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 40,
        viewControl: {
            // projection: 'orthographic'
        },
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
            alpha:0,
            beta:0
        }
    },
    series: [{
        type: 'bar3D',
        data: data,
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
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
};