var data = {
    name: '某某大队',
    children: [{
        name: '大队长:老王',
        children: [{
            name: '消防人员:小张',
        }, {
            name: '消防人员:小杨',
        }, {
            name: '消防人员:小马',
        }, {
            name: '消防人员:小刘',
        }, {
            name: '消防人员:小孙',
        }, ]
    }, {
        name: '总参谋:老李',
        // value: 1,
    }],
};
option = {
    title: {
        text: '消防大队组织结构',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        data: [data, ],
        // orient: 'vertical',
        label: {
            normal: {
                position: 'top',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 16
            }
        },
    }],
}