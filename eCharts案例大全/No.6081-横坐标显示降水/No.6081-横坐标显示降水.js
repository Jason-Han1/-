var salvProName = ["安徽省", "河南省", "浙江省", "湖北省", "贵州省", "江西省", "江苏省", "四川省", "云南省", "湖南省"];
var salvProValue = [5, 10, 15, 20, 25, 30, 35, 40, 45, 55];
var outerData = [100, 100, 100, 100]; //外框
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option = {
    backgroundColor: 'rgba(0,0,0,1)',
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
            return params[0].name + ' <br> ' + '降水量：' + params[0].value
        }
    },
    xAxis: {
        type: 'value',
        //  max: max,
        splitLine: {
            show: true,
            lineStyle: {
                color: ["#163C60"],
                width: 1,
                type: "dotted"
            }
        },
        axisLabel: {
            textStyle: {
                // color: "#fff",
                color: "#fff",
                fontSize: "16"
            },
            margin: 20
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

        axisPointer: { //基准线
            lineStyle: {
                color: '#52cdef'
            }
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: '16'
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
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(28,69,144,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(4,254,247,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: salvProValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};