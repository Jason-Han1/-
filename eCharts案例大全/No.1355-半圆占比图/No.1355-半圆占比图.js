var center1= ['15%', '70%']
var center2= ['50%', '70%']
var center3= ['85%', '70%']
var startAngle=180
var endAngle=0
var min= 0
var max=100
var radius="40%"
var pointer={ show:false}
var axisLine={
        lineStyle: {
            width: 30,
           color: [
                [1, '#f4f4f4']
            ]
        }
    }
var axisTick={ show: false}
var splitLine={ show: false}
var axisLabel={
            distance: 5,
            color: '#666',
            fontSize: 14,
            formatter: function (value) {
                if(value===0||value===100){
                    return value + '%';
                }
            }
        }
var anchor= {
            show: false,
            showAbove: false,
            size: 25,
            itemStyle: {
                borderWidth: 60
            }
        }
var title={
            show: true,
            offsetCenter: [0, '30%'],
            fontSize: 18
        }
var detail= {
            valueAnimation: true,
            fontSize: 24,
            lineHeight:30,
            color:'#106ae7',
            fontWeight:'bold',
            offsetCenter: [0, '-20%'],
            formatter: function (value) {
                return '{a|占比} '+'\n'+value + '{a|%}';
            },
            rich: {
                a: {
                    color:'#333',
                    fontSize:16,
                    lineHeight:30
                }
            }
        }
option = {
    title:[{
        text: '总数{a|65256}人',
        left: 0,
        top: 20,
        textStyle: {
            fontWeight: 'bold',
            fontSize: '16',
            color: '#333',
            rich:{
                a:{
                    color: '#319fff',
                    fontSize: 24,
                    lineHeight:30,
                    padding:[0,10]
                }
            }
        },
        
    }],
    grid: {
        top:0,
    },
    series: [
        {
        type: 'gauge',
        startAngle: startAngle,
        center:center1,
        endAngle: endAngle,
        min: min,
        max: max,
        radius:radius,
        progress:{ 
            show: true, 
            width: 30,
            itemStyle: {
                color: "#ff42a4"
              }
        },
        pointer: pointer,
        axisLine:axisLine,
        axisTick: axisTick,
        splitLine:splitLine,
        axisLabel: axisLabel,
        anchor: anchor,
        title: title,
        detail: detail,
        data: [{
            value: 27.8,
            name:'女性18165人'
        }]
    },
    {
        type: 'gauge',
        startAngle: startAngle,
        center:center2,
        radius:radius,
        endAngle: endAngle,
        min: min,
        max: max,
       progress:{ 
            show: true, 
            width: 30,
            itemStyle: {
                color: "#1ac9f6"
              }
        },
        pointer: pointer,
        axisLine:axisLine,
        axisTick: axisTick,
        splitLine:splitLine,
        axisLabel: axisLabel,
        anchor: anchor,
        title: title,
        detail: detail,
        data: [{
            value: 53.4,
            name:'大专及以上学历34820人'
        }]
    },
    {
        type: 'gauge',
        startAngle: startAngle,
        center:center3,
        radius:radius,
        endAngle: endAngle,
        min: min,
        max: max,
        progress:{ 
            show: true, 
            width: 30,
            itemStyle: {
                color: "#12d891"
              }
        },
        pointer: pointer,
        axisLine:axisLine,
        axisTick: axisTick,
        splitLine:splitLine,
        axisLabel: axisLabel,
        anchor: anchor,
        title: title,
        detail: detail,
        data: [{
            value: 28.3,
            name:'35岁及以下18435人'
        }]
    }
    ]
};