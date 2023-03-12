var option = {
        backgroundColor: '#1b1b1b',//背景色
        tooltip : {
            show: true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        title:{
            show: false,
            text: '离散率七天日平均分析',
            left: 'center',
            textStyle:{
                //文字颜色
                color:'#ccc',
                //字体大小
    　　　　    fontSize:20
            }
        },
        xAxis : [
            {
                type : 'category',
                name: '',
                data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                //刻度线是否显示
                axisTick: {
                    show: false
                },
                // x轴的字体样式
                axisLabel: {        
                        show: true,
                        interval: 0, 
                        textStyle: {
                            color: '#3398DB',
                            fontSize:'16'
                        }
                },
                // 控制网格线是否显示
                splitLine: {
                        show: false, 
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['red']
                        }                            
                },
                // x轴的颜色和宽度
                axisLine:{
                    show: true,
                    lineStyle:{
                        color:'#193d4e',
                          width:1   //这里是坐标轴的宽度,可以去掉
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: '',
                //刻度线是否显示
                axisTick: {
                    show: false
                },
                 // y轴的字体样式
                axisLabel: {        
                        show: true,
                        formatter: "{value} %",
                        textStyle: {
                            color: '#3398DB',
                            fontSize:'16'
                        }
                },
                // 控制网格线是否显示
                splitLine: {
                        show: false, 
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['red']
                        }                            
                },
                // y轴的颜色和宽度
                axisLine:{
                    show: false,
                    lineStyle:{
                        color:'#3398DB',
                          width:1,   //这里是坐标轴的宽度,可以去掉
                    }
                }
            }
        ],
        series : [
           {
                name: '离散率',
                type: 'bar',
                barWidth: '20px',
                itemStyle: {
                    normal: {
                         //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#193d4e'},
                                {offset: 0.5, color: '#29758a'},
                                {offset: 1, color: '#3cc0ce'}
                            ]
                        )
                    }
                },
                data:[5, 1, 6, 4, 2, -2, -1,-2,8,6,2,-3]
            }
        ]
    }