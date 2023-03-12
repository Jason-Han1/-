var color = ['#0CD2E6', '#3751E6', '#FFC722', '#886EFF', '#008DEC', '#114C90', '#00BFA5'];

var title = '自定义legend、默认选中';
var legend = ['A需求类型', 'B需求类型', 'C需求类型', 'D需求类型', 'E需求类型', '其他'];

var seriesData = [
    { name: 'A需求类型', value: 60 },
    { name: 'B需求类型', value: 10 },
    { name: 'C需求类型', value: 15 },
    { name: 'D需求类型', value: 23 },
    { name: 'E需求类型', value: 10 },
    { name: '其他', value: 12 },
];

var option = {
    backgroundColor: '#050e31',
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
    polar: {}, //环线
    angleAxis: {
        // interval: 1,
        // type: 'category',
        // data: [],
        // z: 10,
        // axisLine: {
        //     show: false,
        //     lineStyle: {
        //         color: "#0B4A6B",
        //         width: 1,
        //         type: "solid"
        //     },
        // },
        // axisLabel: {
        //     interval: 0,
        //     show: true,
        //     color: "#0B4A6B",
        //     margin: 8,
        //     fontSize: 16
        // },
    },
    radiusAxis: {
        min: 60,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0B3E5E',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            // 环线的数字
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16,
        },
        splitLine: {
            // 环线样式
            lineStyle: {
                color: '#0B3E5E',
                width: 2,
                type: 'solid',
            },
        },
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
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                value: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                rate: {
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 10,
                },
            },
        },
        data: legend,
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name}：}{value| ${item.value}} {rate| ${item.value}%}`;
            }
        },
    },
    series: [
        {
            name: '需求类型占比',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['75%', '85%'],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{value|{c}}\n{label|{b}}',
                    rich: {
                        //中间文字
                        value: {
                            padding: 5,
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 20,
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
            itemStyle: {//间隔
                normal: {
                    borderWidth: 5,
                    borderColor: '#050e31',
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
    myChart.on('mouseover', (e) => {
        if (e.dataIndex !== index) {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index,
            });
        }
    });
    myChart.on('mouseout', (e) => {
        index = e.dataIndex;
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
    });
}
