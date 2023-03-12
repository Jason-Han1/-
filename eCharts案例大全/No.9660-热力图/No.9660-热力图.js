const xAxisData = ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9'];
const yAxisData = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const seriesData = [
    [0, 0, 10],
    [0, 1, 19],
    [0, 2, 8],
    [0, 3, 24],
    [0, 4, 67],
    [1, 0, 92],
    [1, 1, 58],
    [1, 2, 78],
    [1, 3, 117],
    [1, 4, 48],
    [2, 0, 35],
    [2, 1, 15],
    [2, 2, 123],
    [2, 3, 64],
    [2, 4, 52],
    [3, 0, 72],
    [3, 1, 132],
    [3, 2, 114],
    [3, 3, 19],
    [3, 4, 16],
    [4, 0, 38],
    [4, 1, 5],
    [4, 2, 8],
    [4, 3, 117],
    [4, 4, 115],
    [5, 0, 88],
    [5, 1, 32],
    [5, 2, 12],
    [5, 3, 6],
    [5, 4, 120],
    [6, 0, 13],
    [6, 1, 44],
    [6, 2, 88],
    [6, 3, 98],
    [6, 4, 96],
    [7, 0, 31],
    [7, 1, 1],
    [7, 2, 82],
    [7, 3, 32],
    [7, 4, 30],
    [8, 0, 85],
    [8, 1, 97],
    [8, 2, 123],
    [8, 3, 64],
    [8, 4, 84],
    [9, 0, 47],
    [9, 1, 114],
    [9, 2, 31],
    [9, 3, 48],
    [9, 4, 91]
];

option = {
    dataset: {
        source: [
            ["name1", "name2", "value"],
            ["Alexander", "Thursday", 24],
            ["Alexander", "Tuesday", 19],
            ["Alexander", "Monday", 10],
            ["Alexander", "Friday", 67],
            ["Alexander", "Wednesday", 8],
            ["Leon", "Thursday", 98],
            ["Leon", "Tuesday", 44],
            ["Anna", "Monday", 31],
            ["Anna", "Friday", 30],
            ["Anna", "Tuesday", 1],
            ["Leon", "Wednesday", 88],
            ["Anna", "Wednesday", 82],
            ["Leon", "Friday", 96],
            ["Leon", "Monday", 13],
            ["Anna", "Thursday", 32],
            ["Maximilian", "Tuesday", 15],
            ["Maximilian", "Friday", 52],
            ["Maximilian", "Wednesday", 123],
            ["Maximilian", "Thursday", 64],
            ["Maximilian", "Monday", 35],
            ["Marie", "Thursday", 117],
            ["Marie", "Friday", 48],
            ["Marie", "Monday", 92],
            ["Marie", "Tuesday", 58],
            ["Marie", "Wednesday", 78],
            ["Laura", "Wednesday", 31],
            ["Maria", "Monday", 88],
            ["Laura", "Friday", 91],
            ["Laura", "Thursday", 48],
            ["Laura", "Monday", 47],
            ["Maria", "Wednesday", 12],
            ["Maria", "Friday", 120],
            ["Maria", "Tuesday", 32],
            ["Maria", "Thursday", 6],
            ["Laura", "Tuesday", 114],
            ["Sophia", "Monday", 72],
            ["Sophia", "Thursday", 19],
            ["Sophia", "Tuesday", 132],
            ["Sophia", "Wednesday", 114],
            ["Sophia", "Friday", 16],
            ["Tim", "Monday", 85],
            ["Tim", "Wednesday", 123],
            ["Tim", "Tuesday", 97],
            ["Tim", "Friday", 84],
            ["Tim", "Thursday", 64],
            ["Lukas", "Friday", 115],
            ["Lukas", "Wednesday", 8],
            ["Lukas", "Monday", 38],
            ["Lukas", "Thursday", 117],
            ["Lukas", "Tuesday", 5]
        ]
    },
    tooltip: {},
    visualMap: {
        min: 3,
        max: 140,
        calculable: true,
        orient: 'horizontal',
        align: 'right',
        inRange: {
            color: ['#BAE7FF', '#1890FF', '#0050B3']
        },
        left: 'center'
    },
    xAxis: {
        type: 'category',
        //data: xAxisData,
        axisLabel: {
            interval: 0
        },
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        //data: yAxisData,
        splitArea: {
            show: true
        }
    },
    series: {
        //name: '热力图',
        type: 'heatmap',
        //data: seriesData,
        label: {
            show: true
        },
        itemStyle: {
            borderWidth: 1,
            borderColor: "#fff"
        }
    }
};