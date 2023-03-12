option = {
            textStyle:{
            fontSize: 14,
            color: '#fff'//字体颜色
            },
            backgroundColor:'rgba(32,86,221,0.08)',
            //title:titleLeft,
            grid:{
                left:50,
                right:0,
                bottom:60,
                top:70
            },
            tooltip: {
            show :false,  //小手选中bar，不显示
            trigger: "axis",  
            textStyle:{
                fontSize: 14,
                color: '#fff'//字体颜色
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value+"%";
            },
            },
            
            // grid: grid,//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴
            xAxis: {
                axisLabel: {
                    textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    },rotate: 30
                },
                data: ["出租","公交","客货运","单车","轨道","互联网","停车","设备","民航"],
                axisTick:{       //x轴刻度线
                    show:false
                },
                splitLine: {     //网格线
                    show: false
                },
                axisLine:{		//坐标轴线
                    show:false
                }
            },
            yAxis: {
            show:true,
            splitLine: {show: false},//坐标轴在 grid 区域中的分隔线
            axisLabel: {show: true,color:'#FFF',formatter: '{value} %',fontSize:10},//坐标轴刻度标签
            axisTick: {show: false},//坐标轴刻度
            axisLine: {show: false},//坐标轴轴线
            min:0,
            name: ["单位：万条"],
            nameTextStyle:{
                fontSize:12,
                color:'#FFF',
                padding: [20, 30, -25, 20] ,
            },
            nameGap:60,
            max:100,
            offset:0
            },
            series: [{
            name: '可用',
            type: 'bar',
            stack:'使用情况',
            data: [11,21,31,4,15,16,16,16,16],
            barWidth : 9,//柱图宽度
            label: {
                        show: true,
                        formatter: "{a|}",
                        color: "#fff",
                        position: "top",
                        distance: -5,
                        backgroundColor: "#fff",
                        padding: 4,
                        borderRadius: 15,
                        rich: {
                            a: {
                                width: 2,
                                height: 2,
                                borderRadius: 3,
                                lineHeight: 2,
                            }
                        }
                    },
                    
            itemStyle:{
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(32,86,221, 0.3)'
                    }, {
                        offset: 1,
                        color:  'rgba(32,86,221, 1)'
                    }], false),
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                },
                barBorderRadius: [0, 0, 50, 50] // 统一设置四个角的圆角大小
            },
            markPoint : {
                symbol:'pin',//标记类型
                symbolSize: 1,//图形大小
                symbolOffset:['0','-35'],
                label: {
                    show: true,
                    fontSize: 14
                    },
                data :[]//配置项 
                }
            },{
            name: '不可用',
            type: 'bar',
            stack:'使用情况',
            data: [100,100,100,100,100,100,100,100,100],
            itemStyle:{
                color:"#ffffff20",
                barBorderRadius: [50, 50, 0, 0]// 统一设置四个角的圆角大小
            },offset: [0,-40]
            }]
        }