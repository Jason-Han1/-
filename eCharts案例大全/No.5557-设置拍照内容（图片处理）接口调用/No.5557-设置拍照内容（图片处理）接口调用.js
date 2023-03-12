option = {
    title: {
        text: '设置拍照内容（图片处理）接口调用',
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
        left:100,
        right:130,
        initialTreeDepth: 5,
        label: {
            show: true,
            offset: [10, 0],
            align: 'left',
        },
        tooltip: {
            formatter: function(params){ return params.value.replace(/\/r\/n/g,'<br />')}
        },
        data: [{
            name: '设置拍照内容\n  (图片处理)',
            value: '角色：摄影师、视觉部主管、专员、图片审核员。',
            symbol: 'roundRect',
            symbolSize: 15,
            label: {
                offset: [-90, 1]
            },
            children: [{
                    name: 'savePicContent',
                    value: '保存拍照内容信息。',
                    label: {
                        offset: [-70, -15]
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
                    }, {
                        name: 'syncZuLinResPhotoStatus\n(租赁接口：ZL-007)',
                        value: '调租赁接口，同步预约状态、图片业绩人、/r/n拍照内容、拍照时间、操作人姓名、操作/r/n时间…',
                    }, {
                        name: 'syncResPhotoAuditingContent\n(预约接口：YY-003)',
                        value: '调预约接口，同步拍照内容。',
                    }]
                },
                {
                    name: 'sysAppoimentEnd',
                    value: '调接口，同步预约状态（已上传完成）。',
                    label: {
                        offset: [-50, 15]
                    },
                    children: [{
                        name: 'syncFinishedStateForUploadContentChange\n(预约接口：YY-004)',
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