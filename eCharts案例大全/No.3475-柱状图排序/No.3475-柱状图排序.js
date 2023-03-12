var getName =['汉阳区','青山区','洪山区','蔡甸区','东西湖','武昌区','黄陂区','新洲区','江岸区','江汉区','硚口区','江夏区','汉南区'];
var getValue =[1026, 865, 826, 808, 756, 720, 705, 701, 698, 685, 645, 601, 568];
var max = Math.max(...getValue);
var getMax=[];
var labelColor = ['#FFD401', '#00FBAF', '#00EDFC'];
for(i=0;i<getName.length;i++){
    getMax.push(max)
}
var emptyData = getValue.map((v, i) => {
			    let color = i > 2 ? '#00B2FF' : labelColor[i];
			    let item = {
			        value: v,
			        label: {
			            formatter: '{a|' + v + '}',
			            position: 'right',
			            distance: 20,
			            rich: {
			                a: {
			                    color: color,
			                    borderColor: color,
			                    // borderWidth: 1,
			                    // borderType: 'dashed',
			                    padding: [0, 0, 2, 0],
			                    width: 60,
			                    height: 18,
			                    fontWeight:'bold',
								fontFamily: 'ACENS',
			                    align: 'left',
			                    verticalAlign: 'middle',
			                }
			            }
			
			        }
			    }
			    return item
			})
console.log(getMax) ;

option = {
    backgroundColor:"#003366",
    grid: {
        left: '4%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        offset: 100,
        
        axisLabel: {
            show: true,
            align: 'left',
            textStyle: {
                color: '#66cc00',
            },
            formatter: function(value,index) {
                     var num = ''
                     var str = ''
                     num= (index + 1);
                     if (index === 0) {
                         str = '   {num1|' + num + '} {title1|' + value + '}'
                     } else if (index === 1) {
                         str = '   {num2|' + num + '} {title2|' + value + '}'
                     }else if (index === 2) {
                         str = '   {num3|' + num + '} {title3|' + value + '}'
                     }else {
                         str = '   {num|' + num + '} {title|' + value + '}'
                     }
                     return str;
                     
                 },
            rich:{
                num:{
                    color: '#fff',
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    borderRadius: 100
                },
                num1:{
                    color: labelColor[0],
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    backgroundColor:"rgba(255,212,1,0.5)"
                },
                num2:{
                    color: labelColor[1],
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    backgroundColor:"rgba(0,251,175,0.5)"
                },
                num3:{
                    color: labelColor[3],
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    backgroundColor:"rgba(0,237,252,0.5)"
                },
                title:{
                    color: '#fff',
                },
                title1:{
                    color: labelColor[0],
                },
                title2:{
                    color: labelColor[1],
                },
                title3:{
                    color: labelColor[2],
                },
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getName
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            label:{
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                offset: [5, 0]
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: (val) => {
					if (val.dataIndex > 2) {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color:  'rgb(128,204,255,1)'
                    }, {
                        offset: 1,
                        color:  'rgb(46,200,207,1)'
                    }])
					} else {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: labelColor[val.dataIndex]
                    }, {
                        offset: 1,
                        color: labelColor[val.dataIndex]
                    }])
					}
				}
                },
            },
            barWidth: 5,
            data: emptyData
    }
    ]
};
