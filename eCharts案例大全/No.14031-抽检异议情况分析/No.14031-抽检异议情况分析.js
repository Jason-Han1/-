var sum=5432;
var num=981;
var v=num/sum*100;

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
var f =toDecimal2(v);
option = {
    backgroundColor:'#ffffff',
    title : {
        text: '抽检异议情况分析',
        subtext: '异议提出率'
    },
    tooltip : {
        formatter: "{a} <br/>{b} = {c}%"
    },
    series: [{
        name: '异议提出率计算公式=（提出异议数/抽检数）*100%',
        type: "gauge",
        min: 0,
        max: 100,
        startAngle: 210,
        endAngle: -30,
        radius: "80%",
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                 color: [[0.3, '#CD9B1D'],[0.7, '#48D1CC'],[1, '#00FF7F']]
            }
        },
 
       itemStyle: {
            normal: {
                shadowBlur: 10
            }
        },
        detail: {formatter:'{value}%'},
        data: [{value:f , name: '异议提出率'}]
    }]
}


