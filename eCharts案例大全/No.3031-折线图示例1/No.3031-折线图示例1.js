option = {
    tooltip: {
        trigger: 'axis',
        position: function (point, params, dom, rect, size) {
            // 其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
            var x = point[0];
            var y = point[1];
            var viewWidth = size.viewSize[0];
            var viewHeight = size.viewSize[1];
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];
            var posX = 0;
            var posY = 0;
            if (x < boxWidth) {
                // 左边放不开
                posX = 5;
            } else {
                // 左边放的下
                posX = x - boxWidth;
            }
            if (y < boxHeight) {
                // 上边放不开
                posY = 5;
            } else {
                // 上边放得下
                posY = y - boxHeight;
            }
            return [posX, posY];
        },
    },
    grid: {
        top: '10%',
        left: '12%',
        right: '8%',
        bottom: 80,
        // containLabel: true
    },
    legend: {
        show: true,
        icon: 'rect',
        bottom: 0,
        textStyle: {
            fontSize: 12,
            color: '#D6D6D6',
        },
        itemWidth: 10,
        itemHeight: 4,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#09507E',
                    width: 2,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#09507E',
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                interval: 'auto',
                textStyle: {
                    color: '#D6D6D6',
                },
            },
            boundaryGap: false,
            data: ['00', '02', '04', '06', '08', '10', '12', '14', '16'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#09507E',
                    type: 'dashed',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#09507E',
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                margin: 10,
                textStyle: {
                    color: '#D6D6D6',
                },
            },
            axisTick: {
                show: false,
            },
            max: 75,
        },
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 8,
            markLine: {
                data: [
                    { name: '平均值', yAxis: 60 },
                    { name: '平均值', yAxis: 20 },
                ],
            },
            lineStyle: {
                normal: {
                    color: '#0EA0FF',
                    width: 2,
                },
            },
            label: {
                show: true,
                position: ['100%', '-50%'],
                textStyle: {
                    color: '#0EA0FF',
                    fontWeight: 'bold',
                },
            },
            itemStyle: {
                opacity: 1,
                color: '#0EA0FF',
            },
            data: [20, 30, 40, 50, 40, 30, 60, 40, 40],
        },
        {
            type: 'line',
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#FF9518',
                    width: 2,
                },
            },
            label: {
                show: true,
                position: ['100%', '-50%'],
                textStyle: {
                    color: '#FF9518',
                    fontWeight: 'bold',
                },
            },
            itemStyle: {
                opacity: 1,
                color: '#FF9518',
            },
            data: [32, 44, 40, 50, 45, 30, 61, 43, 40],
        },
    ],
};
function interval() {
    let activeIndex = -1;
    let timer = setInterval(() => {
        const len = 9;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: activeIndex,
        });
        activeIndex = activeIndex === len - 1 ? 0 : activeIndex + 1;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: activeIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: activeIndex,
        });
    }, 3000);
}
interval()