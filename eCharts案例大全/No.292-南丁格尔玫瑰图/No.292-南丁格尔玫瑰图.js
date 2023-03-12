
var pieData=[
            {value:11231,name:"唐人街探案",itemStyle:{color:'blue'}},
            {value:22673,name:"少年的你",itemStyle:{color:'orange'}},
            {value:6231,name:"我的姐姐",itemStyle:{color:'yellow'}},
            {value:8231,name:"你的婚礼",itemStyle:{color:'pink'}},
            {value:9331,name:"八月未央",itemStyle:{color:'purple'}},//饼图数据
        ]
        //指定图表的配置项和数据
        var option={ 
            title:{//标题
                text:'饼图',
                textStyle:{color:'red'}
            },
            tooltip: {
                show: true //显示提示框
           },
            legend:{
                type:'plain',//图例的类型,普通图例
            },
            series:[{
                type:'pie',//图形的类型
                data:pieData,//数据选择上方创建好的数据
                label:{//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    show:true,
                    formatter:function(arg){
                        console.log(arg)
                        return '电影：'+arg.data.name+'\n'+'票房：'+arg.data.value+'\n'
                    },
                    textStyle:{color:'green'}//标签文本的颜色
                },
                roseType:'radius',//是否展示南丁格尔图，扇区圆心角展现数据的百分比，半径展现数据的大小。
                selectedMode:'single',//选中模式的配置，表示是否支持多个选中,默认关闭
                selectedOffset:30,//选中扇区的偏移距离
                radius:['0%','60%'],//南丁格尔图的半径，以及展示数据的大小
                itemStyle:{//图形样式
                    shadowBlur:200,//图形阴影的模糊大小
                    shadowColor:'blank'//阴影颜色
                }
            }]
        }
