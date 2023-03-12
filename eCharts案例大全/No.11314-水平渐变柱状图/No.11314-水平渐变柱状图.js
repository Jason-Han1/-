var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    backgroundColor: '#020a1d',
    title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            show: false,
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'50%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    borderWidth:'3',
                    borderTopColor: 'rgba(0,157,197,0.5)',
                    barBorderRadius: [10, 10, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 0,
                        [
                            {offset: 0, color: '#00ccff'},
                            {offset: 0.2, color: '#026082'},
                            {offset: 0.5, color:"#023550"},
                            {offset: 0.8, color: '#026082'},
                            {offset: 1, color: '#00ccff'}
                        ]
                    ),
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.5, color: '#02314b'},
                            {offset: 1, color: '#00ccff'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});