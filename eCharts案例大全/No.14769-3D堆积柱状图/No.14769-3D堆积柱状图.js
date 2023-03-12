option = {
    color: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
    title: {
        text: '3D堆叠柱状图',
        x: 'center'
    },
    tooltip: {},
    xAxis3D: {
        type: 'category',
        data: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    },
    yAxis3D: {
        type: 'category',
        data: ['']
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 20,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            alpha: 10, //控制场景平移旋转
            beta: 20,
            minAlpha: 10,
            maxAlpha: 10,
            minBeta: 20,
            maxBeta: 20
        }
    },
    series: [{
        type: 'bar3D',
        barSize: 15,
        data: [
            [0, 0, 5],
            [1, 0, 3],
            [2, 0, 4],
            [3, 0, 7],
            [4, 0, 2]
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: false
            }
        }
    }, {
        type: 'bar3D',
        barSize: 15,
        data: [
            [0, 0, 3],
            [1, 0, 4],
            [2, 0, 4],
            [3, 0, 2],
            [4, 0, 5]
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: false
            }
        }
    }]
};