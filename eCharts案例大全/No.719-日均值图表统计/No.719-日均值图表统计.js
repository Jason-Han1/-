const getRandom = (n, m) => Math.round(Math.random() * (m - n) + n);

const getRandonData = (length) => {
    let seriesData = [];
    for (let i = 0; i < length; i++) {
        let cate = [];
        for (let j = 0; j < 20; j++) {
            cate.push(getRandom(1, 50));
        }
        seriesData.push(cate.sort((a, b) => a - b));
    }
    return seriesData;
};

/**
 * @description 将接口数据转化为符合 echarts 的数据
 * @param {array} source 数据源
 * @param {boolean} diff 是否按AQI等级拆分数据
 * @returns echartsData 符合echarts配置数据
 */
const transformData = (xData, factor) => {
    const xAxisData = xData.map((v) => v.name);
    const seriesDatas = factor.map(() => getRandonData(xAxisData.length));
    return {
        xAxisData,
        seriesDatas,
    };
};

const selected = [
    { code: '320505001', name: '横塘街道' },
    { code: '320505002', name: '狮山街道' },
    { code: '320505003', name: '枫桥街道' },
    { code: '320505004', name: '镇湖街道' },
    { code: '320505005', name: '东渚街道' },
    { code: '320505100', name: '浒墅关镇' },
    { code: '320505101', name: '通安镇' },
    { code: '320505407', name: '苏州科技城' },
];

const legendData = ["PM2.5", "PM10", "NO2", "SO2", "CO", "O3"];
const { xAxisData, seriesDatas } = transformData(selected, legendData);

option = {
    legend: {
        bottom: 0,
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: 50,
        top: 15,
        right: 15,
        bottom: 65,
    },
    xAxis: {
        type: 'category',
        nameGap: 30,
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
        },
        data: xAxisData,
    },
    yAxis: {
        type: 'value',
        splitArea: {
            show: false,
        },
    },
    series: legendData.map((v, i) => ({
        name: v,
        type: 'boxplot',
        data: seriesDatas[i],
    })),
};
