option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品生产监管情况',
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
   /* toolbox: {
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
    },*/
    legend: {
        data: ['异议批次数','异议成立批次数'],
        top:30,
        left:'20%'
    },
    grid: {
        left: '1%',
        right: '50%',
        bottom: '20%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
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
    series: [
        {
            name: '异议批次数',
            itemStyle: {
                normal: {
                    color:'#2ea5c3',
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [19263,23203,24203,28103,31203,38903,48203,51603,58203, 63489, 69034, 74970, 81744, 90230]
        },
        {
            name: '异议成立批次数',
            itemStyle: {
                normal: {
                    color:  '#88dff5',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [9263,13203,14203,18103,21203,28903,38203,41603,48203, 53489, 59034, 64970, 71744, 80230]
        }
    ]
};
