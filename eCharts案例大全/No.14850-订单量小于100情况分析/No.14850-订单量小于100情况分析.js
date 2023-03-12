option = {
     title:[
            {text:"订单量小于100情况分析",x: 'center', y: '1%',textStyle:{fontSize:"17"}},         
	        {text:"订单数量分析",x: '10%', y: '10%',textStyle:{fontSize:"14"}},
	        {text:"发货数量分析",x: '60%', y: '10%',textStyle:{fontSize:"14"}},
	    ],
	    
	toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        x: '25%',
	                        width: '50%',
	                        funnelAlign: 'left',
	                        max: 1548
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '订单数量',
        type: 'pie',
        radius: '40%',
        center: ['25%', '45%'],
        clockwise: false,
        data: [{
            value: 45,
            name: '大于100'
        }, {
            value: 25,
            name: '小于100'
        },
        ],
        label: {
            normal: {
                textStyle: {
                    color: '#999',
                    fontSize: 12,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    {
        name: '发货数量',
        type: 'pie',
        radius: '40%',
        center: ['70%', '45%'],
        clockwise: false,
        data: [{
            value: 456,
            name: '大于100'
        }, {
            value: 251,
            name: '小于100'
        }, ],
        label: {
            normal: {
                textStyle: {
                    color: '#110',
                    fontSize: 12,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    
    ],
    color: [
        '#00acee',
        '#52cdd5',
        '#79d9f1',
        '#a7e7ff',
        '#c8efff'
    ],
};