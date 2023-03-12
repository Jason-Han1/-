myChart.hideLoading();
data = {
    xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'fdaddsfsfsdfda10', 'fdafda11', 'fdafdfsdfsda12'],
    onlineData: [450, 351, 165, 18, 151, 25, 45, 12, 48, 89, 790, 123, 42, 24],
    outlineData: [50, 51, 35, 17, 119, 21, 450, 12, 48, 89, 80, 17, 402, 204],
    licenseData: [520, 452, 235, 62, 270, 46, 495, 24, 96, 178, 870, 140, 444, 228],
    unuseData: [20, 50, 200, 35, 27, 46, 495, 24, 96, 178, 870, 140, 444, 228],
};

let percentData = new Map();
// percentData = percentData.set(mockData.result[1].data,diamondData[1])
for (var i = 0; i < data.onlineData.length; i = i + 1) {
    let percentValue = (((data.onlineData[i] + data.outlineData[i]) / data.licenseData[i]) * 100).toFixed(0);
    percentData.set(data.licenseData[i], percentValue);
}
// console.log(percentData);
// 指定图表的配置项和数据
option = {
    title: {
        text: '设备license利用率',
        subtext: '百分比为已放号占比',
        left: 'left',
    },
    color:["#05F612","#A61961","A49696"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        top: '3%',
        data: ['在线', '离线', '未使用'],
        left: 'right',
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: data.xData,
    },
    dataZoom: [
        {
            yAxisIndex: 0,
            show: false,
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            startValue: 0, // 从头开始。
            endValue: 7, // 一次性展示8个。
        },
    ],
    series: [
        {
            name: '在线',
            type: 'bar',
            stack: 'total',
            barGap: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            data: data.onlineData,
        },
        {
            name: '离线',
            type: 'bar',
            stack: 'total',
            barGap: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            data: data.outlineData,
        },
        {
            name: '未使用',
            type: 'bar',
            stack: 'total',
            barGap: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                },
            },
            data: data.unuseData,
        },
        {
            name: 'license',
            type: 'bar',
            // stack: 'total',
            barGap: '-100%',
            itemStyle: {
                color: '#000',
                opacity: 0,
            },
            label: {
                show: true,
                // color: '#F37879',
                position: 'right',
                opacity: 1,
                formatter: function (v) {
                    let val = v.data;
                    return percentData.get(val) + '%';
                },
            },

            data: data.licenseData,
        },
    ],
};
myChart.setOption(option);
// 定时器
setInterval(function () {
    // 每次向后滚动一个，最后一个从头开始。
    if (option.dataZoom[0].endValue == data.xData.length - 1) {
        option.dataZoom[0].endValue = 7;
        option.dataZoom[0].startValue = 0;
    } else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
    myChart.setOption(option);
}, 3000);
