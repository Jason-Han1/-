option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: { // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['货物贸易','服务贸易','数字贸易'],
		        icon: "roundRect",
		        itemWidth: 20,  // 设置宽度
		        itemHeight: 8, // 设置高度
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [{
		        type: 'category',
		        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
		        axisLine:{
                        lineStyle:{
                            color:'#8FA3B7',//y轴颜色
                        }
                    },
                axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6D6D6D',
                            }
                        },
		        axisTick: {show: false}
		    }],
		    yAxis: [{
		        type: 'value',
		        splitLine:{show: false},
		        //max: 700,
		        splitNumber: 3,
		        axisTick: {show: false},
		        axisLine:{
                        lineStyle:{
                            color:'#8FA3B7',//y轴颜色
                        }
                    },
                axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6D6D6D',
                            }
                        },
		    }],
		    series: [

		        {
		            name: '货物贸易',
		            type: 'bar',
		            barWidth: '40%',
		            itemStyle: {
		                normal: {
		                    color: '#FAD610'
		                }
		            },
		            stack: '信息',
		            data: [320, 132, 101, 134, 90, 30]
		        },
		        {
		            name: '服务贸易',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#27ECCE'
		                }
		            },
		            stack: '信息',
		            data: [220, 182, 191, 234, 290, 230]
		        },
		        {
		            name: '数字贸易',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#4DB3F5'
		                }
		            },
		            stack: '信息',
		            data: [150, 132, 201, 154, 90, 130]
		        }
		    ]
		};