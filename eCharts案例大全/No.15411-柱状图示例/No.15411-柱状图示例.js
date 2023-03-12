var xAxisData = ['上海','北京','广东','江苏','浙江','福建','山东','湖南','湖北','四川'];
var data01 = [];
var data02 = [];
for (var i = 9; i < 19; i++) {
    data01.push(Math.round(Math.random() * 500) + 200);
    data02.push(Math.round(Math.random() * 600) + 100);
}
option = {
    title: { text: '柱状图示例', },
    legend:{data:['资金量','交易笔数']},
    xAxis:{
        axisLabel:{show:false},
        splitLine:{show:false},
        axisLine:{show:false},
        axisTick:{show:false},
    },
    yAxis:[{
        data: xAxisData,
        axisLabel:{inside:true,textStyle:{color:'#03a9f4'}},
        axisLine:{show:true,lineStyle:{color:'rgba(96, 236, 236)',type:'dashed'}},
        splitLine:{show:false},
        axisTick:{show:false},
    }],
    series: [{
        name:'资金量',
        type:'bar',
        stack: '总量',
        barWidth: 10,
        label: {normal:{show: true, position: 'right'}},
        data:[320, 302, 341, 374, 390, 450, 420,123,122,432],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'yellow'
                    }, {
                        offset: 0.4,
                        color: 'green'
                    }, {
                        offset: 0.8,
                       color: 'red'
                    }, {
                        offset: 1,
                        color: 'blue'
                }])
            }
        }
    },{
        name:'交易笔数',
        type:'bar',
        stack: '总量',
        label: {normal:{show: true, position: 'left'}},
        data:[-120, -132, -101, -134, -190, -230, -210,-123,-122,-432],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'transparent'
                    }, {
                        offset: 0.4,
                        color: 'rgba(169, 110, 61, 0.3)'
                    }, {
                        offset: 0.8,
                       color: 'rgba(169, 110, 61, 0.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(169, 110, 61, 1)'
                }])
            }
        }
    }]
};