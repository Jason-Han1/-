var sta = 1;
var title1 = '换电次数';
var title2 = '行驶里程';
var linx1=[];
var linx2=[];
var ldata1=[];
var ldata2=[];
var data1 = [];
var data2 =  [];
var color1 = ['rgba(0,244,255,1)','rgba(0,160,221,1)'];
var color2 = ['rgba(153, 153, 255,1)','rgba(153, 102, 255,1)'];

var thrityMonth = [];
    for (var i = 0; i < 7; i++) {
    var date =new Date(new Date().setDate(new Date().getDate() - i));
      var m = date.getMonth()+1;  var d = date.getDate();  
      linx1.push(m+"-"+d);
      linx2.push(m+"-"+d);
      ldata1.push(Math.round(Math.random()*(60 - 10) + 1));
      ldata2.push(Math.round(Math.random()*(60 - 10) + 1));
      data1.push( Math.round(Math.random()*(100 - 10) + 10));
      data2.push( Math.round(Math.random()*(100 - 10) + 10));
    };


option = {
    backgroundColor: 'rgba(0,0,0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
          left: '0%',
          right: '10%',
          top: '15%',
          bottom: '5%',
          containLabel: true
      },
    xAxis: [{
        type: 'category',
        data: linx1,
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
       max: 120,
        axisLabel: { formatter: '{value}',color: '#e2e9ff',},
        axisTick: {show: false},
        splitLine: {show: false, lineStyle: {color: 'rgba(255,255,255,0.12)' }
        }
    },{
        max: 140,
        axisLabel: {color: '#e2e9ff',},
        axisTick: {show: false},
        splitLine: { show: false,lineStyle: {color: 'rgba(255,255,255,0.12)' }
        }
    }],
     legend: {
        right:20,
        itemWidth:20,                             
        itemHeight:10,  
        textStyle: {
             color: "#fff"
         }
    },
    series: [{
      	name:title1,
        type: 'bar',
        data: data1,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color:  color1[0], 
                }, {
                    offset: 1,
                    color: color1[1], 
                }], false),
                shadowBlur: 1,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: color1[0],
                    fontSize: 15
                }

            }
        }
    },{
            name: '车辆数',
            type: 'line',
            smooth: true, 
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 3,
            yAxisIndex:1,
            lineStyle: {
                normal: {
                    color: "#ee2800",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'insideTopRight',
                textStyle: {
                    fontSize: 15,
                    color: '#fff',
                }
            },
            itemStyle: {
                color: "#ee2800",
                borderColor: "#ee2800",
                borderWidth: 5,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            data: ldata1
        }]
};
console.log(option);
/*定时任务*/
setInterval (   function(){
  if(sta==1){
    /*option.title[1].text=title2;*/
    option.series[0].data=data2;
    option.series[1].data=ldata2;
    option.series[0].itemStyle.normal.color.colorStops[0].color=color2[0];
    option.series[0].label.normal.textStyle.color=color2[0];
    option.series[0].itemStyle.normal.color.colorStops[1].color=color2[1];
    option.xAxis[0].data=linx2;
    sta=0;
  }else{
    /*option.title[1].text=title1;*/
    option.series[0].data=data1;
     option.series[1].data=ldata1;
    option.series[0].itemStyle.normal.color.colorStops[0].color=color1[0];
    option.series[0].label.normal.textStyle.color=color1[0];
    option.series[0].itemStyle.normal.color.colorStops[1].color=color1[1];
   /* option.series[0].label.normal.textStyle.color=color1[1];*/
    option.xAxis[0].data=linx1;
    sta=1;
  }
 chart.setOption(option);
} ,10000);
