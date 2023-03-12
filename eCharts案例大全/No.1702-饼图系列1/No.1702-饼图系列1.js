var color = [
    '#BBE800',
    '#FE8A26',
    '#E8684A',
    '#F6BD16',
    '#00CB63',
];

// var title = '自定义legend、默认选中';
var legend = [
    '蜜罐名称1',
    '蜜罐名称2',
    '蜜罐名称3',
    '蜜罐名称4',
    '蜜罐名称5',
];

var seriesData = [
    { "name": "蜜罐名称1", "value": 30 },
    { "name": "蜜罐名称2", "value": 10 },
    { "name": "蜜罐名称3", "value": 15 },
    { "name": "蜜罐名称4", "value": 23 },
    { "name": "蜜罐名称5", "value": 60 },
]

var option = {
    color: color,
    title: {
        top: 20,
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
                    color: '#333',
                    fontSize: 14,
                },
                value: {
                    color: '#333',
                    fontSize: 14,
                },
                rate: {
                    color: '#333',
                    fontSize: 14,
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
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '65%'],
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
        data: seriesData,
    }],
};

myChart.setOption(option);

getDefaultSelected(myChart)

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

