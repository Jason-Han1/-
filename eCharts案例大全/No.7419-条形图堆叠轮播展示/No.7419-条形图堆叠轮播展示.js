var uploadedDataURL = "/asset/get/s/data-1591344758953-j1Y7QqUmH.json";

myChart.showLoading();
$.getJSON(uploadedDataURL,function(data){
    if(data.carCountRank){
        var statData = data.carCountRank;
        var page = 0;
        var size = 4;
        var count = statData.length;
        var pages = Math.ceil(count / size);
        
        
        let option = {
            grid: [{
                //左侧的柱状图grid
                left:'4%',
                top: '20%',
                right: '4%',
                bottom: '1%'
            }],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: [{
                //左侧柱状图的X轴
                gridIndex: 0, //x 轴所在的 grid 的索引
                show: false
            }],
            legend: {
                data:['小型车','中型车','大型车','特大型车','摩托车'],
                top:30
            },
            yAxis: [{
                //左侧柱状图的Y轴
                gridIndex: 0, //y轴所在的 grid 的索引
                splitLine: 'none',
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    verticalAlign: 'bottom',
                    align: 'left',
                    padding: [0, 0, 15, 15],
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    }
                },
                data:  [],
                inverse: true,
            },
                {
                    //左侧柱状图的Y轴
                    gridIndex: 0, //y轴所在的 grid 的索引
                    splitLine: 'none',
                    axisTick: 'none',
                    axisLine: 'none',
                    data:  [],
                    inverse: true,
                    axisLabel: {
                        show: true,
                        verticalAlign: 'bottom',
                        align: 'right',
                        padding: [0, 20, 15, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: '16',
                        },
                        formatter: function(value) {
                            return '{x|' + value + '}  {y|' + "辆}"
                        },
                        rich: {
                            y: {
                                color: '#befbff',
                                fontSize: 16
                            },
                            x: {
                                color: '#f6cf42',
                                fontSize: 16
                            }
                        }
                    }
                },
                {
                    //左侧柱状图的Y轴
                    gridIndex: 0, //y轴所在的 grid 的索引
                    splitLine: 'none',
                    axisTick: 'none',
                    axisLine: 'none',
                    data: []
                }
            ],
            series: [
                {
                    name: '小型车',
                    stack: '总量',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barWidth: 15,
                    z:2,
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: []
                },
                {
                    name: '中型车',
                    stack: '总量',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barWidth: 15,
                    z: 2,
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: []
                },
                {
                    name: '大型车',
                    stack: '总量',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barWidth: 15,
                    z:2,
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: []
                },
                {
                    name: '特大型车',
                    stack: '总量',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barWidth: 15,
                    z:2,
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: []
                },
                {
                    name: '摩托车',
                    stack: '总量',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barWidth: 15,
                    z:2,
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: []
                },
                {
                    name: '外框',
                    type: 'bar',
                    xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                    yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                    barGap: '-100%',
                    data: [],
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: '#2d5271',
                            barBorderRadius: 0,
                        }
                    },
                    z: 0
                }]
        };
        
        
        setInterval(function(){
            let yAxisData = [];
            let seriesData = [];
            let small = [];
            let middle = [];
            let big = [];
            let large = [];
            let motor = [];
            
            let currentData = statData.slice(page * size, (page + 1) * size);
            
            $.each(currentData,function(idx,val){
                for(let key in val){
                    yAxisData.push(key);
                    seriesData.push(val[key].total);
                    small.push(val[key].small);
                    middle.push(val[key].middle);
                    big.push(val[key].big);
                    large.push(val[key].large);
                    motor.push(val[key].motor);
                }
            })

            page = ++page % pages;

            let maxLevel = Math.max(...seriesData);
            let maxLevels = [maxLevel,maxLevel,maxLevel,maxLevel];
            option.yAxis[0].data = yAxisData;
            option.yAxis[1].data = seriesData;
            option.series[0].data = small;
            option.series[1].data = middle;
            option.series[2].data = big;
            option.series[3].data = large;
            option.series[4].data = motor;
            option.series[5].data = maxLevels;
            
            
            myChart.setOption(option);
            myChart.hideLoading();
            
        },5000)
        
        var index = 0; //播放所在下标
        var mTime = setInterval(function() {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
                });
            index++;
            if(index > size) {
                index = 0;
            }
        }, 1000);
    }
})

/**
 * 参考了某位大牛的样例改的，忘记了他的gallery地址，
 * 感谢这位大哥^_^
*/