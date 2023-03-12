var salvProName = ["安徽省", "河南河南省河南省河南省河南省河南省河南省河南省省", "浙江省", "湖北省", "贵州省", "江西省", "江苏省", "四川省", "云南省", "湖南省"];
var salvProValue = [250, 181, 154, 144, 135, 117, 74, 72, 67, 55];

option = {
    backgroundColor: "#fff",
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        type: 'category',
        inverse: true,
        boundaryGap: true,
        axisLabel: {
            show: true,
            lineStyle: {
                color: '#f2f2f2'
            }
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
    },
    yAxis: [{
        show: true,
        splitLine: {
            show: true,
            textStyle: {
                color: '#333'
            },
            lineStyle:{
                color: '#8c8c8c',
                type:'dashed',
            }
        },
        axisLine: {
            show: false,
            textStyle: {
                color: '#333'
            },
            lineStyle:{
                color: '#8c8c8c',
                type:'dashed',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        type: 'value'
    }],
    series: [{
            // name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 0, 0],
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
        }
    ]
};