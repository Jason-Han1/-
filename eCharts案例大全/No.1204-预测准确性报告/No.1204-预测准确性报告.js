const uploadedDataURL = '/asset/get/s/data-1635390802457-HRSoVX4EN.json';

const symbolPass =
    'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0MjAwNDAzNDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRDMjI5LjI0OCAxMDI0IDAgNzk0Ljc1MiAwIDUxMlMyMjkuMjQ4IDAgNTEyIDBzNTEyIDIyOS4yNDggNTEyIDUxMi0yMjkuMjQ4IDUxMi01MTIgNTEyeiBtLTExNC4xNzYtMzEwLjk1NDY2N2E1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAwIDc1LjQzNDY2NyAwbDMyMy4zMjgtMzIzLjMyOGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAwLTc1LjQzNDY2Ny03NS40MzQ2NjZsLTI4Ny45MTQ2NjcgMjgzLjMwNjY2Ni0xMjguODUzMzMzLTEyOC44NTMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMC03NS40MzQ2NjcgNzUuNDM0NjY3bDE2OC44NzQ2NjcgMTY4Ljg3NDY2NnoiIGZpbGw9IiMxYWZhMjkiIHAtaWQ9IjI1MDEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkwIiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+';
const symbolFail =
    'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0MjgwMDM2OTY5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwOTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDMyQzI1MS40Mjg1NzE1NjI1IDMyIDMyIDI1MS40Mjg1NzE1NjI1IDMyIDUxMnMyMTkuNDI4NTcxNTYyNSA0ODAgNDgwIDQ4MCA0ODAtMjE5LjQyODU3MTU2MjUgNDgwLTQ4MC0yMTkuNDI4NTcxNTYyNS00ODAtNDgwLTQ4MHogbTIwNS43MTQyODUzMTI1IDYxNy4xNDI4NTY4NzVjMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1IDIwLjU3MTQyODQzNzUgNDggMCA2MS43MTQyODYyNDk5OTk5OTQtMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1LTQ4IDIwLjU3MTQyODQzNzUtNjEuNzE0Mjg1MzEyNDk5OTk2IDBsLTEzNy4xNDI4NTY4NzUtMTM3LjE0Mjg1NzgxMjVMMzc0Ljg1NzE0MzEyNSA3MTcuNzE0Mjg1MzEyNWMtMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1LTQ4IDIwLjU3MTQyODQzNzUtNjguNTcxNDI4NDM3NSAwcy0yMC41NzE0Mjg0Mzc1LTU0Ljg1NzE0MzEyNSAwLTY4LjU3MTQyODQzNzVsMTQ0LTE0NC0xMzcuMTQyODU3ODEyNS0xMzcuMTQyODU2ODc1Yy0yMC41NzE0Mjg0Mzc1LTEzLjcxNDI4NTMxMjUwMDAwMS0yMC41NzE0Mjg0Mzc1LTQxLjE0Mjg1Njg3NSAwLTYxLjcxNDI4NTMxMjQ5OTk5NiAyMC41NzE0Mjg0Mzc1LTIwLjU3MTQyODQzNzUgNDgtMjAuNTcxNDI4NDM3NSA2MS43MTQyODYyNDk5OTk5OTQgMGwxMzcuMTQyODU2ODc1IDEzNy4xNDI4NTY4NzUgMTQ0LTE0NGMyMC41NzE0Mjg0Mzc1LTIwLjU3MTQyODQzNzUgNDgtMjAuNTcxNDI4NDM3NSA2OC41NzE0Mjg0Mzc1IDAgMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1IDIwLjU3MTQyODQzNzUgNDggMCA2OC41NzE0Mjg0Mzc1TDU4MC41NzE0Mjg0Mzc1IDUxMmwxMzcuMTQyODU2ODc1IDEzNy4xNDI4NTY4NzV6IiBmaWxsPSIjZjE1MDQ3IiBwLWlkPSIyMTAwIj48L3BhdGg+PC9zdmc+';

const scaling = 1;

/**
 * @deprecated 获取AQI误差范围
 * @params {number} value
 */
const getErrLimilt = (value) => {
    if (!value) return 20;
    if (value > 100 && value <= 200) return 30;
    if (value > 200) return 50;
    return 20;
};

