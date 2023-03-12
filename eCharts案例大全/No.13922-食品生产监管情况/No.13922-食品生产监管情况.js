option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品生产监管情况',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
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
        data: ['异议成立批次数'],
        top:30,
        left:'20%'
    },
    grid: {
        left: '1%',
        right: '52%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        "axisLabel": {
            interval: {default: 0},
            rotate:0,
            formatter : function(params){
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
        
        '钦州市食品药品检验所',
        '谱尼测试集团深圳有限公司',
        '梧州市产品质量检验所',
        '桂林市产品质量检验所',
        '北海市产品质量检验所',
        '深圳中检联检测有限公司',
        
        '广西自治区轻工产品质量检测站',
        '广西自治区粮油质量检测站']
    },
    series: [
        {
            name: '异议成立批次数',
             barWidth:'60%',
            itemStyle: {
                normal: {
                    color:'#60C0DD',
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [263,423,623,953,1103,1403,1805,2163,2520, 2734, 2994, 3270, 3444, 3630,3820, 4034, 4294, 4470, 4644, 4830]
        }
    ]
};
