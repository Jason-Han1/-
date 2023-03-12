var data = [{
        label: 'kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪kkkkk1黄飞鸿疾风剑豪',
        value: '100'
    },
    {
        label: 'kkkkk2',
        value: '0'
    },
    {
        label: 'kkkkk3',
        value: '40'
    }
];
var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
var x = ['及时跟进', '初达小成', '全力冲刺', ];
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        borderColor: '#aaa',
        borderWidth: 1,
        // borderRadius: 4,
        formatter: function(p) {
            console.log(p)
            return p.data.value > 0
                                    ? `${p.data.label.slice(0, 30) + (p.data.label.length <= 30 ? '' : '...')}`
                                    : '';
        },
        rich: {
            per: {
                color: '#ccc',
                width: 150,
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2
            }
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '5%',
        right: '2%',
        width: '80%',
        bottom: '2%',
        top: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        nameLocation: 'center',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: function(p, index) {
                console.log(p)
                return x[index]
            }
        },
        splitArea: {
            show: true,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            // show: false
        }
    },
    yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                // show: false
            },
            axisTick: {
                show: false
            },
            axisPointer: {
                label: {
                    show: true
                }
            },
            padding: [5, 0, 0, 0],
            position: 'left',
            data: data,
            axisLabel: {
                margin: 50,
                fontSize: 10,
                align: 'left',
                padding: [2, 0, 0, 0],
                color: '#000',
                rich: {
                    nt: {
                        color: '#fff',
                        backgroundColor: '#3860FC',
                        width: 32,
                        height: 32,
                        fontSize: 10,
                        align: 'center',
                        lineHeight: 3,
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                        lineHeight: 5
                    }
                },
                formatter: function(value, index) {
                    console.log(value, index);
                    return ['{nt|' + (index + 1) + '}'].join('\n');
                }
            }
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            ellipsis: true,
            axisLabel: {
                color: '#000',
                ellipsis: true,
                textStyle: {
                    ellipsis: true,
                    fontSize: '10',
                },
                formatter: '{value}%'
            },
            // data: data
        }
    ],
    series: [{
        zlevel: 1,
        name: 'O',
        type: 'bar',
        barWidth: '20px',
        animationDuration: 1500,
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        },
        data: data,
        align: 'center',
        itemStyle: {
            normal: {
                // barBorderRadius: 10,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        label: {
            show: true,
            fontSize: 12,
            color: '#fff',
            textBorderWidth: 2,
            padding: [2, 0, 0, 0],
            ellipsis: true,
            formatter: function(p) {
                return `${p.data.label.slice(0, 30) + (p.data.label.length <= 30 ? '' : '...')}`;
            }
        }
    }]
}