/**
 * @description 将接口数据转化为符合 echarts 的数据
 * @param {array} history 历史数据
 * @param {array} forecast 预测数据
 * @param {boolean} diff 是否按AQI等级拆分数据
 * @returns echartsData 符合echarts配置数据
 */
const transformData = (history, forecast, scaling) => {
    // days
    let xAxisData = [...new Set([...Object.keys(history), ...Object.keys(forecast)])].sort();
    const len = xAxisData.length;
    if (len > 60) xAxisData = xAxisData.splice(len - 61, len - 1);
    // 历史数据
    const historyData = xAxisData.map((v) => (history[v] ? history[v].aqi : null));
    // 预测数据
    const forecastData = xAxisData.map((v) => (forecast[v] ? forecast[v].aqi : null));
    // 预测标记数据
    const markPointData = xAxisData.map((v, index) => {
        const value = forecast[v] ? forecast[v].aqi : null;
        const result = {
            xAxis: index,
            yAxis: value,
            symbolSize: [5, getErrLimilt(value) * scaling],
        };
        return result;
    });

    return { xAxisData, historyData, forecastData, markPointData };
};

// 获取悬浮提示元素
const getTooltipRow = (params, isHideEmpty = false) => {
    if (isHideEmpty && !params.value) return '';
    return `
  <div style="display: flex; justify-content: space-between; min-width: 0; padding-top: 3px;">
    <span style="${params.marker ? '' : 'padding-left: 18px'}">${params.marker || ''} ${params.seriesName}</span>
    <span style="padding-left: 10px; font-weight: bold;">${params.value || '-'}<span style="font-weight: initial;">${
        params.range || ''
    }</span></span>
  </div>`;
};

$.getJSON(uploadedDataURL, (data) => {
    const { history, forecast } = data;
    console.log(data);
    const { xAxisData, historyData, forecastData, markPointData } = transformData(
        history || {},
        forecast || {},
        scaling
    );
    const myOption = {
        // backgroundColor: '#FAFBFD',
        title: {
            text: '预测准确性报告',
            left: 'center',
        },
        grid: {
            top: 65,
            left: 45,
            right: 15,
            bottom: 20,
        },
        legend: {
            show: true,
            top: 35,
        },
        tooltip: {
            position: 'top',
            trigger: 'axis',
            formatter: (params) => {
                if (params.length !== 2) return '';
                const [paramsOne, paramsTwo] = params;
                const result = [];
                const dateStr = (paramsTwo || {}).axisValue || (paramsOne || {}).axisValue;
                if (dateStr) result.push(dateStr);
                if (paramsOne) result.push(getTooltipRow(paramsOne));
                if (paramsTwo && paramsTwo.value) {
                    const limilt = getErrLimilt(paramsTwo.value) / 2;
                    paramsTwo.range = `±${limilt}`;
                }
                if (paramsTwo) result.push(getTooltipRow(paramsTwo));
                if (paramsOne && paramsTwo) {
                    const accuracyValue = (lineValue, barValue) => {
                        if (!lineValue || !barValue) return '';
                        const diffValue = Math.abs(lineValue - barValue);
                        return `${parseInt(Math.abs(100 - (diffValue / barValue) * 100))}%`;
                    };
                    const accuracy = {
                        seriesName: '准确率',
                        value: accuracyValue(paramsOne.value, paramsTwo.value),
                    };
                    result.push(getTooltipRow(accuracy, true));
                }
                return result.join('');
            },
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '实况监测',
                type: 'line',
                color: '#4886F8',
                smooth: true,
                itemStyle: { opacity: 0 },
                data: historyData,
            },
            {
                name: '模式预报',
                type: 'line',
                color: '#41C15A',
                lineStyle: {
                    opacity: 0,
                },
                itemStyle: {
                    opacity: 0,
                },
                markPoint: {
                    data: markPointData,
                    symbol:
                        'path://M 1 1 L 10 1 L 10 2 L 6 2 L 6 29 L 10 29 L 10 30 L 1 30 L 1 29 L 5 29 L 5 2 L 1 2 L 1 1',
                },
                data: forecastData,
            },
        ],
    };
    myChart.setOption(myOption);
});
