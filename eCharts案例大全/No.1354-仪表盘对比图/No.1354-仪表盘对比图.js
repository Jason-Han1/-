var center1= ['50%', '65%']
var data1='2200'
var data2='1800'
var Dvalue = ((data1/data2)*100).toFixed(2)

var startAngle=180
var endAngle=0
var min= 0
var max=150
var radius="85%"
var pointer={ show:false}
var axisLabel= {
        distance: -5,
        color: '#999',
        fontSize: 12,
        formatter: function (value) {
                return value + '%';
            }
      }

var axisTick = {
        distance: -35,
        splitNumber: 5,
        length: 5,
        lineStyle: {
          color: '#999'
        }
      }
var splitLine={
        distance: -35,
        length: 6,
        lineStyle: {
          width: 3,
          color: '#999'
        }
      }
var anchor= {show: false}

var axisLine={
        lineStyle: {
            width: 30,
           color: [
                [1, '#f4f4f4']
            ]
        }
    }
var textStyle={
            textAlign:'center',
            fontSize: 16,
            lineHeight:24,
            color: '#333',
            rich:{
                a:{
                    color:'#333',
                    fontSize:16,
                    fontWeight:'bold',
                    lineHeight:24
                }
            }
        } 

var title={
            show: true,
            offsetCenter: [0, '60%'],
            fontSize: 18
        }
var detail= {
            valueAnimation: true,
            fontSize: 30,
            lineHeight:30,
            color:'#106ae7',
            offsetCenter: [0, '-20%'],
            fontWeight:'bold',
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
        text: '当前值\n{a|'+data1+'} 吨',
        left: '10%',
        top: '70%',
        textStyle: textStyle 
    },
    {
        text: '目标值\n{a|'+data2+'} 吨',
        right: '7%',
        top: '70%',
        textStyle: textStyle
    }],
    series: [
        {
        type: 'gauge',
        startAngle: startAngle,
        center:center1,
        endAngle: endAngle,
        min: min,
        max: max,
        radius:radius,
        splitNumber: 6,
        progress:{ 
            show: true, 
            width: 30,
            itemStyle: {
                color: "#90ccff"
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
            value: Dvalue,
            name:''
        }]
        
    },
    {
        type: 'gauge',
        startAngle: startAngle,
        center:center1,
        endAngle: endAngle,
        min: min,
        max: 150,
        radius:radius,
        splitNumber: 5,
        progress:{ 
            show: true, 
            width: 15,
            itemStyle: {
                color: "#1492ff"
              }
        },
        pointer: {show:false},
        axisLine:{show:false},
        axisTick: {show:false},
        splitLine:{show:false},
        axisLabel: {show:false},
        anchor: {show:false},
        title: {show:false},
        detail: {show:false},
        data: [{
            value: 100,
            name:''
        }]
        
    }
    ]
};