option = {
	    backgroundColor:"#ffffff",
	    title: {
	        text: '每个柱形颜色不同',
	        left:"center"
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        top:"80",
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        axisTick:{
	           show:false  
	        },
	         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	    }],
	    yAxis: [{
	        type: 'value',
	        axisLine:{
	            show:false
	        },
	        axisTick:{
	           show:false  
	        },
	        axisLabel: {
	            show:false,
	            formatter: '{value}'
	        },
	        splitLine: {
				show:false,
			}
	    }],
	    series: [{
	        type: 'bar',
	        label: {
	            show: true,
	            position: 'top',
	            textStyle: {
	                color: '#000000',
	            },
	        },
	        itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#7711AF', '#CF77FF', '#AE004F', '#F35872', '#FA7729',
                            '#FFC526', '#F8E71C', '#34ADAE', '#3DDFD2', '#A0FFFF'
                        ];
                        var colorListr = [
                            '#0f4471',
                            '#00adb5',
                            '#ff5722',
                            '#5628b4',
                            '#20BF55',
                            '#f23557',
                            '#118df0',
                            '#11cbd7',
                            '#d3327b',
                            '#ae318a',
                            '#993090',
                            '#6f3071'
                        ];
                        return colorListr[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize:14
                    },
                    shadowBlur: 10,
                    shadowColor: 'rgba(40, 40, 40, 0.3)',
                }
            },
	        data: [2031, 1793, 3640, 2593, 4377,3201, 2275, 3289, 3356,2859,4244,3945]
	    }]
	};