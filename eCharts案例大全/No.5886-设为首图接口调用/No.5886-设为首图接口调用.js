option = {
    title: {
        text: '设为首图接口调用',
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        roam: true,
        layout: 'orthogonal',
        orient: 'LR',
        symbol: 'emptyCircle',
        symbolSize: 10,
        left:80,
        right:120,
        initialTreeDepth: 5,
        label: {
            show: true,
            offset: [10, 0],
            align: 'left',
        },
        tooltip: {
            formatter: function(params){ return params.value.replace('/r/n','<br />')}
        },
        data: [{
            name: '设为首图',
            value: '角色：视觉部主管、专员、图片审核员。',
            symbol: 'roundRect',
            symbolSize: 15,
            label: {
                offset: [-70, 1]
            },
            children: [{
                    name: 'saveQuality',
                    value: '保存首图信息。',
                    label: {
                        offset: [-30, -15]
                    },
                    children: [{
                        name: 'handlePicInfo',
                        value: '读取图片业绩人。',
                        label: {
                            offset: [-30, -15]
                        },
                        children: [{
                            name: 'findPicInfo',
                            value: '默认从买卖房源读取图片业绩人。',
                            symbol: 'diamond',
                            label: {
                                offset: [-30, -15]
                            },
                            children: [{
                                name: 'searchRentHousePicByHousenumber\n(租赁接口：ZL-010)',
                                value: '如果买卖房源无图片业绩人，调租赁接口，读取图片业绩人。',

                            }, {
                                name: 'getReserveUserIdAndReserveDate\n(预约接口：YY-010)',
                                value: '如果租赁房源无图片业绩人，调预约接口，读取图片业绩人。',
                                label: {
                                    offset: [10, -15]
                                },
                                children: [{
                                    name: 'getHRyejiRen\n(人事接口：MH-001)',
                                    value: '校验是否存在离职异动，调人事接口，读取图片业绩人。',
                                }]
                            }]
                        }]
                    }, {
                        name: 'saveRecheckPictureAgreeRequest',
                        value: '若直接审核通过，保存图片初审、复审信息。',
                        label: {
                            offset: [-5, -20]
                        },
                        children: [{
                            name: 'synRentPicInfo\n(租赁接口：ZL-009)',
                            value: '调租赁接口，同步初审状态、有图标识、/r/n优图标识、图片人…',
                        }]
                    },{
                        name: 'updateRentPicForProcessingToLease\n(租赁接口：ZL-011)',
                        value: '调租赁接口，同步图片人、优图标识、优图时间/r/n、申请时间、操作类型、操作日志。',
                    }, {
                        name: 'syncAppointmentPlatReserveState\n(预约接口：YY-005)',
                        value: '调预约接口，同步预约状态（已上传完成）。',
                    }]
                },
                {
                    name: 'sysAppoimentEnd',
                    value: '调接口，同步预约状态（已上传完成）。',
                    label: {
                        offset: [-30, 15]
                    },
                    children: [{
                        name: 'syncAppointmentPlatReserveState\n(预约接口：YY-005)',
                        value: '调预约接口，同步预约状态（已上传完成）。',
                    }, {
                        name: 'synRentUpdateResState\n(租赁接口：ZL-008)',
                        value: '调租赁接口，同步预约状态（已上传完成）。',
                    }]
                }
            ]
        }]
    }]
};