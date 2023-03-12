let data = [80, 20];
let yAxisDataN = [];
let yAxisDataV = [];
let top = 0;
let bottom = 0;

option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    grid: [{
        left: '10%',
        width: '40%',
        containLabel: true,

    }, {
        left: '50%',
        width: '0%',

    }, {
        right: '10%',
        width: '40%',
        containLabel: true,

    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        max: 100
    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        max: 100
    }],
    yAxis: [{
            position: 'right',
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
                onZero: false,
                lineStyle: {
                    color: '#000'
                },
            },
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['占比']
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        {
            gridIndex: 2,
            position: 'right',
            axisLabel: {
                show: false,

            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },

            data: ['占比']
        }
    ],
    series: [{
            name: '女性',
            label: {
                color: '#767676',
                position: 'left'
            },
            itemStyle: {
                color: 'rgba(255,149,189,.8)',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: [80]
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '男性',
            label: {
                color: '#767676',
                position: 'right'
            },
            itemStyle: {
                color: 'rgba(101,209,247,.8)',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: [20]
        },

    ].map(item => _.merge(item, {
        type: 'bar',
        barWidth: 11,
        label: {
            show: true,
            fontFamily: 'Rubik-Medium',
            fontSize: 14,
            distance: 10
        }
    }))
};