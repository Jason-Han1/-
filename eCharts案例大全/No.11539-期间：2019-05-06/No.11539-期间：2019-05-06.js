app.title = '气泡图';
var data = [
    [-10,
        20,
        0,
        0.75000000000000000000,
        0,
        0,
        "A000",
        "公司一"
    ],
    [
        6,
        7, 
        -0.890000000000000,
        0,
        0,
        0,
        "Z400",
        "公司二"
    ],
    [
        19,
        -20,
        0,
        0,
        0, 
        -18.420000000000000,
        "2000",
        "公司三"
    ]
];
var textStyle = {
    color: 'red',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14,
    
};
option = {
    backgroundColor: '#fff',
    title: [{
        text: "期间：2016-12-28",
        x: '5%',
        y: 0,
        textStyle: textStyle,
       
    }, {
        text: "存在资不抵债风险",
        x: '73%',
        y: '10%',
        textStyle: textStyle,
        borderWidth:'1',
        subtext:'存在金额不足',
        borderRadius: 5,
        subtextStyle:{
             color: '#000000',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
    }, {
        text: "存在总体资金不足",
        x: '10%',
        y: '10%',
        textStyle: textStyle,
        borderWidth:'1',
        subtext:'存在金额不足',
        borderRadius: 5,
        subtextStyle:{
             color: '#000000',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
        
    }, {
        text: "存在速动资金不足",
        x: '10%',
        y: '80%',
        textStyle: textStyle,
         borderWidth:'1',
        subtext:'存在金额不足',
        borderRadius: 5,
        subtextStyle:{
             color: '#000000',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
    }, {
        text: "存在流动资金不足",
        x: '73%',
        y: '80%',
        textStyle: textStyle,
         borderWidth:'1',
        subtext:'存在金额不足',
        borderRadius: 5,
        subtextStyle:{
             color: '#000000',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
    }],
    tooltip: {
        /*返回需要的信息*/
        formatter: function(param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' + value[7] + '(' + value[6] + ')' +
                '</div>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 21,
        min: -21
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 21,
        min: -21
    },
    series: [{
        name: '',
        data: data,
        type: 'scatter',
        symbolSize: 40
    }]
};