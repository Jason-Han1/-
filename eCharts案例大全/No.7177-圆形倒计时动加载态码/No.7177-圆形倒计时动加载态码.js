var v1='1';
var formatterval="123123";

option = {
				tooltip: {},
				series: [{
					type: 'pie',
					radius: ['90%', '80%'],
					center: ['50%', '50%'],
					label: {
						normal: {
							position: 'center',
							color: '#3ba2ff',
						}
					},
					itemStyle: {
						normal: {
							color: '#3ba2ff'
						}
					},
					hoverAnimation: false,//注释 鼠标移动不可改变
					data: [{
						value: v1,
						name: '',
						label: {
							normal: {
								// formatter: formatterval,
								// formatter: function () {
								// 	return formatterval.split(4).join("\n"); 
								// },
								formatter:function(params) {//文字换行显示
								    var newParamsName = "";
								    var paramsNameNumber = formatterval.length;
								    var provideNumber = 3;  //一行显示几个字
								    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
								    if (paramsNameNumber > provideNumber) {
								        for (var p = 0; p < rowNumber; p++) {
								            var tempStr = "";
								            var start = p * provideNumber;
								            var end = start + provideNumber;
								            if (p == rowNumber - 1) {
								                tempStr = formatterval.substring(start, paramsNameNumber);
								            } else {
								                tempStr = formatterval.substring(start, end) + "\n";
								                '{title|' + tempStr + '} ';
								            }
								            newParamsName += tempStr;
								        }
								    } else {
								        newParamsName = formatterval;
								    }
								    return newParamsName;
								},
								textStyle: {
									fontSize: 25,
									color:'#000',
									lineHeight: 35,
								}
							}
						},
						tooltip: {
							trigger: 'item',
							formatter: "动态码 : {c}"
						}
					}, {
						value:1,
						label: {
							normal: {
								formatter: '',
								textStyle: {
									color: '#555',
									fontSize: 13
								}
							}
						},
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#fff'
							},
							emphasis: {
								color: '#fff'
							}
						},
					}]
				}]
			};