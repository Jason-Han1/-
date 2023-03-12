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
        "edgeLabel": {
            "normal": {
                "formatter": function(param) {
                    return param.data.category;
                },
                "show": true,
                "textStyle": {
                    "fontSize": 20
                }
            }
        },
        "type": "graph",
        "lineStyle": {
            "normal": {
                "opacity": 0.9,
                "width": 1,
                "curveness": 0
            }
        },
        "data": [{
            "category": "姓名",
            "label": {
                "normal": {
                    "position": "inside",
                    "show": true
                }
            },
            "draggable": true,
            "name": "乔乐蕊",
            "symbol": "circle",
            "symbolSize": 80
        }, {
            "category": "户号",
            "label": {
                "normal": {
                    "position": "inside",
                    "show": true
                }
            },
            "draggable": true,
            "name": "101399",
            "symbol": "roundRect",
            "symbolSize": [100, 60]
        }, {
            "category": "身份证",
            "draggable": true,
            "name": "654200199308087867",
            "symbol": "roundRect"
        }, {
            "category": "性别",
            "draggable": true,
            "name": "女性",
            "symbol": "triangle"
        }, {
            "category": "年龄",
            "draggable": true,
            "name": "24",
            "symbol": "diamond"
        }, {
            "category": "政治面貌",
            "draggable": true,
            "name": "党员",
            "symbol": "pin"
        }, {
            "category": "电话",
            "draggable": true,
            "name": "13138876645",
            "symbol": "arrow"
        }, {
            "category": "户籍地名称",
            "draggable": true,
            "name": "湖南省株洲县",
            "symbol": "circle"
        }, {
            "category": "户籍门（楼）详址",
            "draggable": true,
            "name": "梅苑路42号",
            "symbol": "rect"
        }, {
            "category": "家庭成员",
            "label": {
                "normal": {
                    "color":'white',
                    "textBorderWidth": 3,
                    "textBorderColor": 'blue',
                }
            },
            "draggable": true,
            "name": "郎芷波"
        }, {
            "category": "家庭成员",
            "label": {
                "normal": {
                    "color":'white',
                    "textBorderWidth": 3,
                    "textBorderColor": 'blue',
                }
            },
            "draggable": true,
            "name": "袁星"
        }],
        "categories": [{
            "name": "姓名"
        }, {
            "name": "户号"
        }, {
            "name": "身份证"
        }, {
            "name": "性别"
        }, {
            "name": "年龄"
        }, {
            "name": "政治面貌"
        }, {
            "name": "电话"
        }, {
            "name": "户籍地名称"
        }, {
            "name": "户籍门（楼）详址"
        }, {
            "name": "家庭成员"
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
            "category": "户号",
            "source": "乔乐蕊",
            "target": "101399"
        }, {
            "value": 20,
            "category": "身份证",
            "source": "乔乐蕊",
            "target": "654200199308087867"
        }, {
            "value": 20,
            "category": "性别",
            "source": "乔乐蕊",
            "target": "女性"
        }, {
            "value": 20,
            "category": "年龄",
            "source": "乔乐蕊",
            "target": "24"
        }, {
            "value": 20,
            "category": "政治面貌",
            "source": "乔乐蕊",
            "target": "党员"
        }, {
            "value": 20,
            "category": "电话",
            "source": "乔乐蕊",
            "target": "13138876645"
        }, {
            "value": 15,
            "category": "户籍地名称",
            "source": "乔乐蕊",
            "target": "湖南省株洲县"
        }, {
            "value": 10,
            "category": "户籍门（楼）详址",
            "source": "乔乐蕊",
            "target": "梅苑路42号"
        }, {
            "value": 20,
            "category": "家庭成员",
            "source": "101399",
            "target": "郎芷波"
        }, {
            "value": 20,
            "category": "家庭成员",
            "source": "101399",
            "target": "袁星"
        }]
    }],
    "title": {
        "text": ""
    },
    "legend": [{
        "data": ["姓名", "户号", "身份证", "性别", "年龄", "政治面貌", "电话", "户籍地名称", "户籍门（楼）详址", "家庭成员"]
    }],
    "tooltip": {
        "formatter": function(param) {
            if (param.dataType === 'edge') {
                return param.data.category + ': ' + param.data.target;
            }
            return param.data.category + ': ' + param.data.name;
        }
    },
    "animationEasingUpdate": "quinticInOut",
    "animationDurationUpdate": 1500
};