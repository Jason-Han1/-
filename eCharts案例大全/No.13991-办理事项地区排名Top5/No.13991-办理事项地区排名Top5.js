var colors = ['#5793f3', '#FFA500'];
var city=['南宁市','柳州市', '桂林市','百花市','北海市'];
var data1=[845,796,758,699,620];
var data2=[153,129,136,122,101];
option = {
    title: {
        text: '办理事项地区排名Top5',
        textStyle:{
             fontSize: '18'
        }
    },
    color: colors,
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '50%',
        bottom:'60%'
    },    
    legend: {
        data:['食品生产企业','食品添加剂生产企业'],
        top:35,
        left:120
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
            name:'食品生产企业',
            stack: '总量',
            type:'bar',
            barWidth : 30,
            data:data1
        },
        {
            name:'食品添加剂生产企业',
            stack: '总量',
            type:'bar',
            data:data2
        }]
};