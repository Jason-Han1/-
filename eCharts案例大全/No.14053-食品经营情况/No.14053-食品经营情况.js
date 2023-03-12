var colors = ['#1186c9','#489dcd','#86b6d2','#12ea1c'];
var city=['南宁市','柳州市', '桂林市','百花市','北海市'];
var data1=[375,286,258,239,130];
var data2=[353,269,236,152,101];
var data3=[253,199,146,142,201];
option = {
    title: {
        text: '办理事项超时地区Top5',
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
        data:['食品销售经营者','餐饮服务经营者','单位食堂'],
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
            name: '受理事项数',
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
            name:'食品销售经营者',
            stack: '总量',
            type:'bar',
            barWidth : 30,
            data:data1
        },
        {
            name:'餐饮服务经营者',
            stack: '总量',
            type:'bar',
            data:data2
        },
        {
            name:'单位食堂',
            stack: '总量',
            type:'bar',
            data:data3
        }]
};
