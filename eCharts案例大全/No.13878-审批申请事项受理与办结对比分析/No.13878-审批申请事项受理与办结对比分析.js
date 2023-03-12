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
        data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
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
            ['区局',50],
            ['南宁市行政审批局',210],
            ['南宁市局',90],
            ['柳州市局',234],
            ['柳州市行政审批局',100],
            ['桂林市局',330],
            ['梧州市局',400],
            ['梧州市行政审批局',50],
            ['北海市局',210],
            ['北海市行政审批局',90],
            ['防城港市局',90],
            ['钦州市局',234],
            ['钦州市行政审批局',100],
            ['贵港市局',330],
            ['玉林市局',310],
            ['百色市局',330],
            ['贺州市局',234],
            ['河池市局',100],
            ['来宾市局',330],
            ['崇左市局',330],
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
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5,2,5,2,3,1,4]
    }]
};