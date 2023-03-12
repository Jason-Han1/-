var titleText = {
    labelLine: true,
    text: '数据总量',
    unit: '条',
    color: [],
};
var typeData = {
    0: { name: '血氧', color: '#44BBB4' },
    1: { name: '心电', color: '#5386FC' },
    2: { name: '血压', color: '#F9B651' },
    3: { name: '体温', color: '#F49150' },
    4: { name: '血糖', color: '#F16467' },
    5: { name: '体脂', color: '#AF6EF1' },
    6: { name: '舌象', color: '#7FC8FB' },
    7: { name: '舌象', color: '#7FC8FB' },
    8: { name: '舌象', color: '#7FC8FB' },
    9: { name: '舌象', color: '#7FC8FB' },
};
function sumTotal(arr) {
    let s = 0;
    arr.forEach((val, index, arr) => {
        s += val.value == 0.1 ? 0 : val.value;
    });
    return s || 0;
}
var data = [
    { value: 12, checkType: '08', name: '舌象' },
    { value: 6, checkType: '03', name: '血压' },
    { value: 3, checkType: '02', name: '心电' },
    { value: 2, checkType: '01', name: '血氧' },
    { value: 4, checkType: '04', name: '体温' },
];

// 当前设备检测数据占比
const newData = [];
data.forEach((val, index, arr) => {
    if (val.value > 0) {
        newData.push({
            value: val.value,
            name: typeData[index].name,
            itemStyle: {
                color: typeData[index].color,
            },
            label: {
                rich: {
                    hr: {
                        backgroundColor: typeData[index].color,
                    },
                    a: {
                        color: '#999999',
                    },
                },
            },
        });
    }
});
data = newData;

const total = sumTotal(data);
if (!total || total === 0) {
    data = [
        {
            value: 0,
            name: '空',
            itemStyle: {
                color: '#13102F',
            },
            label: {
                show: false,
            },
        },
    ];
}

const reducer = (m, current) => {
    const middleware = typeof m === 'number' ? m : m.value;
    return middleware + current.value;
};
const count = data.reduce(reducer);

const others = [];
const newOtherData = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].value / count < 0.05) {
        others.push(data[i]);
    } else {
        newOtherData.push(data[i]);
    }
}
if (others.length > 1) {
    newOtherData.push({
        name: '其他',
        value: others.reduce(reducer),
        itemStyle: {
            color: '#9adfff',
        },
        label: {
            rich: {
                hr: {
                    backgroundColor: '#9adfff',
                },
                a: {
                    color: '#999999',
                },
            },
        },
    });
}

option = {
    backgroundColor: '#02001D',
    legend: {
        show: false,
        orient: 'vertical',
        top: '0',
        right: '0',
        textStyle: {
            color: '#666666',
            fontWeight: 'normal',
        },
    },
    title: {
        text: `${titleText.text}\n{number|${total}}\n{loading|${titleText.unit}}`,
        left: 'center',
        top: 'center', // top待调整
        textStyle: {
            color: '#999999',
            fontSize: 16,
            fontWeight: '400',
            rich: {
                loading: {
                    color: '#999999',
                    height: 20,
                    fontSize: 16,
                },
                number: {
                    color: '#FFFFFF',
                    height: 70,
                    fontSize: 48,
                    fontWeight: 'bold',
                    padding: [10, 0, 0, 0],
                },
            },
        },
        itemGap: -4, // 主副标题间距
    },
    tooltip: {
        trigger: 'item',
        formatter: (params) => {
            if (params.name === '其他') {
                let str = '';
                others.map((v) => {
                    str += `${v.name}: ${v.value} ${titleText.unit} (${
                        Math.round((v.value * 10000) / count) / 100
                    }%)<br/>`;
                });
                return str;
            } else {
                return `${params.name}: ${params.value} ${titleText.unit} (${params.percent}%)`;
            }
        },
    },
    series: [
        {
            type: 'pie',
            // radius: ['70%', '90%'],
            radius: ['55%', '65%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: true, //是否启用防止标签重叠策略，默认开启
            color: titleText.color,
            silent: !total,
            label: {
                show: !total ? false : titleText.labelLine,
                position: 'outside',
                formatter: '{a|{b}}\n{hr|}',
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12],
                    },
                    a: {
                        padding: [-25, 5, -20, 3],
                        color: '#999999',
                    },
                },
            },
            emphasis: {
              label: {
                show: true
              }
            },
            labelLine: {
                // show: !total ? false : titleText.labelLine,
                normal: {
                    show: false,
                    length2: -2,
                },
            },
            data: others.length <= 1 ? data : newOtherData
        },
    ],
};
var dataLen = option.series[0].data.length
setTimeout(() => {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });
}, 1000);

myChart.currentIndex = -1;
setInterval(() => {
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: myChart.currentIndex,
    });
    myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: myChart.currentIndex,
    });
}, 2000);
