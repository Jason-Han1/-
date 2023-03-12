option = {
    legend: {top:'3%'},
    tooltip: {},
    title: {text: 'JSON & cPickle & Pickle 性能对比', left: 'center'},
    xAxis: [
        {type: 'category', gridIndex: 0, data:['dumps 10','dumps 20','dumps 50','dumps 100']},
        {type: 'category', gridIndex: 1, data:['loads 10','loads 20','loads 50','loads 100']},
        {type: 'category', gridIndex: 2, data:['10 rounds','20 rounds','50 rounds','100 rounds']}
    ],
    yAxis: [
        {gridIndex: 0, name:'Time (seconds)'},
        {gridIndex: 1, name:'Time (seconds)'},
         {gridIndex: 2, name:'Size (num. of characters)'}
    ],
    grid: [
        {top: '6%', height: '25%'},
        {top: '38%', height: '25%'},
        {bottom: '5%', height: '25%'}
    ],
    series:[
        {
        	type: 'bar', 
        	xAxisIndex: 0, 
        	yAxisIndex: 0,
        	name: 'JSON',        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [0.018, 0.048, 0.108, 0.187]
        },{
        	type: 'bar',  
        	xAxisIndex: 0, 
        	yAxisIndex: 0,
        	name: 'cPickle',        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [0.046, 0.093, 0.290, 0.494]
        },{
        	type: 'bar',  
        	xAxisIndex: 0, 
        	yAxisIndex: 0,
        	name: 'Pickle',        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [0.312, 0.560, 1.380, 2.754]
        },
        {
        	type: 'bar',
        	name: 'JSON',
        	xAxisIndex: 1, 
        	yAxisIndex: 1,        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [0.393, 1.571, 9.950, 38.829]
        },{
        	type: 'bar',
        	name: 'cPickle',
        	xAxisIndex: 1, 
        	yAxisIndex: 1,        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [0.338, 1.402, 9.115, 36.080]
        },{
        	type: 'bar',
        	name: 'Pickle',
        	xAxisIndex: 1, 
        	yAxisIndex: 1,
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [2.581, 10.928, 64.932, 262.406]
        },
        {
        	type: 'bar',
        	name: 'JSON',
        	xAxisIndex: 2, 
        	yAxisIndex: 2,        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [1478380,2956760, 7391900, 14783800]
        },{
        	type: 'bar',
        	name: 'cPickle',
        	xAxisIndex: 2, 
        	yAxisIndex: 2,        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [1801750, 3603500, 9008750, 18017500]
        },{
        	type: 'bar',
        	name: 'Pickle',
        	xAxisIndex: 2, 
        	yAxisIndex: 2,        
        	label: {
                normal: {
                    position: 'top',
                    show: true
                }
            },
        	data: [1823180, 3646360, 9115900, 18231800]
        }
    ]
};
