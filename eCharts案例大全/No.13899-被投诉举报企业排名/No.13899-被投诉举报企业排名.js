var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 11; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '被投诉举报企业排名',
        textStyle:{
             fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:80,
        left:'10%',
       right:'40%',
        bottom:'70%'
    }, 
    legend: {
        data:['被投诉举报次数'],
        align: 'left',
         left: 70,
        top:40
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
             interval: {default: 0},
            rotate:50,//倾斜度
            
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 3;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,3);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        },
        "data": ['南宁东站欢客便利店','南宁东站满购便利店',
        '南宁都港贸易有限公司','南宁郝福记法式蛋糕水街店',
        '南宁郝福记法式蛋糕水街店','广西南宁百粒食品有限公司',
        '南宁市瓦西食品店','南宁市果新果丽水果店',
        '广西南宁五六易宝商贸有限公司','南宁市梦享荟餐饮服务有限公司'],
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {name:'被投诉举报次数',
            type:'bar',
           itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#60c9ed'
                }, {
                    offset: 1,
                    color: '#a7d8e8'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
            barWidth:'40%',
            data:['24','20','17','15','12','10','9','8','6','5']},
        ]
};
