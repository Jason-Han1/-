var colors = ['#259493',  '#60bef4'];

option = {
     backgroundColor:'#fff',
    title: {
        text: '超时审批情况',
        left:"5%",
        top:'1%'
    },
     grid: {
        top:80,
        left:'10%',
       right:'45%',
        bottom:'65%'
    },
     tooltip : {
        axisPointer: {type: 'cross'},
        trigger: 'axis'
    },
    legend: {
        left:' 7%',
         top:50,
        right:'55%',
        data: ['超时审批事件数','同比率']
    },
    xAxis: {
        "axisLabel": {
            interval: {default: 0},
            rotate:50,
            textStyle: {
                fontSize: 10
            },
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
        data: ['武鸣区局', '横县局', '宾阳县局', '上林县局', '马山县局', 
          '隆安县局', '兴宁区分局', 
        '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局', '良庆区分局',
        '广西-东盟经济技术开发区行政审批局'
        ,'广西-东盟经济技术开发区','南宁经济技术开发区','南宁高新技术产业开发区']
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ], 
    
    series: [{
        type: 'scatter',
        name:'超时审批事件数',
        color : '#259493',
        symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function (data) {
            return Math.sqrt(data[1]) * 1;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[1];
                },
                position: 'top'
            }
        },

        data:[
            ['武鸣区局',50],
            ['横县局',210],
            ['宾阳县局',90],
            ['上林县局',234],
            ['马山县局',100],
            ['隆安县局',330],
            ['兴宁区分局',400],
            ['江南区分局',50],
            ['青秀区分局',210],
            ['西乡塘区分局',90],
            ['邕宁区分局',90],
            ['良庆区分局',234],
            ['广西-东盟经济技术开发区行政审批局',100],
            ['广西-东盟经济技术开发区',330],
            ['南宁经济技术开发区',310],
            ['南宁高新技术产业开发区',330],
        ]
    },{
        name:'同比率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:1,//折线宽度
                    },
                    opacity: 0.4,
                    
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5,2,5]
    }]
};