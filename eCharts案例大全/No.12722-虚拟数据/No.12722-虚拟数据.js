option = {
    title: {
        text: "虚拟数据",
        subtext: "ZBH",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['风云','步惊云','师傅','兄弟','聂风','秦霜']
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '角色联系',
        type: 'graph',
        //layout: 'force',
    layout: 'circular',
    circular: {
                rotateLabel: true
            },
        force: {
            repulsion: 350
        },
        data: [
         {
            "name": "秦霜",
            "symbolSize":35,
            "category": "秦霜",
            "draggable": "true"
        },
        {
            "name": "秦霜(XX1)",
            "symbolSize":15,
            "category": "秦霜",
            "draggable": "true"
        },
        {
            "name": "秦霜(XX2)",
            "symbolSize":15,
            "category": "秦霜",
            "draggable": "true"
        },
        {
            "name": "秦霜(XX3)",
            "symbolSize":15,
            "category": "秦霜",
            "draggable": "true"
        },
        {
            "name": "聂风",
            "symbolSize":30,
            "category": "聂风",
            "draggable": "true"
        },
        {
            "name": "聂风(xxx1)",
            "symbolSize":15,
            "category": "聂风",
            "draggable": "true"
        },
        {
            "name": "聂风(xxx2)",
            "symbolSize":15,
            "category": "聂风",
            "draggable": "true"
        },
         {
            "name": "聂风(xxx3)",
            "symbolSize":15,
            "category": "聂风",
            "draggable": "true"
        },
         {
            "name": "聂风(xxx4)",
            "symbolSize":15,
            "category": "聂风",
            "draggable": "true"
        },
        {
            "name": "兄弟",
            "symbolSize":30,
            "category": "兄弟",
            "draggable": "true"
        },
         {
            "name": "师傅",
            "symbolSize":40,
            "category": "师傅",
            "draggable": "true"
        },
        {
            "name": "风云",
            "symbolSize":60,
            "category": "风云",
            "draggable": "true"
        },
        {
            "name": "步惊云",
            "symbolSize":32,
            "category": "步惊云",
            "draggable": "true"
        },{
            "name": "步惊云父亲(步渊亭)",
            "symbolSize":15,
            "category": "步惊云",
            "draggable": "true"
        },
        {
            "name": "步惊云母亲(神母小青)",
            "symbolSize":15,
            "category": "步惊云",
            "draggable": "true"
        },
        {
            "name": "步惊云妻子(紫凝)",
            "symbolSize":15,
            "category": "步惊云",
            "draggable": "true"
        },
         {
            "name": "步惊云儿子(步天)",
            "symbolSize":15,
            "category": "步惊云",
            "draggable": "true"
        },
        {
            "name": "雄霸",
            "symbolSize":15,
            "category": "师傅",
            "draggable": "true"
        },
        {
            "name": "无名",
            "symbolSize":15,
            "category": "师傅",
            "draggable": "true"
        }
        ],
        links: [
        {
            "source": "兄弟",
            "target": "风云"

        },
        {
            "source": "聂风",
            "target": "兄弟"

        },
        {
            "source": "聂风",
            "target": "风云"

        },
        {
            "source": "秦霜",
            "target": "兄弟"

        },
        {
            "source": "秦霜",
            "target": "风云"

        },
        {
            "source": "步惊云",
            "target": "兄弟"

        },
        {
            "source": "风云",
            "target": "步惊云"

        },
        {
            "source": "步惊云",
            "target": "步惊云父亲(步渊亭)"

        },
        {
            "source": "步惊云",
            "target": "步惊云母亲(神母小青)"

        },
         {
            "source": "步惊云",
            "target": "步惊云妻子(紫凝)"

        },
         {
            "source": "步惊云",
            "target": "步惊云儿子(步天)"

        },
        {
            "source": "步惊云妻子(紫凝)",
            "target": "步惊云儿子(步天)"

        },
        {
            "source": "步惊云",
            "target": "师傅"

        },
        {
            "source": "师傅",
            "target": "风云"

        },
        {
            "source": "雄霸",
            "target": "师傅"

        },
        {
            "source": "无名",
            "target": "师傅"

        },
        {
            "source": "秦霜(XX1)",
            "target": "秦霜"

        },
         {
            "source": "秦霜(XX2)",
            "target": "秦霜"

        },
         {
            "source": "秦霜(XX3)",
            "target": "秦霜"

        },
         {
            "source": "聂风(xxx1)",
            "target": "聂风"

        },
         {
            "source": "聂风(xxx2)",
            "target": "聂风"

        }, {
            "source": "聂风(xxx3)",
            "target": "聂风"

        }, {
            "source": "聂风(xxx4)",
            "target": "聂风"

        },
         {
            "source": "聂风(xxx4)",
            "target": "聂风(xxx1)"

        },
         ],
        categories: [
            
        {
            'name': '步惊云'
        },
        {
            'name': '风云'
        },
        {
            'name': '师傅'
        },
        {
            'name': '兄弟'
        },
        {
            'name': '聂风'
        },
        {
            'name': '秦霜'
        },
        ],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};