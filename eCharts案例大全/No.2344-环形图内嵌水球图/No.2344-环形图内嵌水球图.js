let normal = 193;
let loseC = 26;
let lateE = 88;
let checkL = 9;
let checkB = 18;
let differentD = 6;
let sum = normal + loseC + lateE + checkL + checkB + differentD;
let norP = sum ? ((normal * 100) / sum).toFixed(2) : 0;
let loginPer = sum ? ((normal * 100) / sum).toFixed(2) : 0;
let chartData = [
    { value: normal, name: '正常' },
    { value: loseC, name: '缺卡' },
    { value: lateE, name: '早退' },
    { value: checkL, name: '迟到' },
    { value: checkB, name: '补打卡' },
];

option = {
    backgroundColor:'#ad9dcd',
    legend: {
        orient: 'vertical',
        left: '5%',
        top: '10%',
        formatter(params) {
            let str = '';

            console.log('params', params);
            chartData.forEach((key) => {
                let per = key.value ? ((key.value * 100) / sum).toFixed(2) + '%' : 0;
                if (key.name === params) {
                    str = key.name + ' ' + per;
                } else if (params === '本月部门打卡成功率') {
                    str = params;
                }
            });
            return str;
        },
    },
    title: {
        top: '45%',
        left: 'center',
        text:'本月部门打卡成功率',
        textStyle: {
            color: 'rgb(173, 157, 205)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
        },
        subtext: loginPer + '%',
        subtextStyle: {
            color: 'rgb(173, 157, 205)',
            fontSize: 20,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '部门打卡情况<br/>{b}  {c} ({d}%)',
    },
    series: [
        {
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue',
                },
            },
            name: chartData,
            data: [
                {
                    value: loginPer / 100,
                    itemStyle: {
                        normal: {
                            color: '#53d5ff',
                            opacity: 0.6,
                        },
                    },
                },
            ],
            color: ['#53d5ff'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
        },
        {
            type: 'pie',
            radius: ['45%', '60%'],
            color: ['orange', '#dfd0e6', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            hoverAnimation: false, ////设置饼图默认的展开样式
            label: {
                show: false,
                // normal: {
                //   formatter: "{b}\n{d}%",
                //   show: true,
                //   position: "",
                // },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },

            itemStyle: {
                // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            data: chartData,
        },
    ],
};
