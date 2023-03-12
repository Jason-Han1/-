var data = [50, 70, 50, 60, 80, 90];
var className = ['1年级', '2年级', '3年级', '4年级', '5年级', '6年级'];
var colorList = ['#39B3FF', '#47E0E0', '#7891D9', '#83D978', '#C7A530', '#FF8439'];
var defaultData = [500, 500, 500, 500, 500, 500];
option = {
    backgroundColor: 'rgb(13,29,78)',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                params[0].value
            );
        },
    },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        axisLabel: {
            color: 'rgb(28,136,190)', //字体颜色
            width: 100,
        },
        // show: false,
        type: 'value',
        splitLine: {
            show: false, //刻度线
        },
        axisTick: {
            show: false, //刻度点
        },
        axisLine: {
            show: false, //是否显示坐标轴轴线

            // lineStyle: {
            //     color: 'rgb(28,136,190)',
            //     color: '#fff',//字体颜色
            //     width: 1
            // }
        },
        data: defaultData,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgb(30,147,200)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },

            data: className,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: function (value) {
                    // return value + ' %';//柱状图后面跟百分比
                },
            },
            data: data,
        },
    ],
    series: [
        {
            name: '完成率1',
            type: 'bar',
            stack: 'aa',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
                        // return colorList[params.dataIndex]
                        return 'rgb(1,160,234)';
                    },
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '完成率2',
            type: 'bar',
            stack: 'aa',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
                        // return colorList[params.dataIndex]
                        return 'rgb(145,203,116)';
                    },
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '完成率3',
            type: 'bar',
            stack: 'aa',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
                        // return colorList[params.dataIndex]
                        return 'rgb(250,200,89)';
                    },
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '完成率4',
            type: 'bar',
            stack: 'aa',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
                        // return colorList[params.dataIndex]
                        return 'rgb(255,144,1)';
                    },
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '完成率5',
            type: 'bar',
            stack: 'aa',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
                        // return colorList[params.dataIndex]
                        return 'rgb(2,235,250)';
                    },
                },
            },
            barWidth: 20,
            data: data,
        },

        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#1B375E',
                    barBorderRadius: 0,
                },
            },
        },
    ],
};
