
option = {
  title: [{
    text: '总出勤状况：',
    textStyle: {
      color: '#9d9d9d',
     fontSize: 22,
      // fontFamily: '微軟正黑體',
    fontWeight: 'bolder',
    },
    left:'1%',
   top:'2%',
  },
   {
           text:'应到:',
        left:'45%',
           bottom:'20%',
           textStyle:{
               fontSize: 18,
               color:'#9d9d9d',
                fontWeight: 'lighter',
           },
   },
   {
           text:'实到:',
        left:'45%',
           bottom:'15%',
           textStyle:{
               fontSize: 18,
               color:'#9d9d9d',
                fontWeight: 'lighter',
           },
   },
    {
           text:'2297',
        left:'50%',
           bottom:'19.5%',
           textStyle:{
               fontSize: 24,
               color:'#191919',
                fontWeight: 'bolder',
           },
    },
            {
           text:'2181',
        left:'50%',
           bottom:'14.5%',
           textStyle:{
               fontSize: 24,
               color:'#191919',
                fontWeight: 'bolder',
           },
            },
             {
           text:'人',
        left:'56%',
           bottom:'19.5%',
           textStyle:{
               fontSize: 24,
               color:'#191919',
                fontWeight: 'bolder',
           },
            },
              {
           text:'人',
        left:'56%',
           bottom:'14.5%',
           textStyle:{
               fontSize: 24,
               color:'#191919',
                fontWeight: 'bolder',
           },
            }
  ],
  series: [
    {
   	name: '出勤率',
      type: 'gauge',
      	radius: '50%',
        // center: ["50%", "30%"],
         itemStyle:{//渐变颜色
                        color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.1,
                            color: "#f58794"
                          },
                           {
                            offset: 0.3,
                            color: "#eb727f"
                          },
                          {
                            offset: 0.6,
                            color: "#b73f4c"
                          },
                          {
                            offset: 1,
                            color: "#b11324"
                          }])
                    },
      progress: {
        show: true,
        width: 55,
      },
       axisLine: {//仪表盘轴线相关配置，即里面的灰色环形
                        lineStyle: {
                          color: [[0.2, '#fff'], [0.8, '#fff'], [1, '#f994a0']],
                            width: 55,
                        }
                    },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      anchor: {
        show: false,
      },
      // 出勤率格式
      title: {
        show: true,
        color: '#9d9d9d',
        fontSize: 18,
      },
       // 出勤率百分比
      detail: {
        valueAnimation: true,
        offsetCenter: [0, 0],
        textStyle: {
          fontSize: 24,
          color: '#191919',
        },
        formatter: '{value}%',
      },
      data: [
        {
          value: 95.2,
          name: '出勤率',
        },
      ],
    },
     {
   				name: '总人力',
      type: 'gauge',
      				radius: '40%',
        // center: ["50%", "30%"],
      progress: {
        show: false,
      },
       axisLine: {
         show: false,
                    },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      anchor: {
        show: false,
      },
      // 总人力格式
      title: {
        show: true,
        color: '#ea6674',
        fontSize: 18,
           offsetCenter: ['2%','110%'],
      },
         // 总人力人数格式
      detail: {
        valueAnimation: true,
        offsetCenter: ['2%','90%'],
        textStyle: {
          fontSize: 24,
          color: '#ea6674',
        },
        formatter: '{value}人',
      },
      data: [
        {
          value: 2385,
          name: '总人力',
        },
      ],
    },
    {
					name: '最内层线',
					type: 'gauge',
					radius: '38%',
				// 	center: ['50%', '30%'],
					axisLine: {
						show: false,
						lineStyle: {
							opacity: 0,
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							opacity: 0
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						length: 2,
						lineStyle: {
							color: '#ed8b97',
							width: 5,
							type: 'solid'
						}
					},
					detail: {
						show: false,
					},
					pointer: {
						show: false
					}
				},
  ],
};
