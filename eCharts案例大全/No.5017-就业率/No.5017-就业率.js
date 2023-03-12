var  getname=['学前教育', '初等教育', '语文教育', '英语教育'];
var  getjyl=[98.3,99.5,93.4,95.3];
var  getbj =[];
for (let i = 0; i < getjyl.length; i++) {
    getbj.push(100)
}

option = {
    backgroundColor: "#000",
    grid: {
        left: '15%',
        right: '10%',
        bottom: '5%',
        top: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '就业率<br>'+ params[0].name  + ': ' + params[0].value+'%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#6F84BD',
                fontSize: '13'
            },
            padding:[0,15,0,0],
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getname
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#6F84BD',
                fontSize: '14'
            },
			formatter: '{value}%'
        },
        data:getjyl
    }],
    series: [{
            name: '数值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00C0F0' // 100% 处的颜色
                    }], false),
                },
            },
            markLine: {
                symbol:"none",
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#FF5652'
						},
					}
				},
				label:{
                    position:'start',
                    formatter: function(params) {
						return '校平均值：' + params.value+'%';
					}
                },
				data: [{
					type: 'average',
					name: '标准'
				}]
			},
            barWidth: 15,
            data: getjyl
        },
        {
            name: '条形背景颜色',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: getbj,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00C0F0' // 100% 处的颜色
                    }], false),
                    opacity:0.2,
                    barBorderRadius: [0, 6, 6, 0],
                }
            },
        },
    ]
};