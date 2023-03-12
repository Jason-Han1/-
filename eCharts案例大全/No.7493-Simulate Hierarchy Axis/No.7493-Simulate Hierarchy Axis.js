let barAry = ['bar1', 'bar2', 'bar3'];
let bar1DataAry = [220, 182, 191, 234, 290, 0, 182, 191, 234, 290, 0, 0, 191, 234, 290];
let bar2DataAry = [210, 132, 91, 204, 220, 0, 132, 91, 204, 220, 0, 0, 91, 204, 220];
let bar3DataAry = [0.5, 0.8, 1, 0.2, 0.75, 0, 0.5, 0.8, 1, 0.2, 0, 0, 0.5, 0.8, 1];
let bar1MarkAry = [{
    coord: [220, 0],
    value: 220
}, {
    coord: [182, 1],
    value: 182
}, {
    coord: [191, 2],
    value: 191
}, {
    coord: [234, 3],
    value: 234
}, {
    coord: [290, 4],
    value: 290
}, {
    coord: [182, 6],
    value: 182
}, {
    coord: [191, 7],
    value: 191
}, {
    coord: [234, 8],
    value: 234
}, {
    coord: [290, 9],
    value: 290
}, {
    coord: [191, 12],
    value: 191
}, {
    coord: [234, 13],
    value: 234
}, {
    coord: [290, 14],
    value: 290
}];
let bar2MarkAry = [{
    coord: [210, 0],
    value: 210
}, {
    coord: [132, 1],
    value: 132
}];
let bar3MarkAry = [{
    coord: [0.5, 0],
    value: 0.5
}, {
    coord: [0.8, 1],
    value: 0.8
}];

let column1Ary = ['C11', 'C12', 'C13', 'C14', 'C15'];
let column2Ary = ['C21', 'C22', 'C23', 'C21', 'C22', '', 'C21', 'C22', 'C23', 'C21', '', '', 'C21', 'C22', 'C23'];

let lineAry = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

option = {
    color: ['#60acfc', '#39b3ea', '#32d3eb', '#5bc49f', '#d4ec59', '#ffda43', '#feb64d', '#ff7c7c', '#d660a8', '#9287e7', '#6370de'],
    legend: {
        data: barAry,
    },
    grid: {
        left: 250
    },
    xAxis: [{
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#777'
            }
        }
    }, {
        type: 'value',
        name: '概率',
        min: 0,
        max: 1,
        nameTextStyle: {
            fontSize: 15
        },
        axisLine: {
            lineStyle: {
                color: '#32d3eb'
            }
        },
        axisLabel: {
            formatter: '{value}',
        }
    }],
    yAxis: [{
        inverse: true,
        splitLine: {
            show: true
        },
        axisTick: {
            length: 100,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        data: lineAry
    }, {
        name: '                列2',
        nameLocation: 'start',
        nameTextStyle: {
            fontWeight: 'bold'
        },
        position: 'left',
        offset: 130,
        axisLine: {
            onZero: false,
            show: false
        },
        axisTick: {
            length: 70,
            inside: true,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            inside: true
        },
        inverse: true,
        data: column2Ary
    }, {
        name: '                     列1',
        nameLocation: 'start',
        nameTextStyle: {
            fontWeight: 'bold'
        },
        position: 'left',
        offset: 220,
        axisLine: {
            onZero: false,
            show: false
        },
        axisTick: {
            length: 100,
            inside: true,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            inside: true
        },
        inverse: true,
        data: column1Ary
    }],
    series: [{
        type: 'bar',
        name: 'bar1',
        data: bar1DataAry,
        label: {
            normal: {
                show: true,
                position: 'left',
                textStyle: {
                    color: '#000'
                },
                formatter: 'bar1',
            }
        },
        markPoint: {
            symbolSize: 10,
            symbolOffset: [0, '50%'],
            data: bar1MarkAry
        }
    }, {
        type: 'bar',
        name: 'bar2',
        data: bar2DataAry,
        label: {
            normal: {
                show: true,
                position: 'left',
                textStyle: {
                    color: '#000'
                },
                formatter: 'bar2',
            }
        },
        markPoint: {
            symbolSize: 10,
            symbolOffset: [0, '50%'],
            data: bar2MarkAry
        }
    }, {
        type: 'bar',
        name: 'bar3',
        xAxisIndex: 1,
        data: bar3DataAry,
        label: {
            normal: {
                show: true,
                position: 'left',
                textStyle: {
                    color: '#000'
                },
                formatter: 'bar3',
            }
        },
        markPoint: {
            symbolSize: 10,
            symbolOffset: [0, '50%'],
            data: bar3MarkAry
        }
    }]
};