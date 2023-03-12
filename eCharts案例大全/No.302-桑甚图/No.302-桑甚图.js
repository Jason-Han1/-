option = {
    color:['#7BC074', '#709EF1', '#F59363'],
        series: [
            {
                type: 'sankey',
                right: '5%',
                data:[
    //左点
    {name: '外卖'}, 
    {name: '网约车'},
    {name: '家政保洁'},
    //右点
    {name: '外卖 ',label:{position:'left'}},
    {name: '网约车 ',label:{position:'left'}},
    {name: '家政保洁 ',label:{position:'left'}},   
],
                links: [
    {source: '外卖', target: '外卖 ', value: 8},
    {source: '外卖', target: '网约车 ', value: 2},
    {source: '外卖', target: '家政保洁 ', value: 2},
    {source: '网约车', target: '外卖 ', value: 2},
    {source: '网约车', target: '网约车 ', value: 4},
    {source: '网约车', target: '家政保洁 ', value: 2},
    {source: '家政保洁', target: '外卖 ', value: 1},
    {source: '家政保洁', target: '网约车 ', value: 1},
    {source: '家政保洁', target: '家政保洁 ', value: 2},
    ],
                label: {
				    normal:{
					    color:"rgba(9, 27, 61, 0.6)",
					    fontSize:14,
					    fontWeight: '400',
				    },
				},
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa',
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'gradient',
                        borderColor: 'black',
                        borderWidth: 0,
                        opacity:0.3,
                        curveness: 0.6
                    }
                }
            }
        ]
    }




