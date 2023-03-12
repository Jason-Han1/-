option = {
    "tooltip": {
        "formatter": function(param) {
            if (param.dataType === 'edge') {
                return param.data.category + ': ' + param.data.target;
            }
            return param.data.category + ': ' + param.data.name;
        }
    },
    "title": {
        "text": ""
    },
    "legend": [{
        "data": ["机构名称", "统一社会信用代码", "机构类型", "机构联系电话", "注册地址", "核准机构", "核准日期", "法人代表身份证", "法人代表"]
    }],
    "series": [{
        "top": 150,
        "label": {
            "normal": {
                "show": true,
                "position": "inside",
                "textStyle": {
                    "fontSize": 18
                }
            }
        },
        "roam": true,
        "edgeLabel": {
            "normal": {
                "show": true,
                "formatter": function(param) {
                    return param.data.category;
                },
                "textStyle": {
                    "fontSize": 16
                }
            }
        },
        "bottom": 80,
        "data": [{
            "name": "株洲县自来水有限公司",
            "draggable": true,
            "category": "机构名称"
        }, {
            "name": "91430221184520528T",
            "draggable": true,
            "category": "统一社会信用代码"
        }, {
            "name": "有限责任公司",
            "draggable": true,
            "category": "机构类型"
        }, {
            "name": "0731-27616699",
            "draggable": true,
            "category": "机构联系电话"
        }, {
            "name": "株洲县渌口镇向阳岭31号",
            "draggable": true,
            "category": "注册地址"
        }, {
            "name": "株洲县食品药品工商质量监督管理局",
            "draggable": true,
            "symbolSize": [350, 30],
            "category": "核准机构"
        }, {
            "name": "1986年06月17日 ",
            "draggable": true,
            "category": "核准日期"
        }, {
            "name": "654200199308087867",
            "draggable": true,
            "category": "法人代表身份证"
        }, {
            "name": "乔乐蕊",
            "symbolSize": [150, 30],
            "draggable": true,
            "label": {
                "normal": {
                    "textBorderWidth": 3,
                    "textBorderColor": 'blue',
                }
            },
            "category": "法人代表"
        }],
        "categories": [{
            "name": "机构名称"
        }, {
            "name": "统一社会信用代码"
        }, {
            "name": "机构类型"
        }, {
            "name": "机构联系电话"
        }, {
            "name": "注册地址"
        }, {
            "name": "核准机构"
        }, {
            "name": "核准日期"
        }, {
            "name": "法人代表身份证"
        }, {
            "name": "法人代表"
        }],
        "type": "graph",
        "focusNodeAdjacency": true,
        "force": {
            "repulsion": 1000,
            "edgeLength": [150, 300]
        },
        "layout": "force",
        "symbolSize": [240, 30],
        "links": [{
            "target": "91430221184520528T",
            "source": "株洲县自来水有限公司",
            "category": "统一社会信用代码"
        }, {
            "target": "有限责任公司",
            "source": "株洲县自来水有限公司",
            "category": "机构类型"
        }, {
            "target": "0731-27616699",
            "source": "株洲县自来水有限公司",
            "category": "机构联系电话"
        }, {
            "target": "株洲县渌口镇向阳岭31号",
            "source": "株洲县自来水有限公司",
            "category": "注册地址"
        }, {
            "target": "株洲县食品药品工商质量监督管理局",
            "source": "株洲县自来水有限公司",
            "category": "核准机构"
        }, {
            "target": "1986年06月17日 ",
            "source": "株洲县自来水有限公司",
            "category": "核准日期"
        }, {
            "target": "654200199308087867",
            "source": "株洲县自来水有限公司",
            "category": "法人代表身份证"
        }, {
            "target": "乔乐蕊",
            "source": "株洲县自来水有限公司",
            "category": "法人代表"
        }],
        "symbol": "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
        "lineStyle": {
            "normal": {
                "opacity": 0.9,
                "width": 1,
                "curveness": 0.1
            }
        }
    }],
    "animationEasingUpdate": "quinticInOut",
    "animationDurationUpdate": 1500
};