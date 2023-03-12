option={
                color:['#fff'],
                title:{
                    text:'某地区蒸发量和降水量',
                    textStyle:{
                        color:'#fff',
                    },
                },
                legend:{
                    name:[],
                    textStyle:{
                        color:'#fff',
                        fontSize:18,
                    },
                },
                backgroundColor:'#08254F',
                // tooltip（提示框组件）
                tooltip: {
                    //trigger(触发类型)，可选'item','axis','none'
                    trigger: 'axis',
                    axisPointer: {
                        //指示器类型,可选'line','shadow','cross'
                        type: 'shadow'
                        }
                },
                // toolbox,echarts自带工具
                toolbox: {
                    show : true,
                    feature : {
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisLabel: {
                            show: true ,
                            color: '#fff',
                            fontSize: 20,
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            // show:false,
                            lineStyle: {
                                color: '#FFFFFF'
                                }
                        },
                        axisTick: {
                            show: false
                        },
                 
                    },
                yAxis: [
                    {
                    name:'降水量/蒸发量',
                    type: 'value',
                    splitLine: {
                            show: false
                        },
                    //axisTick 坐标轴刻度相关设置
                    axisTick: {
                        show: true
                        },
                    //axixLine 坐标轴轴线相关设置
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            }
                        },
                    //axisLabel 坐标轴刻度标签的相关设置
                    axisLabel: {
                        show: true,
                        color: '#fff',
                        fontSize: 20
                        }
                    },
                    ],
                series: [
                    {
                        name:'降水量',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        barWidth: '30%',
                        itemStyle: {
                           color:'#00C1FF',
                        },
                        //markPoint 图表标注
                        markPoint : {
                            //标记图形的大小
                            symbolSize:60,
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine:{
                            label:{
                                formatter:'{b}：{c}ml'
                            },
                            data:[{
                                name:'降水量平均线',
                                type:'average',
                            }],
                        },

                    },
                        {
                        name: '蒸发量',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        barWidth: '30%',
                        itemStyle: {
                           color:'#51FFAE',
                        },
                        markPoint : {
                            symbolSize:60,
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine:{
                            label:{
                                formatter:'{b}：{c}ml'
                            },
                            data:[{
                                name:'蒸发量平均线',
                                type:'average',
                            }],
                        },
                    },
                ]
            };