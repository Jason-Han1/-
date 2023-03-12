//k线图 图表区域联动 echart4
var allData = disposeData([
    {
        id: 1,
        time: '2021-7',
        open: '34',
        close: '34',
        top: '34',
        low: '34',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-7-01',
        endTime: '2021-7-31'
    },
    {
        id: 2,
        time: '2021-8',
        open: '34',
        close: '32',
        top: '40',
        low: '31',
        listVolume: '133',
        listTurnover: '313',
        bulkVolume: '2456',
        bulkTurnover: '5466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-8-01',
        endTime: '2021-8-31'
    },
    {
        id: 3,
        time: '2021-9',
        open: '40',
        close: '40',
        top: '40',
        low: '40',
        listVolume: '30133',
        listTurnover: '13313',
        bulkVolume: '22556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-9-01',
        endTime: '2021-9-29'
    },
    {
        id: 4,
        time: '2021-10',
        open: '34',
        close: '32',
        top: '40',
        low: '31',
        listVolume: '10133',
        listTurnover: '23313',
        bulkVolume: '14556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-10-01',
        endTime: '2021-10-31'
    },
    {
        id: 5,
        time: '2021-11',
        open: '54',
        close: '32',
        top: '60',
        low: '30',
        listVolume: '2133',
        listTurnover: '33313',
        bulkVolume: '4556',
        bulkTurnover: '5466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-11-01',
        endTime: '2021-11-30'
    },
    {
        id: 6,
        time: '2021-12',
        open: '24',
        close: '22',
        top: '30',
        low: '21',
        listVolume: '123',
        listTurnover: '23313',
        bulkVolume: '556',
        bulkTurnover: '466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-12-01',
        endTime: '2021-12-31'
    },
    {
        id: 7,
        time: '2022-01',
        open: '44',
        close: '52',
        top: '40',
        low: '31',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-01-01',
        endTime: '2022-01-31'
    },
    {
        id: 8,
        time: '2022-02',
        open: '64',
        close: '32',
        top: '40',
        low: '34',
        listVolume: '301',
        listTurnover: '2313',
        bulkVolume: '246',
        bulkTurnover: '4466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-02-01',
        endTime: '2022-02-29'
    },
    {
        id: 9,
        time: '2022-03',
        open: '34',
        close: '32',
        top: '40',
        low: '31',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-03-01',
        endTime: '2022-03-31'
    },
    {
        id: 10,
        time: '2022-04',
        open: '34.43',
        close: '34.42',
        top: '34.43',
        low: '34.40',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-04-01',
        endTime: '2022-04-30'
    },
    {
        id: 11,
        time: '2022-05',
        open: '46',
        close: '43',
        top: '46',
        low: '41',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2021-05-01',
        endTime: '2021-05-31'
    },
    {
        id: 12,
        time: '2022-06',
        open: '34',
        close: '32',
        top: '40',
        low: '31',
        listVolume: '333',
        listTurnover: '23',
        bulkVolume: '246',
        bulkTurnover: '4566',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-06-01',
        endTime: '2022-06-30'
    },
    {
        id: 13,
        time: '2022-07',
        open: '34',
        close: '32',
        top: '40',
        low: '31',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-07-01',
        endTime: '2022-07-31'
    },
    {
        id: 14,
        time: '2022-08',
        open: '34',
        close: '35',
        top: '40',
        low: '31',
        listVolume: '30133',
        listTurnover: '23313',
        bulkVolume: '24556',
        bulkTurnover: '45466',
        volume: '54689',
        turnover: '68779',
        startTime: '2022-08-01',
        endTime: '2022-08-31'
    },
]);
var tooltipParams = {
    open: '开盘值',
    close: '收盘值',
    lowest: '最低值',
    highest: '最高值',
};
function disposeData(data) {
    var seriesData = [];
    var turnoverSeries = [{ data: [] }, { data: [] }];
    var volumeSeries = [{ data: [] }, { data: [] }];
    var xAxisData = [];
    data.map((item) => {
        // value中的值都相同时特殊设置图形线的颜色
        const flag = item.close == item.open && item.low == item.top && item.close == item.low;
        // 开盘值、收盘值、最低值、最高值
        seriesData.push({
            value: [item.open, item.close, item.low, item.top],
            itemStyle: {
                borderColor: flag ? '#3babfc' : '#00fc83',
                borderColor0: flag ? '#3babfc' : '#f54455',
            },
            time: [item.startTime, item.endTime]
        });
        turnoverSeries[0].data.push({ value: item.listVolume, total: item.volume });
        turnoverSeries[1].data.push({ value: item.bulkVolume });
        volumeSeries[0].data.push({ value: item.listTurnover, total: item.turnover });
        volumeSeries[1].data.push(item.bulkTurnover);
        xAxisData.push(item.time);
    });
    return {
        seriesData: seriesData,
        xAxisData: xAxisData,
        turnoverSeries: turnoverSeries,
        volumeSeries: volumeSeries,
    };
}
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    color: ['#00fc83', '#3babfc', '#f54455'],
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(0, 18, 16, 0.9)',
        borderColor: 'transparent',
        confine: true, // 将tooltip限制在图表区域内
        formatter: (params) => {
            if (!params.length) return;
            const data = params[0];
            console.log('data',data)
            let time = `<div><span style="color: #fff">${data.name}</span><br/><span>${data.data.time[0]}至${data.data.time[1]}</span></div>`;
            let itemLabel = '';
            if (data.axisIndex == 0) {
                let kd = data.value;
                kd.forEach((el, index) => {
                    if (index > 0) {
                        // echart4 中dimensionNames有对应值，echart5中为空数组
                        itemLabel += `<div style=" display: flex; flex-shrink: 0; justify-content: space-between;"><div style="min-width: 80px; margin-right: 16px">${
                            tooltipParams[data.dimensionNames[index]]
                        }</div><div style="color: #00fc83">${el || '--'}</div></div>`;
                    }
                });
                return `<div style="font-weight: 600; padding-left: 12px;padding-right: 12px">${time}${itemLabel}</div>`;
            } else {
                time = `<div><span style="color: #fff">${data.name}${
                    data.axisIndex == 1 ? '(吨)' : '(万元)'
                }</span></div>`;
                let itemLabel = `<div style=" display: flex; flex-shrink: 0; justify-content: space-between;"><div style="min-width: 80px; margin-right: 16px">合计</div><div style="color: #00fc83">${data.data.total}</div></div>`;
                params.forEach((item) => {
                    itemLabel += `<div style=" display: flex; flex-shrink: 0; justify-content: space-between;"><div style="min-width: 80px; margin-right: 16px">${item.seriesName}</div><div style="color: #00fc83">${item.value}</div></div>`;
                });
                return `<div style="font-weight: 600; padding-left: 12px;padding-right: 12px">${time}${itemLabel}</div>`;
            }
        },
    },
    title: [
        {
            //标题
            show: true, //是否显示
            text: 'k线图',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 700,
            },
        },
        {
            //标题
            show: true, //是否显示
            top: '43%',
            text: '成交量',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 700,
            },
        },
        {
            //标题
            show: true, //是否显示
            top: '71%',
            text: '成交额',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 700,
            },
        },
    ],
    xAxis: [
        {
            show: true,
            gridIndex: 0,
            axisTick: {
                show: false,
            },
            axisLine: {
                //x轴线
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .2)',
                },
            },
            axisLabel: {
                fontFamily: 'Bebas Neue;',
                fontSize: '12',
                fontWeight: 'normal',
                color: 'rgba(255,255,255,0.6)',
            },
            data: allData.xAxisData,
        },
        {
            gridIndex: 1,
            axisLine: {
                //x轴线
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: allData.xAxisData,
        },
        {
            show: true,
            gridIndex: 2,
            axisTick: {
                show: false,
            },
            axisLine: {
                //x轴线
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .2)',
                },
            },
            axisLabel: {
                show: false,
            },
            data: allData.xAxisData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            scale: true,
            splitNumber: 3,
            axisLabel: {
                //y轴上的文字
                fontFamily: 'Bebas Neue',
                fontSize: '14',
                fontWeight: 'normal',
                color: 'rgba(255,255,255,0.6)',
            },
            axisLine: {
                //y轴线
                show: false,
            },
            splitArea: {
                //分隔区域
                show: true,
                areaStyle: {
                    color: ['transparent', 'rgba(3, 139, 143, .1)'],
                },
            },
            splitLine: {
                //分割线
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                show: false,
            },
            axisLine: {
                //y轴线
                show: false,
            },
            splitArea: {
                //分隔区域
                show: false,
            },
            splitLine: {
                //分割线
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
        },
        {
            type: 'value',
            gridIndex: 2,
            axisLabel: {
                show: false,
            },
            axisLine: {
                //y轴线
                show: false,
            },
            splitArea: {
                //分隔区域
                show: false,
            },
            splitLine: {
                //分割线
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
        },
    ],
    grid: [
        {
            //图表配置
            top: 42,
            left: 16,
            right: 16,
            bottom: '60%',
            containLabel: true, //定位时是否包含标签
        },
        {
            //图表配置
            top: '50%',
            left: 40,
            right: 24,
            bottom: '32%',
            containLabel: true, //定位时是否包含标签
        },
        {
            //图表配置
            top: '78%',
            left: 40,
            right: 24,
            bottom: '8',
            containLabel: true, //定位时是否包含标签
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100,
            xAxisIndex: [0, 0],
        },
        {
            show: false,
            type: 'slider',
            start: 0,
            end: 100,
            xAxisIndex: [0, 1],
        },
        {
            show: false,
            type: 'slider',
            start: 0,
            end: 100,
            xAxisIndex: [0, 2],
        },
    ],
    legend: [
        {
            show: false,
        },
        {
            show: true,
            top: '43%',
            icon: 'rect',
            itemWidth: 16,
            itemHeight: 16,
            itemGap: 32,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                padding: [0, 0, 0, 8],
            },
            right: 16,
            // 特殊处理 避免造成相同图例交互影响
            data: ['1挂牌', '1大宗'],
            formatter: (params) => {
                console.log('params', params);
                const label = params.substr(1, params.length);
                return label;
            },
        },
        {
            show: true,
            top: '71%',
            icon: 'rect',
            itemWidth: 16,
            itemHeight: 16,
            itemGap: 32,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                padding: [0, 0, 0, 8],
            },
            right: 16,
            data: ['挂牌', '大宗'],
        },
    ],
    series: [
        {
            type: 'k',
            data: allData.seriesData,
            xAxisIndex: 0,
            yAxisIndex: 0,
            // 设置阴线、阳线图形的描边颜色
            itemStyle: {
                color: 'transparent',
                color0: 'transparent',
                borderColor: '#00fc83',
                borderColor0: '#f54455',
            },
        },
        {
            name: '1挂牌',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '11',
            stack: 'turnover',
            data: allData.turnoverSeries[0].data,
            color: '#F6BD16',
        },
        {
            name: '1大宗',
            type: 'bar',
            barWidth: '11',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: 'turnover',
            data: allData.turnoverSeries[1].data,
            color: '#5B8FF9',
        },
        {
            name: '挂牌',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barWidth: '11',
            stack: 'volume',
            data: allData.volumeSeries[0].data,
            color: '#F6BD16',
        },
        {
            name: '大宗',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barWidth: '11',
            stack: 'volume',
            data: allData.volumeSeries[1].data,
            color: '#5B8FF9',
        },
    ],
};
