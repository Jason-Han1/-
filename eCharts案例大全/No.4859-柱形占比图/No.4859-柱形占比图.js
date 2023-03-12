const track = true; //是否有轨道
const topColor = '#00B8FF'; //排名前三的柱形颜色: {
const lastColor = '#40E9B1'; //排名后面的柱形颜色: {
const valueSuffix = '万'; //名称后缀
const names = [
    '年收入第1名',
    '年收入第2名',
    '年收入第3名',
    '年收入第4名',
    '年收入第5名',
    '年收入第6名',
    '年收入第7名',
    '年收入第8名',
    '年收入第9名',
    '年收入第10名',
];
const values = [7500, 7000, 6500, 6000, 5500, 5000, 4500, 4000, 3500, 3000];

let lineY = [];
let lineT = [];
for (let i = 0; i < names.length; i++) {
    const data = {
        name: names[i],
        value: values[i],
        barGap: '-100%',
        itemStyle: {
            show: true,
            color: i < 3 ? topColor : lastColor,
            barBorderRadius: 5,
        },
    };
    lineY.push(data);
    //有轨道
    if (track) {
        const data1 = {
            value: values[0],
            realValue: values[i],
            itemStyle: {
                color: '#2B3B6D',
                barBorderRadius: 10,
            },
        };
        lineT.push(data1);
    }
}

option = {
    backgroundColor: '#FFF',
    tooltip: {
        trigger: 'item',
        formatter: (p) => {
            if (p.seriesName === 'total') {
                return '';
            }
            return `${p.name}<br/>${p.value}万`;
        },
    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
    },
    yAxis: [{
        type: 'category',
        show: false,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            verticalAlign: 'bottom',
            lineHeight: '40',
            textStyle: {
                color: '#b3ccf8',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular',
            },
            formatter: function(val) {
                return `${val}ee`;
            },
        },
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        data: values,
    }, ],
    xAxis: {
        type: 'value',
        show: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
    },
    series: [],
};
//带名称的公用配置
const nameBar = {
    name: 'bar',
    type: 'bar',
    zlevel: 1,
    barWidth: '6px',
    data: lineY,
    barGap: '-100%',
    label: {
        color: '#b3ccf8',
        show: true,
        position: [0, '-18px'],
        formatter: function(a) {
            let str = '';
            str = a.name;
            return str;
        },
        rich: {
            color: {
                color: '#949FD5',
                fontSize: 12,
            },
        },
    },
};
//有轨道
if (track) {
    option.series = [
        nameBar,
        {
            name: 'total',
            type: 'bar',
            zlevel: -1,
            barGap: '-100%',
            barWidth: '6px',
            data: lineT,
            legendHoverLink: false,
            label: {
                show: true,
                position: 'right',
                formatter: (a) => {
                    let str = '';
                    if (a.dataIndex < 3) {
                        str = `{top|${a.data.realValue}${
                                        valueSuffix || ''}}{unit|${valueSuffix?'':'万'}}`;
                    } else {
                        str = `{last|${a.data.realValue}${valueSuffix || ''}}{unit|${valueSuffix?'':'万'}}`;
                    }
                    return str;
                },
                rich: {
                    top: {
                        fontSize: 14,
                        color: topColor,
                    },
                    last: {
                        fontSize: 14,
                        color: lastColor,
                    },
                    unit: {
                        color: '#949FD5',
                        fontSize: 11,
                    },
                },
            },
        },
    ];
} else {
    //无轨道
    option.series = [
        nameBar,
        {
            name: 'bar',
            type: 'bar',
            zlevel: 2,
            barWidth: '6px',
            data: lineY,
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    fontSize: 14,
                },
                formatter: function(a) {
                    let str = '';
                    str = `${a.value}{unit|万}`;
                    return str;
                },
                rich: {
                    unit: {
                        color: '#949FD5',
                        fontSize: 11,
                    },
                },
            },
        },
    ];
}