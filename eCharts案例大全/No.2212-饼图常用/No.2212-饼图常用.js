var color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722',
    '#886EFF',
    '#008DEC',
    '#114C90',
    '#00BFA5',
];

var title = '本月平台观看数';
var legend = [
    'A需求类型',
    'B需求类型',
    'C需求类型',
    'D需求类型',
    'E需求类型',
    '其他'
];

var seriesData = [
    { "name": "A需求类型", "value": 300 },
    { "name": "B需求类型", "value": 100 },
    { "name": "C需求类型", "value": 150 },
    { "name": "D需求类型", "value": 230 },
    { "name": "E需求类型", "value": 100 },
    { "name": "其他", "value": 120 }
]

var option = {
    backgroundColor:'#fff',
    color: color,
    title: {
        top: 20,
        left: 20,
        text: title,
        textStyle: {
            fontSize: 14,
            color: '#333',
        },
    },
    grid: {
        top: '5%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    legend: {
        orient: 'vertical',
        icon: "circle",
        top: 'center',
        itemGap: 45,
        right: 70,
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: 'rgba(0, 0, 0, 0.65)',
                    fontSize: 12,
                },
                value: {
                    color: 'rgba(0, 0, 0, 0.65)',
                    fontSize: 12,
                },
                rate: {
                    color: 'rgba(0, 0, 0, 0.65)',
                    fontSize: 12,
                },
            },
        },
        data: legend,
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name}：}   {value| ${item.value}}      {rate| ${item.value}%}`;
            }
        },
    },
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['45%', '65%'],
        itemStyle: {
              normal: {
                borderWidth:5,
                borderColor: "#fff"
              }
            },
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

