var symbolPath = 'path://M554.018999 660.08264 554.018999 354.999247l-0.092098 0c-1.442862-21.898753-19.662829-39.219233-41.926902-39.219233-22.268166 0-40.48711 17.320481-41.930995 39.219233l-0.089028 0 0 305.08237c-41.065278 16.622586-70.03303 56.884568-70.03303 103.906511 0 61.887512 50.164516 112.052029 112.052029 112.052029 61.883419 0 112.052029-50.164516 112.052029-112.052029C624.052029 716.966185 595.081207 676.705226 554.018999 660.08264z';

var bodyMax = 100;

var labelSetting = {
    normal: {
        show: true,
        position: 'outside',
        offset: [0, 230],
        formatter: function (param) {
            return (param.value / bodyMax * 100).toFixed(0) + '%';
        },
        textStyle: {
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Arial'
        }
    }
};

var markLineSetting = {
    symbol: 'none',
    lineStyle: {
        normal: {
            opacity: 0.3
        }
    },
    data: [{
        type: 'max',
        label: {
            normal: {
                formatter: 'max: {c}'
            }
        }
    }, {
        type: 'min',
        label: {
            normal: {
                formatter: 'min: {c}'
            }
        }
    }]
};

option = {
    tooltip: {
    },
    xAxis: {
        data: ['设备一', '设备二', '设备三', '设备四', '设备五'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    yAxis: {
        max: bodyMax,
        offset: 20,
        splitLine: {show: false}
    },
    grid: {
        top: 'center'
    },
    markLine: {
        z: -100
    },
    series: [{
        type: 'pictorialBar',
        symbol: symbolPath,
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        itemStyle: {
            normal: {
                color: 'rgba(47, 82, 154, 0.8)'
            }
        },
        data: [{
            value: 100
        }, {
            value: 34
        }, {
            value: 80
        }, {
            value: 50
        }, {
            value: 72
        }],
        markLine: markLineSetting,
        z: 10
    }, {
        type: 'pictorialBar',
        symbol: symbolPath,
        symbolBoundingData: bodyMax,
        animationDuration: 0,
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        data: [{
            value: 100
        }, {
            value: 34
        }, {
            value: 80
        }, {
            value: 50
        }, {
            value: 72
        }]
    }]
};