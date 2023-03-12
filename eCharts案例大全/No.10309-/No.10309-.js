var data = [
    {name:"三天",value:10,his:20,type:"红色"},
     {name:"s天",value:10,his:30},
     {name:"w天",value:10,his:20,type:"黄色"},
     {name:"x天",value:10,his:80},
     {name:"z天",value:10,his:20}
]
var warnColorSet = {
    warn: [
        {type:"红色",color:"rgba(255,0,0,0.8)"},
        {type:"橙色",color:"rgba(0,255,0,0.8)"},
        {type:"黄色",color:"rgba(0,255,255,0.8)"},
        {type:"蓝色",color:"rgba(0,0,255,0.8)"}
    ],
    wanrKey: "type",
    barColor: [
        ["rgb(255, 119, 15)","rgb(192, 36, 0) "],
        ["rgb(0, 233, 28)","rgb(12, 169, 1) "]
    ],
    bgSet: "rgba(0,0,0,0)",
    seriesSet:[
        {name:"极值",key:"value"},
        {name:"历史",key:"his"}
    ]
}


var dataset = [];

var xdata = [];
warnColorSet.seriesSet.forEach(is => {
    var d = [];
    data.forEach(item => {
        d.push(item[is.key])
    })
    dataset.push({name:is.name,data:d})
})
data.forEach(item => {
    xdata.push(item.name);
})

/*var dataset = [
    {name:"极值",data:[20,50,80,90]},
    {name:"历史",data:[30,20,30,70]} 
]*/
var serieBgConfig = {
    name: " ",
    type: "bar",
    barWidth: '100%',
    xAxisIndex: 1,
    yAxisIndex: 0,
    label: {
      show: true,
        position: "top",
        textStyle: {
          color: "#ffc72b",
          fontSize: 20
        },
        formatter:function(a,b,c){
            return a.name;
        }
    },
    itemStyle: {
      normal: {
        barBorderRadius: 0,
        color: 'rgba(0,0,0,0)'
      }
    },
    data: [],
    zlevel: 10
  }
  var serieConfig = {
    name: "极值",
    type: "bar",
    barGap:'10%',
    //barWidth: "30%",
    xAxisIndex: 0,
    yAxisIndex: 0,
    label: {
      normal: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        barBorderRadius: 0
      }
    },
    data: [],
    zlevel: 11
  }
  var colors = []
  warnColorSet.barColor.forEach(item => {
      if(warnColorSet.barColor &&
      typeof item === "string"){
          colors.push(item)
      } else if (warnColorSet.barColor &&
       item instanceof Array) {
          colors.push(new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color:item[0]
          },
          {
            offset: 1,
            color: item[1]
          }
        ]))
      } else {
          colors.push("rgba(0,0,0,0)")
      }
  });
  if(warnColorSet.barColor && typeof warnColorSet.barColor === "string"){
      fo
      serieConfig.itemStyle.normal.color = warnColorSet.barColor;
  } else if (warnColorSet.barColor && typeof warnColorSet.barColor instanceof Array){
       /*serieConfig.itemStyle.normal.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color:warnColorSet.barColor[0]
          },
          {
            offset: 1,
            color: warnColorSet.barColor[1]
          }
        ]);
        */
  }
var seriesData = [];
var legend = [];
var max = 0;
var len = 0;
var maxData = []
dataset.forEach(item => {
    legend.push(item.name);
    const serieConfigset = JSON.parse(JSON.stringify(serieConfig))
    serieConfigset.name = item.name
    serieConfigset.data = item.data
    seriesData.push(serieConfigset)
    item.data.forEach(items => {
        max = max<items ? items : max;
    })
    len = item.data.length;
});

var bgData=[]
data.forEach(item => {
    bgData.push({value: max,name:1,
        label:{ color:'rgba(0,0,0,0)'},
        itemStyle:{color:'rgba(0,0,0,0)'} 
    })
    warnColorSet.warn.forEach(it => {
        if(it.type===item[warnColorSet.wanrKey]){
            bgData[bgData.length - 1] =  {value: max,name:item[warnColorSet.wanrKey],
                label:{ color:it.color},
                itemStyle:{color:it.color} 
            }
        }
    })
   
})

serieBgConfig.data = bgData
seriesData.push(serieBgConfig)
option = {
    tooltip:{show:true,formatter:function(params){
        if(params.seriesName === " "){
            return "";
        }
        return params.seriesName + " : " + params.value;
    }},
    grid:{
        right: 80
    },
    legend: {
          type: "plain",
          right: 5,
          top: 10,
          orient: "vertical",
          textStyle: {
            color: "red"
          },
          itemWidth: 30,
          width: 30,
          itemGap: 20,
          zlevel: 12
    },
    xAxis: [{
        type: 'category',
        data: xdata,
        splitArea:{
            show: true,
            areaStyle:{
                color:'rgba(0,0,0,0.1)'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                width: 10
            }
        }
    },{
        type: 'category',
        show:false,
        data: xdata
    }],
    yAxis: {
        max:max,
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        type: 'value',
        axisLabel:{  
            color:'#fff'
        }
    },
    series: seriesData,
    color: colors
};