option = {
    backgroundColor:"#000",
    "tooltip": {
        "trigger": "item", 
        "formatter": "{b} : {c} ({d}%)"
    },
    "color": ["#8fc31f", "#f35833", "#00ccff", "#ffcc00"],
    "legend": {
      "height": 140,
        		"type": "scroll",
				itemWidth: 6,
				itemHeight: 6,
				orient: 'vertical',
				top: "10",
				right: "1%",
				"pageTextStyle": {
		            "color": "#fff"
		        },
				formatter: function (name) {
					return (name.length > 6 ? (name.slice(0,6)+"...") : name ); 
				},
				textStyle: {
					color: '#f2f2f2',
					fontSize: 12,

				},
				icon: 'roundRect',
        "data": [{
            "name": "高法失信111111111111被执行人",
            "value": 107913
        }, {
            "name": "工商部门严重违法失信1",
            "value": 999
        }, {
            "name": "欠税公告1",
            "value": 910
        }, {
            "name": "工商部门严重违法失信",
            "value": 841
        }, {
            "name": "海关失信企业名单",
            "value": 333
        }, {
            "name": "重大税收违法事件",
            "value": 196
        }, {
            "name": "电子商务领域严重失信企业",
            "value": 74
        }]
    },
    "series": [{
        "type": "pie",
        "radius": "55%",
        "center": ["70%", "50%"],
        "data": [{
            "name": "高法失信被执行人",
            "value": 107913
        }, {
            "name": "工商部门严重违法失信1",
            "value": 999
        }, {
            "name": "欠税公告1",
            "value": 910
        }, {
            "name": "工商部门严重违法失信",
            "value": 841
        }, {
            "name": "海关失信企业名单",
            "value": 333
        }, {
            "name": "重大税收违法事件",
            "value": 196
        }, {
            "name": "电子商务领域严重失信企业",
            "value": 74
        }],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false,
                    "formatter": "{b} : {c} ({d}%)"
                }
            },
            "labelLine": {
                "show": false
            }
        }
    }]
}