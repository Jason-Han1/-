let tdata = [
    { DeviceCategory: "导乘屏", DeviceType: "导乘屏", NumCount: 3, DomainId: 1},
    {DeviceCategory: "电子站牌", DeviceType: "55寸双屏", NumCount: 3, DomainId: 1},
    {DeviceCategory: "电子站牌", DeviceType: "65寸单屏", NumCount: 20, DomainId: 1},
    {DeviceCategory: "电子站牌", DeviceType: "墨水屏", NumCount: 2, DomainId: 1},
    {DeviceCategory: "调度屏", DeviceType: "43寸调度屏", NumCount: 74, DomainId: 1}
    
]

var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#EB3B5A' },
        { offset: 1, color: '#FE9C5A' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#FA8231' },
        { offset: 1, color: '#FFD14C' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#F7B731' },
        { offset: 1, color: '#FFEE96' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#395CFE' },
        { offset: 1, color: '#2EC7CF' },
    ]),
];
var attaName = [];
var topName = [];
tdata.forEach((it, index) => {
    attaName[index] = it.NumCount;
    topName[index] = it.DeviceCategory + '   ' + it.DeviceType;
});
var salvProMax = []; //背景按最大值
for (let i = 0; i < attaName.length; i++) {
    salvProMax.push(attaName[4]);
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
        backgroundColor: 'rgba(3,169,244, 0.5)', //背景颜色（此时为默认色）
        textStyle: {
            fontSize: 16,
        },
    },
    color: ['#F7B731'],
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
        // data: ['个人所得(亿元)'],
    },
    grid: {
        left: '5%',
        right: '2%',
        width: '80%',
        bottom: '2%',
        top: '8%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
              color: "#818A96",
              fontSize: 12,
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
              color: "#979797",
            },
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
            pdaaing: [5, 0, 0, 0],
            postion: 'right',
            data: topName,
            axisLabel: {
                show: true,
                fontSize: 10,
                padding: [2, 0, 0, 0],
                color: '#fff',
            },
        },
    ],
    series: [
        {
            zlevel: 1,
            name: '',
            type: 'bar',
            barWidth: '7px',
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaName),
            align: 'center',
            itemStyle: {
                normal: {
                    barBorderRadius: 13,
                },
            },
            label: {
                show: true,
                fontSize: 10,
                color: '#fff',
                textBorderWidth: 2,
                padding: [2, 0, 0, 0],
                position: "right",
            },
        },
        {
            name: '',
            type: 'bar',
            barWidth: 7,
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
                    color: '#142831',
                    //width:"100%",
                    fontSize: 10,
                    //barBorderRadius: 30,
                    
                },
            },
        },
    ],
};
