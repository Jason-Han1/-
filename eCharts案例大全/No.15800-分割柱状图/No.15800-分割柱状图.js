//var uploadedDataURL = "/asset/get/s/data-1480050959023-ByDMFSSGe.json";


//var myChart = echarts.init(document.getElementById('main'));




$.get('/asset/get/s/data-1480050959023-ByDMFSSGe.json').done(function(data) {
    //myChart = ec.init(document.getElementById('EchartsDiv'));

    /*myChart.showLoading({
        text: "图表数据正在努力加载..."
    });*/

    myChart.setOption(
        option = {
            color: ['#445e75', '#45a7ca', '#98d5ef'],


            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['高危事件', '中危事件', '低危事件'],
                top: '10'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '11%',
                containLabel: true
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: ['2016/11/8', '2016/11/9', '2016/11/10', '2016/11/11', '2016/11/12', '2016/11/13', '2016/11/14']
            }],
            yAxis: [{
                type: 'value',
                name: 'count',
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: {
                    fontWeight: 'bold',
                    fontSize: '14',
                }
            }],
            dataZoom: [{
                textStyle: {
                    color: '#8392A5'
                },
                handleSize: '80%',
                dataBackground: {
                    areaStyle: {
                        color: '#8392A5'
                    },
                    lineStyle: {
                        opacity: 0.8,
                        color: '#8392A5'
                    }
                },
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }, {
                type: 'inside'
            }],
            series: [{
                name: '高危事件',
                type: 'bar',
                data: [35, 20, 26, 38, 19, 40, 26],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
            }, {
                name: '中危事件',
                type: 'bar',
                data: [24, 15, 18, 27, 54, 47, 18],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
            }, {
                name: '低危事件',
                type: 'bar',
                data: [20, 15, 24, 8, 16, 39, 19],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
            }]
        }
    );
});