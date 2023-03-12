var color = ['#0CD2E6', '#3751E6', '#FFC722', '#886EFF', '#008DEC', '#114C90', '#00BFA5'];

var title = '自定义legend、默认选中';
var legend = ['A需求类型', 'B需求类型', 'C需求类型', 'D需求类型', 'E需求类型', '其他'];

var seriesData = [
    { name: 'A需求类型', value: 30, selected: true },
    { name: 'B需求类型', value: 10, selected: false },
    { name: 'C需求类型', value: 15, selected: false },
    { name: 'D需求类型', value: 23, selected: false },
    { name: 'E需求类型', value: 10, selected: false },
    { name: '其他', value: 12, selected: false },
];

var option = {
    backgroundColor: 'pink',
    color: color,
    title: {
        top: 20,
        text: title,
        textStyle: {
            fontSize: 20,
            color: '#DDEEFF',
        },
    },
    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 50,
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: 'red',
                    fontSize: 10,
                },
                value: {
                    color: 'red',
                    fontSize: 10,
                },
                rate: {
                    color: 'red',
                    fontSize: 10,
                },
                gray: {
                    color: 'rgba(114,114,114, 0.39)',
                },
            },
        },
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];

                if (!item.selected) {
                    return `{gray|${name}：}{gray| ${item.value}} {gray| ${item.value}%}`;
                } else {
                    return `{name|${name}：}{value| ${item.value}} {rate| ${item.value}%}`;
                }
            }
        },
        data: legend,
    },
    series: [
        {
            name: '需求类型占比',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '65%'],
            legendHoverLink: false, // 禁用legend的hover
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{value|{c}}\n{label|{b}}',
                    rich: {
                        value: {
                            padding: 5,
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 32,
                        },
                        label: {
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 16,
                        },
                    },
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                    },
                },
            },
            labelLine: {
                show: false,
                length: 0,
                length2: 0,
            },
            emphasis: {
                scale: true,
                scaleSize: 30,
                itemStyle: {
                    borderColor: 'pink',
                    borderWidth: 20,
                },
            },
            data: seriesData,
        },
    ],
};

myChart.setOption(option);
getDefaultSelected(myChart);

function getDefaultSelected(myChart) {
    let index = 0;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });

    myChart.on('legendselectchanged', function (params) {
        console.log(params.name);
        for (var i = 0; i < seriesData.length; i++) {
            seriesData[i].selected = false;
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: i,
            });
        }
        const idx = seriesData.findIndex((el) => el.name == params.name);
        if (idx !== -1) {
            console.log('下标', seriesData);
            seriesData[idx].selected = true;
        }

        myChart.setOption({
            legend: { selected: { [params.name]: true } },
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: idx,
        });
    });
}
