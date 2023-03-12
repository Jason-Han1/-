	window.chartCfg.themeName = 'ovilia-green';

	var json = [10, 20, 13, 41, 25, 36, 47];

	var opts = [{
	    name: '折线分段显示',
	    grid: {
	        show: false
	    },
	    xAxis: {
	        type: 'category',
	        splitLine: {
	            show: false
	        },
	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
	    },
	    yAxis: {
	        interval: 2,
	        nameLocation: 'middle',
	        nameGap: 25,
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            show: true
	        },
	        splitArea: {
	            show: false
	        }
	    },
	    visualMap: {
	        type: 'piecewise', //continuous连续，piecewise分段
	        inverse: true, //是否反转
	        align: 'left', //指定组件中图形（比如小方块）和文字的摆放关系
	        orient: 'horizontal', //水平（'horizontal'）或者竖直（'vertical'）
	        itemGap: 20, //两个图元之间的间隔距离
	        controller: {
	            outOfRange: {
	                symbol: 'rect',
	            }
	        },
	        textGap: 5,
	        formatter: function(value) {
	            if (value < 10) {
	                return '正常'; // 范围标签显示内容
	            }
	            if (value < 20) {
	                return '五级预警(5.5)'; // 范围标签显示内容
	            }
	            if (value < 30) {
	                return '四级预警(6.5)';
	            }
	            if (value < 40) {
	                return '三级预警(7.5)';
	            }
	            if (value < 50) {
	                return '二级预警(10)';
	            } else {
	                return '一级预警(12)';
	            }
	        },
	        textStyle: {
	            color: '#94969c',
	            fontStyle: 'normal',
	            fontFamily: '微软雅黑',
	            fontSize: 24,
	        },
	        itemWidth: 20,
	        itemHeight: 16,
	        top: 5,
	        pieces: [{
	            gt: 10,
	            lte: 20,
	            color: '#0084ff',
	        }, {
	            gt: 20,
	            lte: 30,
	            color: '#824ae4'
	        }, {
	            gt: 30,
	            lte: 40,
	            color: '#ff2ad9'
	        }, {
	            gt: 40,
	            lte: 50,
	            color: '#ef0e55'
	        }, {
	            gt: 50,
	            color: '#d70000'
	        }],
	        outOfRange: {
	            color: '#00d67f'
	        },
	    },
	    series: [{
	        name: '人数',
	        type: 'line',
	        areaStyle: { //区域填充样式。
	            normal: {
	                opacity: 0.5,
	                pieces: [{
	                    gt: 10,
	                    lte: 20,
	                    color: '#0084ff',
	                }, {
	                    gt: 20,
	                    lte: 30,
	                    color: '#824ae4'
	                }, {
	                    gt: 30,
	                    lte: 40,
	                    color: '#ff2ad9'
	                }, {
	                    gt: 40,
	                    lte: 50,
	                    color: '#ef0e55'
	                }, {
	                    gt: 50,
	                    color: '#d70000'
	                }],
	                outOfRange: {
	                    color: '#00d67f'
	                },
	            }
	        },
	        data: json.slice(0, 4).concat(['-', '-', '-'])
	    }, {
	        name: '预测人数',
	        type: 'line',
	        lineStyle: {
	            normal: {
	                color: '#333',
	                type: 'dashed'
	            }
	        },        areaStyle: { //区域填充样式。
            normal: {
                opacity: 0.3,
                pieces: [{
                    gt: 10,
                    lte: 20,
                    color: '#0084ff',
                }, {
                    gt: 20,
                    lte: 30,
                    color: '#824ae4'
                }, {
                    gt: 30,
                    lte: 40,
                    color: '#ff2ad9'
                }, {
                    gt: 40,
                    lte: 50,
                    color: '#ef0e55'
                }, {
                    gt: 50,
                    color: '#d70000'
                }],
                outOfRange: {
                    color: '#00d67f'
                },
            }
        },
	        data: ['-', '-', '-'].concat(json.slice(3, 7))
	    }]
	}];

	option = zrUtil.merge(opts[0], baseOption, false);