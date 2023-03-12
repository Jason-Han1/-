app.title = '堆叠柱状图';

option = {
    backgroundColor: '#001120',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(params){
            let html = ""+params[0].name+"<br/>";
            for (var i = 0; i < params.length; i++) {
                params[i]
                html+= params[i].seriesName+":"+Math.abs( params[i].value)+"\n"+"<br/>";
            }
            console.log(params)
            return html;
        }
    },
    legend: {
        data:['邮件营销','联盟广告'],
        textStyle: {
            color: 'rgba(55,255,249,1)'
        }
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
            data : ['8.01','8.02','8.03','8.04','8.05','8.06','8.07','8.08','8.09','8.10','8.11','8.12','8.13','8.14','8.15','8.16','8.17','8.18','8.19'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            },
            axisLabel: {
                color: 'rgba(55,255,249,1)'
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(55,255,249,1)',
                }
            }
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'bar',
            barWidth: 20,
            barGap:"-100%",
            itemStyle: {
               barBorderRadius: [50, 50, 0, 0], 
               color: "#46cee0"
            },
            
            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210],
            zlevel:2,
            yAxisIndex:0
        },
        {
            name:'联盟广告',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: [50, 50, 0, 0],
               color: "#06a0b3"
            },
            label:{
              show:true ,
              position:"top",
              padding:10,
              textStyle:{
                  fontSize:12
              }
            },
            data:[220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330, 310],
            zlevel:1,
            yAxisIndex:0,
            markLine: {
              symbol: "none",
              label: {
                show: true,
                position: "end",
                formatter: "{c}",
                fontSize: 14,
                fontWeight: "bold"
              },
              lineStyle: {
                type: "dotted"
              },
              data: [
                {
                  yAxis: 350,
                  lineStyle: {
                    color: "#000",
                    type: "dotted"
                  },
                  label: {
                    color: "pink"
                  }
                },
                {
                  yAxis: 170,
                  lineStyle: {
                    color: "rgba(255, 182, 54, 1)"
                  },
                  label: {
                    color: "rgba(255, 182, 54, 1)"
                  }
                }
              ]
            },
            markPoint: {
              animationEasing: "elasticOut",
              symbolOffset: [0, "-20%"],
              data: [
                {
                  type: "min",
                  itemStyle: {
                    color: "#46d876"
                  }
                },
                {
                  type: "max",
                  itemStyle: {
                    color: "#ff7ca3"
                  }
                }
              ]
            }
        },
        {
            name:'邮件营销',
            type:'bar',
            barWidth: 20,
            barGap:"-100%",
            itemStyle: {
               barBorderRadius: [0,0,  50,  50], 
               color: "#46cee0"
            },
            data:[-120, -132, -101, -134, -90, -230, -210, -132, -101, -134, -90, -230, -210, -132, -101, -134, -90, -230, -210],
            zlevel:2,
            yAxisIndex:0
        },
        {
            name:'联盟广告',
            type:'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
               barBorderRadius: [0,0,  50,  50], 
               color: "#06a0b3"
            },
            label:{
              show:true ,
              position:"bottom",
              formatter: function(params){
                  return Math.abs(params.value);
              },
              padding:10,
              textStyle:{
                  fontSize:12
              }
            },
            data:[-220, -182, -191, -234, -290, -330, -310, -182, -191, -234, -290, -330, -310, -182, -191, -234, -290, -330, -310],
            zlevel:1,
            yAxisIndex:0
        }
    
    ]
};
