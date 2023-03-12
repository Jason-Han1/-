var spirit='path://M507.712 157.696m-93.696 0a1.464 1.464 0 1 0 187.392 0 1.464 1.464 0 1 0-187.392 0ZM570.624 292.864 448.704 292.864c-41.152 0-78.144 14.976-104.448 38.912l0 172.928 0 46.784 0 21.952 91.648 0 19.712 283.84L567.68 857.28l19.072-283.84 92.992 0L679.744 563.328 679.744 500.224 679.744 336.32C653.248 309.76 614.272 292.864 570.624 292.864z'

var maxData = 2000;

option = {
    title:{
        text:'人数-象形图'
    },
    tooltip: {
    },
    yAxis: {
        // max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    xAxis: {
        data: ['2013', '2014', '2015', '2016'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [{
        // full data
        type: 'pictorialBar',
        itemStyle: {
            color: 'rgb(230,230,230)'
        },
        label: {
            show: false,
            formatter: function (params) {
                return (params.value / maxData * 100).toFixed(1) + ' %';
            },
            position: 'top',
            offset: [10, 0],
            color: 'black',
            fontSize: 18,
            opacity: 1
        },
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbol: spirit,
        symbolSize: [12,28],
        // symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
    },{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbolClip: true,
        symbolSize: [12,28],
        // symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        itemStyle: {
            color: 'rgb(0,195,230)'
        },
        markLine: {
            symbol: 'none',
            label: {
                formatter: 'average: {c}',
                position: 'end'
            },
            lineStyle: {
                color: 'green',
                type: 'dotted',
                opacity: 0.2,
                width: 2
            },
            data: [{
                type: 'average'
            }]
        }
    }]
};