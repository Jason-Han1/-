let tdata = [
    { code: '相关舆情', stock: '5408', fundPost: '19785' },
    { code: '事件总数', stock: '4007', fundPost: '16064' },
    { code: '标准警情数', stock: '1382', fundPost: '14319' },
    { code: '案件总数', stock: '457', fundPost: '13100' },
];
function contains(arr, dst) {
    var i = arr.length;
    while ((i -= 1)) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}

var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(32,220,249,0.1)' },
        { offset: 1, color: 'rgba(32,220,249,1.000)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(55,230,173,0.1)' },
        { offset: 1, color: 'rgba(55,230,173,1.000)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(244,199,0,0.1)' },
        { offset: 1, color: 'rgba(244,199,0,1.000)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(130,164,170,1)' },
        { offset: 1, color: 'rgba(130,164,170,1.000)' },
    ]),
];
var attackSourcesColor1 = ['#20dcf9', '#37e6ad', '#f4c700', '#82a4aa'];
var attaData = [];
var attaName = [];
var topName = ['相关舆情', '事件总数', '标准警情数', '案件总数'];
tdata.forEach((it, index) => {
    attaData[index] = parseFloat(it.fundPost).toFixed(2);
    attaName[index] = it.stock;
    topName[index] = `${it.code} ${it.stock}`;
});
var salvProMax = []; //背景按最大值
for (let i = 0; i < attaData.length; i++) {
    salvProMax.push(attaData[0]);
}
function attackSourcesDataFmt(sData) {
    var sss = [];
    sData.forEach(function (item, i) {
        let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
        };
        sss.push({
            value: item,
            itemStyle: itemStyle,
        });
    });
    return sss;
}

