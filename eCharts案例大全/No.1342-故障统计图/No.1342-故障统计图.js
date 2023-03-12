var data = [1440, 1440, 1440, 1440, 1440, 1440, 1440];
var data1 = []; //告警
var data2 = []; //消警
var dataOne = [];
var dataTwo = [];
var dataThree = [];
var dataFour = [];
var dataFive = [];
var dataSix = [];
var dataSeven = [];
getData();
option = {
  title: {
    text: '故障统计图',
    left: 'center',
  },
  backgroundColor: '#fff',
  tooltip: {
    show: true,
    type: 'axis',
    formatter: function (params) {
      console.log(params);
      return params.name + '<br/>' + '告警时间:' + params.value + '</br>' + '消警时间:' ;
    },
  },
  yAxis: {
    show: true,
    data: ['2021-10-01', '2021-10-02', '2021-10-03', '2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07'],
  },
  xAxis: {
    show: true,
    // label: { //显示值的算法，有一定间距的显示
    // 	show: true,
    //   color:'#8da5b2',
    //   formatter:(params)=>{
  		//   return params.value[1]+'°C';
    // 	}
    // }
  },
  series: [
    {
      name: '',
      type: 'bar',
      tooltip: {
        show: false,
      },
      z: 0, //图层值
      barWidth: 1,
      symbolOffset: [10, 12],
      itemStyle: {
        color: 'green',
      },
      data: data,
    },
    {
      name: '异形柱状图',
      type: 'pictorialBar', //异型柱状图
      tooltip: {
        show: false,
      },
      symbol: 'reat', //内部类型（方块，圆，svg，base64图片）
      z: 1,
      symbolSize: [5, 35], //size,单个symbol的大小
      symbolOffset: [5, 0], //柱子的位置
      symbolMargin: 3, //间隔
      symbolRepeat: 'fixed', //是否重复symbol
      symbolPosition: 'end',
      itemStyle: {
        color: 'red',
        borderWidth: 12,
        borderColor: '#fff', //边框颜色
      },
      data: data,
    },
  ],
};
run();

function getData() {
  for (let i = 1; i < 10; i++) {
    let dataone = {
      //全部告警
      startTime: '2021-10-01' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
      endTime: '',
      min: i * 60 + i,
    };
    let datatwo = {
      //全部消警
      startTime: '2021-10-02' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
      endTime: '2021-10-03' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
      min: i * 60 + i,
    };
    let datathree = {
      //部分消警
      startTime: '2021-10-03' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
      endTime: i > 6 ? '2021-10-04' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i : '',
      min: i * 60 + i,
    };
    if (i == 4) {
      //1个告警，无消警
      let datafour = {
        startTime: '2021-10-04' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
        endTime: '',
        min: i * 60 + i,
      };
      dataFour.push(datafour);
    }
    if (i == 5) {
      //1个消警，无告警
      let datafive = {
        startTime: '2021-10-05' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
        endTime: '2021-10-06' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
        min: i * 60 + i,
      };
      dataFive.push(datafive);
    }
    if (i == 3 || i == 7) {
      let dataseven = {
        startTime: '2021-10-05' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
        endTime: '2021-10-06' + ' ' + '0' + i + ':' + '0' + i + ':' + '0' + i,
        min: i * 60 + i,
      };
      dataSeven.push(dataseven);
    }

    dataOne.push(dataone);
    dataTwo.push(datatwo);
    dataThree.push(datathree);
    // dataSix  //无告警
  }
}
function run() {
  dataOne.forEach((item, index) => {
    let warnValue = [
      !item.endTime ? item.min : '',
      dataTwo[index] && !dataTwo[index].endTime ? dataTwo[index].min : '',
      dataThree[index] && !dataThree[index].endTime ? dataThree[index].min : '',
      dataFour[index] && !dataFour[index].endTime ? dataFour[index].min : '',
      dataFive[index] && !dataFive[index].endTime ? dataFive[index].min : '',
      dataSix[index] && !dataSix[index].endTime ? dataSix[index].min : '',
      dataSeven[index] && !dataSeven[index].endTime ? dataSeven[index].min : '',
    ];
    let unwarnValue = [
      item.endTime ? item.min : '',
      dataTwo[index] && dataTwo[index].endTime ? dataTwo[index].min : '',
      dataThree[index] && dataThree[index].endTime ? dataThree[index].min : '',
      dataFour[index] && dataFour[index].endTime ? dataFour[index].min : '',
      dataFive[index] && dataFive[index].endTime ? dataFive[index].min : '',
      dataSix[index] && dataSix[index].endTime ? dataSix[index].min : '',
      dataSeven[index] && dataSeven[index].endTime ? dataSeven[index].min : '',
    ];
    let warnTime1 = [
      !item.endTime ? item.startTime : '',
      dataTwo[index] && !dataTwo[index].endTime ? dataTwo[index].startTime : '',
      dataThree[index] && !dataThree[index].endTime ? dataThree[index].startTime : '',
      dataFour[index] && !dataFour[index].endTime ? dataFour[index].startTime : '',
      dataFive[index] && !dataFive[index].endTime ? dataFive[index].startTime : '',
      dataSix[index] && !dataSix[index].endTime ? dataSix[index].startTime : '',
      dataSeven[index] && !dataSeven[index].endTime ? dataSeven[index].startTime : '',
    ];
    let warnTime2 = [
      item.endTime ? item.startTime : '',
      dataTwo[index] && dataTwo[index].endTime ? dataTwo[index].startTime : '',
      dataThree[index] && dataThree[index].endTime ? dataThree[index].startTime : '',
      dataFour[index] && dataFour[index].endTime ? dataFour[index].startTime : '',
      dataFive[index] && dataFive[index].endTime ? dataFive[index].startTime : '',
      dataSix[index] && dataSix[index].endTime ? dataSix[index].startTime : '',
      dataSeven[index] && dataSeven[index].endTime ? dataSeven[index].startTime : '',
    ];
    let unwarnTime = [
      item.endTime ? item.endTime : '',
      dataTwo[index] && dataTwo[index].endTime ? dataTwo[index].endTime : '',
      dataThree[index] && dataThree[index].endTime ? dataThree[index].endTime : '',
      dataFour[index] && dataFour[index].endTime ? dataFour[index].endTime : '',
      dataFive[index] && dataFive[index].endTime ? dataFive[index].endTime : '',
      dataSix[index] && dataSix[index].endTime ? dataSix[index].endTime : '',
      dataSeven[index] && dataSeven[index].endTime ? dataSeven[index].endTime : '',
    ];
    data1.push({
      warn: warnValue,
      time: warnTime1,
      unTime: [],
    });
    data2.push({
      unwarn: unwarnValue,
      time: warnTime2,
      unTime: unwarnTime,
    });
  });
  console.log(data1,data2)
  // 告警
  echarts.util.each(data1, function (value, idx) {
    option.series.push({
      name: idx, //带有涟漪的散点图
      type: 'effectScatter',
      z: 3,
      itemStyle: {
        color: 'red',
        opacity: 1,
        borderWidth: 0,
      },
      data: value.warn,
    });
  });
  // 消警
  echarts.util.each(data2, function (value, idx) {
    option.series.push({
      name: idx, //带有涟漪的散点图
      type: 'effectScatter',
      z: 3,
      itemStyle: {
        color: '#333',
        opacity: 1,
        borderWidth: 0,
      },
      data: value.unwarn,
    });
  });
}
