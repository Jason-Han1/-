option= {
		color: ["#35a2ff"],
		title: {
			text: '类型分布',
			left: '7%',
			top: '2%',
			textStyle: {
				fontWeight: 600,
				fontSize: 14,
				lineHeight: 26,
			}
		},
		tooltip: {
			trigger: "axis",
			backgroundColor: 'rgba(0,0,0,0.8)',
			padding: 10,
			textStyle: {
				fontSize: 12
			},
			axisPointer: {
				show: false,
				lineStyle: {
					color: '#e1e3e4'
				}
			},
			extraCssText: 'border-radius:0;',
			formatter: "类型分布：{b}<br/>事件数量：{c}"

		},
		grid: {
			top: "20%",
			left: "8%",
			right: "4%",
			bottom: "9%",
			containLabel: true
		},
		xAxis: [{
			type: "category",
			boundaryGap: true,
			offset: 5,
			axisLine: {
				show: true,
				lineStyle: {
					color: "#E1E3E4"
				}
			},
			axisLabel: {
				textStyle: {
					color: "#3E4956"
				},
				  formatter : function(params){
                   var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = 7;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) {
                                        // 最后一次不换行
                                        tempStr = params.substring(start, paramsNameNumber);
                                    } else {
                                        // 每一次拼接字符串并换行
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }

                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                }

			},
			axisTick: {
				show: false
			},
			data: ["A1-1:自然人身份标识", "A1-1:自然人身份标识", "A1-1:自然人身份标识","A1-1:自然人身份标识", "A1-1:自然人身份标识"]
		}],
		yAxis: [{
			type: "value",
			splitNumber: 4,
			splitLine: {
				show: true,
				lineStyle: {
					color: "#E1E3E4"
				}
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		
		}],
		series: [{
			type: "bar",
			barWidth: "30%",
			label: {
				normal: {
					show: false
				}
			},
			data: [30, 17,43, 35, 47]
		}]
	}