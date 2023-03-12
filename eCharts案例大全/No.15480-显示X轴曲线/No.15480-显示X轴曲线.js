option = {    
   color : [ '#389A9E' ],
    calculable : false,
  	grid : {
      left : '1%',
      right : '1%',
      bottom : '1%',
      containLabel : false
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(e){
            return e[0].data+'%'
        }
    },
    xAxis : 
        {	
          	show:false,
            type : 'category',
            boundaryGap : false,
          	axisLine : {
						show : false,
						onZero : false
			},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ,
    yAxis :{	
           show:false,
            type : 'value',
          axisLine : {
						show : false,
						onZero : false
					}
        },
    series : [
        {
            name:'成交',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            symbolSize : 3,
            areaStyle : {
						normal : {
							color : '#389A9E',
							opacity : 0.5
						}
					},
					label : {
						normal : {
							show : true,
							formatter : function(params) {
								return params.name
							}
						}

					},
          data:[10, 12, 21, 54, 260, 830, 710]
        }
    ]
};
myChart.on('click',function(eee){
    console.log(eee)
})