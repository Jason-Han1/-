option = {
    backgroundColor:'#99f',
    tooltip : {
        trigger: 'axis'
    },

    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '60%',
        containLabel: true
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2019-7-1','2019-7-2','2019-7-3','2019-7-4','2019-7-5','2019-7-6','2019-7-7'],
          axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:"℃'",
            nameTextStyle: {
                color: "#ebf8ac"
               },           
            
           axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },
            splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        }
    ],
    series : [
        {
            name:'最高温度',
            type:'line',
            min:10,
            max:40,
            data:[32, 34, 39, 35, 68, 36, 34],
            markPoint : {
                data: [
                    {type: 'max', name: '最大值'}
                ],
            },
           lineStyle: {
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#fff' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#AAF487',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#AAF487"
                }
            },
            smooth: true,
           
        },
        
          
        
    ]
};
                    