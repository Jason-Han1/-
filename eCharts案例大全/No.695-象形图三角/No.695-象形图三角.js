var option = {
        legend: {
            left: '5%',
            icon: 'roundRect',
            itemHeight: 9, //修改icon图形大小
            // icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            textStyle: {
                color: "white", // 文字的颜色。 
            }
        },
        backgroundColor:'#0C1954',
        /**区域位置*/
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: ['哈尔滨', '黑河', '牡丹江', '佳木斯', '大庆', '鸡西', '鹤岗'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(219,225,255,1)",
                    width: 0,
                    type: "solid"
                }
            },
            axisTick: {
                show: false
            },

        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(202, 255, 253,0.2)",
                    width: 1,
                    type: "solid",
                },

            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(202, 255, 253,0.2)',
                    type: "dashed"
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', //更改坐标轴文字颜色
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            name: '数(人次)',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'triangle',
            barWidth: '100%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    // color:'RGBA(133, 255, 105, 1)',
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "RGBA(97, 255, 66, 1)" // 0% 处的颜色
                    }, {
                        offset: 0.6,
                        color: "RGBA(127, 255, 98, 1)" // 60% 处的颜色
                    }, {
                        offset: 1,
                        color: "RGBA(169, 255, 144, 1)" // 100% 处的颜色
                    }], false)
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [123, 100, 125, 128, 122, 122, 100],
            z: 10
        }]
    };