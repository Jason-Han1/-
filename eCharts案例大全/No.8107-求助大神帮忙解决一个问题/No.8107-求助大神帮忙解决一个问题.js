option = {
    		    tooltip: {
    		        trigger: 'axis',
    		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    		        }
    		    },
    		    legend: {
    		        data: ['到访留电比', '意向到访比', '认筹意向比', '认购认筹比']
    		    },
    		    grid: {
    		        left: '3%',
    		        right: '4%',
    		        bottom: '3%',
    		        containLabel: true
    		    },
    		    xAxis: {
    		        type: 'value'
    		    },
    		    yAxis: {
    		        type: 'category',
    		        data: ['全部渠道', '行销拓客', '渠道推荐', '全民经纪人', '员工推荐', '自然到访']
    		    },
    		    series: [
    		        {
    		            name: '到访留电比',
    		            type: 'bar',
    		            stack: '总量',
    		            label: {
    		                show: true,
    		                position: 'inside'
    		            },
    		            data: [32, 30, 30, 33, 39, 33]
    		        },
    		        {
    		            name: '意向到访比',
    		            type: 'bar',
    		            stack: '总量',
    		            label: {
    		                show: true,
    		                position: 'insideRight'
    		            },
    		            data: [12, 13, 10, 13, 44, 23]
    		        },
    		        {
    		            name: '认筹意向比',
    		            type: 'bar',
    		            stack: '总量',
    		            label: {
    		                show: true,
    		                position: 'insideRight'
    		            },
    		            data: [22, 18, 19, 23, 29, 33]
    		        },
    		        {
    		            name: '认购认筹比',
    		            type: 'bar',
    		            stack: '总量',
    		            label: {
    		                show: true,
    		                position: 'insideRight'
    		            },
    		            data: [15, 21, 20, 15, 19, 33]
    		        }
    		    ]
    		};