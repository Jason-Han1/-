option = {
    "series": [{
        "label": {
            "normal": {
                "position": "top",
                "textStyle": {
                    "fontSize": 22
                },
                "show": true
            }
        },

        "type": "graph",
        "edgeSymbol": ['circle', 'arrow'],
        "lineStyle": {
            "normal": {
                "width": 1,
                "curveness": 0
            }
        },
        "data": [{
            "name": "自己",
            "desc": "描述"
        }, {
            "name": "爸爸",
            "desc": "描述"
        }, {
            "name": "妈妈",
            "desc": "描述"

        }, {
            "name": "爷爷",
            "desc": "描述"

        }, {
            "name": "奶奶",
            "desc": "描述"

        }, {
            "name": "外公",
            "desc": "描述"

        }, {
            "name": "外婆",
            "desc": "描述"
        }, {
            "name": "儿子",
            "desc": "描述"
        }, {
            "name": "女儿",
            "desc": "描述"
        }, {
            "name": "孙子",
            "desc": "描述"
        }, {
            "name": "孙女",
            "desc": "描述"
        }, {
            "name": "外孙子",
            "desc": "描述"
        }, {
            "name": "外孙女",
            "desc": "描述"
        }],
        "layout": "force",
        "symbolSize": 25,
        "force": {
            "repulsion": 1000,
            "edgeLength": [150, 300]
        },
        "roam": true,
        "focusNodeAdjacency": true,
        "links": [{
            "value": 20,
            "source": "自己",
            "target": "儿子"
        }, {
            "value": 20,
            "source": "自己",
            "target": "女儿"
        }, {
            "value": 20,
            "source": "儿子",
            "target": "孙子"
        }, {
            "value": 20,
            "source": "儿子",
            "target": "孙女"
        }, {
            "value": 20,
            "source": "女儿",
            "target": "外孙子"
        }, {
            "value": 20,
            "source": "女儿",
            "target": "外孙女"
        }, {
            "value": 10,
            "source": "爷爷",
            "target": "爸爸"
        }, {
            "value": 10,
            "source": "奶奶",
            "target": "爸爸"
        }, {
            "value": 10,
            "source": "外公",
            "target": "妈妈"
        }, {
            "value": 10,
            "source": "外婆",
            "target": "妈妈"
        }, {
            "value": 20,
            "source": "妈妈",
            "target": "自己"
        }, {
            "value": 20,
            "source": "爸爸",
            "target": "自己"
        }, {
            "value": 20,
            "source": "",
            "target": "袁星"
        }]
    }],
    "title": {
        "text": ""
    },

    "tooltip": {
        "formatter": function({
            data
        }) {
            return `${data.name} <br> ${data.desc}`
        }
    },
    "animationEasingUpdate": "quinticInOut",
    "animationDurationUpdate": 1500
};