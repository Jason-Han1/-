    var xname  =  ['综合评分'];
    var score  = [4];
    var maxData = 5;

var spirit = 'image:// /asset/get/s/data-1636537644563-ILkx_hnOZ.png';
var option = {
    tooltip: {
        show:true,
        
    },
    xAxis: {
        max: 5,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        data: xname,
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            show:false,
            textStyle: {
                color: '#000000',
                fontSize: 24
            }
        }
    },
    grid: {
        top: 'center',
        height: 36,
        left: '15%',
        right: '15%'
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: score,
        z: 10
    }, {
        type: 'pictorialBar',
        itemStyle: {
                opacity: 0.2
        },
        label: {
               show: false,
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbol: spirit,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: score,
        z: 1
    }]
};