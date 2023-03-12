const colorList = ['#ff9ff3', '#feca57', '#ff6b6b'];
const data = [11, 22, 12, 30, 2, 3, 32];
const oneData = [];
const twoData = [];
const threeData = [];

// 数据过滤
data.forEach((data, index) => {
    oneData[index] = '--';
    twoData[index] = '--';
    threeData[index] = '--';
    if (data > 20) {
        oneData[index] = data;
    } else if (data > 10) {
        twoData[index] = data;
    } else {
        threeData[index] = data;
    }
});
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter(params) {
            let html = '';
            params.forEach((item) => {
                if (item.value !== '--') {
                    html += `<div><span style="color:${item.color}">⬤</span> ${item.seriesName}：${item.value}</div>`;
                }
            });
            return html;
        },
    },
    legend: {
        show: true,
    },
    xAxis: {
        data: [
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
        ],
    },
    yAxis: {
        type: 'value',
    },
    series: [{
            // barGap: '-100%',
            stack: 'level',
            name: '一级',
            type: 'bar',
            data: oneData,
            itemStyle: {
                color: colorList[0],
            },
        },
        {
            stack: 'level',
            name: '二级',
            type: 'bar',
            data: twoData,
            itemStyle: {
                color: colorList[1],
            },
        },
        {
            stack: 'level',
            name: '三级',
            type: 'bar',
            data: threeData,
            itemStyle: {
                color: colorList[2],
            },
        },
    ],
};