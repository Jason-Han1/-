option = {
     backgroundColor: "#0B1321",
    "tooltip": {
        "trigger": "axis"+"%"
        
    },
    "color": ["#434343", "#666666", "#999999", "#ffc39f", "#f7965c", "#fe7421"],
    "legend": {
        "top": "30",
        "data": ["一线城市", "新一线城市", "二线城市", "三线城市", "四线城市", "五线及以下城市"],
        "itemGap": 10,
        "itemWidth": 20,
        "itemHeight": 12,
       
    },
    "yAxis": [{axisLabel: {
                    show: true,textStyle: { color: '#666666',
                         fontSize:'15' }, 
                   
                },
        "name": "",
        "type": "category",
        "axisTick": {
            "alignWithLabel": true
        },
        "data": ["2020年春节后\n在线教育新\n增用户分布", "2020年春节前\n在线教育新\n增用户分布" ]
    } ,
   ],
    "xAxis": [{ 
axisLabel: {
                    show: true,textStyle: { color: '#666666',
                         fontSize:'12' }, 
                },
        "type": "value",
        "name": ""
    }],
    label: { fontSize:15,
        show: true,
        formatter:function(val){
            return val.data+'%';
        },
    },
    "series": [{
        "data": [5.8, 7.4],
        "name": "一线城市",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [12.4, 16.6],
        "name": "新一线城市",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [12.9, 17.0],
        "name": "二线城市",
        "stack": "one",
        "type": "bar",
        
    }, {
        "data": [29.2, 25.0],
        "name": "三线城市",
        "stack": "one",
        "type": "bar",
       
    }, {
        "data": [24.2, 20.8],
        "name": "四线城市",
        "stack": "one",
        "type": "bar",
        
    }, {
        "data": [15.5, 13.2],
        "name": "五线及以下城市",
        "stack": "one",
        "type": "bar",
        
    }]
}