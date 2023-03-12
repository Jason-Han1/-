myChart.showLoading();
var data = [{
    "children": [{
            "children": [{
                "children": [{
                    "children": [],
                    "name": "子部门XXX",
                    "hasChild": true
                }],
                "name": "部门A"
            }],
            "name": "分公司A"
        },
        {
            "children": [{
                "children": [],
                "name": "部门",
                "hasChild": true
            }],
            "name": "分公司B"
        }
    ],
    "name": "总部"
}];
console.log(data);
myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',

        data: data,
        initialTreeDepth: 1,
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',

        symbolSize: 7,

        label: {
            normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
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
        animationDuration: 0,
        animationDurationUpdate: 0
    }]
});
clickFun = function(param) {
    console.log(param.seriesIndex);
    if (typeof param.seriesIndex == 'undefined') {
        return;
    }
    if (param.type == 'click') {
        if (!param.data.hasChild) {
            //param.data.collapsed=true;
            console.log(param.data.collapsed);
            if (param.data.collapsed === undefined || param.data.collapsed === true) {
                console.log("未定义或者是未展开，下次即将展开");
                param.data.collapsed = false;
            } else {
                console.log("下次不展开");
                param.data.collapsed = true;
            }
            return;
        }
        param.data.children.push({
            name: "子部门测试",
            children: []
        });
        param.data.hasChild = false;
        param.data.collapsed = false;

        console.log(param.data);
        console.log(myChart.getOption().series[0].data);
        data = myChart.getOption().series[0].data;
        myChart.clear();
        myChart.setOption(option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [{
                type: 'tree',

                data: data,
                initialTreeDepth: 1,
                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
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
                animationDuration: 100,
                animationDurationUpdate: 0
            }]
        });
    }
};
myChart.on("click", clickFun);