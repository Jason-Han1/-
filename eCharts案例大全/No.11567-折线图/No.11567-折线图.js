let newArr = [];
// let curtimedata = [2.4, 2.4, 1.7, 2.3]
// let pasttimedata = [2.3, 2.1, 1.9, 2.1];
let curtimedata = [960, 950, 1290, 1050]
let pasttimedata = [950, 1180, 1190, 1150];

newArr = curtimedata.concat(pasttimedata);

let max = Math.max.apply(null, newArr);
let min = Math.min.apply(null, newArr);

min = parseInt(String((min - 100) / 100)) * 100;
max = parseInt(String((max + 200) / 100)) * 100;

option = {
    color: ['#5b9bd5', '#ed7d31'],
    backgroundColor: '#FFF',
    grid: {
        top: 20,
        bottom: 80,
        left: '10%',
        right: 20
    },
    legend: {
        bottom: '10',
        itemHeight: 10,
        data: ['2018年', '2017年']
    },
    xAxis: [{
        name: '月份',
        nameLocation: 'center',
        nameGap: 30,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        data: ['春季', '夏季', '秋季', '冬季'],
    }],
    yAxis: [{
        name: '风速（m/s）',
        nameLocation: 'center',
        nameGap: 40,
        nameTextStyle: {
            color: '#000'
        },
        min: min,
        max: max,
        scale: true,
        interval: 100,
        axisLine: {
            lineStyle: {
                color: '#CCC'
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        axisLabel: {
            color: '#000'
        }
    }],
    series: [{
            name: '2018年',
            type: 'line',
            itemStyle: {
                color: '#5b9bd5',
                borderColor: '#5b9bd5',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: curtimedata
        },
        {
            name: '2017年',
            type: 'line',
            itemStyle: {
                color: '#ed7d31',
                borderColor: '#ed7d31',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: pasttimedata
        }
    ]
};