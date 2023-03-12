var xAxisData = ['上海','北京','广东','江苏','浙江','福建','山东','湖南','湖北','四川'];
var data01 = [];
var data02 = [];
for (var i = 9; i < 19; i++) {
    data01.push(Math.round(Math.random() * 500) + 200);
    data02.push(Math.round(Math.random() * 600) + 100);
}
option = {
    title: {
        text: '柱状图示例',
    },
    legend:{selectedMode:false,data:['资金量','交易笔数']},
    xAxis:{
        max: 1000,
        axisLabel:{show:false},
        splitLine:{show:false},
        axisLine:{show:false},
        axisTick:{show:false},
    },
    yAxis:[{
        data: xAxisData,
        zlevel:1,
        axisLabel:{show:true,inside:true,textStyle:{color:'#03a9f4'}},
        splitLine:{show:false},
        axisLine:{show:false},
        axisTick:{show:false},
    }, {// 辅助 x 轴
        show: false,
        data: xAxisData  
    }],
    series: [{
        // 辅助系列
        type: 'bar',
        silent: true,
        yAxisIndex:1,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: 'rgba(0, 0, 0, 0.2)'      
            }
        },
        barMaxWidth: 60,
        data: data01.map(function (val) {
            return 1000;
        })
    }, {
        type: 'bar',
        name:'资金量',
        stack: '资金量',
        data: data01,
        barWidth: 5,
        barGap:2,
        label:{normal:{show:true,position:'right'}},
        itemStyle: {
            normal: {
                //barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 0.2,
                        color: 'transparent'
                    }, {
                        offset: 0.4,
                        color: 'rgba(169, 110, 61, 0.1)'
                    }, {
                        offset: 0.8,
                       color: 'rgba(169, 110, 61, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(169, 110, 61, 0.7)'
                }])
            }
        }
    },{
            type: 'bar',
            stack: '资金量',
            silent: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderRadius: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                }
            },
            barMinHeight: 3
    },{
        type: 'bar',
        name: '交易笔数',
        stack: '交易笔数',
        data: data02,
        barWidth: 5,
        label:{normal:{show:true,position:'right'}},
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 0.2,
                        color: 'transparent'
                    }, {
                        offset: 0.4,
                        color: 'rgba(96, 236, 236, 0.1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(96, 236, 236, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(96, 236, 236, 0.7)'
                }])
            }
        }
    },{
            type: 'bar',
            stack: '交易笔数',
            silent: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderRadius: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                }
            },
            barMinHeight: 3
    }]
};