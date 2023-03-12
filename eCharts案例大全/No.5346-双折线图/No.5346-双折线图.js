let xData = ['2018年度', '2019年度', '2020年度', '2021年度']
let yData1 = ['20', '21', '22', '23']
let yData2 = ['30', '31', '38', '330']
let unit = '%'
let legendList = ['机构持有', '个人持有']
option = {
    grid: {
        backgroundColor: '#fff'  
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 12,
            color: '#666'
        },
        data: xData
    },
    yAxis: {
        interval: (330 - 20)/5,
        min: function (value) {
            return value.min;
        },
        max: function(value) {
            return value.max  
        },
        splitNumber: 5,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 12,
            color: '#666'
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#000'
            },
        },
    },
    tooltip: {
        formatter: function(params){
            let val0 = parseFloat(params[0].value).toFixed(2) + unit
            let val1 = parseFloat(params[1].value).toFixed(2) + unit
            return '<div><p style="color: #30303D;font-size:12px">'+params[0].name+'</p>' +
                        '<p style="color: #FF784B;font-size:12px">'+legendList[0]+': '+ val0 +'</p>' +
                        '<p style="color: #5C9DEF;font-size:12px">'+legendList[1]+': '+ val1 +'</p><div>';
        },
        fontSize:24,
        color: '#30303D',
        trigger: 'axis',
        backgroundColor: 'rgba(242, 242, 242, 0.9)',
        borderColor: '#2864C8',
        borderWidth: 1
    },
    axisPointer: {
        lineStyle: {
            type: 'dotted',
            color: '#AAA'
        }
    },
    series: [{
        type: 'line',
        data: yData1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            color: '#FF784B'
        },
        itemStyle: {
            color: '#FF784B',
            borderColor: '#fff',
            borderWidth: 1
        }
    },{
        type: 'line',
        data: yData2,
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            color: '#5C9DEF'
        },
        itemStyle: {
            color: '#5C9DEF',
            borderColor: '#fff',
            borderWidth: 1
        }
    }]
};