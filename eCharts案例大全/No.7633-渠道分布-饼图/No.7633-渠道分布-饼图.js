/**
 * 获取字符串的字节长度
 * @param str
 * @returns {number}
 */
function getByteLength(str) {
    let byteLen = 0
    if (typeof str === 'string') {
        const len = str.length
        for (let i = 0; i < len; i++) {
            const code = str.charCodeAt(i)
            let byte
            // 单字节加1
            if ((code >= 0x0001 && code <= 0x007e) || (code >= 0xff60 && code <= 0xff9f)) {
                byte = 1
            } else {
                byte = 2
            }
            byteLen += byte
        }
    }
    return byteLen
}

/**
 * 按字节长度截取字符串，返回截取的endIndex
 * @param str
 * @param cutByteLen
 * @returns {number}
 */
function cutString(str, cutByteLen = 20) {
    if (typeof str === 'string' && typeof cutByteLen === 'number') {
        const len = str.length
        let cutIndex = len
        let byteLen = 0
        for (let i = 0; i < len; i++) {
            const code = str.charCodeAt(i)
            let byte
            if ((code >= 0x0001 && code <= 0x007e) || (code >= 0xff60 && code <= 0xff9f)) {
                byte = 1
            } else {
                byte = 2
            }
            if (byteLen + byte < cutByteLen) {
                byteLen += byte
            } else {
                cutIndex = i
                break
            }
        }
        return cutIndex
    }
    return -1
}

/**
 * 分割字符串
 * @param str
 * @param cutByteLen
 * @returns {[]}
 */
function splitStr(str, cutByteLen = 20) {
    let text = str
    const strs = []
    for (let i = 0; getByteLength(text) > 0; i++) {
        const cutIndex = cutString(text, cutByteLen)
        strs.push(text.substr(0, cutIndex + 1))
        text = text.substr(cutIndex + 1)
    }
    return strs
}

/**
 * 字符串超过一定长度添加省略号
 * @param str
 * @param cutByteLen
 * @returns {string|*}
 */
function omitStr(str, cutByteLen = 20) {
    const cutIndex = cutString(str, cutByteLen)
    if (cutIndex < str.length - 1) {
        return `${str.substr(0, cutIndex + 1)}...`
    }
    return str
}

const data = [{
        "name": "默认渠道",
        "value": 118
    },
    {
        "name": "网页渠道",
        "value": 16
    },
    {
        "name": "test hello world",
        "value": 6
    },
    {
        "name": "零一二三四五六七八九零一二三四五六七八九",
        "value": 2
    },
    {
        "name": "未知渠道",
        "value": 10
    },
    {
        "name": "1",
        "value": 1,
    },
    {
        "name": "2",
        "value": 1,
    },
    {
        "name": "3",
        "value": 1,
    },
    {
        "name": "4",
        "value": 1,
    },
    {
        "name": "5",
        "value": 1,
    },
    {
        "name": "6",
        "value": 1,
    },
    {
        "name": "7",
        "value": 1,
    },
    {
        "name": "8",
        "value": 1,
    },
    {
        "name": "9",
        "value": 1,
    },
    {
        "name": "10",
        "value": 1,
    },
];

option = {
    "backgroundColor": "#FFF",
    "color": [
        "#1791FF",
        "#7870FF",
        "#41CBAB",
        "#FFC653",
        "#FF6519",
        "#EE3939",
        "#407AFB",
        "#4391FF",
        "#38A5FD",
        "#36B0FE",
        "#60AABD",
        "#6BB092",
        "#CBC718",
        "#F57C00",
        "#FF1A19"
    ],
    "tooltip": {
        "trigger": "item",
        "show": false
    },
    "legend": {
        "type": "scroll",
        "icon": "circle",
        "itemGap": 24,
        "itemWidth": 8,
        "pageIconColor": "#595959",
        "orient": "vertical",
        "top": "4.6%",
        "left": "70%",
        "bottom": "4.6%",
        "data": [
            "默认渠道",
            "网页渠道",
            "test hello world",
            "零一二三四五六七八九零一二三四五六七八九",
            "未知渠道",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ],
        "formatter": function(name) {
            return omitStr(name)
        },
        "textStyle": {
            "color": "#595959",
            "fontSize": 14
        }
    },
    "series": [{
        "name": "人数",
        "type": "pie",
        "data": data,
        "itemStyle": {
            "borderColor": "#fff",
            "borderWidth": 1
        },
        "radius": [
            "40%",
            "50.2%"
        ],
        "center": [
            "50%",
            "50%"
        ],
        "splitNumber": -1,
        "label": {
            position: 'center', // 标签在饼图中心位置
            formatter() {
                const name = data.length ? '渠道分布' : ''
                return `{name|${name}}`
            },
            backgroundColor: '#fff',
            rich: {
                name: {
                    fontSize: 12,
                    color: '#222',
                },
            },
        },
        "labelLine": {
            "show": false
        },

    }]
};