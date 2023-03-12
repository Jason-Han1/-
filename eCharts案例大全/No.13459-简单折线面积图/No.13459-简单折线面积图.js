option = {//若阴影部分不显示请使用高版本的echarts
    tooltip : {
        trigger: 'axis'
    },
     grid:{
        left:"3%",
        right:"3%",
        top:"0%",
        bottom:"10%"
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2013','2014','2015','2016','2017'],
            axisTick: {
                show: false,//不显示x轴的刻度
            },
            axisLine:{
               show:false,//隐藏x轴不显示
            }, 
        }
    ],
     yAxis : [
        {
            type : 'value',
            show:false, //去掉y轴  
            max: function(value) {//设置y轴最大值
                return value.max + 30;
            }
        }
    ],
    series : [
        {
            type:'line',
            areaStyle:{
                color:"#d5f0fc",//面积区域的颜色
            },
            color:"#42bff4",//折线图颜色
            label:{
                normal: {
                    show: true,
                    position: 'bottom',
                    color:"#3497cb",//设置数字的位置和颜色
                }
            },
            smooth:true,//是否平滑处理值0-1,true相当于0.5
            data:[67,30,70,40,50]
        }
    ]
};
                    