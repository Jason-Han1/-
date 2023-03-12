option = {
  grid: {
    x: '10%', //图表距容器左边距离
    y: '10%', //图表距容器上边距离
    x2: '20%', //图表距容器右边距离
    y2: 0, //图表距容器下边距离
    containLabel: true,
  },
  title: {
    //标题
    text: '中标情况',
    subtext: '纯属虚构',
    padding: [
      //标题位置
      5, // 上
      10, // 右
      10, // 下
      60, // 左
    ],
  },
  // 提示信息
  tooltip: {
    borderColor: 'rgba(0,0,0,.8)', //提示框边框颜色
    backgroundColor: 'rgba(0,0,0,.8)', //提示框背景色
    textStyle: {
      //提示框内字体颜色
      color: '#fff',
    },
    trigger: 'axis', //触发类型,坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
    formatter: function (params) {
      var relVal = params[0].name;
      // for (var i = 0, l = params.length; i < l; i++) {
      //   if(i=(l-1)){unit='万元'};
      //   relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + unit;
      // }
      relVal += '<br/>' + params[0].marker + params[0].seriesName + ' : ' + params[0].value + '次';
      relVal += '<br/>' + params[1].marker + params[1].seriesName + ' : ' + params[1].value + '次';
      relVal += '<br/>' + params[2].marker + params[2].seriesName + ' : ' + params[2].value + '万元';
      return relVal;
    },
    axisPointer: {
      //取消竖线提示
      type: 'none',
    },
  },

  // toolbox: {//功能盒，可以保存，设置显示形态等
  //   feature: {
  //     dataView: { show: true, readOnly: false },//数据视图
  //     magicType: { show: true, type: ['line', 'bar'] },//转换显示形态
  //     restore: { show: true },//还原显示形态
  //     saveAsImage: { show: true }//保存为图片
  //   }
  // },

  // 头部对应数据提示，默认在中上位置
  legend: {
    icon: 'circle',
    data: ['同类供应商均值', '中标次数', '中标金额'],
    right: 10,
    bottom: 20,
    orient: 'vertical',
    textStyle: {
      color: '#000',
      fontSize: 14,
    },
    selected: { 中标金额: true }, // 默认不需要显示的设置为false
  },

  // x轴坐标
  xAxis: [
    {
      type: 'category', //类型是分类
      boundaryGap: true, //坐标两边留白，默认true
      axisTick: {
        //x轴刻度设置
        alignWithLabel: true, //对齐年份
        show: true,
      },
      data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'], //X轴上每个值
      // axisPointer: { //划过x轴的效果，这里是shadow效果
      //   type: 'shadow'
      // }
    },
  ],
  // y轴设置
  yAxis: [
    {
      //左侧y轴
      type: 'value',
      // name: '次',//y轴标题
      min: 0, //最小值
      max: 60, //最大值
      interval: 10, //刻度
      axisLabel: {
        formatter: '{value}', //y坐标刻度样式，可带单位
      },
      splitLine: {
        //设置y轴刻度线
        show: true,
        lineStyle: {
          //样式设置
          color: '#91939d', //颜色
          type: 'dashed', //虚线
        },
      },
      axisLine: { show: false }, //取消y轴线的显示
      axisTick: {
        //y轴刻度设置
        show: false,
      },
    },

    {
      //右侧y轴
      type: 'value',
      // name: 'Temperature',//y轴标题
      min: 0, //最小值
      max: 300, //最大值
      interval: 50, //刻度
      axisLabel: {
        formatter: '{value} ', //y坐标刻度样式，可带单位
        // formatter: '{value} °C' //y坐标刻度样式，可带单位
      },
      splitLine: {
        //不显示右侧y坐标轴的刻度线
        show: false,
      },
      axisLine: { show: false }, //取消y轴线的显示
      axisTick: {
        //y轴刻度设置
        show: false,
      },
    },
  ],

  series: [
    //柱状图、折线图的配置
    {
      //第1组数据，为折线图
      name: '同类供应商均值', //与legend及tooltip对应
      type: 'line', //柱状图为bar，折线图为line
      symbol: 'none', //无处折点处的圆点
      itemStyle: {
        //折线样式设置
        normal: {
          color: '#ffbf00', //
        },
      },
      data: [
        //折线图的数据，以左侧坐标轴为基准
        8,
        10,
        8,
        5,
        9,
        11,
        17,
      ],
    },

    {
      //第2组数据，为折线图
      name: '中标次数', //与legend及tooltip对应
      type: 'line', //柱状图为bar，折线图为line
      symbol: 'none', //无处折点处的圆点
      itemStyle: {
        //折线样式设置
        normal: {
          color: '#ff3300', //
        },
      },
      data: [
        //折线图的数据，以左侧坐标轴为基准
        5,
        4,
        9,
        3,
        12,
        9,
        11,
      ],
    },

    {
      //第3组数据，为柱状图
      name: '中标金额', //与legend及tooltip对应
      type: 'bar', //柱状图为bar，折线图为line
      yAxisIndex: 1, //以右侧坐标轴为基准
      barWidth: 25, //柱状宽度
      itemStyle: {
        //柱状样式设置
        normal: {
          color: '#4ecb73', //
        },
      },
      data: [
        //柱状图的数据，以左侧坐标轴为基准
        90,
        125,
        75,
        100,
        125,
        125,
        125,
      ],
    },
  ],
};
