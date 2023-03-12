option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
          formatter: params => {
            return '{a|' + params.name + '}\n{b|' + params.value + '}'
          },
          rich: {
            a: {},
            b: {}
          }
        }
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

var currentIndex = 0;
var timer = 0;
function animate() {
  timer = setInterval(function () {
    var dataLen = option.series[0].data.length;
      // 取消之前高亮的图形
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
    });
  }, 1500);
}
animate();

myChart.on("mouseover", function(e) {
  clearInterval(timer);
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
  });
  myChart.dispatchAction({
    type: 'highlight',
    dataIndex: e.dataIndex
  });
});

myChart.on("mouseout", function(e) {
  currentIndex = e.dataIndex;
  animate();
});