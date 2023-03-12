myChart.showLoading();
    myChart.hideLoading();


    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [{
                    "children": [
                        {
                            "name": "实践",
                            "hasChild":false,
                            "collapsed":true
                        },
                        {
                            "name": "理论",
                            "hasChild":false,
                            "collapsed":true
                        }
                    ],
                    "name": "学习方法"
                }],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 14,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize:16
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });