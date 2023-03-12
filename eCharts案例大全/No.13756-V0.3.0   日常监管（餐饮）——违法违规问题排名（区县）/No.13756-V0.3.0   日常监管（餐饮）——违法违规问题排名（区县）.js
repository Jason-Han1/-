var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 11; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    backgroundColor:'#fff',
    title: {
        text: '违法违规问题排名（区县）',
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
       right:'50%',
        bottom:'65%'
    }, 
    legend: {
        data:['违法违规问题数'],
        align: 'left',
        left: 50,
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
             interval: {default: 0},
            rotate:50,//倾斜度
            
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
        data: ['武鸣区', '横县', '宾阳县', '上林县'
        , '隆安县','兴宁区', '江南区', '青秀区', '西乡塘区', '邕宁区',
        '良庆区','广西-东盟经济技术开发区','广西-东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
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
        {name:'违法违规问题数',
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
            barWidth:'50%',
            data:['351','318','265','245','213','185','155','133','104','85','75','63','54','45']},
        ]
};
