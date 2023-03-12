var xvalue_24h = ['00', '01', '02', '03',
    '04', '05', '06', '07', '08',
    '09', '10', '11', '12', '13',
    '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24h'
];
var yarn_data_obj = {
	"xValueList": xvalue_24h,
	"queueNameList": ["billbd", "billqueue", "default", "dzqd"],

	"2017-01-28": {
		"billbd": [0.45, 0.43, 0.50, 0.55, 0.58, 0.62, 0.83, 0.39, 0.56, 0.67, 0.50, 0.34, 0.50, 0.67, 0.58, 0.29, 0.46, 0.23, 0.47, 0.46, 0.38, 0.56, 0.48, 0.36],
		"billqueue": [0.38, 0.31, 0.32, 0.32, 0.64, 0.66, 0.86, 0.47, 0.52, 0.75, 0.52, 0.56, 0.54, 0.60, 0.46, 0.63, 0.54, 0.51, 0.58, 0.64, 0.60, 0.45, 0.36, 0.67],
		"default": [0.46, 0.32, 0.53, 0.58, 0.86, 0.68, 0.85, 0.73, 0.69, 0.71, 0.91, 0.74, 0.60, 0.50, 0.39, 0.67, 0.55, 0.49, 0.65, 0.45, 0.64, 0.47, 0.63, 0.64],
		"dzqd": [0.60, 0.51, 0.52, 0.53, 0.64, 0.84, 0.65, 0.68, 0.63, 0.47, 0.72, 0.60, 0.65, 0.74, 0.66, 0.65, 0.71, 0.59, 0.65, 0.77, 0.52, 0.53, 0.58, 0.53],
	},
	"2017-01-29": {
		"billbd": [14.1, 33.9, 36.0, 47.1, 39.0, 25.1, 14.9, 8.24, 0, 0, 0, 0, 21.6, 1.36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		"billqueue": [7.19, 8.23, 5.86, 6.54, 5.28, 3.56, 3.20, 4.13, 4.75, 7.74, 7.92, 8.54, 8.15, 8.75, 8.31, 7.65, 8.59, 8.62, 7.97, 8.99, 8.02, 9.61, 8.74, 7.44],
		"default": [0.01, 6.92, 9.11, 9.60, 9.44, 9.67, 9.72, 9.75, 9.73, 9.78, 9.97, 9.96, 9.89, 9.78, 9.70, 10, 9.62, 9.24, 9.28, 7.02, 9.99, 6.40, 5.39, 4.71],
	},
	"2017-01-30": {
		"billqueue": [8.10, 7.36, 8.51, 7.51, 5.05, 3.06, 3.48, 3.74, 5.16, 10.2, 12.5, 9.89, 9.52, 9.80, 10.1, 9.46, 9.35, 9.79, 9.25, 8.81, 8.86, 9.60, 8.81, 8.69],
		"default": [2.73, 2.37, 2.38, 1.99, 1.76, 2.17, 4.59, 2.37, 4.19, 6.31, 4.90, 5.30, 5.11, 5.26, 4.66, 4.92, 6.24, 5.95, 5.33, 5.44, 5.04, 4.70, 4.94, 3.28],
	},
	"2017-01-31": {
		"billbd": [0.45, 0.43, 0.50, 0.55, 0.58, 0.62, 0.83, 0.39, 0.56, 0.67, 0.50, 0.34, 0.50, 0.67, 0.58, 0.29, 0.46, 0.23, 0.47, 0.46, 0.38, 0.56, 0.48, 0.36],
		"default": [0.46, 0.32, 0.53, 0.58, 0.86, 0.68, 0.85, 0.73, 0.69, 0.71, 0.91, 0.74, 0.60, 0.50, 0.39, 0.67, 0.55, 0.49, 0.65, 0.45, 0.64, 0.47, 0.63, 0.64],
		"dzqd": [0.60, 0.51, 0.52, 0.53, 0.64, 0.84, 0.65, 0.68, 0.63, 0.47, 0.72, 0.60, 0.65, 0.74, 0.66, 0.65, 0.71, 0.59, 0.65, 0.77, 0.52, 0.53, 0.58, 0.53],
	},
	"2017-02-01": {
		"billbd": [14.1, 33.9, 36.0, 47.1, 39.0, 25.1, 14.9, 8.24, 0, 0, 0, 0, 21.6, 1.36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	"2017-02-02": {
		"billqueue": [8.10, 7.36, 8.51, 7.51, 5.05, 3.06, 3.48, 3.74, 5.16, 10.2, 12.5, 9.89, 9.52, 9.80, 10.1, 9.46, 9.35, 9.79, 9.25, 8.81, 8.86, 9.60, 8.81, 8.69],
		"default": [2.73, 2.37, 2.38, 1.99, 1.76, 2.17, 4.59, 2.37, 4.19, 6.31, 4.90, 5.30, 5.11, 5.26, 4.66, 4.92, 6.24, 5.95, 5.33, 5.44, 5.04, 4.70, 4.94, 3.28],
		"billbd": [0.45, 0.43, 0.50, 0.55, 0.58, 0.62, 0.83, 0.39, 0.56, 0.67, 0.50, 0.34, 0.50, 0.67, 0.58, 0.29, 0.46, 0.23, 0.47, 0.46, 0.38, 0.56, 0.48, 0.36],
		"dzqd": [0.60, 0.51, 0.52, 0.53, 0.64, 0.84, 0.65, 0.68, 0.63, 0.47, 0.72, 0.60, 0.65, 0.74, 0.66, 0.65, 0.71, 0.59, 0.65, 0.77, 0.52, 0.53, 0.58, 0.53],
	},
	"2017-02-03": {
		"billqueue": [2.73, 21.3, 41.6, 17.2, 19.9, 1.60, 2.10, 2.54, 2.78, 3.62, 4.41, 4.09, 3.83, 4.47, 4.20, 3.94, 3.80, 3.58, 3.19, 4.30, 3.69, 3.52, 3.02, 3.30],
		"default": [1.51, 28.7, 0.94, 1.44, 18.6, 1.63, 1.56, 1.91, 2.45, 3.87, 3.24, 4.90, 4.61, 4.10, 4.17, 3.85, 4.17, 3.46, 3.46, 3.55, 3.50, 4.13, 2.58, 2.28],
		"billbd": [1.33, 4.68, 1.31, 1.10, 13.9, 1.10, 1.16, 1.67, 2.64, 2.86, 3.00, 3.21, 4.14, 4.07, 3.68, 3.11, 3.41, 3.25, 3.32, 3.07, 3.92, 3.05, 2.18, 3.24],
		"dzqd": [3.23, 3.15, 2.90, 1.81, 2.11, 2.43, 5.59, 3.09, 4.09, 6.14, 5.33, 6.05, 5.71, 6.22, 6.56, 4.75, 5.27, 6.02, 5.22, 5.77, 6.19, 5.68, 4.33, 5.48]
	},
};
var dateArr=[];
for(key in yarn_data_obj){
    if(key==="xValueList"||key==="queueNameList") continue;
    dateArr.push(key);
}
var colorConsArr_hdfs = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc", "#fb915f", "#4fc277", "#3e94fe", "#ff9cc5", "#c46100", "#9de369"];
var option={
	baseOption: {
		backgroundColor: 'rgba(7,14,28,1)', //设置背景色
		tooltip: {
			trigger: 'axis'
		},
		color: [], //ToDo
		legend: {
            itemGap: 14,
            right: '16%',
            top: '2%',
            //padding:[40,10,0,10],
            data: [] //ToDo
        },
		grid: {
			left: '1.5%',
			right: '3%',
			bottom: '12%',
			containLabel: true
		},
		xAxis: [{
            type: 'category',
            boundaryGap: true,
            data: xvalue_24h, //Todo
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#454e72"
                },
                margin: 15
            },
            splitLine: {
                lineStyle: {
                    color: "#1d203b"
                }
            }
        }],
        yAxis: [{
            name: '单位（个）',
            nameGap:20,
            nameTextStyle:{
                color:'#454e72',
                fontSize: 12,
            },
            type: 'value',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#303765'
                },
                margin: 20
            },
            splitLine: {
                lineStyle: {
                    color: "#1d203b"
                }
            }
        }],
		timeline: {
            axisType: 'category',
            autoPlay: false,
            playInterval: 3000,
            symbol: 'circle',
            inverse: false,
            rewind: true,
            symbolSize: 5,
            checkpointStyle: {
                symbol: 'circle',
                symbolSize: 7,
                color: '#aed2ff',
                borderColor: "#aed2ff"
            },
            left: "1%",
            width: '90%',
            height: '36',
            lineStyle: {
                color: "#454e72"
            },
            label: {
                normal: {
                    textStyle: {
                        color: "#aed2ff",
                        fontSize: 14,
                    }
                },
                position: 15,
                formatter: function(value, index) {
                    return value.replace(/-/g, ".");
                }
            },
            data: dateArr
        },
		series: [] //ToDo
	},
	options: [] //Todo
};
option.baseOption.legend=(function(){
    var namelist = [];
	for (var i = 0; i < yarn_data_obj["queueNameList"].length; i++) {
		namelist.push({
			name: yarn_data_obj["queueNameList"][i],
			icon: 'circle',
			textStyle: {
				fontWeight: 'bold',
				fontSize: '14px',
				color: '#454e72'
			}

		})
	}
	return namelist;
})()
for (var i = 0; i < dateArr.length; i++) {
    var options = [];
	for (var i = 0; i < dateArr.length; i++) {
		var item = [];
		for (var j = 0; j < (Object.keys(yarn_data_obj[dateArr[i]])).length; j++) {
			var dataItem = yarn_data_obj[dateArr[i]]
			var nameList = Object.keys(yarn_data_obj[dateArr[i]]);
			item.push({
				name: nameList[j],
				type: 'line',
				stack: '总量',
				areaStyle: {
					normal: {
						color: colorConsArr_hdfs[j],
						opacity: 1
					}
				},
				lineStyle: {
					normal: {
						color: colorConsArr_hdfs[j],
						width: 0
					}
				},
				symbol: 'none',
				smooth: true,
				data: dataItem[nameList[j]]
			})
		}
		option.options.push({
			series: item,
			
		});
		
	}
};


myChart.setOption(option);