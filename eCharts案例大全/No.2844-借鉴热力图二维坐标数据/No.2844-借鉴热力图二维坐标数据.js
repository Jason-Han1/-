var hours = ['敏感', '较敏感', '低敏感', '内部数据'];
var days = ['数据库1', '数据库2', '数据库3', '数据库4', '数据库5',
            '数据库6', '数据库7', '数据库8', '数据库9', '其他'];

var data = [
    [0, 0, 53.6],
    [0, 1, 7.7],
    [0, 2, 26.4],
    [0, 3, 34.1],
    [0, 4, 12.4],
    [0, 5, 53.6],
    [0, 6, 7.7],
    [0, 7, 26.4],
    [0, 8, 34.1],
    [0, 9, 12.4],

    [1, 0, 39.9],
    [1, 1, 3.21],
    [1, 2, 43.3],
    [1, 3, 15.4],
    [1, 4, 31.0],
    [1, 5, 39.9],
    [1, 6, 3.21],
    [1, 7, 43.3],
    [1, 8, 15.4],
    [1, 9, 31.0],

    [2, 0, 19.0],
    [2, 1, 22.5],
    [2, 2, 17.9],
    [2, 3, 38.2],
    [2, 4, 22.0],
    [2, 5, 19.0],
    [2, 6, 42.5],
    [2, 7, 17.9],
    [2, 8, 18.2],
    [2, 9, 22.0],

    [3, 0, 31.0],
    [3, 1, 38.5],
    [3, 2, 52.5],
    [3, 3, 11.4],
    [3, 4, 6.9],
    [3, 5, 31.0],
    [3, 6, 38.5],
    [3, 7, 52.5],
    [3, 8, 11.4],
    [3, 9, 6.9]

];


option = {
    tooltip: {
        position: 'top',
    },
    animation: false,
    grid: {
        height: '80%',
        top: '5%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        },
        axisTick: {
            lineStyle: {
                color: '#c4c4c4'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
        axisTick: {
            show: false
        }
    },
    visualMap: {
        show:false,
        min: 0,
        max: 70,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        color: ['#0d59b7', '#bee8ff']
    },
    series: [{
        name: '',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};