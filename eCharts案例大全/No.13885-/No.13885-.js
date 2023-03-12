var colors = ['#1186c9','#489dcd','#86b6d2','#12ea1c'];
var city=['特大型餐馆', '大型餐馆', '中型餐馆', '快餐店', '小吃店', 
         '饮品店', '食堂', '集体用餐单位'
        ,'中央厨房','其他'];
var data1=[133, 333, 222, 541, 341,133, 333, 222,312,321];
var data2=[120, 132, 101, 134, 90,120, 132, 101, 134, 90];
var data3=[120, 132, 101, 134, 90,120, 132, 101, 134, 90];
option = {
    backgroundColor:'#ffffff',
    title: {
        //text: '办理事项超时地区Top5',
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
        left: '25%',
        right: '25%',
        top:'15%',
        bottom:'10%',
        containLabel: true
    },    
    legend: {
        data:['优秀','良好','一般'],
        //right:'right'
        top:'10%'
    },
    yAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: city
        }
    ],
    xAxis: [
        
        {
            splitLine: {show: false},
            type: 'value',
            name: '评定企业数',
            min: 0,
           // max: 1500,
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
            name:'优秀',
            stack: '总量',
            type:'bar',
            barWidth : 30,
            data:data1
        },
        {
            name:'良好',
            stack: '总量',
            type:'bar',
            data:data2
        },
        {
            name:'一般',
            stack: '总量',
            type:'bar',
            data:data3
        }]
};
