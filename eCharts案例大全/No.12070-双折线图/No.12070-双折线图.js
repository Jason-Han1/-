option= {
    backgroundColor:"#11276B",
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['今天','昨天'],
            textStyle:{//图例文字的样式
                color:'#ccc',
                fontSize:16
            },
            selectedMode:false,
            icon:'line'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            axisLabel: {//柱状图底部文字设置
                color: '#fff',
                fontSize: 12,
                interval:0,//横轴信息全部显示
                rotate:50
            },
            axisLine:{
                lineStyle:{
                    color:'#0754ED',
                }
            } ,
             //网格样式
             splitLine: {
                show: true,
                lineStyle:{
                    color: ['#fff'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {//柱状图底部文字设置
                color: '#fff',
                fontSize: 12,
                interval:0,//横轴信息全部显示
            },
            axisLine:{
                lineStyle:{
                    color:'#fff',
                }
            } ,
            //网格样式
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#fff'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        series: [
            {
                name:'今天',
                type:'line',
                stack: '总量',
                symbol:'none',  //这句就是去掉点的  
                smooth:true,  //这句就是让曲线变平滑的 
                itemStyle : {  
                    normal : {  
                        lineStyle:{  
                            color:'#fff'  
                        }  
                    }  
                },  
                data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290, 330, 310,330, 310,200]
            },
            {
                name:'昨天',
                type:'line',
                stack: '总量',
                symbol:'none',  //这句就是去掉点的  
                smooth:true,  //这句就是让曲线变平滑的 
                itemStyle : {  
                    normal : {  
                        lineStyle:{  
                            color:'#00E9FF' ,
                            type:'dotted'

                        }  
                    }  
                },  
                data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,330, 310,120]
            }
        ]
    };