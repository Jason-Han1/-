//趋势分析/渠道
option = {
   tooltip: {
        trigger: 'axis',
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
    grid: {
        top: '90',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    color: ['#229aff','#fdb94e','#30d6a9','#13bfe8','#fedb42','#86d560','#72d4ec','#ff9d35','#31ca5f','#ff999a','#3dccc7','#ffad8c','#4bb6de','#fe8042','#5fa5f5','#07bcbe','#f36365','#30addc','#f5adae','#7fd4d2'],
    legend: {
        top: '30',
        data:['微信','京东','淘宝','美团','饿了么','王者荣耀','支付宝','QQ','腾讯视频','消消乐','微博','知乎','抖音','百度']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
   xAxis: [
		{
		type: 'category',
		data: ['3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','3.9','3.10','3.11','3.12','3.13'],
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
	],
    yAxis: [{
            name: '时间（分钟）',
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
    series : [
        {
            name:'微信',
            type:'bar',
            data:[31,101, 96, 102, 30, 37, 45,67, 23, 38, 52, 90, 30, ]
        },
        {
            name:'京东',
            type:'bar',
            stack: '渠道1',
            data:[32, 33, 30, 33, 39, 33, 32,12, 23, 20, 15, 19, 33, ]
        },
        {
            name:'淘宝',
            type:'bar',
            stack: '渠道1',
            data:[31,101, 96, 106, 16, 16, 15,22, 23, 20, 54, 90, 33, ]
        },
        {
            name:'美团',
            type:'bar',
            stack: '渠道2',
            data:[ 7, 10, 11,15, 23, 20, 15, 19, 23, 0, 0, 19, 0, ]
        },
        {
            name:'饿了么',
            type:'bar',
            stack: '渠道2',
            data:[10, 9, 10, 16,8, 16, 15,15, 0, 2, 0, 0,],
        },
        {
            name:'王者荣耀',
            type:'bar',
            barWidth : 8,
            stack: '渠道2',
            data:[113, 112,73, 71,60, 0, 61, 74, 0, 45, 54, 90, 0, ]
        },
        {
            name:'支付宝',
            type:'bar',
            stack: '渠道2',
            data:[12, 11, 10, 13, 2, 2, 1,2, 3, 10, 4, 0, 3,]
        },
        {
            name:'QQ',
            type:'bar',
            stack: '渠道2',
            data:[6, 7, 0, 0, 0, 13, 0,0, 2, 1, 4, 9, 0,]
        },
        {
            name:'腾讯视频',
            type:'bar',
            stack: '渠道2',
            data:[62, 82, 91, 84, 109, 110, 120,72, 71, 74, 190, 130, 110]
        },
        {
            name:'消消乐',
            type:'bar',
            stack: '渠道2',
            data:[15, 23, 20, 15, 19, 30,0,62,0, 19, 20, 30, 10]
        },
        {
            name:'微博',
            type:'bar',
            stack: '渠道2',
            data:[86, 18, 64, 10, 57, 74, 19, 13, 11,15, 19, 33, 41],
        },
        {
            name:'知乎',
            type:'bar',
            //barWidth : 5,
            stack: '渠道2',
            data:[20, 32, 37, 4, 10, 13, 11,6, 7, 41, 0, 19, 30, ]
        },
        {
            name:'抖音',
            type:'bar',
            stack: '渠道2',
            data:[120, 132, 101, 13, 29, 130, 97, 32, 71, 54, 50, 30, 45]
        },
        {
            name:'百度',
            type:'bar',
            stack: '渠道2',
            data:[6, 7, 7, 7, 0, 13, 0,6, 7, 7, 4, 19, 13, ]
        },
    ]
};
