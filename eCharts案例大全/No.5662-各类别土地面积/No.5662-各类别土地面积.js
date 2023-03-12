var pathSymbols = {
    tree: 'image://asset/get/s/data-1601387584547-8Q3wDcFQx.png',
    people: "image://asset/get/s/data-1601387384091-J0YWkFS_e.png",
    water: 'image://asset/get/s/data-1601387480287-RKHCbwiiw.png',
    soil: 'image://asset/get/s/data-1601387561533-yabhpd4tC.png',
    wetlands: 'image://asset/get/s/data-1601387666039-ftO48EKtV.png',
    arableland: 'image://asset/get/s/data-1601387633321-dz5AN5CtI.png',
    grass: 'image://asset/get/s/data-1601387689492-99jrEJmZn.png'
};

option = {
    title: {
        text: '各类别土地面积',
        left: 'center',
        top: 15,
        textStyle: {
            fontSize: 30,
            color: 'rgba(0,0,0,0.5)'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['林地', '人工', '水体', '裸土', '湿地', '耕地', '草地', ],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#e54035'
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            opacity: 0.5
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        },
        data: [99650.88487, 40259.04957, 30518.82681, 26931.55227, 2345.822763, 687.0165095, 639.5600198],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: [{
            value: 100100,
            symbol: pathSymbols.tree,
            symbolSize: [60, 60]
        },{
            value: 41000,
            symbol: pathSymbols.people,
            symbolSize: [60, 60]
        }, {
            value: 31000,
            symbol: pathSymbols.water,
            symbolSize: [60, 60]
        }, {
            value: 27000,
            symbol: pathSymbols.soil,
            symbolSize: [60, 60]
        },  {
            value: 2500,
            symbol: pathSymbols.wetlands,
            symbolSize: [50, 50]
        }, {
            value: 700,
            symbol: pathSymbols.arableland,
            symbolSize: [60, 60]
        }, {
            value: 650,
            symbol: pathSymbols.grass,
            symbolSize: [60, 60]
        }]
    }]
};