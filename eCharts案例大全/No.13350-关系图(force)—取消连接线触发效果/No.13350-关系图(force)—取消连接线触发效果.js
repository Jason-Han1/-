var colors = ['#9C27B0','#FF4081'];

var datas = [{
            name: '前端基础技能',
        }, {
            name: 'HTML',
        }, {
            name: 'CSS',
        }, {
            name: 'JS',
        }, {
            name: 'JQuery',
        }, {
            name: 'Sass',
        }, {
            name: 'Git',
        }, {
            name: 'Bootstrap',
        }
];

for(var i = 0; i<datas.length; i++){
    if(i===0){
        datas[i].itemStyle = {
            normal: {
                color: colors[0]
            }
        };
    }else{
        datas[i].itemStyle = {
            normal: {
                color: colors[1]
            }
        };
    }
}

option = {
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 80,
        focusNodeAdjacency: true,
        roam: true,
        draggable: false,
        force: {
            repulsion: 2000,
            layoutAnimation:false
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
            },
            emphasis:{
                color: '#ec407a'
            }
        },
        data: datas,
        links: [{
            source: 0,
            target: 1,
        }, {
            source: 0,
            target: 2,
        }, {
            source: 0,
            target: 3,
        }, {
            source: 0,
            target: 4,
        }, {
            source: 0,
            target: 5,
        }, {
            source: 0,
            target: 6,
        }, {
            source: 0,
            target: 7,
        }]
    }]
};

myChart.on("mouseover", function(data) {
    // 取消节点连接线触发效果
    if (data.dataType == "edge") {
        myChart.dispatchAction({
            type: 'unfocusNodeAdjacency',
            seriesIndex: 0
        });
    }
})