var uploadedDataURL = '/asset/get/s/data-1634031839342-y15WlZvxx.csv';

var xdata = [];
var ydata = [];
var data = [];
var dataD = { xdata: {}, ydata: {} };
var dataM = { xdata: {}, ydata: {} };
var count = 0; //0==所有，1==月，2==日，
var expand = false;

csv();
function csv() {
  console.log('开始解析...');
  Papa.parse(uploadedDataURL, {
    download: true,
    header: true,
    complete: function (results) {
      // console.log('Finished:', results);
      data = results.data;
      let tempD = 0;
      let tempM = 0;
      data.forEach((item, index) => {
        let t = item['time'];
        let d = t.split(' ')[0];
        let m = d.split('/')[0] + '/' + d.split('/')[1];
        let v = item['line1'];
        xdata.push(t);
        ydata.push(v);
        if (tempD != d) {
          tempD = d;
          dataD['xdata'][d] = [];
          dataD['ydata'][d] = [];
        }
        if (tempM != m) {
          tempM = m;
          dataM['xdata'][m] = [];
          dataM['ydata'][m] = [];
        }
        //按照日统计
        if (d == tempD) {
          dataD['xdata'][d].push(t);
          dataD['ydata'][d].push(v);
        }
        //按照月统计
        if (m == tempM) {
          dataM['xdata'][m].push(t);
          dataM['ydata'][m].push(v);
        }
      });
      console.log(dataM);
      //异步数据加载。
      myChart.hideLoading();
      myChart.setOption(option);
    },
  });
}
//基于准备好的dom，初始化echarts实例
option = {
  title: {
    show: true,
    text: '按年月日折线图-滑动触发数据范围改变',
    textStyle: {
      align: 'center',
      color: '#000',
      fontSize: 20,
    },
    top: '5%',
    left: 'center',
  },
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    // backgroundColor: 'transparent',
    axisPointer: {
      type: 'line',
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
    },
  ],
  toolbox: {
    right: '5%',
    feature: {
      saveAsImage: {},
      restore: {
        formatter: function (params) {
          console.log(params);
        },
      }, //还原
      magicType: {
        type: ['line', 'bar'],
      }, //切换为折线图，切换为柱状图
      dataView: {
        readOnly: true,
      }, //数据视图
    },
  },
  xAxis: {
    type: 'category',
    name: '(时间)',
    data: xdata,
  },
  yAxis: {
    type: 'value',
    name: '(量)',
  },
  series: {
    data: ydata,
    type: 'line',
    smooth: true,
    symbol: 'pin', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    symbolSize: 12, //曲线点大小
    label: {
      //展示点的数值
      show: true,
      position: 'top',
      textStyle: {
        color: '#000',
        fontSize: 14,
      },
    },
  },
};
myChart.on('datazoom', function (params) {
  // 	console.log(params);//里面存有代表滑动条的起始的数字
  let xAxisData = myChart.getModel().option.xAxis[0]; //获取axis
  // 设定移动宽度 所有：100  日：50  时：10
  let width = params.batch[0].end - params.batch[0].start;
  let startIndex = xAxisData.rangeStart; //滑动条左端对应在xAxis.data的索引
  let t = xAxisData.data.splice(startIndex, 1)[0];
  let d = t.split(' ')[0];
  let m = t.split('/')[0] + '/' + t.split('/')[1];
  console.log(width);
  if (width < 10) {
    count = 2;
  } else if (width < 50) {
    count = 1;
  } else {
    count = 0;
  }
  let xAxis = count == 0 ? xdata : count == 1 ? dataM['xdata'][m] : dataD['xdata'][d];
  let yAxis = count == 0 ? ydata : count == 1 ? dataM['ydata'][m] : dataD['ydata'][d];
  let legend = count == 0 ? [''] : count == 1 ? [m] : [d];
  let name = count == 0 ? '' : count == 1 ? m : d;
  myChart.setOption({
    legend: {
      data: legend,
      top: '10%',
    },
    xAxis: {
      data: xAxis,
    },
    series: {
      name: name,
      data: yAxis,
    },
  });
});
