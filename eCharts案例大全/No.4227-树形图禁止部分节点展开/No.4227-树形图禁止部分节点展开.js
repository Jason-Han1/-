option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',

        data: [{
            name: "1",
            expandAndCollapse: true,
            children: [{
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

        animation: false
        // animationDuration: false,
        //   expandAndCollapse: false,
        // animationDurationUpdate: 750
    }]
}
myChart.on("click", clickFun);

function clickFun(param) {
    if (typeof param.seriesIndex == 'undefined') {
        return;
    }
    if (param.type == 'click') {
        console.log(param.name);
        if (param.name == '11') {
            var node = myChart.getOption();
            var a = node.series[0].data;
            a[0].expandAndCollapse = false;


            myChart.setOption({
                series: [{
                    data: a
                }]
            });
        }
    }
}