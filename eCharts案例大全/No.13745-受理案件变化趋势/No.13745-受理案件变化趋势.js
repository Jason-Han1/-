option = {
     backgroundColor:'#fff',
    title : {
        text: '受理案件变化趋势',
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left: '13%',
        top:'15%',
        data:['简易程序案件数','一般程序案件数']
    },
     grid: {
        left: '3%',
        right: '50%',
        top:'21%',
        bottom: '49%',
        containLabel: true
    },
    color:['#a4d8cc','#78d6ef'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
             "axisLabel": {
            interval: {default: 0},
            rotate:50,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : {
            
            type : 'value'
        }
    ,
    series : [
        {
            name:'简易程序案件数',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0a9b69'
                    }, {
                        offset: 1,
                        color: '#9ee1d2'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[710, 312, 321,754, 500, 830, 710, 521, 504, 660, 530, 410]
        },
        {
            name:'一般程序案件数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5ebac8'
                    }, {
                        offset: 1,
                        color:'#bce8ef'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[410, 312, 221,654,410, 630, 310, 521, 354, 560, 330, 310]
        },
        /*{
            name:'移送司法机关案件数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#126787'
                    }, {
                        offset: 1,
                        color:'#bce8ef'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[210, 112, 121,354,110, 230, 110, 221, 154, 260, 130, 110]
        }*/
    ]
};