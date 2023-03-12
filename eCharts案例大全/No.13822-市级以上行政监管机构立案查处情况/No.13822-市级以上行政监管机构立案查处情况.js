var colors = ['#B8B8B8',  '#8B4513'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 32; i++) {
        data.push(i+'日');
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
var data1=[46,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,35,40,39,39,32,42,32,44,43,39];
var data2=[32,40,30,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,32,34,33,30,43,35,36];
var data3 = function() {
    var data = [];
    for (var i = 0; i < data1.length; i++) {
        data.push(toDecimal2((data1[i]-data2[i])/data2[i]*100));
    }
    return data;
}();

option = {
    title: {
        text: '市级以上行政监管机构立案查处情况',
        subtext:'研制环节',
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
        top:85,
    },   
    legend: {
        data:['立案数','立案同比率'],
        align: 'left',
        left: 10,
        top:50
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
                fontSize:9
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min:0,
            max:80,
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
        {name:'立案数',
            type:'bar',
           color: colors[0],
            data:data1},
        {
        name:'立案同比率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:5,//折线宽度
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#fbfa96' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f72806' // 100% 处的颜色
                    }], false),
                    opacity: 0.4
                }
            },
        data:data3
    }]
};
