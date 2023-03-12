dataXName = ['淑阳镇', '莒口镇', '安平镇', '刘宋镇', '五百户镇'];
dataYbar = [66, 50, 43, 55, 37];
dataYbar2 = [55, 42, 46, 75, 38];
dataYline = [40, 20, 65, 25, 30];
dataTNam = ['累计热量(GJ)', '累计流量(T)', '环比(%)'];
option = {
    tooltip: {
        trigger: 'axis',
        // "axisPointer": {
        //     "type": "cross",
        //     "crossStyle": {
        //         "color": "#999"
        //     }
        // }
    },
    backgroundColor: '#FAFAFA',
    // grid: {
    //     left: '3%', //整个曲线居左的距离
    //     right: '4%', //整个曲线居右左的距离
    //     bottom: '20%', //整个曲线居下左的距离
    //     height: '70%', //整个曲线的高
    //     containLabel: true
    // },
    // https://blog.csdn.net/kebi007/article/details/68488694
    axisLabel: {
        interval: 0,
        formatter: function (value) {
            debugger;
            var ret = ''; //拼接加\n返回的类目项
            var maxLength = 2; //每项显示文字个数
            var valLength = value.length; //X轴类目项的文字个数
            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            if (rowN > 1) {
                //如果类目项的文字大于3,
                for (var i = 0; i < rowN; i++) {
                    var temp = ''; //每次截取的字符串
                    var start = i * maxLength; //开始截取的位置
                    var end = start + maxLength; //结束截取的位置
                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = value.substring(start, end) + '\n';
                    ret += temp; //凭借最终的字符串
                }
                return ret;
            } else {
                return value;
            }
        },
    },
    legend: {
        data: dataTNam,
        // "bottom": 5,
        top: '1%',
        // icon: "circle",
        //   icon: "circle", //icon 长方形 circle 圆形 arrow箭头型 diamond菱形
        // textStyle: {
        //     color: "#fff"
        // }
    },
    dataZoom: [
        {
            type: 'slider',
            realtime: true,
            //拖拉
            handleSize: '100%', //滑动条两侧的大小
            start: 0, //开始位置
            end: 80, //结束位置
            // bottom: 25, //居下的距离
            // textStyle: {
            //     color: '#1bb4f6', // 滑动条的文字颜色
            // },
        },
    ],
    xAxis: [
        {
            data: dataXName,
            axisPointer: {
                type: 'shadow',
            },

            axisLine: {
                lineStyle: {
                    color: '#D2D2D2', //x轴颜色
                },
            },
            axisTick: {
                show: true, //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#35346F', //X轴文字颜色
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
            },
            // name: "累计热量(GJ)",
            nameTextStyle: {
                // color: "#ebf8ac"
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D2D2D2',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#D2D2D2', //y轴字体颜色
                },
            },
        },
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            name: '(%)',
            axisTick: {
                show: false, //隐藏X轴刻度
            },
            axisLine: {
                show: false,
                // lineStyle: {
                //     color: '#fff'
                // }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#898AAE',
                },
            },
        },
    ],

    series: [
        {
            name: dataTNam[0],
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 0, 0],
                    emphasis: {
                        barBorderRadius: [8, 8, 0, 0],
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#00feff',
                        },
                        {
                            offset: 0.5,
                            color: '#4693EC',
                        },
                        {
                            offset: 1,
                            color: '#027eff',
                        },
                    ]),
                },
            },
            data: dataYbar2,
            markLine: {
                silent: true,
                data: [
                    {
                        yAxis: 10,
                    },
                ],
            },
        },
        {
            name: dataTNam[1],
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 0, 0],
                    emphasis: {
                        barBorderRadius: [8, 8, 0, 0],
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#f6d365',
                        },
                        {
                            offset: 0.5,
                            color: '#fee140',
                        },
                        {
                            offset: 1,
                            color: '#f9d423',
                        },
                    ]),
                },
            },
            data: dataYbar,
        },
        {
            name: dataTNam[2],
            type: 'line',
            yAxisIndex: 1,
            // smooth:true, //圆滑
            data: dataYline,
            itemStyle: {
                normal: {
                    color: '#35346F',
                    lineStyle: {
                        color: '#35346F',
                    },
                },
            },
        },
    ],
};

myChart.on('click', function (params) {
    console.log('echarts图：', params);
    if (params.componentType == 'xAxis') {
        console.log(1111);
        alert('单击了' + params.value + 'x轴标签');
    } else {
        console.log(2222);
        alert('单击了' + params.name + '柱状图');
    }
});

autoFn(dataXName.length);
function autoFn(leng) {
    var that = this;
    //轮播效果
    var currentIndex = -1;

    //  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
    var dataLen = leng;

    that.timer = setInterval(() => {
        //  计时器增加
        that.ai++;

        if (that.ai == dataLen) {
            that.ai = 1;
        }
        console.log(dataLen);
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex,
        });
    }, 3000);
}
