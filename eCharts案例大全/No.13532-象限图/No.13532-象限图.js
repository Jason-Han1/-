app.title = 'bar';
var textStyle = {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14,
};
option = {
    backgroundColor: '#a0a1a5',
    title: [{
        text: "第一象限",
        x: '70%',
        y: '5%',
        textStyle: textStyle
    }, {
        text: "第二象限",
        x: '15%',
        y: '5%',
        textStyle: textStyle
    }, {
        text: "第三象限",
        x: '15%',
        y: '90%',
        textStyle: textStyle
    }, {
        text: "第四象限",
        x: '70%',
        y: '90%',
        textStyle: textStyle
    }],
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: true
        },
        max: 10,
        min: -10
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: true
        },
        max: 10,
        min: -10
    },
    series: [{
        name: 'bar',
        type: 'pictorialBar',
        barWidth:'200%',
        data: [
            {
                value:[5,10],
                symbol: 'path://M0,0 L0,7 L10,7 L1,7 L1,10 L0,10',
                itemStyle:{
                    normal:{
                        color:'blue'
                    }
                }
            },
            {
                value:[5,-10],
                symbol: 'path://M0,0 L0,5 L10,5 L5,5 L5,10 L0,10',
                itemStyle:{
                    normal:{
                         color:'yellow'
                    }
                }
            },
            {
                value:[-5,10],
                symbol: 'path://M10,0 L10,2 L0,2 L4,2 L4,10 L10,10',
                itemStyle:{
                    normal:{
                        color:'red'
                    }
                }
            },
            {
                value:[-5,-10],
                symbol: 'path://M10,0 L10,3 L0,3 L7,3 L7,10 L10,10',
                itemStyle:{
                    normal:{
                        color:'green'
                    }
                }
            }]
    }]
};