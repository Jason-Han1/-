// 为保证正常绘图，代码格式与所选格式需保持一致;
// 请输入JS代码或前往官网复制示例代码;
// 复制完代码后，请先将代码中的数据列替换为绑定的数据列，绑定的数据列从上至下依次为column1、column2......，option部分请添加options.data以引用绑定列，chart绘制的DOM id会自动替换为变量$container
test = [
	{
		"column1": "大区部",
		"column2": "Sum_total",
		"column3": "Sum_roughtotal",
		"column4": "Sum_buildingtotal"
	},
	{
		"column1": "北京大区",
		"column2": 100,
		"column3": 200,
		"column4": 300
	},
	{
		"column1": "华东大区",
		"column2": 400,
		"column3": 500,
		"column4": 600
	},
	{
		"column1": "川藏大区",
		"column2": 700,
		"column3": 800,
		"column4": 900
	},
	{
		"column1": "东北大区",
		"column2": 1000,
		"column3": 1100,
		"column4": 1200
	},
	{
		"column1": "赣闽大区",
		"column2": 1300,
		"column3": 1400,
		"column4": 1500
	},
	{
		"column1": "河南大区",
		"column2": 1600,
		"column3": 1700,
		"column4": 1800
	},
	{
		"column1": "湖北大区",
		"column2": 1900,
		"column3": 2000,
		"column4": 2100
	},
	{
		"column1": "津冀大区",
		"column2": 2200,
		"column3": 2300,
		"column4": 2400
	},
	{
		"column1": "山东大区",
		"column2": 2500,
		"column3": 2600,
		"column4": 2700
	},
	{
		"column1": "陕晋大区",
		"column2": 2800,
		"column3": 2900,
		"column4": 3000
	},
	{
		"column1": "上海大区",
		"column2": 3000,
		"column3": 2800,
		"column4": 2605
	},
	{
		"column1": "苏北大区",
		"column2": 2600,
		"column3": 2400,
		"column4": 2200
	},
	{
		"column1": "西北大区",
		"column2": 2200,
		"column3": 2000,
		"column4": 1800
	},
	{
		"column1": "湘贵大区",
		"column2": 1800,
		"column3": 1600,
		"column4": 1400
	},
	{
		"column1": "云桂大区",
		"column2": 1400,
		"column3": 1300,
		"column4": 1200
	},
	{
		"column1": "浙南大区",
		"column2": 1200,
		"column3": 1000,
		"column4":1900
	},
	{
		"column1": "浙皖大区",
		"column2": 2000,
		"column3": 3000,
		"column4": 875
	},
	{
		"column1": "重庆大区",
		"column2": 2000,
		"column3": 2500,
		"column4": 534
	}
]

var i=0;
var m=0;
var radarloop=[];
while(i<test.length-1){
  if(m==8){
    m=0
  }
  if(m==0){
    radarloop.push([]);
  }
  pos=[]
    if((parseInt(m/4))%2==0){
      pos=[15*(m+1)+9*m,25]
    }
    else{pos=[15*((m-4)+1)+9*(m-4),65]}
      
    radarloop[parseInt(i/8)].push({
        indicator: [{ text: '综合评分',max:3000},{ text: '竞争力',max:3000},{ text: '发展面积' ,max:3000},{ text: '增长潜力',max:3000 },{ text: '市场容量',max:3000 },{ text: '市场饱和度',max:3000 },{ text: '执行力' ,max:3000},{ text: '招商能力' ,max:3000},{ text: '客户体验' ,max:3000},{ text: '直播能力' ,max:3000}],
        center:[pos[0]+'%',pos[1]+'%'],
        radius:100,
        startAngle: 90,
        splitNumber: 5,
        shape: '',
        axisName: {
          formatter: '{value}',
          color: '#000',
          fontSize: 5
        },
        splitArea: {
          areaStyle: {
            color: ['#E6E6E6', '#F5F5F5', '#E6E6E6', '#F5F5F5'],
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#DFDFDF'
          }
        },
        name: {
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
        },
        splitLine: {
          lineStyle: {
            color: '#DFDFDF'
          }
        }
      });
        m++;
        i++;
}

var j=0;
var k = 0;
var seriesloop=[]
while(j< test.length-1){
    valueloop = [test[j+1].column2,test[j+1].column3,test[j+1].column4,test[j+1].column5,test[j+1].column6,test[j+1].column7,test[j+1].column8,test[j+1].column9,test[j+1].column10,test[j+1].column11]
    if(k==8){
      k=0
    }
    if(k==0){
      seriesloop.push([]);
    }
    seriesloop[parseInt(j/8)].push({
        type: 'radar',
        name:test[j+1].column1,
        tooltip:{
          trigger:'item'
        },
        radarIndex: k,
        emphasis: {
          lineStyle: {
            width: 4,
          }
        },
        data: [
          {
            value: valueloop,
            //name: 'Data A',
            areaStyle: {
              color: '#7BACFA'
            },
            itemStyle:{
              color: '#FFF',
              borderColor: '#5ABAFD',
              borderWidth: 0.5
            },
            lineStyle:{
              color:'#2577FB'
            }
          },
        ],
        symbol: 'circle',
      })
    k++;
    j++;
}

optionsloop=[];
for(var a=0;a<3;a++){
  optionsloop.push({radar: radarloop[a],series:seriesloop[a]});
}

console.log(optionsloop[2])
option = {
  tooltip: {              // 本系列特定的 tooltip 设定。   
                show: true,
                formatter: "",
                backgroundColor: "rgba(255,250,255,0.4)",  // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
                borderColor: "#333",        // 提示框浮层的边框颜色。...
                borderWidth: 0,             // 提示框浮层的边框宽。...
                padding: 5,                 // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
                textStyle: {                // 提示框浮层的文本样式。...
                    // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
                },
        },
  timeline:{
      data:[1,2,3],
      label : {
        formatter : function(s) { return "第"+s+"页"; }
      },
      autoPlay : false,
      playInterval : 1500,
      tooltip:{formatter : function(s) {return "第"+s.value+"页"; }},
      replaceMerge:['radar','series']
  },
  options:optionsloop
};