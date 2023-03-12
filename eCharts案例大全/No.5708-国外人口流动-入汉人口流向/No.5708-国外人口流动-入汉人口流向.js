var salvProName =["湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
var salvProValue =[144,135,117,74,72,67,55];

option = {
    // backgroundColor:"#003366",
     title: {
        text: '国外人口流动-出汉方向',
        textStyle: {
            color: '#FFFF'
        }
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
        },
        data:salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: salvProValue
        },

    ]
};


var salvProNamesrc =["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
var salvProValuesrc =[239,11,22,2,55,10,12,72,12,55];
var key=0

setInterval(function() {
    

    salvProValue.shift();

    salvProName.shift();
    
    salvProValue.push(salvProValuesrc[key]);
        salvProName.push(salvProNamesrc[key]);


key=(key+1)%10;


    option = {
    // backgroundColor:"#003366",
     title: {
        text: '国外人口流动-出汉方向',
        textStyle: {
            color: '#FFFF'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
        },
        data:salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: salvProValue
        },

    ]
};

 myChart.setOption(option);
}, 3000);