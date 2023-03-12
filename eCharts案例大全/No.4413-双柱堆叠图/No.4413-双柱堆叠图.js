option = { 
tooltip : { 
trigger: 'axis', 
axisPointer: { 
type: 'cross', 
label: { 
  formatter: function (params) { 
  if (params.seriesData.length === 0) { 
  window.mouseCurValue = params.value; 
} 
} 
} 
}, 
formatter: function (params) { 
let res = '', sum = 0; 
for (let i = 0; i < params.length; i++) { 
let series = params[i]; 
sum += Number(series.data); 
if (sum >= window.mouseCurValue) { 
res = series.marker + series.seriesName + ':' + series.data + ''; 
break; 
} 
} 
return res; 
}, 
}, 
legend: { 
data:['省份一','省份二','省份三','省份四'] 
}, 
grid: { 
left: '3%', 
right: '4%', 
bottom: '3%', 
containLabel: true 
}, 
xAxis : [ 
{ 
type : 'category', 
data : ['首购\t复购\n201801','首购\t复购\n201801','首购\t复购\n201801','首购\t复购\n201801','首购\t复购\n201801','首购\t复购\n201801','首购\t复购\n201801'] 
} 
], 
yAxis : [ 
{ 
type : 'value'
} 
], 
series : [ 
{ 
name: '省份一', 
type: 'bar', 
stack: '广告', 
color: '#c23531', 
data:[320, 332, 301, 334, 390, 330, 320] 
}, 
{ 
name: '省份二', 
type: 'bar', 
stack: '广告', 
color: '#2f4554', 
data:[120, 132, 101, 134, 90, 230, 210] 
}, 
{ 
name: '省份三', 
type: 'bar', 
stack: '广告', 
color: '#61a0a8', 
data:[220, 182, 191, 234, 290, 330, 310] 
}, 
{ 
name: '省份四', 
type: 'bar', 
stack: '广告', 
color: '#d48265', 
data:[150, 232, 201, 154, 190, 330, 410] 
}, 
{ 
name: '省份一', 
type: 'bar', 
stack: '搜索引擎', 
color: '#c23531', 
data:[620, 732, 701, 734, 1090, 1130, 1120] 
}, 
{ 
name: '省份二', 
type: 'bar', 
stack: '搜索引擎', 
color: '#2f4554', 
data:[120, 132, 101, 134, 290, 230, 220] 
}, 
{ 
name: '省份三', 
type: 'bar', 
stack: '搜索引擎', 
color: '#61a0a8', 
data:[60, 72, 71, 74, 190, 130, 110] 
}, 
{ 
name: '省份四', 
type: 'bar', 
stack: '搜索引擎', 
color: '#d48265', 
data:[62, 82, 91, 84, 109, 110, 120] 
} 
] 
};