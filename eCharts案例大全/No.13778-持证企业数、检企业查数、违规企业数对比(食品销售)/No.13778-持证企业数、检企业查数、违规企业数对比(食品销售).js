option = {
    backgroundColor:'#FFFFFF',
    title : {
       text: '持证企业数、检企业查数、违规企业数对比(食品销售)',
        //subtext: '单位异议趋势分析'
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '20%',
        right: '20%',
        top:'30%',
        bottom:'45%',
        containLabel: true
    },
    color:['#a4d8cc','#78d6ef'],
   legend: {
       top:'25%',
        data:['持证主体数','检查主体数','违法违规主体数']
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
            type : 'value',
            min:0,
            max:1000
        }
    ,
    series : [
        {
            name:'持证主体数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00af87'
                    }, {
                        offset: 1,
                        color: '#66FFCC'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[534,601,526,704,683,556,779,542,666,714,756,727]
        },
         {
            name:'检查主体数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[247,184,178,206,195,238,167,151,169,231,151,206]
        },
        {
            name:'违法违规主体数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[100,60,43,33,45,60,70,61,43,55,90,84]
        }
    ]
};