option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [{
                    name: "1",
                    children: [
                        {
                            name: '11',
                            children: [
                                {
                                    name: '111'
                                },
                                {
                                    name: '112'
                                }
                            ]
                        },
                        {
                            name: '12'
                        }
                    ]
                }],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: [50, 20],
                symbol: 'rect',
                orient: 'TB',
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }