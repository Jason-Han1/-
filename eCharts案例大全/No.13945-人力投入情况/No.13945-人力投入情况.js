var colors = ['#AEEEEE',  '#53868B'];

var xData = ['区局', '南宁市局', '柳州市局', '桂林市局', '梧州市局', 
         '北海市局',  '防城港市局', '钦州市局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局'];
option = {
    title: {
        text: '人力投入情况',
        textStyle:{
             fontSize: '15'
        }
    },
    backgroundColor:'#fff',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        }
    },legend: {
        top: 30,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['出动检查人次','检查企业次数']
    },
       grid: {
        top:55,
        bottom:'50%',
        right:'50%'
    },   
    
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            rotate:40,
            textStyle:{
                fontSize:10,
                color:'#000'
            },formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 5;// 每行能显示的字的个数
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
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1200,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} ',
                textStyle:{
                fontSize:10
            }
            }
        }
    ],
    series: [
        {name:'出动检查人次',
            type:'bar',
           color: colors[0],
            barWidth : 10,
            data:[756,627,998,797,978,947,717,993,620,845,855,741,738,864,952]},
        {
        name:'检查企业次数',
         color: colors[1],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4
                }
            },
        data:[502,798,658,594,501,793,569,671,678,578,555,601,765,791,707]
    }]
};
