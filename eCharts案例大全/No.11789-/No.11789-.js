
var colorList = ['#01A7DC', '#6F6FF6', '#3255EE', '#68FF9C']
option = {
            backgroundColor: '#262D45',
            animation: true,
            grid:{
              top:10  
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                icon: "circle",
                formatter:function(params){
                    console.log(params)
                    var res=''
                      for(var i=0;i<params.length-1;i++){
                        res += '<p><span style="display:inline-block;height:10px;width:10px;border-radius:50%;margin-right:5px;background:'+colorList[i]+'"></span>'+params[i].seriesName+params[i].name+': '+params[i].data+'GB</p>'
                      }
                      res += '<p><span style="display:inline-block;height:10px;width:10px;border-radius:50%;margin-right:5px;background:'+colorList[3]+'"></span>'+params[3].seriesName+params[3].name+': '+params[3].data+'%</p>'
                    return res;
                }
            },
        //   legend: {
        //     data: ['严重', '错误', '警告'],
        //     top: '18'
        // },
        legend: {
            show:false,
        orient: 'vertical',
        top: '45%',
        right: '10%',
        itemGap: 20,
        // formatter: function (name) {
        //   return 'Legend ' + name;
        // },
        textStyle: {
            fontSize: 15,
            color:'#fff',
            padding: [0, 0, 0, 4],
        },
        // selectedMode:false,
         icon: "circle", 
        data: ['总', '已用', '剩余','使用率']
    },
    
            xAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                      show: false,
                    lineStyle: {
                        width:2,
                        type: 'solid',
                        color:'#DFDFDF'
                    }
                },
                axisLabel: {
                    show: true,
                    rotate: 0,
                    textStyle: {
                        color: '#DFDFDF',
                        fontSize:42
                    }
                },
                axisTick: {
                    show: false,
                    length:8,
                    lineStyle:{
                        width:2,
                        type:'solid',
                        color:'#DFDFDF'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width:6,
                        type: 'solid',
                        color: '#DFDFDF'
                    }
                },
                data: ['CPU', '内存','硬盘']
            },
            yAxis: {
                show:false
            },
            series: [{
                name: '总',
                type: 'bar',
                silent: false,
                barGap: '-100%',
                barWidth: '30%',
                itemStyle: {
                    color: '#262D45',
                    borderWidth: 2,
                    borderColor: '#01A7DC'
                },
                data: [10,10,10]
            }, {
                name: '已用',
                type: 'bar',
                silent: false,
                barGap: '-100%',
                barWidth: '30%',
                data: [1,0.72,2],
                itemStyle: {
                    normal: {
                        color:'#01A7DC',
                        borderWidth: 2,
                        borderColor: '#01A7DC'
                    }
                },
            }, {
                name: '剩余',
                type: 'bar',
                silent: false,
                barGap: '-100%',
                barWidth: '30%',
                data: [6,7.2,6],
                itemStyle: {
                    normal: {
                        color:'#01A7DC',
                        borderWidth: 2,
                        borderColor: '#01A7DC'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                         position: 'top',
                        formatter: '{c}%',
                    }
                },
            }, {
                name: '使用率',
                type: 'bar',
                silent: false,
                barGap: '-100%',
                barWidth: '30%',
                data: [1,0.72,4],
                itemStyle: {
                    normal: {
                        color:'#01A7DC',
                        borderWidth: 2,
                        borderColor: '#01A7DC'
                    }
                },
            }]
        }