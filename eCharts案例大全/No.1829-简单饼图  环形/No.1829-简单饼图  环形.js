data = [{
        name: "本科及以上",
        value: 13211
    },
    {
        name: "高中",
        value: 42111
    },
    {
        name: "初中及以下",
        value: 81711
    },
    {
        name: "其他",
        value: 121711
    }
];
objData = array2obj(data, "name");
function array2obj(array,key) {
	var resObj = {};
	for(var i=0;i<array.length;i++){
		resObj[array[i][key]] = array[i];
	}
	return resObj;
}
console.log(objData)
option = {
    "backgroundColor": "#fff",
    "color": [
        "#FF8700",
        "#ffc300",
        "#00e473",
        "#009DFF"
    ],
    "grid": {
        "top": "15%",
        "bottom": "54%",
        "left": "30%",
        "containLabel": false
    },
    
    "series": [
        {
            "name": "学历",
            "type": "pie",
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "65%",
                "57%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 13211,
                    "name": "本科及以上"
                },
                {
                    "value": 245533,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "",
            "type": "pie",
            "silent": true,
            "z": 1,
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "65%",
                "57%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 7.5,
                    "itemStyle": {
                        "color": "#E3F0FF"
                    }
                },
                {
                    "value": 2.5,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "学历",
            "type": "pie",
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "50%",
                "42%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 42111,
                    "name": "高中"
                },
                {
                    "value": 216633,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "",
            "type": "pie",
            "silent": true,
            "z": 1,
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "50%",
                "42%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 7.5,
                    "itemStyle": {
                        "color": "#E3F0FF"
                    }
                },
                {
                    "value": 2.5,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "学历",
            "type": "pie",
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "35%",
                "27%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 81711,
                    "name": "初中及以下"
                },
                {
                    "value": 177033,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "",
            "type": "pie",
            "silent": true,
            "z": 1,
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "35%",
                "27%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 7.5,
                    "itemStyle": {
                        "color": "#E3F0FF"
                    }
                },
                {
                    "value": 2.5,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "学历",
            "type": "pie",
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "20%",
                "12%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 121711,
                    "name": "其他"
                },
                {
                    "value": 137033,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        },
        {
            "name": "",
            "type": "pie",
            "silent": true,
            "z": 1,
            "clockWise": false,
            "hoverAnimation": false,
            "radius": [
                "20%",
                "12%"
            ],
            "center": [
                "30%",
                "50%"
            ],
            "label": {
                "show": false
            },
            "data": [
                {
                    "value": 7.5,
                    "itemStyle": {
                        "color": "#E3F0FF"
                    }
                },
                {
                    "value": 2.5,
                    "name": "",
                    "itemStyle": {
                        "color": "rgba(0,0,0,0)"
                    }
                }
            ]
        }
    ],
     tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}({d}%)"
    },
    legend:{
        show: true,
        top: "center",
        left: '70%',
         formatter: function(name) {
            return   name +   (objData[name].value) + "人"
        },
    }
    
}