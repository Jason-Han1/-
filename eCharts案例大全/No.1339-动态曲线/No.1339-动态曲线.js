var colors = ['#6b96e5','#c65f7f', '#7a6cc2','#fd8958'];
var KSMC = [-0.26, -0.78, -0.76, -0.57,-0.26, -0.78, -0.76, -0.57, -0.23, 0.03, 0.19, 0, 0, 70.79, -13.44, -4.97, -24.98, 5.11, -0.4, -5.73, -
		2.75, -4.87, -1.49, -1.91, -2.48, -2.01, -0.09, 0.47, -0.49, -2.18
	];
var KSMC2 = [-0.18, -0.51, -0.42, -0.26,-0.18, -0.51, -0.42, -0.26, 0.07, 0.23, 0.26, 0.01, -0.06, 52.94, -9.07, -1.92, -20.26, 4.93, -2.28, -5.25,
		-2.54, -3.79, -1.12, -1.55, -1.79, -1.64, -0.54, -0.06, -0.97, -1.86
	];
var KSMC3 = [0.01, 0.02, 0.02, 0.01,0.01, 0.02, 0.02, 0.01, 0, 0, -0.01, 0, 0, -5.7, 1.58, 0.31, 2.1, -0.2, 0.24, 0.41, 0.2, 0.27, 0.11, 0.11,
		0.11, 0.09, 0.02, 0, 0.04, 0.09
	];
var time = ["2021-10-14T15:42:18", "2021-10-14T17:42:18", "2021-10-14T19:42:17", "2021-10-14T21:42:16",
		"2021-10-14T23:42:15", "2021-10-15T01:42:14", "2021-10-15T03:42:14", "2021-10-15T05:42:14",
		"2021-10-15T07:42:12", "2021-10-15T09:42:12", "2021-10-18T11:30:10", "2021-10-18T12:22:35",
		"2021-10-18T12:52:34", "2021-10-18T14:52:35", "2021-10-18T16:52:33", "2021-10-18T18:52:32",
		"2021-10-18T20:52:31", "2021-10-19T12:36:57", "2021-10-19T14:36:56", "2021-10-19T16:36:55",
		"2021-10-19T18:36:55", "2021-10-19T20:36:56", "2021-10-19T22:36:53", "2021-10-20T14:00:06",
		"2021-10-20T16:00:05", "2021-10-20T18:00:04", "2021-10-20T20:00:08"
	];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    position: function (pt) {
      return ['85%', '80%'];
    }
  },
  legend: {
      top:'65%'
  },
  grid: {
      top:'70%',
      left: '10%', //柱状图距离左边的距离，也可以用像素px
      right: '18%', //柱状图距离右边的距离，也可以用像素px
      bottom: '10%', //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
      containLabel: false //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      data: time
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: -35,
      max: 80,
    }
  ],
  dataZoom: [
     {
                    startValue: 0, // 从头开始。
                    endValue: 15  // 一次性展示6个。
                }
  ],
  series: [
    {
      name: 'X轴与水平面的夹角°',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: KSMC
    },
    {
      name: 'Y轴与水平面的夹角°',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: KSMC2
    },
    {
      name: 'Z轴与水平面的夹角°',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: KSMC3
    },
  ]
};
var index = 0; //播放所在下标
setTimeout(()=>{
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex:0,
        dataIndex: index //默认显示第几个
    });
  	index++;
  	if(index > KSMC.length) {
  		index = 0;
  	}
})
setInterval(function () {
    // 每次向后滚动一个，最后一个从头开始。
    if (option.dataZoom[0].endValue == KSMC.length ) {
        option.dataZoom[0].endValue = 15; 
        option.dataZoom[0].startValue = 0;
    }
    else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
    myChart.setOption(option);
}, 2000);