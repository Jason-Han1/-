option = {
  	color: ['#3e6591', '#eb7d22', '#d73f45'],
  	grid: {
      	left: 250
    },
    xAxis: {
      	axisLine: {
          	lineStyle: {color: '#ccc'}
        },
      	axisLabel: {
          	textStyle: {color: '#777'}
        }
    },
    yAxis: [{
      	inverse: true,
      	splitLine: {
          	show: true
        },
      	axisTick: {
          	length: 100,
          	lineStyle: {color: '#ccc'}          
        },
      	axisLine: {
          	lineStyle: {color: '#ccc'}
        },
        data: ['-', '-', '-', '-', '-']      
    }, {
      	name: '                     所属行业',
      	nameLocation: 'start',      
      	nameTextStyle: {
          	fontWeight: 'bold'
        },
	    position: 'left',
      	offset: 130,
      	axisLine: {
          	onZero: false,
          	show: false          
        },
      	axisTick: {
          	length: 70,
          	inside: true,
          	lineStyle: {color: '#ccc'}
        },      
      	axisLabel: {
          	inside: true
        },      
      	inverse: true,      
      	data: ['电商', '游戏', '金融', '旅游', '直播']
    }, {
      	name: '                产品名',
      	nameLocation: 'start',
      	nameTextStyle: {
          	fontWeight: 'bold'
        },      
		position: 'left',
      	offset: 220,
      	axisLine: {
          	onZero: false,
          	show: false
        },
      	axisTick: {
          	length: 100,
          	inside: true,
          	lineStyle: {color: '#ccc'}          
        },
      	axisLabel: {
          	inside: true
        },
      	inverse: true,
      	data: ['APP数据分析', 'DMP', '企业版', '移动广告鉴别', '']      
    }],
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290],
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '合同金额',              
            }
        }
    }, {
        type: 'bar',
        data:[210, 132, 91, 204, 220],
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '已收款',              
            }
        }      
    }, {
        type: 'bar',
        data:[120, 132, 131, 254, 278],
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '应收款',              
            }
        }      
    }, {      
        type: 'bar',
        data:['-', '-', '-', '-', '-'],
      	yAxisIndex: 1
    }, {
        type: 'bar',
        data:['-', '-', '-', '-', '-'],
      	yAxisIndex: 2
    }]
};