option = {
    title: {
        text: '委托审核接口调用',
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
        left: 80,
        right: 200,
        initialTreeDepth: 5,
        label: {
            show: true,
            offset: [10, 0],
            align: 'left',
        },
        tooltip: {
            formatter: function(params) {
                return params.value.replace(/\/r\/n/g, '<br />')
            }
        },
        data: [{
            name: '委托审核',
            value: '角色：业务管理员、店务经理(助理)。',
            label: {
                offset: [-60, 0]
            },
            children: [{
                name: 'doSaveAudit',
                value: '保存委托审核信息。',
                label: {
                    offset: [-30, -15]
                },
                children: [{
                    name: 'updateRentKeyByHousenumber\n(租赁接口：ZL-021)',
                    value: '审核通过，钥匙委托。/r/n调租赁接口，同步委托人、委托时间、审核状态、生效时间、操作人。',
                }, {
                    name: 'updateDutyToTaoBao\n(责任盘接口：ZR-002)',
                    value: '审核通过，钥匙委托。/r/n调责任盘接口，同步房源掉淘宝池状态。',
                }, {
                    name: 'picKeyEntrustFalse\n(租赁接口：ZL-019)',
                    value: '审核拒绝，钥匙委托。/r/n调租赁接口，同步拒绝提醒信息（含提醒人、房号、委托类型、拒绝原因）。',
                }, {
                    name: 'updateRentKeyByHousenumber\n(租赁接口：ZL-021)',
                    value: '审核拒绝，钥匙委托。/r/n调租赁接口，同步委托人、委托时间、审核状态、生效时间、操作人。',
                }, {
                    name: 'forsalesChanQuanXinXiQueRen\n(楼盘字典接口：LP-003)',
                    value: '独家、锁盘委托。/r/n调楼盘字典接口，同步房产证信息。含地址、图片URL、区域、/r/n操作人ID（姓名）、客户端系统编号（名称）、操作时间。',
                }, {
                    name: 'synVipInfoToTrade\n(交易接口：JY-004)',
                    value: '独家、锁盘委托。/r/n调交易接口，同步VIP状态。含房号、用户ID、VIP状态标识。',
                }]
            }]
        }]
    }]
};