option = {
	"color": ["#707eec", "#bd8def", "#fda897", "#8ac3f7", "#f9cb9c", "#b4a7d6", "#a4c2f4"],
	"title": {
		"show": false,
		"text": "折线图",
		"textStyle": {
			"color": "#434343",
			"fontFamily": "微软雅黑",
			"fontSize": "14",
			"fontWeight": "normal",
			"fontStyle": "normal"
		},
		"link": "",
		"IsFilter": false,
		"linkshow": false,
		"target": "blank",
		"padding": [8, 20000, 8, 20000],
		"backgroundColor": "#ffffff",
		"bordershow": true,
		"borderColor": "#ffffff",
		"borderWidth": "1",
		"borderStyle": "solid",
		"x": "center",
		"y": "top"
	},
	"tooltip": {
		"confine": true,
		"trigger": "axis"
	},
	"legend": {
		"show": true,
		"position": "bottom-center",
		"orient": "horizontal",
		"x": "center",
		"y": "bottom",
		"itemGap": 5,
		"itemHeight": 8,
		"itemWidth": 12,
		"type": "scroll",
		"textStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"data": ["利润", "用户数", "成本"]
	},
	"dataZoom": [{
		"type": "slider",
		"show": false,
		"height": 25,
		"xAxisIndex": 0,
		"filterMode": "filter",
		"start": 0,
		"end": 100,
		"bottom": "20",
		"textStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		}
	}],
	"grid": {
		"left": "20px",
		"top": "30px",
		"right": "20px",
		"bottom": "30px",
		"containLabel": true
	},
	"xAxis": [{
		"show": true,
		"name": "",
		"nameTextStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"boundaryGap": true,
		"nameGap": 20,
		"nameLocation": "end",
		"type": "category",
		"splitLine": {
			"show": false,
			"lineStyle": {
				"type": "dotted",
				"color": "#ececec"
			}
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#ececec"
			}
		},
		"axisTick": {
			"show": false
		},
		"axisLabel": {
			"show": true,
			"rotate": 0,
			"interval": "auto",
			"textStyle": {
				"color": "#666666",
				"fontFamily": "微软雅黑",
				"fontSize": "12",
				"fontStyle": "normal",
				"fontWeight": "normal"
			}
		},
		"data": ["西南", "西北", "华南", "华北", "华东", "华中", "东北"]
	}],
	"yAxis": [{
		"show": true,
		"yAxisshow": true,
		"inverse": false,
		"name": "",
		"rename": "",
		"min": null,
		"position": "left",
		"formatter": "0.00",
		"unit": "ge",
		"unitName": "",
		"nameTextStyle": {
			"color": "#666666",
			"fontFamily": "微软雅黑",
			"fontSize": "12",
			"fontStyle": "normal",
			"fontWeight": "normal"
		},
		"nameGap": 10,
		"nameLocation": "end",
		"type": "value",
		"splitLine": {
			"show": true,
			"lineStyle": {
				"type": "dotted",
				"color": "#ececec"
			}
		},
		"axisLine": {
			"show": true,
			"lineStyle": {
				"color": "#ececec"
			}
		},
		"axisTick": {
			"show": false
		},
		"axisLabel": {
			"show": true,
			"textStyle": {
				"color": "#666666",
				"fontFamily": "微软雅黑",
				"fontSize": "12",
				"fontStyle": "normal",
				"fontWeight": "normal"
			}
		}
	}],
	"series": [{
		"id": "fd38de85-9e24-5d9a-4b84-8d7eb1e41f1a",
		"name": "利润",
		"type": "line",
		"stack": "",
		"symbolSize": 10,
		"showAllSymbol": true,
		"smooth": true,
		"step": false,
		"symbol": "circle",
		"yAxisIndex": 0,
		"label": {
			"normal": {
				"id": "fd38de85-9e24-5d9a-4b84-8d7eb1e41f1a",
				"show": false,
				"CompanyShow": false,
				"textStyle": {
					"color": "#666666",
					"fontFamily": "微软雅黑",
					"fontSize": "12",
					"fontStyle": "normal",
					"fontWeight": "normal"
				},
				"position": "top"
			}
		},
		"lineStyle": {
			"normal": {
				"width": 2
			}
		},
		"itemStyle": {
			"normal": {
				"show": true,
				"color": {
					"x": 1,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#707eec"
					}, {
						"offset": 1,
						"color": "#707eec"
					}]
				},
				"borderWidth": "2",
				"borderColor": "#fff"
			}
		},
		"data": [{
			"value": "71273157.00",
			"results": {
				"d0": "西南",
				"m0": "71273157.00",
				"m1": "67221131.00",
				"m2": 2372992
			}
		}, {
			"value": "54168888.00",
			"results": {
				"d0": "西北",
				"m0": "54168888.00",
				"m1": "48512796.00",
				"m2": 32853223060
			}
		}, {
			"value": "32403383.00",
			"results": {
				"d0": "华南",
				"m0": "32403383.00",
				"m1": "126075415.00",
				"m2": 1251802008
			}
		}, {
			"value": "57778558.00",
			"results": {
				"d0": "华北",
				"m0": "57778558.00",
				"m1": "52016911.00",
				"m2": 2359975161
			}
		}, {
			"value": "80183085.00",
			"results": {
				"d0": "华东",
				"m0": "80183085.00",
				"m1": "68067762.00",
				"m2": 3139276549
			}
		}, {
			"value": "31015095.00",
			"results": {
				"d0": "华中",
				"m0": "31015095.00",
				"m1": "24240016.00",
				"m2": 1248929213
			}
		}, {
			"value": "33291057.00",
			"results": {
				"d0": "东北",
				"m0": "33291057.00",
				"m1": "23551473.00",
				"m2": 449332458
			}
		}],
		"markPoint": null,
		"markLine": null
	}, {
		"id": "9035608c-d0cf-ff1b-613b-9da3752f6045",
		"name": "用户数",
		"type": "line",
		"stack": "",
		"symbolSize": 10,
		"showAllSymbol": true,
		"smooth": true,
		"step": false,
		"symbol": "circle",
		"yAxisIndex": 0,
		"label": {
			"normal": {
				"id": "9035608c-d0cf-ff1b-613b-9da3752f6045",
				"show": false,
				"CompanyShow": false,
				"textStyle": {
					"color": "#666666",
					"fontFamily": "微软雅黑",
					"fontSize": "12",
					"fontStyle": "normal",
					"fontWeight": "normal"
				},
				"position": "top"
			}
		},
		"lineStyle": {
			"normal": {
				"width": 2
			}
		},
		"itemStyle": {
			"normal": {
				"show": true,
				"color": {
					"x": 1,
					"y": 0,
					"x2": 0,
					"y2": 1,
					"type": "linear",
					"global": false,
					"colorStops": [{
						"offset": 0,
						"color": "#bd8def"
					}, {
						"offset": 1,
						"color": "#bd8def"
					}]
				},
				"borderWidth": "2",
				"borderColor": "#fff"
			}
		},
		"data": [{
			"value": "67221131.00",
			"results": {
				"d0": "西南",
				"m0": "71273157.00",
				"m1": "67221131.00",
				"m2": 2372532992
			}
		}, {
			"value": "48512796.00",
			"results": {
				"d0": "西北",
				"m0": "54168888.00",
				"m1": "48512796.00",
				"m2": 32853223060
			}
		}, {
			"value": "126075415.00",
			"results": {
				"d0": "华南",
				"m0": "32403383.00",
				"m1": "126075415.00",
				"m2": 1251802008
			}
		}, {
			"value": "52016911.00",
			"results": {
				"d0": "华北",
				"m0": "57778558.00",
				"m1": "52016911.00",
				"m2": 2359975161
			}
		}, {
			"value": "68067762.00",
			"results": {
				"d0": "华东",
				"m0": "80183085.00",
				"m1": "68067762.00",
				"m2": 3139276549
			}
		}, {
			"value": "24240016.00",
			"results": {
				"d0": "华中",
				"m0": "31015095.00",
				"m1": "24240016.00",
				"m2": 1248929213
			}
		}, {
			"value": "23551473.00",
			"results": {
				"d0": "东北",
				"m0": "33291057.00",
				"m1": "23551473.00",
				"m2": 449332458
			}
		}],
		"markPoint": null,
		"markLine": null
	}]
}

function  itemStyleshow(){
    
    $.each(option.series, function(i,series){
        //利润大于用户数
      if(series.id=="fd38de85-9e24-5d9a-4b84-8d7eb1e41f1a"){
         $.each(series.data,function(i,data){
             if(Number(data.value)>Number(data.results["m1"])){
                 data.itemStyle={
                     color:"red"
                 }
             }
         }) 
      }  
      //用户数大于利润
      if(series.id=="9035608c-d0cf-ff1b-613b-9da3752f6045"){
         $.each(series.data,function(i,data){
             if(Number(data.value)>Number(data.results["m0"])){
                 data.symbolSize=20;
                 data.itemStyle={
                     color:"blue",
                     
                 }
             }
         }) 
      }
              //利润大于成本--第三方数据
      if(series.id=="fd38de85-9e24-5d9a-4b84-8d7eb1e41f1a"){
         $.each(series.data,function(i,data){
             if(Number(data.value)>Number(data.results["m2"])){
                 data.symbolSize=20;
                 data.itemStyle={
                     color:"green"
                 }
             }
         }) 
      }  
    })
}


itemStyleshow()





    myChart.setOption(option);