option ={
    backgroundColor:'#fff',
	tooltip: {
		trigger: 'axis',
		confine: true,
		position: function([x, y]) {
			var newX = x + 200;
			//console.log(newX)
			return [newX, y]
		},
		formatter: function(params) {
			console.log(params)
		},
		padding: [
			11, // 上
			19, // 右
			13, // 下
			13, // 左
		],
		extraCssText: 'box-shadow:0px 1px 2px 0px rgba(134,134,134,0.45),0px -1px 2px 0px rgba(0,0,0,0.03);',
	},
    radar: {
        center: ['45%', '50%'],
		radius: '65%',
        name: {
            textStyle: {
                color: '#3D4D65',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#DEDEDE',
                width: 1,
                type: 'dotted'
            },
        },
        splitLine: {
            lineStyle: {
                color: ['#DEDEDE'],
                width: 1,
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],
                shadowColor: '#fff'
            }
        },
        indicator: [{
                name: '行业信息',
                max: 1000
            },
            {
                name: '企业规模',
                max: 1000
            },
            {
                name: '企业信用',
                max: 1000
            },
            {
                name: '创新能力',
                max: 1000
            },
            {
                name: '人才潜力',
                max: 1000
            }
        ]
    },
    series: [{
        type: 'radar',
       
        data: [{
            value: [800, 700, 600, 900, 500],
            name: '数据',
            itemStyle: {
                normal: {
					borderWidth: 2,
                    color: '#26A0FF'
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(64,159,223,0.4)'
                }
            }
        }]
    }]
};
