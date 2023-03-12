var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];

// var girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];

var bins = ecStat.histogram(girth);

var option = {
    title: {
        text: 'Girths of Black Cherry Trees',
        left: 'center',
        top: 20
    },
    color: ['rgb(25, 183, 207)'],
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        scale: true, //这个一定要设，不然barWidth和bins对应不上
    }],
    yAxis: [{
        type: 'value',
    }],
    series: [{
        name: 'height',
        type: 'bar',
        barWidth: '99.3%',
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                formatter: function(params) {
                    return params.value[1];
                }
            }
        },
        
                markLine : {
							symbol:"none",               //去掉警戒线最后面的箭头
							label:{
								position:"end"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
							},
                            data : [{
								silent:false,             //鼠标悬停事件  true没有，false有
								lineStyle:{               //警戒线的样式  ，虚实  颜色
                                    type:"solid",
									color:"#FA3934",
								},
								yAxis:9         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
							},{
								silent:false,            
								lineStyle:{               
                                    type:"solid",
									color:"blue",
								},
								yAxis:10        
							}]
                        } , 
        data: bins.data
    }]
};