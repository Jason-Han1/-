// import echarts from 'echarts'
var charts = {
    // 按顺序排列从大到小
    cityList: ['地面及周围整洁', '自行车停放不整齐', '建筑物立面不整洁美观', '有杂物垃圾，有污水', '绿化设施破坏'],
    cityData: [78, 68, 62, 57, 53],
    total: 100, // 背景条总长度
};
var top10CityList = charts.cityList;
var top10CityData = charts.cityData;

let lineY = [];
let BgY = [];
let xlineData = []
for (var i = 0; i < charts.cityList.length; i++) {
    xlineData.push(`${i+1}.`)
    var data = {
        name: charts.cityList[i],
        value: top10CityData[i],
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                        {
                            offset: 0,
                            color: '#026eff', // 这是线条颜色
                        },
                        {
                            offset: 1,
                            color: '#70b9ff', // 这是线条颜色
                        },
                    ],
                    false
                ),
                barBorderRadius: 10,
            },
        },
    };
    var bdata = {
        name: charts.cityList[i],
        value: charts.total,
        itemStyle: {
            normal: {
                show: true,
                color: '#ffffff', // 这里背景 的颜色   改这里
                borderColor: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                        {
                            offset: 0,
                            color: '#026eff', // 这里是背景的线条颜色
                        },
                        {
                            offset: 1,
                            color: '#70b9ff', // 这里是背景的线条颜色
                        },
                    ],
                    false
                ),
                barBorderRadius: 10,
            },
        },
    };
    lineY.push(data);
    BgY.push(bdata);
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },

    backgroundColor: '#ccc',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                fontSize: 24,
                color: '#fff',
                fontWeight: 'bold',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: xlineData
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '24',
                },
                formatter: function (value) {
                    let val = ((value / charts.total) * 100).toFixed(1);
                    return val + ' %';
                },
            },
            data: top10CityData,
        },
    ],
    series: [
        {
            name: '问题数目',
            type: 'bar',
            zlevel: 1,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16,
                    },
                    formatter: '{b} （ {c} ）',
                },
            },
            barWidth: 20, // 这里改宽度啊
            data: lineY,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20, // 这里改宽度啊
            barGap: '-100%',
            data: BgY,
        },
    ],
};
