option = {
    title: {
        text: 'Awesome Chart'  
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisLabel:{//坐标轴标签样式
            color:"#fff"
        },
        axisTick:{//刻度线
            show:false
        }
    },
    yAxis: {
        name:"单位：（个）",
        nameTextStyle:{//坐标轴名字样式
            color:'#fff',
            fontSize:15,
        },
        splitLine:{//网格线
            show:false
        },
        axisLine:{//坐标轴线
            show:true
        }
    },
    series: [{
        type: 'bar',
        barWidth:'40%',//柱条宽度
        data:[220, 182, 191, 234, 290, 330, 310],
        label:{//文本标签的样式
            show:true,          
            formatter:"{c}%",   //格式化文字
            color:"#fff",       //文字的颜色
            position:"top",     //文字的位置
        },
        itemStyle:{//图形的样式
            color:{ //渐变色配置
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: 'rgba(19,138,179,1)' // 0% 处的颜色
              }, {
                  offset: 1, color: "rgba(10,73,98,0)" // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
        },
        emphasis:{//高亮样式配置
            itemStyle:{
                color:{ //渐变色配置
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: 'rgba(178,141,7,1)' // 0% 处的颜色
                  }, {
                      offset: 1, color: "rgba(10,73,98,0)" // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
            },
            label:{
                show:true,
                formatter:[
                    '{icon|三角形}',
                    '{c}%'
                    ].join("\n"),
                rich:{//富文本配置
                    icon:{//这里本来想要用三角icon图 但是不知道怎么导入
                        color:'rgba(178,141,7,1)'
                    },
                },
            }
        }
    }]
};

