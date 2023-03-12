option = {

//				    backgroundColor: '#fff',
				    title: {
				        text: 200,
				        subtext: '（数量）',
				        top: 'center',
				        left: 'center',
				        textStyle: {
				            fontSize: 120,
				            color: 'red'
				        },
				        subtextStyle: {
				            fontSize: 40,
				            color: 'red'
				        }
				    },
				    series: [

				        {
				            name: '访问来源',
				            type: 'pie',
				            silent: true,
				            radius: ['70%', '90%'],
				            startAngle: 225,
				            itemStyle: {
				                normal: {
				                    label: {
				                        show: false //隐藏标示文字
				                    },
				                    labelLine: {
				                        show: false //隐藏标示线
				                    }
				                }
				            },
				            color: ['#fcaa2f', "#fff", '#f89d2c', "#fff", '#f47b28', "#fff", '#f15a24', "#fff", 'red', "transparent"],
				            
				            data: [{
				                    value: 14,
				                    name: ''
				                },
				                {
				                    value: 1,
				                    name: ''
				                },
				                {
				                    value: 14,
				                    name: ''
				                },
				                {
				                    value: 1,
				                    name: ''
				                },
				                {
				                    value: 14,
				                    name: ''
				                },
				                {
				                    value: 1,
				                    name: ''
				                },
				                {
				                    value: 14,
				                    name: ''
				                },
				                {
				                    value: 1,
				                    name: ''
				                },
				                {
				                    value: 14,
				                    name: ''
				                },
				                {
				                    value: 26,
				                    name: ''
				                }

				            ]
				        }
				    ]
				};
			