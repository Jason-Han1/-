	var yZhouTextStyles = {
	    padding: [0, 10, 0, 0]
	}
	var dataUse = [42, 82, 157, 157];
	var arr5 = [],
	    arr6 = [],
	    arr7 = [],
	    arr8 = []; //arr1用于存名字，arr2用于存数据
	var maxNums = 0,
	    maxNums2 = 0; //用于存数组里面数据的总数
	var pieData3 = [{
	    "name": '地图',
	    "theData": 389
	}, {
	    "name": 'API',
	    "theData": 259
	}, {
	    "name": '文档集',
	    "theData": 262
	}, {
	    "name": '数据集',
	    "theData": 324
	}];
	var pieData4 = [{
	    "name": 'XLS',
	    "theData": 389
	}, {
	    "name": 'XML',
	    "theData": 259
	}, {
	    "name": 'JSON',
	    "theData": 262
	}, {
	    "name": 'CSV',
	    "theData": 324
	}];
	for (var i = pieData3.length - 1; i >= 0; i--) {
	    arr5.push({
	        value: pieData3[i].name,
	        textStyle: yZhouTextStyles
	    }); //名字
	    arr7.push({
	        value: pieData4[i].name,
	        textStyle: yZhouTextStyles
	    })
	    maxNums2 += parseInt(pieData4[i].theData);
	    maxNums += parseInt(pieData3[i].theData);
	    arr6.push(pieData3[i].theData); //具体数据
	    arr8.push(pieData4[i].theData); //具体数据
	}
	option = {
	    grid: {
	        left: '2%',
	        top: '10%',
	        bottom: '30%',
	        right: '16%',
	        containLabel: true
	    },
	    grid: [{
	            x: '11%',
	            y: '19%',
	            width: '33%',
	            height: '33%'
	        },
	        {
	            x2: '7%',
	            y: '19%',
	            width: '33%',
	            height: '33%'
	        },
	    ],
	    title: [{
	        text: '数据使用方式',
	        x: '15%',
	        y: "16%",
	        textStyle: {
	            color: '#fff',
	            fontSize: 16,
	            fontWeight: '400',
	        },
	        textAlign: 'center'
	    }, {
	        text: '数据格式',
	        x: '62%',
	        y: "16%",
	        textStyle: {
	            color: '#fff',
	            fontSize: 16,
	            fontWeight: '400',
	        },
	        textAlign: 'center'
	    }],
	    color: ['#5b8ac0', '#39cad4', '#84e2a6', '#21b4f6'],
	    legend: {
	        show: false
	    },
	    backgroundColor: "#013d5a",
	    xAxis: [{
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        }
	    }, {
	        gridIndex: 1,
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        }
	    }],
	    yAxis: [{
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisLabel: {
	            color: '#31ffe7',
	            fontSize: 16,
	            align: 'left',
	        },
	        data: arr5
	    }, {
	        gridIndex: 1,
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        axisLabel: {
	            color: '#31ffe7',
	            fontSize: 16,
	            align: 'left',
	        },
	        data: arr7
	    }],
	    series: [{
	        type: 'bar',
	        barGap: '10%',
	        barWidth: '53%',
	        itemStyle: {
	            normal: {
	                color: function(params) {
	                    let colorList = ['#5b8ac0', '#39cad4', '#84e2a6', '#21b4f6'];
	                    return colorList[params.dataIndex]
	                },
	                barBorderRadius: 0
	            }
	        },
	        label: {
	            normal: {
	                show: false,
	            }
	        },
	        z: -10,
	        data: arr6
	    }, {
	        type: 'bar',
	        barGap: '-100%',
	        barWidth: '53%',
	        itemStyle: {
	            normal: {
	                color: '#0e5379',
	                barBorderRadius: 0,
	                borderWidth: 0.5,
	                borderColor: '#01fafc'
	            }
	        },
	        label: {
	            normal: {
	                show: true,
	                position: 'right',
	                color: '#fff',
	                fontSize: 16,
	                offset: [10, 0],
	                formatter: function(params, i) {
	                    return arr6[params.dataIndex];
	                }
	            }
	        },
	        z: -12,
	        data: [maxNums, maxNums, maxNums, maxNums]
	    }, {
	        type: 'bar',
	        barGap: '30%',
	        barWidth: '53%',
	        xAxisIndex: 1,
	        yAxisIndex: 1,
	        itemStyle: {
	            normal: {
	                color: function(params) {
	                    let colorList = ['#5b8ac0', '#39cad4', '#84e2a6', '#21b4f6'];
	                    return colorList[params.dataIndex]
	                },
	                barBorderRadius: 0
	            }
	        },
	        label: {
	            normal: {
	                show: false,
	            }
	        },
	        z: -10,
	        data: arr8
	    }, {
	        type: 'bar',
	        barGap: '-100%',
	        barWidth: '53%',
	        xAxisIndex: 1,
	        yAxisIndex: 1,
	        itemStyle: {
	            normal: {
	                color: '#0e5379',
	                barBorderRadius: 0,
	                borderWidth: 0.5,
	                borderColor: '#01fafc'
	            }
	        },
	        label: {
	            normal: {
	                show: true,
	                position: 'right',
	                color: '#fff',
	                offset: [10, 0],
	                fontSize: 16,
	                formatter: function(params, i) {
	                    return arr8[params.dataIndex];
	                }
	            }
	        },
	        z: -12,
	        data: [maxNums2, maxNums2, maxNums2, maxNums2]
	    }]
	};