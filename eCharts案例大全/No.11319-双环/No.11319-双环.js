var color=['#6acc48','#5a4dff','#2280ff','#6dcff6','#24a5ff'];
	var scaleData = [{
        'name': '一',
        'value': 20
    },
    {
        'name': '二',
        'value': 20
    },
    {
        'name': '三',
        'value': 20
    },
    {
        'name': '四',
        'value': 20
    },
    {
        'name': '五',
        'value': 20
    }
];

var data_name = [];
// for(var i = 0; i < scaleData.length; i++) {
	
// 		data_name.push({
// 		    data_name:scaleData[i].name,
// 		})
// 	}
var rich = {   
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];

for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name:scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor:color[i],
                shadowColor: color[i],
                color:color[i]
            }
        }
    }, {
        value: 2,
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: true,
    radius: ['60%', '63%'],
    center: ['30%', '45%'],
    hoverAnimation: true,
     label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
    itemStyle: {
        normal: {
            label: {
                show: true,
               
                color: '#ddd',
               
                rich: rich
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
},

			{
				type: 'pie',
				data: [100],
				z: 3,
				radius: ['45%', '47%'],
				center: ['30%', '45%'],
				itemStyle: {
					normal: {
						color: '#36729e'
					}
				},
				silent: true,
				labelLine: {
					normal: {
						show: false
					}
				},
				 label: {

                    normal: {
                        show: true,
                        position: 'center',
                        formatter:function (argument) {
                            var html;
                            html='5类';
                            return html;
                        },
                        textStyle:{
                           fontSize: 14,
                            color:'#ffffff'
                        }
                    }
                },

			}
];
var option = {
    tooltip: {
        show: false
    },
    legend: {
				        orient: 'horizontal',
				        width:150,
				        show: true,
				     	top:0,
				     	right:50,
				        icon: 'roundRect',
				        data: data.name,
				       	itemWidth: 10,
        				itemHeight: 10,
        				itemGap:4,
        				fontSize:12,
        				textStyle:{
                            fontSize: 12,//字体大小
                            color: '#ffffff'//字体颜色
                       }
        				
				    },
    toolbox: {
        show: true
    },
    series: seriesObj,
    
}