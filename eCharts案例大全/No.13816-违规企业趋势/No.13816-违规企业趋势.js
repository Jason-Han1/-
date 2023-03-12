var colors = ['#5793f3',  '#8B7500'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();

function toDecimal2(x) {
var f = parseFloat(x);      
if (isNaN(f)) {   
 return false;     
}          
var y = Math.round(x*100)/100;  
var s = y.toString();       
var rs = s.indexOf('.');      
if (rs < 0) {   
 rs = s.length;      
 s += '.';   
            }       
while (s.length <= rs + 2) {   
 s += '0';       
}            
return s;   
} 

var data1=[468,636,393,492,394,627,496,528,533,793,623,659];
var data2 = function() {
    var data = [10.25];
    for (var i = 1; i < data1.length; i++) {
        data.push(toDecimal2((data1[i]-data1[i-1])/data1[i-1]*100));
    }
    return data;
}();

option = {
    title: {
        text: '违规企业趋势',
        textStyle:{
             fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:80,
    },   
    legend: {
        data:['违法违规企业数','违规企业环比率'],
        align: 'left',
        left: 10,
        top:30
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:10
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {name:'违法违规企业数',
            type:'bar',
           color: colors[0],
            barWidth : 30,
            data:data1},
        {
        name:'违规企业环比率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4
                }
            },
        data:data2
    }]
};
