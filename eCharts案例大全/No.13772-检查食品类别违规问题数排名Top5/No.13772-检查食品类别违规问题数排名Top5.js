var colors = ['#AEEEEE',  '#53868B'];
var xData = ['粮食加工品','肉制品','乳制品','罐头','冷冻饮品','冷冻饮品1','冷冻饮品2','冷冻饮品3','冷冻饮品4','冷冻饮品5','冷冻饮品6','冷冻饮7','冷冻饮品8'];
option = {
    backgroundColor:'#fff',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
        formatter:'{b}<br/>{a0}:{c0}'
    },
       grid: {
        top:'25%',
        bottom:'45%',
        right:'50%'
    },   
    legend: {
        data:['违法违规企业数'],
        align: 'left',
        left: 10,
        top:50
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
            rotate:25,
            textStyle:{
                fontSize:12,
                color:'#000'
            },formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 6;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,6);
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
    "dataZoom": [{
        "show": true,
        "height": 20,
        "xAxisIndex": [
            0
        ],
        bottom: '15%',
        "start": 0,
        "end": 30,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }],
    yAxis: [
        {
            type: 'value',
            name: '违法违规问题数（个）',
            /*min: 0,
            max: 100,*/
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
            },
            "splitLine": {
                "show": false
            },
            position: 'top'
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
                formatter: '{value} %',
                textStyle:{
                fontSize:15
            }
            }
        }
    ],
    series: [
        {name:'违法违规问题数',
            type:'bar',
           color: colors[0],
            barWidth : 20,
            data:[22,21,20,19,19,18,17,15,14,14,13,12,9]},
        ]
};
