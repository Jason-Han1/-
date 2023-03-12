option = {
    backgroundColor: '#ffffff', //整体背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        // formatter:function(params){
        //     return params[0].name + params[0].seriesName+"：" + (params[0].value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')+"元";
        // }
    },
    grid:{ //控制整体布局
      left:'0',
      right:'0',
      bottom:'0',
      top:'15%',
      containLabel:true
  },
   title: {
	        text: '分部工程项目评分',
	          x:'center',
              y:'top',
              textAlign:'left'
	        
	    },
	    legend: {
        orient: 'vertical',
        right: 10,   //当前直接设置即可了
        data: ['分部工程得分', '样本量']
    },
// 底部滑动条 
//   dataZoom: [{
// 					type: 'slider', //图表下方的伸缩条
// 					show: true, //是否显示
// 					realtime: true, //拖动时，是否实时更新系列的视图
// 					start: 50, //伸缩条开始位置（1-100），可以随时更改
// 					end: 100, //伸缩条结束位置（1-100），可以随时更改
// 				}],
    // x轴
    xAxis: {
        data: ["中航里程", "万科南方", "龙湖集团", "华润置地", "景端地产", "世贸山东", "北京城建"],
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#DFE3E9', // x轴颜色
                width: 1 // 粗细
            },
        },
        axisLabel: {
            color: '#999999', // x轴刻度名称颜色
            interval:0,//代表显示所有x轴标签显示
            rotate:45, //代表逆时针旋转45度
        }
    },
    yAxis: {
        splitLine: {
            show: true,
            // lineStyle: {
            //     type: 'dashed'
            // }
        },
        axisLabel: {
            color: '#999999', // y轴刻度名称颜色
        //     formatter:function(value){
        //         var value;
        //         if(value >= 1000){
        //             value = value/1000+'K';
        //         }else if(value <1000){
        // 			value = value;
        // 		}
        // 		return value;
        //     }
        },
        axisTick: { //y轴刻度线
            show: false
        },
        axisLine: { //y轴
            show: false
        },
    },
    series: [{
        name: '分部工程得分',
        type: 'bar',
        data: [120, 132, 101, 134, 112, 98, 85],
        itemStyle: {
            normal: {
                color: '#8D7AFB', // 柱状图颜色
                label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#8D7AFB',
										fontSize: 14
									}
								}
            }
        },
        barWidth : 30
    },
    {
        name: '样本量',
        type: 'line',
        data: [22, 108, 19, 123, 18, 19, 23],
        itemStyle: {
            normal: {
                color: '#D1D9E4', // 柱状图颜色
                label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#D1D9E4',
										fontSize: 14
									}
								}
            }
        },
        barWidth : 12
    }]
};