option = {
    backgroundColor:'#FFFFFF',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['抽检批次数','抽检不合格批次数'],
        top:'5%',
        left:'20%'
    },
    grid: {
        left: '1%',
        right: '50%',
        top: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        name:'（批次）',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
       
        data: ['广西自治区产品质量研究院',
            '广西自治区疾病防控中心',
            '广西自治区分析测试研究中心',
            '广西自治区食品药品检验室',
            '广西东盟食品药品安全检测中心',
            '广西自治区柳州食品药品检测所',
            '广西自治区桂林食品药品检测所',
            '广西自治区梧州食品药品检测所',
            '广西自治区北海食品药品检测所',
            '广西自治区玉林食品药品检测所',
            '广西自治区白色食品药品检测所',
            '广西自治区河池食品药品检测所',
            '广西自治区轻工产品质量检测站',
            '广西自治区粮油质量检测站']
        },
        axisLabel: {
            interval: {default: 0},
            rotate:0,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 8;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,8);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
    series: [
        {
            name: '抽检批次数',
            itemStyle: {
                normal: {
                    color:'#2ea5c3',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            },
            type: 'bar',
            data: [1233,1344,1511,1611,1700,1800,1900,2000,2100, 2200, 2300, 2600, 2800, 3000]
        },
        {
            name: '抽检不合格批次数',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#CD0000',
                    //barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            type: 'bar',
            data: [50,60,70,80,90,50,100,200,400, 400, 200, 30, 900, 34]
        }
    ]
};
