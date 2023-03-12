var colors = ['#6b96e5','#c65f7f', '#7a6cc2','#fd8958'];
var KSMC = [0.534, 0.56,0.534, 0.56, 0.574, 0.585, 0.594,0.534, 0.56, 0.574, 0.585, 0.594, 0.606, 0.621, 0.64, 0.66, 4.108, 5.599, 3.101, 1.385, 2.312, 2.37, 2.03,
		1.605, 1.05, 1.206, 1.194, 1.057, 0.953, 1.559, 1.601, 1.487, 1.286
	];
var KSMC2 = [0.847, 0.883,0.847, 0.883, 0.917, 0.94, 0.961,0.847, 0.883, 0.917, 0.94, 0.961, 0.978, 0.996, 1.015, 1.028, 3.408, 5.658, 3.22, 1.61, 2.32, 2.288, 1.996,
		1.564, 1.217, 1.359, 1.327, 1.224, 1.128, 1.392, 1.477, 1.354, 1.213
	];
var KSMC3 = [89.002, 88.956,89.002, 88.956, 88.92, 88.894,89.002, 88.956, 88.92, 88.894, 88.871, 88.848, 88.825, 88.8, 88.776, 84.659, 82.027, 85.525, 87.875, 86.72,
		86.703, 87.144, 87.766, 88.388, 88.18, 88.212, 88.38, 88.516, 87.909, 87.821, 87.98, 88.231
	];
var KSMC4 = [166.509, 166.51, 166.509, 166.51, 166.961, 166.773,166.509, 166.51, 166.961, 166.773, 166.587, 166.583, 166.559, 166.651, 166.746, 168.212, 168.183, 168.85,
		167.744, 166.857, 166.386, 167.027, 167.781, 167.639, 166.812, 167.09, 166.327, 166.628, 167.262, 167.639,
		167.11, 166.308
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
      return ['79%', '80%'];
    }
  },
  legend: {
      top:'65%'
  },
  grid: {
      top:'70%',
      left: '3%', //柱状图距离左边的距离，也可以用像素px
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
      min: -10,
      max: 179,
    }
  ],
  dataZoom: [
     {
                    startValue: 0, // 从头开始。
                    endValue: 18  // 一次性展示6个。
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
    {
      name: 'X轴在水平面的投影与磁北的夹角°',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: KSMC4
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
        option.dataZoom[0].endValue = 18; 
        option.dataZoom[0].startValue = 0;
    }
    else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
    myChart.setOption(option);
}, 2000);