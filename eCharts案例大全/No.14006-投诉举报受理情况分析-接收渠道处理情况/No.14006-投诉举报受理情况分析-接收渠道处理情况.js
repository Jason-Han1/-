var colors = ['#1186c9','#86b6d2','#12ea1c'];
var city=['电话','网络', '信件','走访','其他'];
var data1=[375,286,258,239,130];
var data2=[353,269,236,152,101];
var data3=[253,199,146,142,201];
option = {
    title: {
        text: '接收渠道处理情况',
        textStyle:{
             fontSize: '22'
        }
    },
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '20%'
    },    
    legend: {
        data:['受理信息数','不予受理信息数'],
        right:'right'
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: city
        }
    ],
    yAxis: [
        
        {
            splitLine: {show: false},
            type: 'value',
            name: '信息数',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }],
        
    series: [{
            name:'受理信息数',
            stack: '总量',
            type:'bar',
            barWidth : 30,
            data:data1
        },
        {
            name:'不予受理信息数',
            stack: '总量',
            type:'bar',
            data:data3
        }]
};
