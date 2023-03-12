//  颜色集合
	var colorList = ['#14C7F8', '#15AAF1', '#24B462', '#FFD52E', '#F97638', '#FF2919'];
	
	// 总和
	var total = {
	    value: 168,
	    name: '一类'
	}
	//某一类
	var item = {
	    value: (18/168*100).toFixed(1)+"%",
	    name: '一类'
	}
	var originalData = [{
	        value: 18,
	        name: '一类'
	    }, {
	        value: 60,
	        name: '二类'
	    }, {
	        value: 25,
	        name: "三类"
	    }, {
	        value: 25,
	        name: "四类"
	    }, {
	        value: 35,
	        name: "五类"
	    },
	    {
	        value: 25,
	        name: "六类"
	    }
	];
	echarts.util.each(originalData, function(item, index) {
	    item.itemStyle = {
	        normal: {
	            color: colorList[index]
	        }
	    };
	});
	var option = {
	    backgroundColor:'rgba(0,0,0,0.5)',
	    tooltip: {
	        trigger: 'item',
	        formatter: '{b}: {c} ({d}%)'
	    },
	    title: [{
	        text: item.name,
	        left: '32%',
	        top: '46%',
	        textAlign: 'center',
	        textBaseline: 'middle',
	        textStyle: {
	            color: '#999',
	            fontWeight: 'normal',
	            fontSize: 20
	        }
	    }, {
	        text: item.value,
	        left: '32%',
	        top: '53%',
	        textAlign: 'center',
	        textBaseline: 'middle',
	        textStyle: {
	            color: '#666',
	            fontWeight: 'normal',
	            fontSize: 22
	        }
	    }],
	    legend:{
	        type:'plain',
	        show:true,
	        orient:'vertical',
	        top:'center',
	        right:'16%',
	        height:120,
	        itemGap:28,
	        align:'left',
	        textStyle:{
	            color:'#FFF'
	        },
	        formatter:function(name){
	            var formatName = "";
	            var per = 0;
	            originalData.forEach(function(value, index, array) {
	                var eachName = value.name;
	                var totalValue = 0;
	                if(name==eachName){
	                    totalValue += value.value;
	                    per = (totalValue/total.value * 100).toFixed(1);
	                }
                });
                formatName = name + "  " + per + "%";
                return formatName;
	        },
	        data:['一类','二类','三类','四类','五类','六类'],
	        //data:originalData
	    },
	    series: [{
	    	center:["32%","50%"],
	        hoverAnimation: false, //设置饼图默认的展开样式
	        radius: ['40%', '55%'],
	        name: 'pie',
	        type: 'pie',
	        selectedMode: 'single',
	        selectedOffset: 16, //选中是扇区偏移量
	        clockwise: true,
	        startAngle: 90,
	        label: {
	            normal: {
	                show: false
	            }
	        },
	        labelLine: {
	            normal: {
	                show: false
	            }
	        },
	        itemStyle: {
	            normal: {
	                borderWidth: 1,
	                borderColor: 'rgba(0,0,0,0)',
	            },
	            emphasis: {
	                borderWidth: 0,
	                shadowBlur: 5,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.2)'
	            }
	        },
	        data: originalData
	    },
	    {
        type: 'pie',
        data: [100],
        z: 1,
        radius: ['58%', '58.5%'],
        center: ['32%', '50%'],
        itemStyle: {
            normal: {
                color: 'rgba(29,56,101,1)'
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
                show: false,
                position: 'center',
                textStyle: {
                    fontSize: 14,
                    color: '#000'
                }
            }
        },

    },
    {
        type: 'pie',
        data: [100],
        z: 3,
        radius: ['36%', '36.5%'],
        center: ['32%', '50%'],
        itemStyle: {
            normal: {
                color: 'rgba(29,56,101,1)'
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
                show: false,
                position: 'center',
                textStyle: {
                    fontSize: 14,
                    color: '#000'
                }
            }
        },

    },
	{//内圈
        type: 'pie',
        data: [100],
        z: 3,
        radius: ['28%', '28.5%'],
        center: ['32%', '50%'],
        itemStyle: {
            normal: {
                color: 'rgba(29,56,101,1)'
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
                show: false,
                position: 'center',
                textStyle: {
                    fontSize: 14,
                    color: '#000'
                }
            }
        },

    }]
	};