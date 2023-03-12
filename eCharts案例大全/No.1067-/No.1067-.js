let companyData = [
    { companyTypeCode: '1120', companyTypeName: '商场、超市', totalNumber: 6 },
    { companyTypeCode: '1163', companyTypeName: '咖啡厅', totalNumber: 4 },
    { companyTypeCode: '10000', companyTypeName: '粮、棉、木材、百货等物资仓库和堆场', totalNumber: 4 },
    { companyTypeCode: '1112', companyTypeName: '饭店', totalNumber: 4 },
    { companyTypeCode: '1000', companyTypeName: '人员密集场所', totalNumber: 1 },
    { companyTypeCode: '11000', companyTypeName: '国家和省级重点工程的施工现场', totalNumber: 1 },
    { companyTypeCode: '15000', companyTypeName: '小微企业', totalNumber: 1 },
    {
        companyTypeCode: '12000',
        companyTypeName: '其他发生火灾可能性较大以及一旦发生火灾可能造成人身重大伤亡或重大财产损失的单位',
        totalNumber: 1,
    },
    { companyTypeCode: '14000', companyTypeName: '出租房', totalNumber: 1 },
];
let dataName = [];
let data1 = [];
let defaultData = [];
let maxData = 0;
companyData.forEach((item) => {
    dataName.push(item.companyTypeName);
    data1.push(item.totalNumber);
    if (maxData < item.totalNumber) {
        maxData = item.totalNumber;
    }
});
for (let i = 0; i < data1.length; i++) {
    defaultData.push(maxData);
}
var colorList = [
    '#00AAFF',
    '#A52A2A',
    '#FF752D',
    '#FFCF31',
    '#FF3129',
    '#006400',
    '#8B4513',
    '#FF8C00',
    '#FFB6C1',
    '#7B68EE',
    '#87CEFA',
    '#008000',
    '#D2B48C',
];
// var defaultData = [800, 800, 800, 800]
option = {
    backgroundColor: '#36467E',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        position: function (point, params, dom, rect, size) {
            // console.log(point)

            return [point[0], point[1]];
        },
        confine: false,
        // formatter: '{b}:{c}'
        formatter: function (params) {
            // console.log(params)
            let title = params[0].name;
            if (title.length > 30) {
                title = title.substring(0, 15) + '<br/>' + title.substring(15, 30) + '<br/>' + title.substring(30);
            } else if (title.length > 15) {
                title = title.substring(0, 15) + '<br/>' + title.substring(15);
            }
            let name = title + ' : ' + params[0].value;
            return name;
        },
    },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            // axisLabel: {
            //   show: true,
            //   textStyle: {
            //     color: '#fff'
            //   },
            //   rotate: 0
            // },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: function (value) {
                    value = value.length > 7 ? value.substring(0, 7) + '...' : value;
                    return value;
                },
            },
            data: dataName,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: function (value) {
                    return value;
                },
            },
            data: data1,
        },
    ],
    series: [
        {
            name: '数量',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: (params) => {
                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgba(54,69,129,1)',
                            },
                            {
                                offset: 0.8,
                                color: colorList[params.dataIndex],
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.8)',
                            },
                        ]);
                    },
                    // color: (params) => {
                    //   return colorList[params.dataIndex]
                    // }
                },
            },
            barWidth: 15,
            data: data1,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#1B375E',
                    barBorderRadius: [0, 30, 30, 0],
                },
            },
        },
    ],
};