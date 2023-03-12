//价格分析/价格区间
option = {
   tooltip: {
        //trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
    },
    toolbox:{
        right:20,
        feature:{
            magicType: {
                type:['line']
            },
            restore: {},
            saveAsImage: {},
            // brush: {},
        }
    },
    color: ['#229aff','#fdb94e','#30d6a9','#F87B5F','#89c9e1','#ffad8c','#07bcbe'],
    legend: {
        //top: 140,
        data: ['0-100','100-300','300-600','600-900','900-1200','1200以上']
    },
    grid: [{
        top: 150,
        width: '45%',
        bottom: '30%',
        left: 10,
        containLabel: true
    },],
    xAxis:  {
		type: 'category',
		data: ['0-100','100-300','300-600','600-900','900-1200','1200以上'],
		//boundaryGap: false,//坐标轴两边留白
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
    },
    yAxis: [{
            name: '零售量（万件）',
			type: 'value',
			axisLabel: {
				textStyle: {
					color: '#666',
				    fontStyle: 'normal',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
			}
    }],
    series: [
        {
            name: '0-100',
            type: 'bar',
            barCategoryGap: '50%',
            stack: '总量',
            data: [320, 302, 301, 334, 390, 330]
        },
        {
            name: '100-300',
            type: 'bar',
            stack: '总量',

            data: [120, 132, 101, 134, 90, 230]
        },
        {
            name: '300-600',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330]
        },
        {
            name: '600-900',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190, 330]
        },
        {
            name: '900-1200',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290, 1330]
        },
        {
            name: '1200以上',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290, 1330]
        },
        {
        type: 'pie',
        center: ['72%', '50%'],
        radius: ['30%', '45%'],
              data:[
                {value:335, name:'0-100'},
                {value:310, name:'100-300'},
                {value:234, name:'300-600'},
                {value:135, name:'600-900'},
                {value:1548, name:'900-1200'},
                {value:1548, name:'1200以上'}
            ]
    },
    ]
};