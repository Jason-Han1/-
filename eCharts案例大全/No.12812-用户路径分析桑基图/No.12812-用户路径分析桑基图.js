myChart.showLoading();
var data ={
    nodes: [
        {
            id: "0_完成课程",
            name: "完成课程",
            value:3239
        },
        {
            id: "1_完成课程",
            name: "完成课程",
            value:400
        },
        {
            id: "1_分享课程",
            name: "分享课程",
            value:300
        },{
            id: "2_分享课程",
            name: "分享课程",
            value:300
        }
    ],
    links: [
        {
            source: "0_完成课程",
            target: "1_完成课程",
            value: 400/3239
        },
        {
            source: "0_完成课程",
            target: "1_分享课程",
            value: 300/3239
        },
        {
            source: "1_完成课程",
            target: "2_分享课程",
            value: 11/3239
        }
    ]
}

myChart.hideLoading();

myChart.setOption(option = {
    title: {
        text: '用户路径分析'
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'sankey',
            layout:'none',
            nodeWidth:100,//几点宽度
            data: data.nodes,
            links: data.links,
            focusNodeAdjacency: true,
            label:{
                // show:false,
                // formatter:'{@name}',
                position: ['20%', '50%']
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#bbb'
                }
            },
            tooltip: {
                position: ['50%', '50%']
            },
            lineStyle: {
                normal: {
                    curveness: 0.5
                }
            }
        }
    ]
});

