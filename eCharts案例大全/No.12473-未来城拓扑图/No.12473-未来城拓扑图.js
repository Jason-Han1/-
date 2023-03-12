var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var _lineStyle = {
    symbol: 'emptyCircle',
    symbolSize: 4,
    lineStyle: {
        normal: {
            //color: 'green',
            width: 1,
            type: 'dashed'
        }
    },
    itemStyle: {
        normal: {
            borderWidth: 1,
            //borderColor: 'yellow',
            //color: 'transparent'
        }
    }

};
option = {
    toolbox: {
        show: true,
        left: '25%',
        feature: {
            dataZoom: {},
            dataView: {
                readOnly: false
            },
            //magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    title: {
        text: '未来城拓扑图',
        subtext: '电力'

    },
    xAxis: {
        type: 'value',
        minInterval: 0.0001,
        min: 501159.42,
        //max: 501310
        splitLine: {
            show: false
        }

    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        minInterval: 0.0001,
        min: 3733430 //6.941,

        //max: 3733660
    },

    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20

        /*orient: 'vertical',
        center:'right'top: '40%',
        left: 0,itemWidth: 12,
        itemHeight: 12,
        data: ['2016年', '2017年', '2018年'],
       
        textStyle: {
            color: colors,
            //fontSize: fontSize
        }*/
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        },
        triggerOn: 'click',
        //backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        //borderColor: '#ccc',
        padding: 10,
        //textStyle: {
        //    color: '#000'
        //},
        formatter: function(params) {
            console.log(params);
            return params.seriesName + ' : ( ' +
                params.value[0] + ', ' +
                params.value[1] + ' )';
        },

        //extraCssText: 'width: 170px'
    },

    series: [{
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力59',
        data: [
            [501210.084, 3733562.221],
            [501210.184, 3733563.315]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力60',
        data: [
            [501251.135, 3733631.638],
            [501251.491, 3733633.452]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力61',
        data: [
            [501307.252, 3733644.074],
            [501297.815, 3733645.164],
            [501276.562, 3733647.864],
            [501258.364, 3733651.565],
            [501233.563, 3733655.476],
            [501222.530, 3733658.019]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力62',
        data: [
            [501270.305, 3733608.298],
            [501277.160, 3733638.092],
            [501268.888, 3733639.482],
            [501239.814, 3733642.963]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力63',
        data: [
            [501270.305, 3733608.298],
            [501264.813, 3733604.441]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力64',
        data: [
            [501299.032, 3733606.913],
            [501298.688, 3733600.323]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力65',
        data: [
            [501264.813, 3733604.441],
            [501264.754, 3733603.208]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力66',
        data: [
            [501236.361, 3733610.416],
            [501252.955, 3733606.391],
            [501261.894, 3733604.735],
            [501264.813, 3733604.441],
            [501298.167, 3733599.329]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力67',
        data: [
            [501249.217, 3733625.568],
            [501213.513, 3733632.903],
            [501209.714, 3733613.329]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力68',
        data: [
            [501212.746, 3733575.858],
            [501217.758, 3733575.876],
            [501229.975, 3733571.267],
            [501265.421, 3733566.809],
            [501292.625, 3733563.518]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力69',
        data: [
            [501212.746, 3733575.858],
            [501211.497, 3733575.555],
            [501220.655, 3733608.810],
            [501249.217, 3733625.568],
            [501250.482, 3733627.079]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力70',
        data: [
            [501210.084, 3733562.221],
            [501209.803, 3733562.233],
            [501199.350, 3733563.425],
            [501206.081, 3733597.056]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力71',
        data: [
            [501210.084, 3733562.221],
            [501232.815, 3733552.432]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力72',
        data: [
            [501237.467, 3733551.804],
            [501285.525, 3733543.846]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力73',
        data: [
            [501263.048, 3733535.064],
            [501262.964, 3733534.554]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力74',
        data: [
            [501217.766, 3733541.131],
            [501234.332, 3733538.601],
            [501250.182, 3733535.809],
            [501263.048, 3733535.064],
            [501271.479, 3733534.437],
            [501285.554, 3733532.416]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力75',
        data: [
            [501223.006, 3733519.270],
            [501280.682, 3733510.209]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力76',
        data: [
            [501223.719, 3733505.410],
            [501234.175, 3733503.622],
            [501251.100, 3733501.541],
            [501268.243, 3733499.064]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力77',
        data: [
            [501223.612, 3733504.807],
            [501223.719, 3733505.410],
            [501222.426, 3733518.306]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力78',
        data: [
            [501189.076, 3733512.305],
            [501207.882, 3733507.553],
            [501218.289, 3733505.989],
            [501223.719, 3733505.410]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力79',
        data: [
            [501300.686, 3733600.072],
            [501307.252, 3733644.074],
            [501307.325, 3733645.028]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力80',
        data: [
            [501300.338, 3733596.236],
            [501300.690, 3733597.952]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力81',
        data: [
            [501288.880, 3733547.971],
            [501300.164, 3733594.808]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力82',
        data: [
            [501287.887, 3733543.682],
            [501288.535, 3733546.542]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力83',
        data: [
            [501274.565, 3733482.327],
            [501287.561, 3733541.567]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力84',
        data: [
            [501268.339, 3733464.264],
            [501273.868, 3733477.672]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力85',
        data: [
            [501263.372, 3733436.941],
            [501268.339, 3733464.264]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力86',
        data: [
            [501250.400, 3733467.448],
            [501256.520, 3733466.277],
            [501268.339, 3733464.264]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力87',
        data: [
            [501207.359, 3733473.707],
            [501230.352, 3733470.293],
            [501244.079, 3733468.287],
            [501250.400, 3733467.448],
            [501250.405, 3733467.876]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力88',
        data: [
            [501188.573, 3733476.378],
            [501203.912, 3733474.102],
            [501207.359, 3733473.707],
            [501207.434, 3733474.184]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力89',
        data: [
            [501273.522, 3733482.482],
            [501275.607, 3733482.172],
            [501274.912, 3733477.516],
            [501272.823, 3733477.829],
            [501273.522, 3733482.482]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力90',
        data: [
            [501285.556, 3733544.041],
            [501290.219, 3733543.323],
            [501289.893, 3733541.208],
            [501285.229, 3733541.926],
            [501285.556, 3733544.041]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力91',
        data: [
            [501287.089, 3733548.208],
            [501290.365, 3733547.775],
            [501290.173, 3733546.326],
            [501286.897, 3733546.759],
            [501287.089, 3733548.208]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力92',
        data: [
            [501303.074, 3733599.772],
            [501302.812, 3733597.686],
            [501298.036, 3733598.285],
            [501298.298, 3733600.372],
            [501303.074, 3733599.772]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力93',
        data: [
            [501299.001, 3733596.398],
            [501301.675, 3733596.074],
            [501301.501, 3733594.645],
            [501298.827, 3733594.970],
            [501299.001, 3733596.398]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力94',
        data: [
            [501252.152, 3733631.492],
            [501251.499, 3733626.933],
            [501249.465, 3733627.224],
            [501250.118, 3733631.783],
            [501252.152, 3733631.492]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力95',
        data: [
            [501251.116, 3733638.203],
            [501253.198, 3733637.902],
            [501252.532, 3733633.301],
            [501250.449, 3733633.603],
            [501251.116, 3733638.203]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力96',
        data: [
            [501232.954, 3733553.459],
            [501237.606, 3733552.832],
            [501237.329, 3733550.777],
            [501232.677, 3733551.405],
            [501232.954, 3733553.459]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '电力97',
        data: [
            [501218.521, 3733520.965],
            [501223.154, 3733520.297],
            [501222.858, 3733518.244],
            [501218.225, 3733518.912],
            [501218.521, 3733520.965]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯169',
        data: [
            [501211.598, 3733577.808],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266],
            [501215.766, 3733580.266]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯170',
        data: [
            [501196.317, 3733504.814],
            [501194.574, 3733494.736]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯171',
        data: [
            [501210.184, 3733563.315],
            [501209.287, 3733563.445]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯172',
        data: [
            [501281.633, 3733607.436],
            [501266.858, 3733603.813],
            [501218.736, 3733612.991]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯173',
        data: [
            [501277.141, 3733579.237],
            [501255.986, 3733582.184],
            [501254.935, 3733574.716],
            [501215.766, 3733580.266]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯174',
        data: [
            [501269.221, 3733534.692],
            [501240.039, 3733539.050],
            [501206.138, 3733543.885]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯175',
        data: [
            [501259.681, 3733500.647],
            [501228.860, 3733505.175],
            [501199.084, 3733509.561]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯176',
        data: [
            [501194.574, 3733494.736],
            [501195.656, 3733487.835],
            [501199.976, 3733478.236],
            [501223.316, 3733471.884],
            [501253.618, 3733467.772]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯177',
        data: [
            [501209.287, 3733563.445],
            [501206.138, 3733543.885],
            [501199.084, 3733509.561],
            [501196.317, 3733504.814]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯178',
        data: [
            [501211.598, 3733577.808],
            [501209.287, 3733563.445]
        ]
    }, {
        type: 'line',
        symbol: _lineStyle.symbol,
        symbolSize: _lineStyle.symbolSize,
        lineStyle: _lineStyle.lineStyle,
        itemStyle: _lineStyle.itemStyle,
        name: '路灯179',
        data: [
            [501291.470, 3733640.739],
            [501269.424, 3733641.979],
            [501226.553, 3733646.737],
            [501218.736, 3733612.991],
            [501211.598, 3733577.808],
            [501211.598, 3733577.808]
        ]
    }, ]
};