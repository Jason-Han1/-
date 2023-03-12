var colors = [ '#81d0d7'];
var data2=[917,889,1264];
options= [{
    backgroundColor:'#fff',
    title:{
        text:'量化分级评定情况（餐饮服务）',
        textStyle:{
             fontSize: '16'
        }
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
     grid: {
        top:80,
        left:'7%',
       right:'49%',
        bottom:'56%'
    },
    
    legend: {
        data:['量化分级评定企业数','分级评定同比率'],
        align: 'left',
        left: '10%',
        top:45,
       
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                
            },
            boundaryGap: ['0%', '0%'],
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
             data: ['优秀', '良好', '一般']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color:'#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },{
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ], /*"dataZoom": [{
        "show": true,
        "height": 20,
        "xAxisIndex": [
            0
        ],
        bottom: "53%",
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],*/
    series: [
        {
            name:'量化分级评定企业数',
            type:'bar',
            barWidth:'20%',
            data:data2
        },
        
        {
        name:'分级评定同比率',
         color: '#66d282',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    
                },
                
            },
        data:[4.5,4,6.5]
    }
    ]
}];
