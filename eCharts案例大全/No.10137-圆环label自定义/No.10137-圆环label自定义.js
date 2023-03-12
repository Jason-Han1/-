var setLabel = function(data){
    var opts = [];
    for(var i=0;i<data.length;i++){
        var item = {};
        item.name = data[i].name;
        item.value = data[i].value;
        item.itemStyle = {
            color:data[i].color
        }
        item.label = {
            formatter: [
                '{d|'+item.value+'}',
                '{e|.} {b|'+item.name+'}'
            ].join('\n'),
            rich: {
                d:{
                    fontWeight:'bold',
                    color:'#666',
                    fontSize:14
                },
                e: {
                    width:8,
                    height:8,
                    borderRadius:8,
                    backgroundColor:data[i].color,
                    verticalAlign:'middle'
                },
                b:{
                    color:'#777',
                    padding:[0,0,3,2]
                }
            }
        }
        
        opts.push(item)
    }
    return opts;
}
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        
        {
            name: '姓名',
            type: 'pie',
            radius : ['50%','65%'],
            center: ['50%', '50%'],
            label:{
                lineHeight:20,
                align:'left'
            },
            labelLine:{
                show:false
            },
            data: setLabel([
                {value:234, name:'联盟广告',color:'#ef4764'},
                {value:135, name:'视频广告',color:'#facc27'},
                {value:348, name:'搜索引擎',color:'#3196fa'},
                {value:148, name:'搜索引擎',color:'#2ec259'}
            ]),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
				color: ['#fff'],
				name: '',
				type: 'pie',
				radius:'50%',
				center: ['50%', '50%'],
				hoverAnimation: false,
				tooltip: {
					show: false
				},
				label: {
					show: true,
					color: '#000',
					position: 'center',
					formatter: [
					    '{name|'+400+'}',
						'{a|' + '涉水企业' + '}'
					].join('\n'),
					rich: {
					    name:{
					      fontSize:20,
					      fontWeight:500,
					      color:'#666'
					    },
						a: {
							color: '#999',
							fontSize: 16
						}
					},
					textStyle: {
						baseline: 'middle'
					}
				},
				data: [1]
			}
    ]
};