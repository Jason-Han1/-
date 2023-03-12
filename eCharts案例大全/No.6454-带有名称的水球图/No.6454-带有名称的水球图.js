option = {
            backgroundColor: '#04184A',
			title: {
				text: 'KPI完成情况',
				textStyle: {
					fontSize: 20,
					fontFamily: 'Microsoft Yahei',
					fontWeight: 'normal',
					color: '#bcb8fb'
				}
			},
            series: [{
                    type: 'liquidFill',
                    name: '整体指标',
                    center: ['25%', '50%'],
					radius: '20%',
                    // 水球颜色
                    color: ['#0B5E8B', '#227DB3', '#3F91CC'],
                    data: [0.6],
                    label: {
                        formatter: function (param) {
                            return param.seriesName + '\n'
                             + param.value * 100 + '%';
                        },
                        fontSize: 100
                    },
                    // outline  外边
                    outline: {
                        borderDistance: 5,
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#00C0FF',
                        },
                    },
                    // 内图 背景色 边
                    backgroundStyle: {
                        color: 'rgba(0,37,83,0.8)',
                    }
                }, {
                    type: 'liquidFill',
					name: '存款',
                    // 水球颜色
                    color: ['#49d088', '#38b470', '#2aaf66'],
                    center: ['50%', '50%'],
                    data: [0.5],
                    radius: '20%',
                    label: {
                        formatter: function (param) {
                            return param.seriesName + '\n'
                             + param.value * 100 + '%';
                        },
                        fontSize: 100
                    },
                    // outline  外边
                    outline: {
                        borderDistance: 5,
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#00FFB0',
                        },
                    },
                    // 内图 背景色 边
                    backgroundStyle: {
                        color: 'rgba(0,37,83,0.8)',
                    }
                }, {
                    type: 'liquidFill',
					name: '资产提升',
                    // 水球颜色
                    color: ['#E3B340', '#F4B30E', '#EACE36'],
                    center: ['75%', '50%'],
                    data: [0.1],
                    radius: '20%',
                    label: {
                        formatter: function (param) {
                            return param.seriesName + '\n'
                             + param.value * 100 + '%';
                        },
                        fontSize: 100
                    },
                    // outline  外边
                    outline: {
                        borderDistance: 5,
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#FFBF11',
                        },
                    },
                    // 内图 背景色 边
                    backgroundStyle: {
                        color: 'rgba(0,37,83,0.8)',
                    }
                }
            ],
        };