var value=75
option = {
    backgroundColor: '#010818',
    title: [
      {
        text: '任务完成率',
        y: '70%',
        x: 'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#ffffff',
        },
      },
    ],
    angleAxis: {
      show: false,
      max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 30, //圆环宽度
    radiusAxis: {
      show: false,
      type: 'category',
    },
    //圆环位置和大小
    polar: {
      center: ['50%', '70%'],
      radius: '150%',
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            //上层圆环，显示数据
            value: value,
            itemStyle: {
              color: '#388CFE',
            },
          },
        ],
        barGap: '-100%', //柱间距离,上下两层圆环重合
        coordinateSystem: 'polar',
        roundCap: true, //顶端圆角
        z: 3, //圆环层级，同zindex
      },
      {
        //下层圆环，显示最大值
        type: 'bar',
        data: [
          {
            value: 100,
            itemStyle: {
              color: '#EFEFEF',
              borderWidth: 0,
            },
          },
        ],
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        z: 1,
      },
      //仪表盘
      {
        type: 'gauge',
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLabel: {
          show: false,
        },
        pointer: {
          // 分隔线
          show:false,//是否显示指针
          shadowColor: 'auto', //默认透明
          shadowBlur: 5,
          length: '50%',
          width: '2',
        },

        itemStyle: {
          color: '#1598FF',
          borderColor: '#1598FF',
          borderWidth: 3,
        },
        detail: {
          formatter: function (params) {
            return value+'%';
          },
          color: '#2755F7',
          fontSize: 50,
          offsetCenter: [0, 50],
        },
        title: {
          show: false,
        },
        data: [
          {
            value: value,
          },
        ],
      },
    ],
};
        