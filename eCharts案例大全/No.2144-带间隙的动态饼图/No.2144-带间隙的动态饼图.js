var data = [100, 200, 300, 400, 500];
var sum = 0;
var avgValue = 0;
var seriesData = [];
var index = 0;
var curIndex = 0;
var timer = null;
data.forEach(function (item) {
  sum += item;
});
avgValue = sum / 100; //间隙数据
data.forEach(function (item, index) {
  //实际展示数据
  seriesData.push({
    name: '测试数据' + (index + 1),
    value: item,
    unit: '人',
  });
  seriesData.push(
    //虚拟数据做间隙使用
    // 实际当前数据是渲染成饼图的一部分，设置了颜色透明，视觉效果是间隙
    {
      name: '',
      value: avgValue, //间隔数据取总数的百分之一
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      },
    }
  );
});
var colorList = ['#5CEDFF', '#259AF0', '#23C376', '#EE8C2C', '#CD2323'];
var option = {
  grid: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    show: true,
    backgroundColor: '#000',
  },
  legend: [
    {
      show: false,
    },
  ],
  title: [
    {
      text: seriesData[0].value + seriesData[0].unit,
      top: '35%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        color: '#FFD32D',
        fontSize: 50,
        fontFamily: 'SourceHanSansCN',
      },
    },
    {
      text: seriesData[0].name,
      top: '55%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        color: 'rgba(242, 252, 253, 0.84)',
        fontSize: 50,
        fontFamily: 'SourceHanSansCN',
      },
    },
  ],
  series: [
    {
      type: 'pie',
      z: 3,
      center: ['50%', '50%'],
      radius: ['80%', '88%'],
      clockwise: true,
      avoidLabelOverlap: true,
      emphasis: {
        scale: true,
        scaleSize: 10,
      },
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex / 2];
          },
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: seriesData,
    },
    {
      name: '内环',
      type: 'pie',
      z: 2,
      tooltip: {
        show: false,
      },
      center: ['50%', '50%'],
      radius: ['70%', '75%'],
      hoverAnimation: false,
      clockWise: false,
      itemStyle: {
        normal: {
          color: 'rgba(36,68,118,.5)',
        },
        emphasis: {
          color: 'rgba(36,68,118,.5)',
        },
      },
      label: {
        show: false,
      },
      data: [100],
    },
  ],
};
myChart.setOption(option);

//设置默认选中高亮部分
myChart.dispatchAction({
  type: 'highlight',
  seriesIndex: 0,
  dataIndex: curIndex * 2, //存在间隙 index*2
});
//设置高亮
function setEmphasis(index) {
  if (curIndex != index) {
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: curIndex,
    });
  }
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: index,
  });

  //修改option参数
  curIndex = index;
  option.title[0].text = seriesData[index].value + seriesData[index].unit;
  option.title[1].text = seriesData[index].name;
  myChart.setOption(option);
}
//自动轮播
function startAnima() {
  timer = setInterval(function () {
    if (index >= seriesData.length - 2) {
      index = 0;
    } else {
      index += 2;
    }
    setEmphasis(index);
  }, 2000);
}
//取消轮播
function clearAnima() {
  clearInterval(timer);
}
//开始轮播
startAnima();

//鼠标移入事件
myChart.on('mouseover', function (e) {
    clearAnima();
    setEmphasis(e.dataIndex);
});
myChart.on('mouseout', function (e) {
    startAnima();
});

window.addEventListener('resize', () => {
  myChart.resize();
});
// }
