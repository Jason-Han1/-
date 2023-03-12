data = [{
    "stdCode": "拒接",
    "codeNum": 3
}, {
    "stdCode": "未接",
    "codeNum": 2
}, {
    "stdCode": "网关不存在",
    "codeNum": 0
}, {
    "stdCode": "剩余超时",
    "codeNum": 0
}, {
    "stdCode": "系统异常",
    "codeNum": 0
}, {
    "stdCode": "其他异常",
    "codeNum": 0
}, {
    "stdCode": "关机",
    "codeNum": 0
}, {
    "stdCode": "空号",
    "codeNum": 0
}, {
    "stdCode": "停机",
    "codeNum": 0
}, {
    "stdCode": "暂停服务",
    "codeNum": 0
}, {
    "stdCode": "用户正忙",
    "codeNum": 0
}, {
    "stdCode": "拨号方式错误",
    "codeNum": 0
}, {
    "stdCode": "呼入限制",
    "codeNum": 0
}, {
    "stdCode": "来电提醒",
    "codeNum": 0
}, {
    "stdCode": "呼叫转移失败",
    "codeNum": 0
}, {
    "stdCode": "网络忙",
    "codeNum": 0
}, {
    "stdCode": "无人接听",
    "codeNum": 0
}, {
    "stdCode": "欠费",
    "codeNum": 0
}, {
    "stdCode": "无法接听",
    "codeNum": 0
}, {
    "stdCode": "改号",
    "codeNum": 0
}, {
    "stdCode": "线路故障",
    "codeNum": 0
}, {
    "stdCode": "稍后再拨",
    "codeNum": 0
}, {
    "stdCode": "转人工",
    "codeNum": 2
}, {
    "stdCode": "黑名单号码",
    "codeNum": 13
}, {
    "stdCode": "请求超时",
    "codeNum": 0
}];
option = {
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        minInterval: 1
    },
    dataset: {
        source: data,
    },
    series: [{
        type: 'bar',
        name: '状态数量',
    }]
};