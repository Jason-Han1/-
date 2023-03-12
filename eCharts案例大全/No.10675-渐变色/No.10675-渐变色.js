option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:_colors(),
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        data: ['1','2','3','4'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '签到比例分析',
	            type: 'pie',
	            radius : '55%',
	            center: ['40%', '50%'],
	            data:[
	                {value:335, name:'1'},
	                {value:310, name:'2'},
	                {value:234, name:'3'},
	                {value:135, name:'4'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            itemStyle: {
	                normal: {
	                    label:{ 
                            show: true, 
//	                            position:'inside',
                            formatter: '{b} : {c} ({d}%)' 
                        }
	                },
                    labelLine :{show:true}
	            }
	        }
	    ]
	};
	
  function _colors () {
                    return [{
                        x: 0, y: 0, x2: 0, y2: 0,
                        colorStops: [{
                            offset: 0, color: '#9386FD' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#9386FD' // 100% 处的颜色
                        }],
                    }, {

                        x: 1, y:0, x2: 0, y2: 0.1,
                        colorStops: [{
                            offset: 0, color: '#8DFE99' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#8DFF48' // 100% 处的颜色
                        }],
                    },
                    {

                        x: 0.1, y: 0.1, x2:1, y2: 0.8,
                        colorStops: [{
                            offset: 0, color: '#99B4FF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#4676FF' // 100% 处的颜色
                        }],
                    },
                    {

                        x: 0.1, y: 0.3, x2:0, y2: 1,
                        colorStops: [{
                            offset: 0, color: '#FDC976' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#FDBD5A' // 100% 处的颜色
                        }],
                    },
                    {

                        x: 0.5, y: 0.5, x2: 0, y2: 1,
                        colorStops: [{
                            offset: 0, color: '#FC5869', opacity: 0.5 // 0% 处的颜色
                        }, {
                            offset: 1, color: '#FC5869' // 100% 处的颜色
                        }],
                    },
                    {

                        x: 0.5, y: 0.5, x2: 0, y2: 1,
                        colorStops: [{
                            offset: 0, color: '#8DFF48', opacity: 0.5 // 0% 处的颜色
                        }, {
                            offset: 1, color: '#8DFF48' // 100% 处的颜色
                        }],
                    }]
                }