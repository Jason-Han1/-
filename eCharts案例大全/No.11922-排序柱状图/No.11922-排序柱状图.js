var ovrData = [
  {name: "校纪校规", data: 80 },
  {name: "文明礼仪文明礼仪", data: 120},
  {name: "作息出勤作息出勤作息出勤", data: 310},
  {name: "体锻课", data: 100},
  {name: "劳动卫生劳动卫生劳动卫生劳动卫生", data: 60},
  {name: "大课间", data: 500}
];
var legendData = [],
  seriesData = [];
ovrData.map(function (a, b) {
  legendData.push(a.name);
  seriesData.push(a.data)
});
ovrData = {
  name: '总计',
  type: 'bar', // 柱子的形状
  barWidth: '60%', // 柱子的宽度
  data: seriesData.sort(function (prev, next) {
    return next - prev
  })
}
option = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    triggerEvent: true, // true的时候hover效果方可生效
    type: 'category',
    axisLine: {
      // show: false // X轴线不显示
    },
    axisTick: {
      show: false // 是否显示坐标轴刻度
    },
    data: legendData,
    axisLabel: {
      // 设置轴上字体的颜色
      show: true,
      textStyle: {
        color: "#333"
      },
	  // 隐藏过长的文字, 超出省略号
	  formatter: function (value) {
	    return (value.length > 4) ? (value.slice(0, 4) + "...") : value 
	  }
    }
  },
  yAxis: {
    splitNumber: 5, // 控制Y轴数值显示数量
    axisLine: {
      // show: false // Y轴线不显示
    },
    axisTick: {
      show: false // 是否显示坐标轴刻度
    },
    splitLine: {
      show: true,
      lineStyle: {
        // color: "#e6ecfd", // 分割线背景色
        width: 1 // 分割线宽度
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#333"
      }
    }
  },
  series: [ovrData]
};

// 文字超出 hover后 展示逻辑
// triggerEvent: true 必须添加
// var JsThought = echarts.init(document.getElementById("JsThought"));
// extension(JsThought);
// function extension(currChart) {
// 	// 判断是否创建过
// 	let isId = document.getElementById("extension");
// 	let hasBody = $("body");
// 	if (!isId) {
// 		let tipDiv = "<div id='extension' sytle=\"display:none\"></div>";
// 		hasBody.append(tipDiv);
// 	}

// 	let tips = $("#extension");
// 	currChart.on("mouseover", function(params) {
// 		if (params.componentType == "xAxis") {
// 			tips.css({
// 				position: "absolute",
// 				color: "#333",
// 				fontSize: "16px",
// 				fontWeight: 'bold',
// 				display: 'block'
// 			}).text(params.value);
// 			hasBody.mousemove(function(event) {
// 				let left = event.pageX - 30;
// 				let top = event.pageY + 20;
// 				tips.css({
// 					top: top,
// 					left: left
// 				});
// 			});
// 		}
// 	});
// 	currChart.on("mouseout", function(params) {
// 		if (params.componentType == "xAxis") {
// 			tips.css("display", "none");
// 		}
// 	});
// }
// 响应式
// window.onresize = function() {
// 	***.resize();
// };