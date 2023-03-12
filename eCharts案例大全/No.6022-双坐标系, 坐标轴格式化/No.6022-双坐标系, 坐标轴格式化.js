
var names = ['hbj_jdcpt_db', 'mzj-w01', 'rsj-db', 'xzzx-ptweb', 'szb_cd02'];
var dataList = [15, 35,45,60,80.26];

option = {
    backgroundColor: '#071347',
    title: [{
        left: '20px',
        top: '20%',
        text: 'CPU',
        textStyle:{
            color: '#fff',
        },
        subtext: 'Top5',
        subtextStyle:{
            color: '#fff'
        },
        textAlign: 'center',
    }, {
        left: '20px',
        top: '75%',
        text: '内存',
        textStyle:{
            color: '#fff'
        },
        subtext: 'Top5',
        subtextStyle:{
            color: '#fff'
        },
        textAlign: 'center',
    }],
    grid: [{
        left: '50px',
        top: '2px',
        right: '2px',
        bottom: '55%',
        containLabel: true,
    }, {
        left: '50px',
        top: '55%',
        right: '2px',
        bottom: '2px%',
        containLabel: true,
    }],
    xAxis: [{
        type:'value',
        position:'top',
        splitNumber:2,
        gridIndex: 0,
        splitLine: {
            show: true,
            lineStyle:{
                color:'#65ebff',
                width:2,
                type:'dashed'
            }
        },
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            show: true,
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
           textStyle: {
                color: '#fff',
                fontSize:16
            },
        },
        z:3
    }, {
        type: 'value',
        position: 'top',
        splitNumber:2,
        gridIndex: 1,
        splitLine: {
            show: true,
            lineStyle:{
                color:'#65ebff',
                width:2,
                type:'dashed'
            }
        },
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            show: true,
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
           textStyle: {
                color: '#fff',
                fontSize:16
            },
        },
        z:3
    }],
    
    yAxis: [{
        type:'category',
        data: names,
        gridIndex: 0,
        splitLine: {show: false},
        axisLabel:{ 
            show:false,
        },
        axisTick: { show: false },
        axisLine: { show: false  },
        z:3
    }, 
    {
        type:'category',
        data: dataList,
        gridIndex: 0,
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false  },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: 16
            },
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
        },
    }, 
    {
        type:'category',
        data: names,
        gridIndex: 1,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false  },
    },
    {
        type:'category',
        data: dataList,
        gridIndex: 1,
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false  },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: 16
            },
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
        },
    }],

    series: [{
        name: 'CPU Top5',
        type: 'bar',
		itemStyle: {
			color: {
				type: 'linear',
				x: 0,
				x2: 1,
				y: 0,
				y2: 0,
				colorStops: [
					{
						offset: 0,
						color: '#FAD961',
					},
					{
						offset: 1,
						color: '#F76B1C',
					},
				],
				global: false, // 缺省为 false
			},
		},
		label:{
		    show: true,
		    position: 'insideLeft',
		    formatter(params){
		        return params.name;
		    }
		},
		showBackground: true,
		backgroundStyle: {
			color: 'rgba(17,40,95, 0.8)',
		},
		barWidth: 16,
		xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataList,
    }, {
        name: '内存 Top5 ',
        type: 'bar',
		itemStyle: {
			color: {
				type: 'linear',
				x: 0,
				x2: 1,
				y: 0,
				y2: 0,
				colorStops: [
					{
						offset: 0,
						color: '#FAD961',
					},
					{
						offset: 1,
						color: '#F76B1C',
					},
				],
				global: false, // 缺省为 false
			},
		},
		label:{
		    show: true,
		    position: 'insideLeft',
		    formatter(params){
		        return params.name;
		    }
		},
		showBackground: true,
		backgroundStyle: {
			color: 'rgba(17,40,95, 0.8)',
		},
		barWidth: 16,
        xAxisIndex: 1,
        yAxisIndex: 2,
        data: dataList,
    }]
};