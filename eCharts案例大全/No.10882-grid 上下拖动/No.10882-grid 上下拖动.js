var height = 800;

var grid = {
    top: 20,
    left: 100,
    dragHeight: 100,
    sliderHeightUnassign: height * 0.3,
    sliderHeight: height * 0.7,
    heightGap: 0.3
};

var dataAll = [
    [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
    ],
    [
        [10.0, 9.14],
        [8.0, 8.14],
        [13.0, 8.74],
        [9.0, 8.77],
        [11.0, 9.26],
        [14.0, 8.10],
        [6.0, 6.13],
        [4.0, 3.10],
        [12.0, 9.13],
        [7.0, 7.26],
        [5.0, 4.74]
    ],
    [
        [10.0, 7.46],
        [8.0, 6.77],
        [13.0, 12.74],
        [9.0, 7.11],
        [11.0, 7.81],
        [14.0, 8.84],
        [6.0, 6.08],
        [4.0, 5.39],
        [12.0, 8.15],
        [7.0, 6.42],
        [5.0, 5.73]
    ],
    [
        [8.0, 6.58],
        [8.0, 5.76],
        [8.0, 7.71],
        [8.0, 8.84],
        [8.0, 8.47],
        [8.0, 7.04],
        [8.0, 5.25],
        [19.0, 12.50],
        [8.0, 5.56],
        [8.0, 7.91],
        [8.0, 6.89]
    ]
];


var option = {
    grid: [
        {left: grid.left, top: grid.top, width: '80%', height: grid.sliderHeightUnassign, id: 'gridUnassign'},
        {left: grid.left, top: (grid.sliderHeightUnassign + grid.dragHeight), width: '80%', height: grid.sliderHeight, id: 'grid'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {gridIndex: 0, min: 0, max: 20},
        {gridIndex: 1, min: 0, max: 20}
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15}
    ],
    dataZoom: [
        {
            type: 'slider',
            show: true,
            id: 'sliderX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            id: 'insideX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'slider',
            show: true,
            id: 'sliderYUnassign',
            orient: 'vertical',
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            id: 'insiderYUnassign',
            orient: 'vertical',
            yAxisIndex: [0],
            start: 29,
            end: 36
        },
        {
            type: 'slider',
            show: true,
            id: 'sliderY',
            orient: 'vertical',
            yAxisIndex: [1],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            id: 'insideY',
            orient: 'vertical',
            yAxisIndex: [1],
            start: 29,
            end: 36
        }
    ],
    graphic: [{
        type: 'group',
        id: 'graphic',
        left: 100,
        top: grid.sliderHeightUnassign + grid.dragHeight / 2,
        children: [
            {
                type: 'line',
                z: 9,
                id: 'line',
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 1000,
                    y2: 0
                },
                style: {
                    fill: '#DCE2EB',
                    stroke: '#DCE2EB',
                    lineWidth: 2,
                    shadowBlur: 0,                   
                },
                draggable: true,
                ondrag: function (event) {
                    setGridHeight(event.event.y);
                }
            },
            {
                type: 'rect',
                z: 9,
                id: 'rect',
                shape: {
                    x: 500,
                    y: -10,
                    width: 50,
                    height: 10
                },
                style: {
                    fill: '#DCE2EB',
                    stroke: '#DCE2EB',
                    lineWidth: 2,
                    shadowBlur: 0,                   
                },
                draggable: true,
                ondrag: function (event) {
                    setGridHeight(event.event.y);
                }
            },
            {
                type: 'text',
                z: 10,
                id: 'text',
                style: {
                    text: '︿',
                    fill: '#ffffff',
                    x: 520,
                    y: -14
                },
                draggable: true,
                ondrag: function (event) {
                    setGridHeight(event.event.y);
                }
            }
        ]
    }],
    series: [
        {
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
        },
        {
            name: 'II',
            type: 'scatter',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1],
        }
    ]
};

function renderChart() {
    myChart.setOption(option, true);
}

function setGridHeight(position) {
    var unassignHeight = position - 20;
    var gridHeight = grid.sliderHeightUnassign + grid.sliderHeight + grid.dragHeight;
    grid.sliderHeightUnassign = unassignHeight;
    // 这里最重要，重新计算出比例
    grid.heightGap = unassignHeight / height;
    grid.sliderHeight = height * grid.heightGap;

    option.graphic.forEach((item, key) => {
        if (item.id === 'graphic') {
            option.graphic[key].top = unassignHeight + grid.dragHeight / 2;
        }
    });

    // 设置grid
    option.grid.forEach((item, key) => {
        if (item.id === 'gridUnassign') {
            option.grid[key].height = grid.sliderHeightUnassign; 
        }
        else {
            option.grid[key].height = grid.sliderHeight; 
            option.grid[key].top = grid.sliderHeightUnassign + grid.dragHeight;
        }
    });

    renderChart();
}
renderChart();