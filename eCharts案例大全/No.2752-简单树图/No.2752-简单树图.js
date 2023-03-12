
  var data = {
            "children": [
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "低压车间表计82"
                                }
                            ],
                            "name": "低压关口表计1"
                        }
                    ],
                    "name": "高压子表计122"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "低压关口表计101"
                        }
                    ],
                    "name": "高压子表计141"
                }
            ],
            "name": "高压总表计102"
        }

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 10,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                emphasis: {
                    focus: 'descendant'
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
});