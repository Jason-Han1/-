myChart.showLoading();
var data2 = [
    {
        name: '治安管理工作',
        children: [
            {
                name: '娱乐场所治安管理',
                children: [
                    {
                        name: '娱乐场所治安管理工作',
                    },
                ],
            },
            {
                name: '安保工作',
                children: [
                    {
                        name: '输油气管道安保工作',
                    },
                    {
                        name: '校园安保工作',
                    },
                    {
                        name: '节假日、重大活动、大型群众性活动安保和敏感期社会面管控工作',
                    },
                ],
            },
            {
                name: '精神病人管控工作',
                children: [
                    {
                        name: '精神病人肇事肇祸案事件',
                    },
                ],
            },
            {
                name: '物流寄递业',
                children: [
                    {
                        name: '物流寄递业治安管理工作',
                    },
                ],
            },
            {
                name: '推进基层基础工作创新',
                children: [
                    {
                        name: '加强派出所建设',
                    },
                ],
            },
            {
                name: '地网建设工作',
                children: [
                    {
                        name: '加强二',
                        children: [
                            {
                                name: '加强',
                                children: [
                                    {
                                        name: '加强派出所建设',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: '无人机管理',
                children: [
                    {
                        name: '加强无人机管理',
                    },
                ],
            },
            {
                name: '加强社会面巡逻防控',
                children: [
                    {
                        name: '武装联勤巡逻',
                    },
                ],
            },
        ],
    },
];

myChart.hideLoading();

myChart.setOption(
    (option = {
        tooltip: {
            backgroundColor: '#fff',
            trigger: 'item',
            // triggerOn: 'none',
            textStyle: {
                color: '#333',
            },
            enterable:true,
            borderWidth: '1',
            formatter: function (params) {
                console.log(params);
                let menu = `<ul>
                    <li><a href="javascript:alert()">11111111</a></li>
                </ul>`;
                return menu;
            },
        },
        series: [
            {
                roam:true,
                itemStyle: {
                    color: 'rgba(0, 149, 255, 1)',
                },
                type: 'tree',
                name: '治安管理工作',
                data: data2,
                top: 5,
                right: '10%',
                left: '10%',
                symbolSize: 8,
                bottom: 5,
                // symbol:'roundRect',
                initialTreeDepth: 10,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'left',
                    backgroundColor: '#fafafa',
                    // color: '#333',
                    padding: [2,2,2,10],
                    borderRadius: 50,
                    width: 80,
                    height: 30,
                    distance:96,
                    lineOverflow: 'truncate',
                    overflow: 'truncate',
                    formatter: ['{b}'].join('\n'),
                        // rich: {
                        //     box: {
                        //         fontSize: 12,
                        //         width: 80,
                        //         height: 30,

                        //         color: '#222',
                        //         padding: [0, 6],
                        //         align: 'middle',
                        //     },
                        // },
                },
                // leaves: {
                //     label: {
                //         normal: {
                //             position: 'right',
                //             verticalAlign: 'middle',
                //             align: 'left',
                //             backgroundColor: '#c44eff',
                //             formatter: ['{box|{b}}'].join('\n'),
                //             rich: {
                //                 box: {
                //                     height: 18,
                //                     // color: '#fff',
                //                     padding: [0, 5],
                //                     align: 'center',
                //                 },
                //             },
                //         },
                //     },
                // },
                expandAndCollapse: false,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    })
);
myChart.on('click', function (params) {
    console.log(params)
    if (params.event.target.type == 'path') {
        //此处点击圈
        myChart.dispatchAction({
            type: 'treeExpandAndCollapse',
            dataIndex: params.dataIndex,
        });
    } else {
        //此处点击label
        myChart.dispatchAction({
            type: 'showTip',
            dataIndex: params.dataIndex,
            seriesIndex: params.seriesIndex,
        });
    }
});
myChart.getZr().on('click', function (event) {
    myChart.dispatchAction({
        type: 'hideTip',
    });
});
