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
var data2=[36,40,30,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,32,34,33,30,43,35,36];

var data3=[26,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,35,40,39,39,32,42,32,44,43,39];
var data4=[42,40,30,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,32,34,33,30,43,35,36];

var data5=[24,30,53,40,41,43,45,50,46,43,46,37,40,31,38,37,38,35,42,22,49,35,40,39,30,32,42,32,44,43,39];
var data6=[25,31,45,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,22,34,33,30,48,35,36];

var data7=[32,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,45,40,39,39,32,42,32,24,43,39];
var data8=[31,40,35,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,24,43,42,31,41,38,32,34,33,30,43,25,36];

options = [{
    title: {
        text: '投诉与受理分析',
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
        data:['投诉信息数','受理信息数'],
        align: 'left',
        left: 10,
        top:50
    },
    xAxis: {
        "type": "category",
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:9
            }
        },
        "data": xData,
    },
    yAxis:{
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
    series: [
        {name:'投诉信息数',
            type:'bar',
           color: colors[0],
            data:data1
        },{
        name:'受理信息数',
         color: colors[1],
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
        data:data2
    }]
},{
    title: {
        text: '投诉与受理分析',
        subtext:'生产环节',
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
        data:['投诉信息数','受理信息数'],
        align: 'left',
        left: 10,
        top:50
    },
    xAxis: {
        "type": "category",
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:9
            }
        },
        "data": xData,
    },
    yAxis:{
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
    series: [
        {name:'投诉信息数',
            type:'bar',
           color: colors[0],
            data:data3
        },{
        name:'受理信息数',
         color: colors[1],
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
        data:data4
    }]
},{
    title: {
        text: '投诉与受理分析',
        subtext:'流通环节',
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
        data:['投诉信息数','受理信息数'],
        align: 'left',
        left: 10,
        top:50
    },
    xAxis: {
        "type": "category",
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:9
            }
        },
        "data": xData,
    },
    yAxis:{
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
    series: [
        {name:'投诉信息数',
            type:'bar',
           color: colors[0],
            data:data5
        },{
        name:'受理信息数',
         color: colors[1],
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
        data:data6
    }]
},{
    title: {
        text: '投诉与受理分析',
        subtext:'餐饮服务/使用环节',
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
        data:['投诉信息数','受理信息数'],
        align: 'left',
        left: 10,
        top:50
    },
    xAxis: {
        "type": "category",
        "axisLabel": {
            "interval": 0,
            textStyle:{
                fontSize:9
            }
        },
        "data": xData,
    },
    yAxis:{
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
    series: [
        {name:'投诉信息数',
            type:'bar',
           color: colors[0],
            data:data7
        },{
        name:'受理信息数',
         color: colors[1],
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
        data:data8
    }]
}];
