  
  
  // 图形的大小是 220*200 其他的范围自行调整
  
  // 模糊点：  itemHeight。itemWidth,  itemGap  是设置icon 相关大小的
  
  const alarmColor=['#F90052','#F77841','#F3B838','#40B5EB']
  const bgColor = '#0B0C29'
  option = {
        backgroundColor: bgColor,
        color: alarmColor,
        title: [{
            text: '{name| 告警总数 }\n{val|100 条}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'white',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: 'white',
                    }
                }
            }
        }],
        grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 0,
            containLabel: true
        },
        legend:{
            show:true,
            left:'center',
            top:'top',
            itemHeight:13,
            itemWidth:13,
            itemGap:15,
            icon:'rect',
            textStyle:{
                color:'white',
                fontSize:12,
            }
        },
        series: [{
            symbolSize:8,
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '50%'],
            data: [
                {name:'严重告警',value:20},
                {name:'一般告警',value:15},
                {name:'警告告警',value:30},
                {name:'次要告警',value:30}
            ],
            label:{
                show:false,
            },
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    // borderColor: bgColor,
                    borderWidth: 2
                }
            },
        }]
    };