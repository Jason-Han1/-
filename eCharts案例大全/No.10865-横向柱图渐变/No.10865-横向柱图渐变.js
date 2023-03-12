var titlename = ['太原市民政局', '太原市运输局', '太原市残联', '太原市报社', '太原市司法局'];
var valdata = [683,234,234,523,345]

var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option = {
    backgroundColor: '#0e2147',
    xAxis: {
			type: 'value',
			boundaryGap: false,
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				 show: true,
				 lineStyle: {
					 color: '#233e64'
				 },
			 },
			 axisLabel: { //坐标轴刻度标签的相关设置
				 textStyle: {
					 color: '#6a9cd5',
					 margin:15,
				 },
			 },
			 splitLine:{
				     show:false,
			},
			 axisTick: { show: true,},
			data: ['0', '250', '500', '750'],
		},
    yAxis: [{
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            textStyle:{
                color:'#ffffff',
                fontSize:'16',
            }
        },
        data:titlename,
    }],
    series: [{
        name: '',
        type: 'bar',
        yAxisIndex: 0,
        data: valdata,
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: [0,20,20,0],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset:0,
                    color:'#57eabf',
                },{
                    offset:1,
                    color:'#2563f9'
                }]),
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color:'#ffffff'
            }
        },
    }, ]
};