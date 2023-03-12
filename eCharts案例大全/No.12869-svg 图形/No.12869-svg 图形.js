var symbols = [
    'path://M105.3,101.8v234h-4v202.3c0,14.4-11.6,26-26,26.1h-1.4c-14.3-0.1-25.9-11.8-25.8-26.1V164.3h-8v108.2  c-0.2,10.8-8.9,19.4-19.6,19.6C9.4,292.3,0.3,283.5,0,272.5v-111c0-1.2,0.1-2.5,0.3-3.7c3.3-31.8,30.1-56,62.1-56h24.4  c-11.2-4.2-20.9-12.2-27.1-22.9C45.2,53.8,53.8,21.6,79,7c8-4.6,17-7,26.2-7v101.8H105.3z',
    'path://M125,273.6c-8.2,2.4-16.9-1.7-19.5-8.9L69.2,162.3c-0.6-1.5-2.3-2.3-3.9-1.7h0c0,0,0,0,0,0  c-1.4,0.4-2.2,1.9-1.8,3.4l51,163c2.3,7.4-3.8,14.7-12.3,14.7h-41v207.7c0,12.1-10.9,21.8-24.2,21.8c-13.4,0-24.2-9.8-24.2-21.8  V344.2c0-1.2-0.9-2.2-2.1-2.3V109.2l0,0V7c29.1,0,52.9,23.6,52.9,52.6c0,23.5-15.5,43.5-36.8,50.2c34.3,2.4,60.9,12.5,65.3,25.1h0  l42.8,121.1C137.4,263.4,132.7,271.2,125,273.6z',
];

var bodyMax = 100;

var labelSetting = {
    normal: {
        show: true,
        position: 'bottom',
        offset: [0, 20],
        formatter: function (param) {
            return param.name + '\n' +(param.value / bodyMax * 100).toFixed(0) + '%';
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }
    }
};


option = {
    tooltip: {
        show:true,
    },
    legend: {
        data: ['typeA'],
        selectedMode: 'single',
        show:false
    },
    xAxis: {
        data: ['男','女'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    yAxis: {
        splitLine: {show: false},
        axisLabel:{
            margin:-8,
            verticalAlign: "bottom"
        },
        max: 100,
        offset: -85
    },
    grid: {
        top: 'center',
        height: 230,
        width: 170
    },
    series: [{
        name: 'typeA',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        barWidth:50,
        data: [{
            value: 46,
            symbol: symbols[0]
        }, {
            value: 54,
            symbol: symbols[1]
        }],
        z: 10
    }, {
        name: 'full',
        type: 'pictorialBar',
        symbolBoundingData: bodyMax,
        animationDuration: 0,
        barWidth:50,
        itemStyle: {
            normal: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        data: [{
            value: 1,
            symbol: symbols[0]
        }, {
            value: 1,
            symbol: symbols[1]
        }]
    }]
};