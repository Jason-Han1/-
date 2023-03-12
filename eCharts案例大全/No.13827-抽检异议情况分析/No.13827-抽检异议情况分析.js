var colors = ['#66CDAA',  '#B8860B'];

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

var data1=[347,692,362,783,464,530,457,372,675,708,522,777,559,761];
var data3=[11.03,10.91,16.54,12.88,14.35,18.53,10.92,11.75,10.91,19.72,11.42,17.17,17.24,11.33];
var data2 = function() {
    var data = [4.3];
    for (var i = 1; i < data1.length; i++) {
        data.push(toDecimal2((data1[i]-data1[i-1])/data1[i-1]));
    }
    return data;
}();

option = {
    title: {
        text: '抽检异议情况分析',
        subtext: '各检验机构异议情况',
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
        data:['异议数','异议通过率'],
        align: 'left',
        left: 10,
        top:50
    },
     "calculable": true,
    "xAxis": [{
        data: ['广西自治区产品质量研究院',
        '广西自治区疾病防控中心',
        '广西自治区分析测试研究中心',
        '广西自治区食品药品检验室',
        '广西东盟食品药品安全检测中心',
        '广西自治区柳州食品药品检测所',
        '广西自治区桂林食品药品检测所',
        '广西自治区梧州食品药品检测所',
        '广西自治区北海食品药品检测所',
        '广西自治区玉林食品药品检测所',
        '广西自治区白色食品药品检测所',
        '广西自治区河池食品药品检测所',
        '广西自治区轻工产品质量检测站',
        '广西自治区粮油质量检测站']
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
                    color: colors[0]
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
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {name:'异议数',
            type:'bar',
           color: colors[0],
            barWidth : 30,
            data:data1},
        {
        name:'异议通过率',
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
        data:data3
    }]
};
