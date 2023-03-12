option =  {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            name: '单位:百万',
            nameLocation:'start',         //---轴名称相对位置
            nameTextStyle:{             //---坐标轴名称样式
                color:"rgb(135,137,144)",
                fontSize: '10',
                padding:[0,0,0,-60], //---坐标轴名称相对位置

            },
            nameGap:15,                 //---坐标轴名称与轴线之间的距离
        },
        series: [
            {
                name: '销量',             //---系列名称
                type: 'bar',                //---类型
                legendHoverLink:true,       //---是否启用图例 hover 时的联动高亮
                label:{                     //---图形上的文本标签
                    show:false,
                    position:'insideTop',   //---相对位置
                    rotate:0,               //---旋转角度
                    color:'#eee',
                    normal: {
                        show: true,
                        position: "top",
                        // "formatter": "{c}%"
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: 'rgb(135,137,144)'
                    }
                },
                itemStyle:{                 //---图形形状
                    color:'rgb(59,131,219)',
                    barBorderRadius:[18,18,18,18],
                },
                barWidth:'10',              //---柱形宽度
                barCategoryGap:'5%',       //---柱形间距
                data: [3020, 4800, 3600, 6050, 4320, 6200,5050,7200,4521,6700,8000,5020]
            }
        ]
    };
