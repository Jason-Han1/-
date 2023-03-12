var month=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
option = {
    backgroundColor:'#055364',
    title: {
        text: 'Awesome Chart',
        color:'#9bbac1'
    },
    xAxis: {
        axisTick:{
            show:false,
        },
        data: month,
        axisLabel:{
          color:'#9bbac1'
        },
    },
    yAxis:[ {
        min:0,//起点
        interval:200,//步长
        max:1000,
        nameTextStyle:{
            color:'#9bbac1'
        },
        //坐标轴
        axisLine:{
            lineStyle:{
                opacity:0
            }
        },
        //坐标标签
        axisLabel:{
          color:'#9bbac1'
        },
        axisTick:{
            show:false,
        },
        //分割线
        splitLine:{
            lineStyle:{
                type:'dashed',
                color:'#377280'
            }
        }
    },{
        boundaryGap:['-100%', '100%'],
         //坐标轴
        axisLine:{
            lineStyle:{
                opacity:0
            }
        },
        //坐标标签
        axisLabel:{
          color:'#9bbac1'
        },
        axisTick:{
            show:false,
            alignWithLabel:true
        },
       data:['-100%','-50%','0','50%','100%'] 
    }
    ],
    series: [{
        type: 'line',
        symbol:'none',//标记图形为无
        lineStyle:{
            color:'#ffc303'
        },
        data:[220, 182, 191, 234, 290, 330, 310]
        
    },{
        type:'bar',
        itemStyle:{
            color:'#02bf8a',
            barBorderRadius:[5,5,0,0]
        },
        data:[220,190,180,100,121,131,229]
    }]
};