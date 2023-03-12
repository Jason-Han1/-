var salvProName =["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
var salvProValue =[90,81,54,44,35,17,74,72,67,55];
var salvProMax =[];//背景按最大值
var salvProMin =[];//背景按最大值
var Value =[];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(100);
    salvProMin.push(1);
    Value.push(100-salvProValue[i])
    
}
option = {
    backgroundColor:"#051F54",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '5%',
        containLabel: true
    },
    tooltip: {
        show: false,
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
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
    }, 
    series: [
        {
            name: '背景',
            type: 'bar',
            stack:'A',
            barWidth: 45,
            animation:false,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 0,
                }
            },
            data: salvProMax,
        },{
            name: '背景',
            type: 'bar',
            stack:'A',
            barWidth: 45,
            animation:false,
            itemStyle: {
                normal: {
                    color: "#051F54",
                    barBorderRadius: 0,
                }
            },
            data: salvProMin,
        },{
            name: '背景',
            type: 'bar',
            stack:'A',
            barWidth: 45,
            animation:false,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 0,
                }
            },
           label: {
              normal: {
                  show: true,
                  position: 'right',
                  color: '#fff',
                  fontSize: 14,
                  backgroundColor:'rgba(24,31,68,1)',
                  padding:[15,20,15,20]
              }
          },
            data: salvProMax,
        },{
            name: '值',
            type: 'bar',
            stack:'B',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 2,
            barGap: '-20%',
            data: salvProValue
        },{
            name: '值',
            type: 'bar',
            stack:'B',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: 'rgba(24,31,68,1)',
                },
            },
            barWidth: 2,
            barGap: '-20%',
            data: Value
        },{
            name: '值',
            type: 'bar',
            stack:'B',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: "#051F54",
                },
            },
            barWidth: 2,
            data: salvProMin
        },{
            name: '值',
            type: 'bar',
            stack:'B',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 2,
            barGap: '-20%',
            data: salvProValue
        }
    ]
};