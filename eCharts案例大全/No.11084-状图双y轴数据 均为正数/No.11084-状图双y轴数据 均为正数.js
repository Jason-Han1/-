// typeName='number'
typeName=''
var xAxisData=["一组12","caoxt12","cl","je","备用","cl","销售部","湖北","陕西","江苏","四川","上海","北京","湖南","广东","辽宁","甘青宁","山东","河北","福建","内蒙古","广西","云事业部","销售一部深圳办","销售一部能源组","销售一部南京办","销售一部华南区","销售一部杭州办","销售一部广州办","销售一部成都办","销售一部","销售三部长沙办","销售三部渠道2组","销售三部渠道1组","销售三部济南办","销售三部","销售二部郑州办","销售二部银行组","销售二部石家庄办","销售二部大客户4组","销售二部大客户2组","销售二部大客户1组","销售二部北京办","销售二部保险组","销售二部","市场部","人力","技术","财务","资源专家组","耿兵1","张会君1","www","曹一","gcm","hdl测试权限1","abcdef","testaa","a","顾庆隆","耿兵","lz","lzz","dd","zz","haha","aa"]

var seriesData=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var seriesData2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

option = {
	    color:['#1785ef','#2cb7ff'],
			backgroundColor:'#ffffff',
			legend:{
				data:['项目合同额','项目成交量'],
				right:10,
				top:10
			},
			grid:{
				left:120,
				bottom:80
			},
			tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
	    xAxis: [{
				type: 'category',
				data: xAxisData,
				offset :20,
				nameTextStyle: {
					color: '#8f8f9b',
					fontSize:14
				},
				splitLine: {
					show:false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						type: 'solid',
						color:'#dee0ea'
					}
				},
				axisLabel: {
					show: true,
					rotate: 0,
					fontSize:14,
					textStyle: {
						color: '#8f8f9b'
					},
					formatter: function (val) {
						var txt='';
						if(val.length>3){
							for(var i=0;i<val.length;i=i+2){
								txt+=val.substr(i,2)+'\n';
							}
							return txt;

						}else{
							return val.split("").join("\n");/*换行*/
						}
					}
				}
			},{
				position: 'bottom',
				splitLine: {
					show:false
				},
				axisTick: {
					show:false
				},
				axisLine: {
					show: true,
					lineStyle: {
						type: 'solid',
						color:'#dee0ea'
					}
				},
				axisLabel: {
					show: false
				},
				data: ['-', '-']
			}],
	    yAxis: [{
				type: 'value',
				splitLine: {
					show:false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						type: 'solid',
						color:'#dee0ea'
					}
				},
				axisLabel: {
					show: true,
					rotate: 0,
					fontSize:14,
					textStyle: {
						color: '#8f8f9b'
					},
					formatter:function(e){
						return Math.abs(e)
					}
				},

			},{
				position: 'left',
				offset: 80,
				axisLine: {
					show: false
				},
				axisTick: {
					show:false
				},
				axisLabel: {
					show:true,
					inside: true,
					interval: '0',
					fontSize:14,
					textStyle: {
						color: '#8f8f9b'
					},
					formatter: function (val) {
						var val1=val.substr(0,5).split("").join("\n");
						var val2=val.substr(5);
						console.log(val)
						return val1+'\n '+val2;/*换行*/
					}
				},
				inverse: true,
				data:['项目合同额（万）','项目成交量（个）']
			}],
	    series: [{
	        name:'项目成交额',
	        data: seriesData,
	        type: 'bar',
	        stack: '总量',
	        barMaxWidth: '20px',
	        itemStyle:{
	            normal:{
	                barBorderRadius: [6, 6, 0, 0],
	            }
	        },
	       label: {
				normal: {
				    show: true,
					textStyle: {
						color: '#000'
					},
					position: 'top'
				}
			}
	    },{
	        name:'项目成交量',
	        data: seriesData2,
	        type: 'bar',
	        stack: '总量',
	        barMaxWidth: '20px',
	        itemStyle:{
	            normal:{
	                barBorderRadius: [0, 0,6, 6],
	            }
	        },
	       label: {
				normal: {
				    show: true,
					textStyle: {
						color: '#000'
					},
					position: 'bottom',
					formatter: function(params) {
                        return params.data * -1;
                    }
				}
			}
	    }]
	    
	    
}




   myChart.on('legendselectchanged', function(obj) {
        console.log(obj.selected)
        var index=0;
        for(var i in obj.selected){
            if(obj.selected[i]){
               index++; 
            }else{
                index--;
            }
        }
        if(index==2){
            console.log('都');
            option.yAxis[1].axisLabel.show=true
        }else{
           option.yAxis[1].axisLabel.show=false
        }
        myChart.setOption(option)

    })

