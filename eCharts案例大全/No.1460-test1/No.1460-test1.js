var xData2 = ['容城谷庄', '雄县七间房', '安新三台', '雄县张岗', '安新寨里', 'ewewe'];
var data1 = [30, 20, 30, 20, 20, 40];
option = {
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        data: xData2,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'red',
                fontSize: 20,
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: 'red',
                fontSize: 20,
            },
        },
    },
    series: [
        //数据的柱状图
        {
            name: '',
            type: 'bar',
            barWidth: 45,
            barGap: '-100%',
            itemStyle: {
                //lenged文本
                opacity: .5, //这个是 透明度
                color:'red',
            },

            data: data1,
        },
        //后面的背景
        {
            name: '2019',
            type: 'bar',
            barWidth: 45,
            barGap: '-100%',
            z: 0,
            label: {
                formatter: ({ dataIndex }) => {
                    return data1[dataIndex];
                },
                show: true,
                position: 'top',
                distance: 10,
                color: 'red',
            },
            itemStyle: {
                color: 'transparent',
            },

            data: [100, 100, 100, 100, 100, 100],
        },
    ],
};
