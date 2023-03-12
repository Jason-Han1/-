var data = { "total":80000.00,"month":12,"per":6936.16,"unit":8 };
option = {
 					backgroundColor: '#ffffff',
				    color: ['#FDB225', '#16A59C'],
				    tooltip: { },
				    legend: {     // 饼图外的各项数据item
				        orient: 'vertical',
				        left: '60%',
				        top: '30%',
				        itemWidth: 8,
				        itemHeight: 8,
				        data: ['贷款' + data.unit +'万/' + data.month + '个月','月供' + data.per + '元'],
				    },
				    series: [{    // 饼图的属性配置
				        name: '查悦安心贷',
				        type: 'pie',
				        center: ['30%','50%'],
				        radius: ['50%', '70%'],
				        avoidLabelOverlap: false,
				        startAngle:20,
				        itemStyle: {
				    normal: {
				        label: {
				            show: false
				        },
				        labelLine: {
				            show: false
				        },
				        borderWidth: 10,
				        borderColor: '#ffffff',	       
				    }
				},
				// 图形样式
				        label: {
				            normal: {
				                show: false,
				                position: 'center'
				            },
				            emphasis: {
				                show: true,
				                formatter: function(param) {
				                	return param.name;
				                },
				                textStyle: {
				                    fontSize: '16',
				                    fontWeight: 'bold'
				                }
				            }
				        },
				        labelLine: {
				            normal: {
				                show: true
				            }
				        },
				        data: [{
				            value: data.total,
				            name:  '贷款' + data.unit +'万/' + data.month + '个月'
				        }, {
				            value: data.per,
				            name:  '月供' + data.per + '元'
				        }]
				    }]
 				};