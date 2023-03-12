var salvProName =["企业白领",
"在读学生",
"服务业人员",
"其他",
"医生",
"个体户/自由职业",
"工人",
"教师",
"政府及事业单位人员",





];
var salvProValue =[56.1,
11.9,
8.61,
5.64,
4.48,
4.23,
4.19,
3.08,
1.77,


];
var salvProMax =[];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option = {
    backgroundColor:"#fff",
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
        show: true,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
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
        inverse: false,
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
            barWidth: 14,
            data: salvProValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 14,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,0.2)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};