// 可以自定义图片
// let symbol = 'image://../assets/wechart.png'

option = {
    tooltip: { trigger: 'item', triggerOn: 'mousemove' },
    series: [{
        type: 'tree',
        left: 100,
        right: 150,
        // 开启缩放和平移
        roam: false,
        // 树图布局
        layout: 'orthogonal',
        // 从右到左 LR, RL, TB, BT
        orient: 'RL',
        // 定义图片
        // symbol: symbol,
        symbolSize: 30,
        // symbolOffset: [0,-30],
        // 展开的节点 -1，null 或者 undefined 表示所有节点都展开
        initialTreeDepth: -1,
        // 开启折叠节点
        expandAndCollapse: true,
        label: {
            show: true,
            offset: [10, 0],
            align: 'center',
            formatter: params => { return params.name.replace('/r/n','\n')}
        },
        lineStyle: {
            // 连接线的弧度
            curveness: 0.5,
            // 线的粗细
            width: 1,
            // 虚线
            type: 'dashed'
        },
        tooltip: {
            formatter: params => { return params.value.replace('/r/n','<br/>')}
        },
        data: [{
            name: 'C_ST_YZ_ren/r/nC_ST_YZ_G',
            value: '角色：视觉部主管、专员、图片审核员。',
            label: {
                offset: [0,30],
            },
            children: [{
                name: 'MC_ST_YZre/r/nM_C_ST_Y',
                value: '保存首图信息。',
                label: { offset: [0,30] },
                children: [{
                    name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                    value: '读取图片业绩人。',
                    label: { offset: [0, 30] },
                    children: [{
                        name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                        value: '默认从买卖房源读取图片业绩人。',
                        label: { offset: [0, 30] },
                        children: [{
                            name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                            value: '如果买卖房源无图片业绩人，调租赁接口，读取图片业绩人。',
                            label: { offset: [0, 30] },
                            // symbolOffset: [0, -15],
                        }, {
                            name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                            value: '如果租赁房源无图片业绩人，调预约接口，读取图片业绩人。',
                            label: { offset: [0, 30] },
                        }, {
                            name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                            value: '如果租赁房源无图片业绩人，调预约接口，读取图片业绩人。',
                            label: { offset: [0, 30] },
                            // symbolOffset: [0, 15],
                        }]
                    }]
                }, {
                    name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                    value: '若直接审核通过，保存图片初审、复审信息。',
                    label: { offset: [0, 30] },
                    children: [{
                        name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                        value: '调租赁接口，同步初审状态、有图标识、/r/n优图标识、图片人…',
                        label: { offset: [0, 30] },
                    }]
                }, {
                    name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                    value: '若直接审核通过，保存图片初审、复审信息。',
                    label: { offset: [0, 30] },
                    children: [{
                        name: 'O_GAJ_SYRKXX/r/n东莞市XXX表',
                        value: '调租赁接口，同步初审状态、有图标识、/r/n优图标识、图片人…',
                        label: { offset: [0, 30] },
                    }]
                }]
            }]
        }]
    }]
};