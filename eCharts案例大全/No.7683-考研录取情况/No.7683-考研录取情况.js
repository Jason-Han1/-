myChart.setOption(option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "backgroundColor": "#ffffff",
    "color": [
        "#000000",
        "#61a0a8",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#1d953f"
    ],
    "series": [{
        "type": "sankey",
        "name": "sankey",
        "data": [{
                "name": "进入复试（85人）",
                "depth": 0,
                "itemStyle": {color: '#9cbbc9'}

            },{
                "name": "01、03复试(20人)",
                "depth": 1,
                "itemStyle": {color: '#dc9f68'}
            },{
                "name": "02复试(12人)",
                "depth": 1,
                "itemStyle": {color: '#FF8C00'}
                
            },{
                "name": "04复试(13人)",
                "depth": 1,"itemStyle": {color: '#efac58'}
            },{
                "name": "05复试(7人)",
                "depth": 1,
                 "itemStyle": {color: '#fbcf7a'}
            },{
                "name": "06、07复试(21人)",
                "depth": 1,
                "itemStyle": {color: '#f8d08b'}
            },{
                "name": "08、09复试(9人)",
                "depth": 1,
                "itemStyle": {color: '#fab76f'}
            },{
                "name": "城叉复试(3人)",
                "depth": 1,
                "itemStyle": {color: '#ffebbb'}
                
            },
            //录取
            {
                "name": "01、03录取(22人)",
                "depth": 2,
                "itemStyle": {color: '#da505f'}
            },{
                "name": "02录取(7人)",
                "depth": 2,
                "itemStyle": {color: '#d12135'}
            },{
                "name": "04、05录取(15人)",
                "depth": 2,
                "itemStyle": {color: '#ff958e'}
            },{
                "name": "06、07录取(14人)",
                "depth": 2,
                "itemStyle": {color: '#ff8078'}
            },{
                "name": "08、09录取(7人)",
                "depth": 2,
                "itemStyle": {color: '#ec1a33'}
            },{
                "name": "城叉录取(7人)",
                "depth": 2,
                "itemStyle": {color: '#f15f6a'}
            },{
                "name": "磁浮录取(11人)",
                "depth": 2,
                "itemStyle": {color: '#ef3f49'}
            },
            //最后
            {
                "name": "录取(83人)",
                "depth": 3,
                "itemStyle": {color: '#739c92'}
            },{
                "name": "刷(2人)（均为缺考）",
                "depth": 3,
                "itemStyle": {color: '#aacbc1'}
            }
        ],
        "links": [
            {
                "source":"01、03复试(20人)",
                "target":  "01、03录取(22人)",
              "value": 20
            },
            {
                "source":"02复试(12人)",
                "target":  "01、03录取(22人)",
              "value": 2
            },
            {
                "source":"02复试(12人)",
                "target":  "磁浮录取(11人)",
              "value": 2
            },
            {
                "source":"02复试(12人)",
                "target":  "02录取(7人)",
              "value": 7
            },
            {
                "source":"04复试(13人)",
                "target":  "04、05录取(15人)",
              "value": 11
            },{
                "source":"04复试(13人)",
                "target":  "磁浮录取(11人)",
              "value": 1
            },
            {
                "source":"05复试(7人)",
                "target":  "磁浮录取(11人)",
              "value": 3
            },{
                "source":"05复试(7人)",
                "target":  "04、05录取(15人)",
              "value": 4
            },{
                "source":"06、07复试(21人)",
                "target":  "06、07录取(14人)",
              "value": 14
            },{
                "source":"06、07复试(21人)",
                "target":  "城叉录取(7人)",
              "value": 4
            },{
                "source":"06、07复试(21人)",
                "target":  "磁浮录取(11人)",
              "value": 3
            },
            {
                "source":"08、09复试(9人)",
                "target":  "08、09录取(7人)",
              "value": 7
            },{
                "source":"08、09复试(9人)",
                "target":  "磁浮录取(11人)",
              "value": 2
            },{
                "source":"城叉复试(3人)",
                "target":  "城叉录取(7人)",
              "value": 3
            },
            
            
            
            {
                "source": "01、03录取(22人)",
                "target": "录取(83人)",
              "value": 22
            },{
                "source": "02录取(7人)",
                "target": "录取(83人)",
              "value": 7
            },{
                "source": "04、05录取(15人)",
                "target": "录取(83人)",
              "value": 15
            },{
                "source": "06、07录取(14人)",
                "target": "录取(83人)",
              "value": 14
            },{
                "source": "08、09录取(7人)",
                "target": "录取(83人)",
              "value": 7
            },{
                "source": "城叉录取(7人)",
                "target": "录取(83人)",
              "value": 7
            },{
                "source": "磁浮录取(11人)",
                "target": "录取(83人)",
              "value": 11
            },

            {
                "source": "04复试(13人)",
                "target": "刷(2人)（均为缺考）",
                "value": 1
            },
            
            {
                "source": "02复试(12人)",
                "target": "刷(2人)（均为缺考）",
                "value": 1
            },{
                "source": "02录取(7人)",
                "target": "录取(83人)",
                "value": 7
            },
            {
                "source": "进入复试（85人）",
                "target": "01、03复试(20人)",
                "value": 20
            },{
                "source": "进入复试（85人）",
                "target": "02复试(12人)",
                "value": 12
            },{
                "source": "进入复试（85人）",
                "target": "04复试(13人)",
                "value": 13
            },{
                "source": "进入复试（85人）",
                "target": "05复试(7人)",
                "value": 7
            },{
                "source": "进入复试（85人）",
                "target": "06、07复试(21人)",
                "value": 21
            },{
                "source": "进入复试（85人）",
                "target": "08、09复试(9人)",
                "value": 9
            },{
                "source": "进入复试（85人）",
                "target": "城叉复试(3人)",
                "value": 3
            }
        ],
        "left": "5%",
        "top": "5%",
        "right": "15%",
        "bottom": "25%",
        "nodeWidth":20 ,
        "nodeGap": 10,
        "nodeAlign": "justify",
        "layoutIterations": 0,
        "orient": "horizontal",
        "draggable":true,
        "focusNodeAdjacency": false,
        "label": {
            "show": true,
            "fontSize": 25,
            "position": "right",
            "fontWeight": "bolder",
            "fontFamily": "Arial",
            "margin": 8
        },
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": '#fff'
        },
        
        "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 0.2,
            "curveness": 0.6,
            "type": "solid",
            "color": "source",
            

        }
    }],
    "legend": [{
        "data": [
            "sankey"
        ],
        "selected": {
            "sankey": true
        },
        "show": false,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 12
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        formatter: function(params) {
            return params.name;
        }
    },
    "title": [{
        "text": "纯考研（不算夏令营）_by小旭学长",
        "padding": 20,
        "itemGap": 10,
        textStyle: {
            fontSize: 30
        },
        top: 'top',
        left: '20px'
    },
    {
        "text": "交通运输工程专业：\n01-道路与机场工程\n02-城市轨道与铁道工程\n04-智能交通系统工程\n05-轨道交通控制与安全\n06-交通规划、设计与管理\n07-交通数据分析\n08-轨道交通设计、运营管理与多式联运\n09-物流系统规划与运作管理\n城市交通专业：\n城叉-城市交通交叉学科（只有学硕/博士+四平路)",
        "padding": 20,
        "itemGap": 10,
        textStyle: {
            fontSize: 20
        },
        top: 'bottom',
        left: '10px'
    },{
        "text": "注：城叉进复试6人，其中3人是夏令营，不计入",
        "padding": 20,
        "itemGap": 10,
        textStyle: {
            fontSize: 20
        },
        top: 'bottom',
        right: '20px'
    }]
});