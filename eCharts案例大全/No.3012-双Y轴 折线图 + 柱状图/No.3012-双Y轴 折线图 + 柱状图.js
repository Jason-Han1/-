option = {
    legend: {
        top: 20,
        itemGap: 15,
        data: ['频道数', '有效视频数'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        padding: 10,
    },
    xAxis: {
        nameTextStyle: {
            color: '#222',
            fontSize: 14,
        },
        axisLabel: {
            margin: 20,
            color: '#595959',
            fontSize: 14,
        },
        type: 'category',
        nameLocation: 'center',
        nameGap: 50,
        axisLine: {
            lineStyle: {
                type: 'dashed',
                color: '#ECECEC',
            },
        },
        name: '分类',
        data: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7'],
    },
    yAxis: [
        {
            name: '频道数',
            nameTextStyle: {
                color: '#222',
                fontSize: 14,
            },
            axisLabel: {
                margin: 20,
                color: '#595959',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#ECECEC',
                },
            },
            axisLine: {
                show: false,
            },
            type: 'value',
            minInterval: 1,
            nameGap: 20,
        },
        {
            name: '有效视频数',
            nameTextStyle: {
                color: '#222',
                fontSize: 14,
            },
            axisLabel: {
                margin: 20,
                color: '#595959',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#ECECEC',
                },
            },
            axisLine: {
                show: false,
            },
            type: 'value',
            minInterval: 1,
            nameGap: 20,
        },
    ],
    series: [
        {
            type: 'line',
            name: '频道数',
            yAxisIndex: 0,
            symbol: 'emptyCircle',
            smooth: 0.3,
            symbolSize: 8,
            itemStyle: {
                borderWidth: 2,
                color: '#17A2B8',
            },
            emphasis: {
                itemStyle: {
                    color: '#17A2B8',
                    borderColor: '#fff',
                },
            },
            data: [
                {
                    name: '频道数',
                    value: 141,
                },
                {
                    name: '频道数',
                    value: 22,
                },
                {
                    name: '频道数',
                    value: 33,
                },
                {
                    name: '频道数',
                    value: 44,
                },
                {
                    name: '频道数',
                    value: 55,
                },
                {
                    name: '频道数',
                    value: 66,
                },
                {
                    name: '频道数',
                    value: 74,
                },
            ],
        },
        {
            type: 'bar',
            name: '有效视频数',
            yAxisIndex: 1,
            showBackground: true,
            barWidth: '20%',
            itemStyle: {
                color: '#FF7656',
            },

            data: [
                {
                    name: '有效视频数',
                    value: 111,
                },
                {
                    name: '有效视频数',
                    value: 222,
                },
                {
                    name: '有效视频数',
                    value: 333,
                },
                {
                    name: '有效视频数',
                    value: 444,
                },
                {
                    name: '有效视频数',
                    value: 555,
                },
                {
                    name: '有效视频数',
                    value: 666,
                },
                {
                    name: '有效视频数',
                    value: 777,
                },
            ],
        },
    ],
};

myChart.setOption(option);
