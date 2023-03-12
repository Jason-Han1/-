option = {
    color: ["#00AEFF", "#AD7BCF", "#E9BC5C", "#FF7875", "#FF7875", "#BCD4E1"],
    backgroundColor: '#211b6a',
    textStyle: {
        color: '#fff',

    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        textStyle: {
            align: 'left'
        }
    },
    legend: {
        show: true,
        data: ['俄罗', '宝钢', '宣钢', '梅钢'],
        // left: 'right',
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 30
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: ['#214E68'],
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    xAxis: {
        data: ['2012', '2013', '2014', '2015', '2016'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '214E68',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
            formatter: "{value}"
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: "俄罗",
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return 30;
            },
            data: [
                130,150,123,156,178
            ]
        },
        {
            name: "宝钢",
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return 15;
            },
            data: [
                120,
                140,
                160,
                130,
                140,
            ]
        },
        {
            name: "宣钢",
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return 35;
            },
            data: [
                90,
                160,
                70,
                100,
                70,
            ]
        },
        {
            name: "梅钢",
            type: 'scatter',
            symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
                return 45;
            },
            data: [
                60,
                130,
                140,
                110,
                90,
            ]
        }
    ]
};