option = {
     title: {
	        text: '年度销售水量',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#141845',
    color: ['#4287F5','#57DB8F',  '#F4F2C6'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'center',
        top:'10%',
        data: [{
                name: '集团营业部',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '东区供水',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '西城分公司',
                textStyle: {
                    color: "#fff"
                }
            }
        ],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [{
        name: ' ',
        type: 'pie',
        radius: ['45%', '65%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 64,
                name: '集团营业部'
            },
            {
                value: 25,
                name: '东区供水'
            },
            {
                value: 11,
                name: '西城分公司'
            }
        ],
         itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 40,
            }
        }
    }]
};