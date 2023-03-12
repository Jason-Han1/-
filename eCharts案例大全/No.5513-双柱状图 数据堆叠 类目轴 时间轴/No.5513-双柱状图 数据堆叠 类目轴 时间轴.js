
var color=['#5472d3',"#6f42c1","#fc4150","#ff9100","#00785d","#009afe","#0d47a1","#310581",'#c50010',
    "#c56200",'#03b88f','#bfbfbe'];
var data = [];
var name=[];

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),Math.round(value)
        ]
    };
}
 
var now = +new Date(2020, 9, 0);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 30; i++) {
    data.push(randomData());
}
var data1=[];
data.map(function(e){
    data1.push({name:e.value[0],value:e.value[1]})
     name.push(e.value[0])
})
var Data=[];
for(var i=0;i<10;i++){
    Data.push({name:'设备类'+i,value:data})
}

var series=[];
Data.map(function(d,i){
    series.push({
            name: d.name,
            type: 'bar',
            barWidth:'50%',
            stack: '维修',
            itemStyle: {
                normal: {
                    color:color[i]
                }
            },
            data: data1
        })
        series.push({
            name: d.name,
            type: 'bar',
            barWidth:'50%',
            stack: '成本',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color:color[i]
                }
            },
            data: data
        })
})

var xAxis=[];
var yAxis=[];
for(var i=0;i<2;i++){
    xAxis.push({
        type: 'category',
        data:name,
        interval:0,
        axisLabel: {
            textStyle: {
                color: '#515562',
                fontSize:12,
            },
            formatter: function (value) {
                return new Date(value).format("dd");
            },
        },
        splitLine: {
            show:true,
            lineStyle: {
                color:"#c9cfec"
            }
        },
    })
    yAxis.push({
        axisLabel: {
            textStyle: {
                color: '#515562',
                fontSize:12,
            },
        },
        splitLine: {
            lineStyle: {
                color:"#c9cfec"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show:false,
        },
       
    })
    if(i==1){
        xAxis[1].type='time',
        xAxis[1].interval=oneDay,
        xAxis[1].gridIndex=1;
        yAxis[1].gridIndex=1;
    }
}


option = {
    backgroundColor: "#ffffff",
        title: [{
        text: "设备运维计划维修统计(大修)",
        left: "3%",
        top: '7%',
        textStyle: {
          fontSize: 16
        },
      },{
        text: "设备运维计划成本统计(大修)",
        left: "3%",
        top: '54%',
        textStyle: {
          fontSize: 16
        },
      }],
    legend: {
        top:'2%',
        left:'10%',
        right:'10%',
        icon:"rect",
        itemWidth: 19,
        itemHeight: 12,
        orient: "horizontal",
        textStyle: {
          color: "#000931",
          fontSize: 14
        }
    },
    tooltip: {
    trigger: 'axis',
    show:true,
},
toolbox: [{
        top:'7%',
        right:25,
        show: true,
        iconStyle:{
            borderColor:'#626366'
        },
        feature: {
            magicType: {
                type: ['line', 'bar'],
            },
            restore: {},
            saveAsImage: {}
        }
    },{
        top:'54%',
        right:25,
        show: true,
        iconStyle:{
            borderColor:'#626366'
        },
        feature: {
            magicType: {
                type: ['line', 'bar'],
            },
            restore: {},
            saveAsImage: {}
        }
    }],
    grid: [{
        left: '60',
        right: '30',
        height:'38%',
        top: '10%',
    },
    {
        left: '60',
        right: '30',
        height:'38%',
        top:'57%',    }
    ],
    xAxis:xAxis ,
    yAxis:yAxis,
    series: series
};

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}