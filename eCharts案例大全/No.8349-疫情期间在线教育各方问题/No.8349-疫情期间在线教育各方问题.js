option = {color: ['#c4895c','#6987b8', '#f9a5c7', '#f2a498', '#91c7ae','#fcd684'],
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
        "data": ["授课教师",  "家长",  "在线教育机构","互联网企业",  "学生"]
    }],
    "series": [{
        "top": 150,
        "label": {
            "normal": {
                "show": true,
                "position": "inside",
                "textStyle": {
                    "fontSize": 15
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
            "name": "疫情期间在线\n教育各方问题",
            "draggable": true,
            "category": "机构名称"
        }, {
            "name": "与学生互动少授课效果未知\n教学效果难以最大程度呈现\n缺少适应网络教学的优质习题",
            "draggable": true,
            "category": "授课教师"
        }, {
            "name":"准备设备下载打印资料相当繁琐\n也没办法时刻监督孩子\n家里不止一个孩子还要额外支出",
            "draggable": true,
            "category":  "家长"
        }, {
            "name": "免费公益课冲击正价课\n为了保证课程供应质量存在缩水",
            "draggable": true,
            "category":  "在线教育机构"
        }, {
            "name":  "网络直播文化与教学要求存在不适配性\n无辜躺枪相关应用评分暴跌\n用户量猛增系统承受面临巨大挑战",
            "draggable": true,
            "category": "互联网企业"
        }, {
            "name": "不同老师使用平台都不同\n要反复注册加群确认信息\n环境太放松不容易约束自己",
            "draggable": true,
            "category":"学生"
        }, ],
        
        
        "categories": [{
            "name": "机构名称"
        }, {
            "name": "授课教师"
        }, {
            "name":  "家长"
        }, {
            "name":  "在线教育机构"
        }, {
            "name": "互联网企业"
        }, {
            "name": "学生"
        },],
        "type": "graph",
        "focusNodeAdjacency": true,
        "force": {
            "repulsion": 1000,
            "edgeLength": [150, 300]
        },
        "layout": "force",
        "symbolSize": [265,50],
        "links": [{
            "target": "与学生互动少授课效果未知\n教学效果难以最大程度呈现\n缺少适应网络教学的优质习题",
            "source": "疫情期间在线\n教育各方问题",
            "category": "授课教师"
        }, {
            "target":"准备设备下载打印资料相当繁琐\n也没办法时刻监督孩子\n家里不止一个孩子还要额外支出",
            "source": "疫情期间在线\n教育各方问题",
            "category":  "家长"
        }, {
            "target": "免费公益课冲击正价课\n为了保证课程供应质量存在缩水",
            "source": "疫情期间在线\n教育各方问题",
            "category": "在线教育机构"
        }, {
            "target":  "网络直播文化与教学要求存在不适配性\n无辜躺枪相关应用评分暴跌\n用户量猛增系统承受面临巨大挑战",
            "source": "疫情期间在线\n教育各方问题",
            "category": "互联网企业"
        }, {
            "target": "不同老师使用平台都不同\n要反复注册加群确认信息\n环境太放松不容易约束自己",
            "source": "疫情期间在线\n教育各方问题",
            "category": "学生"
        }, ],
        "symbol": "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
        "lineStyle": {
            "normal": {
                "opacity": 0.8,
                "width": 2,
                "curveness": 0.2
            }
        }
    }],
    "animationEasingUpdate": "quinticInOut",
    "animationDurationUpdate": 1500
};