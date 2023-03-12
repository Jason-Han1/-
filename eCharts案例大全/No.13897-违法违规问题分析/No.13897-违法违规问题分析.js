var colors = ['#AEEEEE',  '#53868B'];

var xData = ['企业资质','生产环境条件','进货查验结果','生产过程控制',
              '产品检验结果','贮存及交付控制','不合格品管理和食品召回',
              '从业人员管理','食品安全事故处置','食品标签和说明书',
              '追溯体系','企业自查'];
option = {
    title: {
        text: '违法违规问题分析',
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

        },
        formatter:'{b}<br/>{a0}:{c0}'
    },
       grid: {
        top:'25%',
        bottom:'25%',
        right:'50%'
    },   
    legend: {
        data:['违法违规企业数'],
        align: 'left',
        left: 10,
        top:50
    },
     "calculable": true,
    "yAxis": [{
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
            rotate:20,
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
    xAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
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
        {name:'违法违规问题频率（次数）',
            type:'bar',
           color: colors[0],
            barWidth : 20,
            data:[2,4,6,9,18,27,36,45,54,63,72,81]},
        ]
};
