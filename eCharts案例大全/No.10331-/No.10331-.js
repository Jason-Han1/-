option = {
    backgroundColor:'#fff',
    "tooltip": {},
    "visualMap": [{
        "right": "5%",
        "bottom": "5%",
        "dimension": 1,
        seriesIndex:1,
        "categories": ["强可持续", "弱可持续", "临界状态", "弱不可持续", "强不可持续", "极不可持续"],
        "inRange": {
            "color": ["#1A6CC3", "rgba(37, 143, 255, 0.5)", "#5FADFF", "#98CAFF", "#98CAFF", "#D6EAFF"]
        }
    }],
    "grid": {
        "top": 10,
        "left": 10,
        "right": 10,
        "bottom": 10,
        "containLabel": true
    },
    "series": [{
        "name": "indus",
        z:10,
        "type": "pie",
        "radius": [0, "60%"],
        "center": ["40%", "50%"],
        "label": {
            "position": "inner"
        },
        "labelLine": {
            "show": false
        },
        "itemStyle": {
            "borderColor": "#fff",
            "borderWidth": "1"
        },
        "data": [{
            "name": "制造业",
            "value": [21, "弱可持续"],
            itemStyle:{
                color:'#258FFF'
            }
        }, {
            "name": "电力、热力、燃气及水生产和供应业",
            "value": [1, "弱可持续"],
            itemStyle:{
                color:'#258FFF'
            }
        }]
    }, {
        "name": "indus",
        "type": "pie",
        "radius": [0, "80%"],
        "center": ["40%", "50%"],
        "label": {},
        "itemStyle": {
            // "borderColor": "#fff",
            // "borderWidth": "1"
        },
        "data": [{
            "name": "家具制造业",
            "value": [1, "强可持续"]
        }, {
            "name": "仪器仪表制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "木材加工和木、竹、藤、棕、草制品业",
            "value": [1, "弱可持续"]
        }, {
            "name": "橡胶和塑料制品业",
            "value": [1, "强可持续"]
        }, {
            "name": "汽车制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "纺织业",
            "value": [1, "弱可持续"]
        }, {
            "name": "食品制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "电气机械和器材制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "通用设备制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "金属制品业",
            "value": [1, "弱可持续"]
        }, {
            "name": "专用设备制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "造纸和纸制品业",
            "value": [1, "弱可持续"]
        }, {
            "name": "化学原料和化学制品制造业",
            "value": [1, "强可持续"]
        }, {
            "name": "计算机、通信和其他电子设备制造业",
            "value": [1, "强可持续"]
        }, {
            "name": "酒、饮料和精制茶制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "铁路、船舶、航空航天和其他运输设备制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "其他制造业",
            "value": [1, "弱可持续"]
        }, {
            "name": "农副食品加工业",
            "value": [1, "弱可持续"]
        }, {
            "name": "非金属矿物制品业",
            "value": [1, "弱可持续"]
        }, {
            "name": "纺织服装、服饰业",
            "value": [1, "强可持续"]
        }, {
            "name": "医药制造业",
            "value": [1, "极不可持续"]
        }, {
            "name": "电力、热力生产和供应业",
            "value": [1, "弱可持续"]
        }]
    }]
}