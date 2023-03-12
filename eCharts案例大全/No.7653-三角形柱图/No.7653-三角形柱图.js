function formatNum(strNum) {
    if (strNum.length <= 3) {
        return strNum;
    }
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
        return strNum;
    }
    var a = RegExp.$1,
        b = RegExp.$2,
        c = RegExp.$3;
    var re = new RegExp();
    re.compile("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) {
        b = b.replace(re, "$1,$2$3");
    }
    return a + "" + b + "" + c;
}
var data =[{ month: "应付款项", 
             value: "76281.68"},{ 
             month: "应收款项",
             value: "37402.21"}];
var xAxisMonth = [], barData = [];
for (var i = 0; i < data.length; i++) { // 循环遍历data里面的数据用于展示
    xAxisMonth.push(data[i].month);    // 获取x轴的数据写入到xAxisMonth数组中
    barData.push({                          // barData数组用于获取xAxisMonth中的各组数据
        "name": xAxisMonth[i],
        "value": data[i].value
    });
    
}


option = {
    grid: {
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c0}万元',
        
    },
     legend: {
        left: '25',
        top: 'top',
        textStyle: {
			color: '#4c647c',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        },
        data: xAxisMonth
    },
    xAxis: [{
            type: 'category',
            show: true,
            axisLabel: {
                textStyle: {
                   color: '#4c647c',
                }
            },
            axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#4c647c',
					opacity:0.2
				}
			},
        },
        {
            type: 'category',
            position: "bottom",
            data: xAxisMonth,
            boundaryGap: true,
            // offset: 40,
            axisTick: {
                show: false
            },
             axisLine: {
                show: true,
                lineStyle: {
                    color: '#4c647c',
					opacity:0.2
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#4c647c',
                     fontSize:16
                }
            }
        }

    ],
    yAxis: [{
        type: 'value',
         axisLine: {
                show: false,
                lineStyle: {
                    color: '#4c647c',
                }
            },
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#000'],
					opacity:0.06
				}
			}
    }],
    series: [{
            name: xAxisMonth,
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '50%',     // 调整宽度
           symbol: 'path://d="M150 50 L130 130 L170 130  Z"', // 画出三角形
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = [
                            '#FAC45C', '#4996E2'
                        ];
                        return colorList[params.dataIndex];
                    },
                    label: {
                        formatter: function(p) {
                            	return formatNum(p.value);
                            },
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
							color: 'black',
							fontSize: 14
						}
                },
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: barData
    }]
};
