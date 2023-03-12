//后端接口或父组件传递数据
var data = [
{name:"新一代天气雷达",value:5240},
{name:"风廓线雷达",value:4856},
{name:"地面气象观测",value:5374},
{name:"高空气象观测",value:8721},
{name:"自动土壤水分",value:4713},
{name:"雷电监测",value:2546},
{name:"GNSS/MET",value:2546},
{name:"大气成分",value:2546}
]
var sums = 0; // 计算常量
var seed = 1000; // 随机种子
var seed2 = 100; // 随机种子

var nameset = [] // 名称设置
var datause = []; // echarts集合
function randomSeed(seed,seed2){
    return parseInt(Math.random() * seed) + seed2;
}
data.forEach(item => {
var seedCallback = randomSeed(seed,seed2);
datause.push({name:item.name,value:item.value});
datause.push({value:seedCallback,itemStyle: {normal: {opacity:0,color: "rgba(0,0,0,0)"}}});
nameset.push(item.name);
sums+=seedCallback;
sums+=item.value;
});
datause.push({value:sums,itemStyle: {normal: {opacity:0,color: "rgba(0,0,0,0)"}}})

option = {
grid: {
  top: "10%"
},
legend:{
	data: nameset,
	padding:[0,40,0,40],
	bottom:20,
	icon: 'circle'
},
tooltip: {
  trigger: "item"
},
series: [
  {
	type: "pie",
	selectedMode: false,
	hoverAnimation: false,
	radius: [0, "90%"],
	z: 99,
	startAngle: 180,
	itemStyle:{
		normal:{
			opacity:0.9,borderWidth: 1,borderColor:'rgba(0,0,0,0.2)'
		}
	},
	label: {
	  normal: {
		show: false,
		position: "inner",
		formatter: "{d}%",
		textStyle: {
		  color: "#fff",
		  fontWeight: "normal"
		}
	  }
	},
	labelLine: {
	  normal: {
		show: false
	  }
	},
	data: datause
  },
  {
	type: "pie",
	startAngle: 180,
	selectedMode: false,
	hoverAnimation: false,
	radius: ["90%" - 1, "90%"],
	data: [
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent",
			//borderWidth: this.size * 1,
			borderColor: "rgba(6,187,192,1)"
		  }
		}
	  },
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent"
		  }
		}
	  }
	],
	labelLine: {
	  normal: {
		show: false
	  }
	}
  },
  {
	type: "pie",
	startAngle: 180,
	selectedMode: false,
	hoverAnimation: false,
	radius: ["75%" - 1, "75%"],
	labelLine: {
	  normal: {
		show: false
	  }
	},
	data: [
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent",
			//borderWidth: this.size * 1,
			borderColor: "rgba(6,187,192,.7)"
		  }
		}
	  },
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent"
		  }
		}
	  }
	]
  },
  {
	type: "pie",
	startAngle: 180,
	selectedMode: false,
	hoverAnimation: false,
	radius: ["50%" - 1, "50%"],
	data: [
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent",
			//borderWidth: this.size * 1,
			borderColor: "rgba(6,187,192,.5)"
		  }
		}
	  },
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent"
		  }
		}
	  }
	],
	labelLine: {
	  normal: {
		show: false
	  }
	}
  },
  {
	type: "pie",
	startAngle: 180,
	selectedMode: false,
	hoverAnimation: false,
	radius: ["30%" - 1, "30%"],
	data: [
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent",
			//borderWidth: this.size * 1,
			borderColor: "rgba(6,187,192,.3)"
		  }
		}
	  },
	  {
		value: 5,
		itemStyle: {
		  normal: {
			color: "transparent"
		  }
		}
	  }
	],
	labelLine: {
	  normal: {
		color: "black"
	  }
	}
  }
]
}
