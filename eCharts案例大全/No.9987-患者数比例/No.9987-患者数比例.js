option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['可获取就诊基线UA检测患者数','排除年龄、性别等患者基本信息缺失者以及未成年患者和大于80岁患者（第一部分分析患者数量)','基线距所在医院数据库截止时间满3年，且至少有一次距基线1天以上的随访（第二部分分析患者数量)']
    },
    series: [
        {
            name: '患者数比例',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%'
                },
                emphasis: {
                    formatter: '{b}: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 100, name: '可获取就诊基线UA检测患者数'},
                {value: 87, name: '排除年龄、性别等患者基本信息缺失者以及未成年患者和大于80岁患者（第一部分分析患者数量)'},
                {value: 8, name: '基线距所在医院数据库截止时间满3年，且至少有一次距基线1天以上的随访（第二部分分析患者数量)'}
            ]
        }
    ]
};
