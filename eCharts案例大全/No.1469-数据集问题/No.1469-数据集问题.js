// 统计日期
var dateList = ['2021-10-01', '2021-10-02'];

// 指定图表的配置项和数据
var options = {
    // 时间轴
    timeline: {
        axisType: 'category',
        left: '33%',
        right: '33%',
        controlStyle: {
            showPlayBtn: false,
        },
        data: dateList
    },
    // 地图
    geo: {
        show:false,
        map: 'china',
        zoom: '0.6',
        itemStyle: {
            areaColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(100,149,237,1)',
            borderWidth: 0.5,
        },
        emphasis: {
            label: {
                show: false
            },
            itemStyle: {
                areaColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 1,
            },
        },
        top: '28%',
    },
    // 直角坐标系 组件定位
    grid: [
        {left: '50%', top: '48%', right: '20%',},
    ],
    // X轴
    xAxis: [
        {
            gridIndex: 0,
            type: 'value',
            position: 'top',
            axisLine: {show: false},
            axisTick: {show: false},
            minorTick: {show: false},
            axisLabel: {show: true},
            splitLine: {show: false},
            minorSplitLine: {show: false},
            splitArea: {show: false},
        },
    ],
    // Y轴
    yAxis: [
        {
            gridIndex: 0,
            type: 'category',
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            minorTick: {show: false},
            axisLabel: {show: true},
            splitLine: {show: false},
            minorSplitLine: {show: false},
            splitArea: {show: false},
        },
    ],
    // 数据集
    dataset: [
        // 序号为 0 的 dataset。
        {
            source: [
                ['浙江省', 244],
                ['江苏省', 177],
                ['广东省', 167],
                ['山东省', 142],
                ['四川省', 134],
                ['河南省', 123],
                ['河北省', 98],
                ['福建省', 93],
                ['安徽省', 96],
                ['湖北省', 86],
            ]
        },
        // 序号为 1 的 dataset。
        {
            source: [
                ['浙江省', 238],
                ['广东省', 175],
                ['江苏省', 163],
                ['河南省', 159],
                ['四川省', 140],
                ['山东省', 137],
                ['福建省', 120],
                ['河北省', 114],
                ['辽宁省', 101],
                ['湖南省', 97],
            ]
        },
    ],
    // 配置项
    series: [
        // 图表一
        {
            type: 'bar',
            coordinateSystem: 'cartesian2d',
            xAxisIndex: 0,
            yAxisIndex: 0,
        },
    ],
    // 数据
    options: [
        {
            series: [
                {datasetIndex: 0}
            ]
        },
        {
            series: [
                {datasetIndex: 1}
            ]
        },
    ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(options);