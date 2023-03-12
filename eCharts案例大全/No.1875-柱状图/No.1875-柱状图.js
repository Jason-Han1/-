// 指定图表的配置项和数据
var data1 = [20, 30, 20, '', 20];
var data2 = ['', '', '', 60, ''];
var data3 = ['', '', '', 30, ''];
var data4 = ['', '', '', 50, ''];
var datacity = [ '二级代理', '三级住宅', '工商铺','新房分销','其他'];
var option = {
    color: [ '#4f81bd','#8064a2', '#9bbb59', '#c0504d'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
         orient: 'vertical',
        top:'30%',
        right: '3%',
        data: ['独立分销', '房友圈', '三级一手住宅', '其他'],
    },
    grid: { //图表的位置
        top: '5%',
        left: '3%',
        right: '15%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true,
        axisTick: {
          show: true
        },
        axisLine: {
          show: true
        }

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#000'
            },

        },
        data: datacity,
    }],
    series: [{
            name: '其他',
            type: 'bar',
             stack: 'sum',
            barWidth: '50%',
            barGap:'-100%',
            		label: {
			show: true,
			position: 'top',
			textStyle: {
				color: '#555'
			}
		},
            data: data1

        },
        {
            name: '独立分销',
            type: 'bar',
             barWidth: '50%',
            barGap:'-100%',
           stack: 'sum1',
           		label: {
			show: true,
			position: 'inside',
			textStyle: {
				color: '#555'
			}
		},
            data: data2,

        },
        {
            name: '房友圈',
            type: 'bar',
         		label: {
			show: true,
			position: 'inside',
			textStyle: {
				color: '#555'
			}
		},
            stack: 'sum1',
              barWidth: '50%',
            barGap:'-100%',
             data: data3,

        },
        {
            name: '三级一手住宅',
            type: 'bar',
          		label: {
			show: true,
			position: 'inside',
			textStyle: {
				color: '#555'
			}
		},
            stack: 'sum1',
              barWidth: '50%',
            barGap:'-100%',
            data: data4,

        },
    ]
};