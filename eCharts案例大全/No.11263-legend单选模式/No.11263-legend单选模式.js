option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		    	selectedMode: 'single',
		        orient: 'vertical',
		        x: 'left',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
	myChart.on("dispatchAction ", function(e) {
        // 如果是false，则消灭轮播
        if (v === false) return clearInterval(this.timer) 
        // 获取legend的data
        const data = this.myChart.getOption().legend[0].data
        // 首次总是从0开始的
        let i = 0
        // 开始轮播
        this.timer = setInterval(() => {
            // 激活
            this.myChart.dispatchAction({ type: 'legendToggleSelect', name: data[ ++i % data.length ] })
        }, 3500)
	});