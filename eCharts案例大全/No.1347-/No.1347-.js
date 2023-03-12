var dataArr = [320, 270, 341, 374, 400, 150, 420, 123];
var spaceLength = 5,
    fixedData = [],
    end = 0,
    max = 300;
var chartColor = [
    ['#4ED5BF', '#8DCFFC'],
    ['#45A9EC', '#8DCFFC'],
];
var categoryData = ['省公司1', '成都2', '眉山3', '达州4', '德阳5', '绵阳6', '天府7', '达州8'];
var data1 = dataArr.map((item) => {
    fixedData.push(spaceLength);
    return item - spaceLength;
});
if (categoryData.length < 5) {
    end = categoryData.length - 1;
} else {
    end = 2;
}
option = {
    xAxis: [
        {
            splitLine: {
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                },
            },
            type: 'value',
            show: true,
            axisLine: {
                //y轴
                show: true,
            },
        },
    ],

    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                //y轴
                show: true,
            },
            type: 'category',
            axisTick: {
                show: false,
            },
            data: categoryData,
            axisLabel: {},
        },
    ],
    dataZoom: [
        {
            type: 'slider',
            yAxisIndex: 0,
            zoomLock: false,
            width: 8,
            showDetail: false,
            startValue: 0, // 从头开始。
            endValue: end, // 一次性展示五个。
            borderWidth: 0,
            borderColor: 'transparent',
            backgroundColor: '#343F4B',
            fillerColor: '#4291CE',
            showDataShadow: false,
            brushSelect: false,
            height: '88%',
            handleStyle: {
                color: '#4291CE',
            },
            handleIcon: 'path://M512 512m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z',
        },
    ],

    series: [
        {
            name: '',
            type: 'bar',
            stack: 'Ad',
            color: 'transparent',
            data: fixedData,
        },
        {
            name: '',
            type: 'bar',
            stack: 'Ad',
            barWidth: 12, // 柱子宽度
            label: {
                formatter: function (parms) {
                    return parms.value + spaceLength;
                },
                show: true,
                position: 'right', // 位置
                color: '#1CD8A8',
                fontSize: 14,
                fontWeight: 'bold', // 加粗
                distance: 10, // 距离
            },
            // // 根据名字展示颜色
            // itemStyle: {
            //     color: (parms) => {
            //         var color = [];
            //         console.log(parms.name);
            //         if (parms.name == '省公司1') {
            //             color = chartColor[0];
            //         } else {
            //             color = chartColor[1];
            //         }
            //         return new echarts.graphic.LinearGradient(
            //             0,
            //             0,
            //             1,
            //             0,
            //             color.map((color, offset) => ({
            //                 color,
            //                 offset,
            //             }))
            //         );
            //     },
            // },
            // data: data1,
            //   根据数据大小展示颜色
            data: data1.map((item) => {
                var itemStyle = {
                    color:
                        item <= max - spaceLength
                            ? new this.echarts.graphic.LinearGradient(
                                  0,
                                  0,
                                  1,
                                  0,
                                  chartColor[0].map((color, offset) => ({
                                      color,
                                      offset,
                                  }))
                              )
                            : new echarts.graphic.LinearGradient(
                                  0,
                                  0,
                                  1,
                                  0,
                                  chartColor[1].map((color, offset) => ({
                                      color,
                                      offset,
                                  }))
                              ),
                };
                return {
                    value: item,
                    itemStyle: itemStyle,
                };
            }),
        },
    ],
};
// 自动滚动
function autoMove() {
    setInterval(() => {
        if (Number(option.dataZoom[0].endValue) === categoryData.length - 1) {
            option.dataZoom[0].endValue = end;
            option.dataZoom[0].startValue = 0;
        } else {
            option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
            option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        }
        myChart.setOption(option);
    }, 3000);
}
autoMove();
