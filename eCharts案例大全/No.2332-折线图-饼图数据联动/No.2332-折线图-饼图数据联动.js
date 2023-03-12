option = {
    color: ['#00c6c4', '#ff9c00', '#1b85FF', '#ff1b1b', '#7a32ff'],
    backgroundColor:"#313033",
    title: {
        text: '',
    },
    tooltip: {
        //提示框组件
        backgroundColor: 'rgba(73, 84, 123, .9)',
        borderColor: 'rgba(73, 84, 123, .9)',
        padding: 10,
        textStyle: {
            color: '#fff',
        },
        formatter: function (params, ticket, callback) {
            if (!Array.isArray(params)) {
                // 非数组,是一个对象
                // 单个图表为饼图数据
                const { data, name, marker, percent, dimensionNames } = params;
                let index = params.encode.value[0];
                return name + '<br />' + marker + ' ' + dimensionNames[index] + ':' + data[index] + `(${percent}%)`;
            }
            let showHtm = ``;
            for (let i = 0; i < params.length; i++) {
                const { data, marker, seriesName } = params[i];

                let value = data[params[i].encode.y[0]];
                showHtm += marker + ' ' + seriesName + ':' + value + '<br>';
            }
            showHtm = params[0].axisValue + '<br>' + showHtm;
            return showHtm;
        },
    },
    legend: {
        //图例组件
        x: 'center',
        bottom: '25',
        right: '200',
        itemGap: 20,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        textStyle: {
            color: '#fff', //字体颜色
        },
        tooltip:{
            show:true,
        }
    },
    grid: [
        {
            left: '40',
            top: '50',
            bottom: '10',
            height: 210,
            width: '90%',
            containLabel: true,
            tooltip: {
                trigger: 'axis',
            },
        },
        {
            top: '300',
            bottom: '10',
            height: 210,
            width: '90%',
            containLabel: true,
            tooltip: {
                trigger: 'item',
                formatter: 'hello',
            },
        },
    ],
    xAxis: {
        //X轴
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            //坐标轴刻度标签
            textStyle: {
                color: '#ABB0CC',
            },
        },
        axisLine: {
            //x轴
            show: true,
            lineStyle: {
                color: 'rgba(230, 230, 230, 0.18)',
            },
        },
        axisTick: {
            //x轴刻度线
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#ABB0CC',
            },
            formatter: '{value}',
        },
        nameTextStyle: {
            color: '#93A6BB',
        },
        splitLine: {
            //网格线
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(230, 230, 230, 0.18)',
            },
        },
        axisLine: {
            //y轴
            show: false,
            lineStyle: {
                color: '#ABB0CC',
            },
        },
        axisTick: {
            //y轴刻度线
            show: false,
        },
    },
    dataset: {
        sourceHeader: true,
        source: [
            [
                'metrics',
                '00:00',
                '01:00',
                '02:00',
                '03:00',
                '04:00',
                '05:00',
                '06:00',
                '07:00',
                '08:00',
                '09:00',
                '10:00',
                '11:00',
                '12:00',
            ],
            ['交调数据', 56, 123, 34, 68, 130, 45, 67, 190, 31, 80, 211, 234, 78],
            ['Link数据', 156, 223, 134, 38, 30, 34, 68, 130, 45, 67, 190, 256, 300],
            ['交通数据流', 96, 63, 134, 168, 400, 230, 223, 134, 38, 30, 34, 68, 341],
            ['气象', 456, 223, 234, 268, 30, 63, 134, 168, 400, 230, 223, 134, 38],
        ],
    },
    series: [
        {
            name: '交调数据',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
        },
        {
            name: 'Link数据',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
        },
        {
            name: '交通数据流',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
        },
        {
            name: '气象',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
        },
        {
            type: 'pie',
            id: 'pie-chart',
            radius: ['20%', '40%'],
            center: ['50%', '65%'],
            label: {
                show: true,
                formatter: '{b}\n {@00:00} ({d})',
            },
            labelLine: {
                show: true,
            },
            encode: {
                itemName: 'metrics',
                value: '00:00',
            },
        },
    ],
};
myChart.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        myChart.setOption({
            series: {
                id: 'pie-chart',
                encode: {
                    value: dimension,
                    tooltip: dimension,
                },
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                },
            },
        });
    }
});
