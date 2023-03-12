function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = obj[attr];
    }
    return newobj;
}
var xData = [],
    yData = [];
var data = [{
    "name": "第一种",
    "value": 895457
}, {
    "name": "第二种",
    "value": 1722232
}]
data.map((a, b) => {
    xData.push(a.name);
    yData.push(a.value);
});
var startColor = ['#625bce', '#feb44f', '#00bbce', '#ea865a'];
var endColor = ['#716dd3', '#f48d3c', '#00c4a5', '#ea2e41'];
var borderStartColor = ['#4a43c6', '#fca02d', '#05fcfb', '#ffa597'];
var borderEndColor = ['#5651cb', '#ef6f16', '#05ffff', '#ff6584'];
var RealData = [];
var borderData = [];
var total = 0;
data.map((item, index) => {
    total += Number(item.value)
    var newobj = deepCopy(item);
    var newobj1 = deepCopy(item);
    RealData.push(newobj);
    borderData.push(newobj1);
});
RealData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: startColor[index] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: endColor[index] // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
});
borderData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: borderStartColor[index] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: borderEndColor[index] // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
});
option = {
    backgroundColor:"#FFF",
    title: {
        text: '',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 28,
            // align: 'center'
        },
        // top: "5%",
        left:"center"
    },
    legend: {
        show:false,
        top: "10%",
        // left: 10,
        textStyle: {
            color: '#f2f2f2',
              fontSize: 20,
    
        },
        icon: 'circle',
        data: data,
    },
     tooltip: {
         
                formatter: "{a}：<br/>{b}: {c}人"
            },
    title:[{
		text:`${total}个`,
		textStyle: {
			fontSize: 24,
		},
		left:"center",
		top:"47%",
	}],
	graphic:{
		type:"text",
		left:"center",
		top:"51%",
		style:{
			text:"项目总数",
			textAlign:"center",
			fill:"#333",
			fontSize:20,
			fontWeight:700
		}
	},
    series: [
        // 主要展示层的
        {
            radius: ['20%', '40%'],
            center: ['50%', '50%'],
            type: 'pie',
			//clockWise:false,
            label: {
				
                normal: {
                    show: true,
					position:'outside',
					formatter:(params)=>{
						return  `${params.name} : {fz|${params.value}} 个`
					},
					rich:{
						fz:{
							fontSize:24
						}
					},
					overflow: 'none'
                },
				
                emphasis: {
                    show: true
                },
				
            },
            labelLine: {
				
                normal: {
					length:50,
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            name: "民警训练总量",
            data: RealData,
			
			itemStyle: {
				shadowBlur: 25,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.2)'
			}
        },
        // 边框的设置
        {
            radius: ['20%', '30%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: borderData
			
        },
    ]
};