option = {
    backgroundColor: '#000',
    tooltip: {
        show: false,
        textStyle: {
            fontSize: 16,
        },
    },
    color: ['#05071e'],
    legend: {
        show: false,
        pageIconSize: [12, 12],
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            //图例文字的样式
            fontSize: 10,
            color: '#fff',
        },
        selectedMode: false,
        //data: ['个人所得(亿元)'],
    },
    grid: {
        left: '2%',
        right: '0',
        width: '90%',
        bottom: '-4%',
        top: '8%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisPointer: {
                label: {
                    show: true,
                    //margin: 30
                },
            },
            padding: [5, 0, 0, 0],
            //postion: "right",
            data: attaName,
            axisLabel: {
                show: true,
                margin: 30,
                fontSize: 20,
                align: 'left',
                padding: [0, 0, 0, -230],
                color: '#000',
                rich: {
                    nt0: {
                        color: attackSourcesColor1[0],
                        // backgroundColor: attackSourcesColor1[3],
                        // width: 13,
                        // height: 13,
                        fontSize: 30,
                        lineHeight: 3,
                        padding: [0, 0, 0, 0],
                        lineHeight: 5,
                    },
                    nt1: {
                        color: attackSourcesColor1[1],
                        // backgroundColor: attackSourcesColor1[0],
                        // width: 13,
                        // height: 13,
                        fontSize: 30,
                        borderRadius: 100,
                        lineHeight: '5',
                        padding: [0, 0, 0, 0],
                        // padding:[0,0,2,0],
                    },
                    nt2: {
                        color: attackSourcesColor1[2],
                        // backgroundColor: attackSourcesColor1[1],
                        // width: 13,
                        // height: 13,
                        fontSize: 30,
                        borderRadius: 100,
                        padding: [0, 0, 0, 0],
                    },
                    nt3: {
                        color: attackSourcesColor1[3],
                        // backgroundColor: attackSourcesColor1[2],
                        // width: 13,
                        // height: 13,
                        fontSize: 30,
                        padding: [0, 0, 0, 0],
                    },
                    ntOther: {
                        color: '#fff',
                        fontSize: 30,
                    },
                    top0: {
                        color: attackSourcesColor1[0],
                        fontSize: 35,
                        padding: [0, 0, 0, 0],
                        fontStyle: 'italic',
                    },
                    top1: {
                        color: attackSourcesColor1[1],
                        fontSize: 35,
                        padding: [0, 0, 0, 0],
                        fontStyle: 'italic',
                    },
                    top2: {
                        color: attackSourcesColor1[2],
                        fontSize: 35,
                        padding: [0, 0, 0, 0],
                        fontStyle: 'italic',
                    },
                    other: {
                        color: attackSourcesColor1[3],
                        fontSize: 35,
                        padding: [0, 0, 0, 0],
                        fontStyle: 'italic',
                    },
                },
                formatter: function (value, index) {
                    if (index == 0)
                        return (
                            ['{top' + index + '|' + 'No.' + (index + 1) + ' ' + '}'] +
                            ['{ntOther' + '|' + '相关舆情' + '}'].join('\n')
                        );
                    else if (index == 1)
                        return (
                            ['{top' + index + '|' + 'No.' + (index + 1) + ' ' + '}'] +
                            ['{ntOther' + '|' + '事件总数' + '}'].join('\n')
                        );
                    else if (index == 2)
                        return (
                            ['{top' + index + '|' + 'No.' + (index + 1) + ' ' + '}'] +
                            ['{ntOther' + '|' + '标准警情数' + '}'].join('\n')
                        );
                    else if (index == 3)
                        return (
                            ['{other' + '|' + 'No.' + (index + 1) + ' ' + '}'] +
                            ['{ntOther' + '|' + '案件总数' + '}'].join('\n')
                        );
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                rich: {
                    nt0: {
                        color: attackSourcesColor1[0],
                        // backgroundColor: attackSourcesColor1[3],
                        // width: 13,
                        // height: 13,
                        fontSize: 40,
                        align: 'center',
                        lineHeight: 3,
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                        lineHeight: 5,
                    },
                    nt1: {
                        color: attackSourcesColor1[1],
                        // backgroundColor: attackSourcesColor1[0],
                        // width: 13,
                        // height: 13,
                        fontSize: 40,
                        align: 'center',
                        borderRadius: 100,
                        lineHeight: '5',
                        padding: [0, 1, 2, 1],
                        // padding:[0,0,2,0],
                    },
                    nt2: {
                        color: attackSourcesColor1[2],
                        // backgroundColor: attackSourcesColor1[1],
                        // width: 13,
                        // height: 13,
                        fontSize: 40,
                        align: 'center',
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                    nt3: {
                        color: attackSourcesColor1[3],
                        // backgroundColor: attackSourcesColor1[2],
                        // width: 13,
                        // height: 13,
                        fontSize: 40,
                        align: 'center',
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                },
                formatter: function (value, index) {
                    if (index <= 3) return ['{nt' + index + '|' + value + '}'].join('\n');
                    else return ['{nt' + 3 + '|' + value + '}'].join('\n');
                },
            },
            data: attackSourcesDataFmt(attaName),
        },
        {
            //名称
            type: 'category',
            offset: -10,
            position: 'left',
            axisLine: {
                show: false,
            },
            inverse: false,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                interval: 0,
                color: ['#fff'],
                align: 'left',
                verticalAlign: 'bottom',
                lineHeight: 32,
                fontSize: 10,
            },
            data: topName,
        },
    ],
    series: [
        {
            zlevel: 1,
            name: '',
            type: 'bar',
            barWidth: '26px',
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: 'center',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                },
            },
            label: {
                show: false,
                fontSize: 10,
                color: '#fff',
                textBorderWidth: 2,
                padding: [2, 0, 0, 0],
            },
        },
        {
            name: '',
            type: 'bar',
            barWidth: 26,
            barGap: '-100%',
            margin: '20',
            data: salvProMax,
            textStyle: {
                //图例文字的样式
                fontSize: 10,
                color: '#fff',
            },
            itemStyle: {
                normal: {
                    //color: "#142831",
                    //width:"100%",
                    fontSize: 10,
                    //barBorderRadius: 30,
                },
            },
        },
    ],
};
