let color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#FFFFFF'];
let chartdata = [
    {
        name: '竞争性谈判',
        value: 50,
    },
    {
        name: '公开招标',
        value: 50,
    },
    {
        name: '询价',
        value: 50,
    },
    {
        name: '单一来源',
        value: 50,
    },
];
let sum = 0;
let data1 = [];
chartdata.forEach((item) => {
    sum += Number(item.value);
});
chartdata.forEach((item) => {
    data1.push(item, {
        name: '',
        value: sum / 100,
        labelLine: {
            show: false,
            lineStyle: {
                color: 'transparent',
            },
        },
        itemStyle: {
            color: 'transparent',
        },
    });
});
option = {
    // backgroundColor: '#263e53',
    grid: {
        top: '10%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
    },
    tooltip: {
        formatter: (params) => {
            if (params.name != '') {
                return params.name + ' : ' + params.value + '\n' + '(' + params.percent + '%)';
            }
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['26%', '34%'],
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            startAngle: 0,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    // shadowColor:'#3C3C3C',
                },
            },
            emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: ['36%', '44%'],
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            startAngle: 0,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    // shadowColor:'#3C3C3C',
                },
            },
            emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
    ],
};

let currentIndex = -1;

setInterval(function() {
  var dataLen = option.series[0].data.length;
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'unselect',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
    myChart.dispatchAction({
    type: 'unselect',
    seriesIndex: 1,
    dataIndex: currentIndex
  });
  currentIndex = (currentIndex + 1) % dataLen;
  // 高亮当前图形
  myChart.dispatchAction({
    type: 'select',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  myChart.dispatchAction({
    type: 'select',
    seriesIndex: 1,
    dataIndex: currentIndex
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
}, 2000);