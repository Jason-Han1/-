var data1=[133, 333, 222, 541, 341,133, 333, 222,312,321];
var data2=[120, 132, 101, 134, 90,120, 132, 101, 134, 90];
var data3=[220, 112, 141, 234, 190,160, 162, 401, 334, 190];
options = [
    {
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        top:80,
        left:'10%',
       right:'45%',
        bottom:'73%'
    },
    legend: {
         align: 'left',
        left: '7%',
        top:30,
        data:['优秀', '良好', '一般']
    },
    toolbox: {
        show : true,
        feature : {
           // mark : {show: true},
           dataView : {show: true, readOnly: false},
           magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
           // restore : {show: true},
           // saveAsImage : {show: true}
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
            data : ['特大型餐馆', '大型餐馆', '中型餐馆', '快餐店', '小吃店', 
         '饮品店', '食堂', '集体用餐单位'
        ,'中央厨房','其他'] }
    ],
    yAxis : [
        {   
            name:'评定企业数',
            type : 'value'
        }
    ],
    series : [
        {
            name:'优秀',
            type:'line',
            itemStyle : {
                normal : {
                    color:'#ed400b',
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    
                },
                
            },
            data:data1
       },
        {
            name:'良好',
            type:'line',
            
            itemStyle : {
                normal : {
                    lineStyle:{
                        color:'#55a4ee',
                        width:3,//折线宽度
                    },
                    
                },
                
            },
            data:data2
        },
        {
            name:'一般',
            type:'line',
            itemStyle : {
                normal : {
                     color:'#e59be1',
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    
                },
                
            },
            data:data3
        },
        
    ]
}, 
    
    ];
    
    
    
    
    
myChart.on('click', function(params) {
    alert(1);
/*if (params.componentType === 'series' && params.seriesType === 'line') {
    alert(params);
    }*/
    
});