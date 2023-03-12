option = {
    title: {
        text: '检验机构检验异议数统计',
    },
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['检验批次数','异议通过数', '异议不通过数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        name: '食品大类',
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
    series: [
        {
            name: '检验批次数',
            type: 'bar',
            stack: '检验批次数',
            itemStyle:{normal:{color:'#333399'}},
            data: [492, 831, 731, 389, 738, 849, 822,712,732,754,934,1002,1400,729]
        },
        {
            name: '异议通过数',
            type: 'bar',
            stack: '抽检次数',
            itemStyle:{normal:{color:'#6699ff'}},
            data: [40,50,51,61 ,62,66 ,67, 70 , 70, 72, 82, 94, 97, 100]
        },
        {
            name: '异议不通过数',
            type: 'bar',
            stack: '抽检次数',
            itemStyle:{normal:{color:'#993333'}},
            data: [219,221,230, 234,239,248,251, 261, 268, 271 , 288,300,290,320]
        }
        
    ]
};