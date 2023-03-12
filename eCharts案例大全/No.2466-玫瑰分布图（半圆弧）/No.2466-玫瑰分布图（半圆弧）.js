let roseData = [
    {value: 40, name: 'rose 1'},
    {value: 33, name: 'rose 2'},
    {value: 28, name: 'rose 3'},
    {value: 22, name: 'rose 4'},
    {value: 20, name: 'rose 5'},
    {value: 15, name: 'rose 6'},
    {value: 12, name: 'rose 7'},
    {value: 10, name: 'rose 8'},
    {value: 20, name: 'rose 9'},
    {value: 60, name: 'rose 10'}
]

const colors=['#9fe6b8', '#32c5e9', '#5eb5fc', '#1d9dff', '#8378ea', '#aa6eff', '#e7bcf3', '#fb7293', '#ff9f7f', '#ffdb5c'];
for (let index = 0; index < roseData.length; index++) {
    roseData[index].itemStyle = {
        color: colors[index]
    };
}

const originDataLen = roseData.length;
const spanAngle = 180; // 需要显示的角度
const repeatedMultiple = 360 / spanAngle;
// 这里根据要显示的角度 计算了需要插入的数据量
const addDataLen = parseInt((repeatedMultiple - 1) * originDataLen);
for (let index = 0; index < addDataLen; index++) {
    roseData.push({
        name: null,
        // 这里给数据置零，即在视觉上不显示
        value: 0,
        // 这里保证了异常情况下(数据都为0时)作为占位的数据在视觉上仍为不可见状态。
        itemStyle:{
              color: 'rgba(0,0,0,0)'
        },
        tooltip: {
            show: false,
            formatter: null
        }
    });
}


option = {
    series: [
        {
            name: '面积模式',
            type: 'pie',
            roseType: 'area',
            radius: '110%',
            center: ['50%', '90%'],
            startAngle: 180,
            label: {
                show: false
            },
            data: roseData
        },
        {
        type: 'gauge',
        radius: '110%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 20,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            length: 18,
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        splitLine: {
            length: '0',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            color: '#464646',
            fontSize: 16,
            distance: -60,
            formatter: function (value) {
                if (value === 0.05) {
                    return '部门1';
                }
                else if (value === 0.15) {
                    return '部门2';
                }
                else if (value === 0.25) {
                    return '部门3';
                }
                else if (value === 0.35) {
                    return '部门4';
                }
                else if (value === 0.45) {
                    return '部门5';
                }
                else if (value === 0.55) {
                    return '部门6';
                }
                else if (value === 0.65) {
                    return '部门7';
                }
                else if (value === 0.75) {
                    return '部门8';
                }
                else if (value === 0.85) {
                    return '部门9';
                }
                else if (value === 0.95) {
                    return '部门10';
                }
            }
        },
        title: {
            offsetCenter: [0, '-20%'],
            fontSize: 30
        },
        detail: {
            fontSize: 50,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 100) + '分';
            },
            color: 'auto'
        },
        data: []
    },{
        type: 'gauge',
        radius: '110%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            distance: 0,
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        splitLine: {
            distance: 0,
            length: '100%',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            show: false
        },
        data: []
    },{
        type: 'gauge',
        radius: '88%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            length: 18,
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        splitLine: {
            length: '80%',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            color: '#464646',
            fontSize: 20,
            formatter: function (value) {
                if (value === 0.05) {
                    return '优';
                }
                else if (value === 0.625) {
                    return '中';
                }
                else if (value === 0.375) {
                    return '良';
                }
                else if (value === 0.125) {
                    return '差';
                }
            }
        },
        title: {
            offsetCenter: [0, '-20%'],
            fontSize: 30
        },
        detail: {
            fontSize: 50,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 100) + '分';
            },
            color: 'auto'
        },
        data: []
    },
    {
        type: 'gauge',
        radius: '66%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            length: 18,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: '80%',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            show: false,
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter: function (value) {
                if (value === 0.875) {
                    return '优';
                }
                else if (value === 0.625) {
                    return '中';
                }
                else if (value === 0.375) {
                    return '良';
                }
                else if (value === 0.125) {
                    return '差';
                }
            }
        },
        data: []
    },
    {
        type: 'gauge',
        radius: '44%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            length: 18,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: '80%',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            show: false,
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter: function (value) {
                if (value === 0.875) {
                    return '优';
                }
                else if (value === 0.625) {
                    return '中';
                }
                else if (value === 0.375) {
                    return '良';
                }
                else if (value === 0.125) {
                    return '差';
                }
            }
        },
        data: []
    },
    {
        type: 'gauge',
        radius: '22%',
        center: ['50%', '90%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                width: 1,
                color: [
                    [1, '#213d85']
                ]
            }
        },
        axisTick: {
            show: false,
            length: 18,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: '80%',
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        axisLabel: {
            show: false,
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter: function (value) {
                if (value === 0.875) {
                    return '优';
                }
                else if (value === 0.625) {
                    return '中';
                }
                else if (value === 0.375) {
                    return '良';
                }
                else if (value === 0.125) {
                    return '差';
                }
            }
        },
        data: []
    }]
};