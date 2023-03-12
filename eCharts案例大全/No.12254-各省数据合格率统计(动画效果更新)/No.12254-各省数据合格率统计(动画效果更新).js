     var chart;
     var yearDataList = 
					[{
						name: '湖北省',
						value: 424.98
					}, {
						name: '湖南省',
						value: 330.66
					}, {
						name: '河南省',
						value: 261.30
					}, {
						name: '安徽省',
						value: 264.78
					}, {
						name: '浙江省',
						value: 388.64
					}, {
						name: '山东省',
						value: 165.08
					}, {
						name: '广东省',
						value: 228.85
					}]
				;
       
     var data =JSON.parse(JSON.stringify(yearDataList)).sort(function (a, b) {
					return a.value - b.value;
				})
     
       chart=  echarts.init(document.getElementById('chart-panel'))
        option = {
            color: ['#3398DB'],
            title: {
                text: '各省数据合格率统计',
                //textStyle: {
                //    color: '#fff'
                //}
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: "{b} <br> 合格率: {c}%"
            },
            /*legend: {
                data: [date]
            },*/
            grid: {
                left: '4%',
                right: '4%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
           
                interval: 20,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        //color: '#fff',  
                        fontWeight: '80'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data:data.map(function (item) {
					return item.name
				}),
                axisLabel: {
                    show: true,
                    interval: 0,
                    rotate: 0,
                    margin: 10,
                    inside: false,
                    textStyle: {
                        //color: '#fff',
                        fontWeight: '50'
                    }
                }
            },animation:true,
            animationDelayUpdate: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 200;
                },
                animationEasingUpdate:true,
                animationDuration: function (idx) {
                // 越往后的数据延迟越大
                return idx * 200;
            },
            animationDelay: function (idx) {
                // 越往后的数据延迟越大
                return idx * 200;
            },
            series: [{
                type: 'bar',
                label: {
						normal: {
							show: true,
							position: "inside",
							distance: 12,
							formatter: function (params) {
								var stuNum = 0;
								data.forEach(function (value, index, array) {
									if (params.name == value.name) {
										stuNum = value.value;
									}
								})
								// return stuNum + '{white|亿元}';
								return stuNum;
							},
							textStyle: {
								color: "#fff",
								fontSize: 12
							},
							rich: {
				white: {
					color: "#fff",
					align: 'left',
					fontSize: 12,
					padding: [0, 0]
				},
			}
						}
					},
                data:data
            }]
        };
        chart.setOption(option);
   
    function refreshData(){
        console.log(5)
        //更新数据
        var option = chart.getOption();
    
        yearDataList = 
					[{
						name: '湖北省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '湖南省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '河南省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '安徽省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '浙江省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '山东省',
						value: Math.floor(Math.random(1)*90)
					}, {
						name: '广东省',
						value: Math.floor(Math.random(1)*90)
					}]
   var data =JSON.parse(JSON.stringify(yearDataList)).sort(function (a, b) {
				return a.value - b.value;
			})
        option.series[0].data =data
    	option.yAxis[0].data =data.map(function (item) {
				return item.name
			}),
        chart.setOption(option); 
}
setTimeout(a,2000)
function a(){
     console.log(4)
    refreshData()
    setTimeout(a,2000)
}