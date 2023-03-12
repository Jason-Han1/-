function productHandleTextForLong(valueOrigin, showAll = false, lineBreak = '\n') {
  let value = valueOrigin
  var result = ''// 拼接加\n返回的类目项
  var maxLength = 20// 每项显示文字个数
  if (!showAll && value.length > (maxLength * 2 - 3)) {
    value = value.substring(0, (maxLength * 2 - 3)) + '...'
  }
  var valLength = value.length// X轴类目项的文字个数
  var rowNumber = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
  // 如果文字大于3,
  if (rowNumber > 1) {
    for (var i = 0; i < rowNumber; i++) {
      var temp = ''// 每次截取的字符串
      var start = i * maxLength// 开始截取的位置
      var end = start + maxLength// 结束截取的位置
      temp = value.substring(start, end) + lineBreak
      result += temp // 拼接生成最终的字符串
    }
    return `${result}`
  } else {
    return value + lineBreak
  }
}

option = {
    "grid": {
        "left": "20%"
    },
    "tooltip": {
        "formatter": function(params) {
            let result = productHandleTextForLong(params.name, true, '<br/>')
            result += `
            &nbsp;&nbsp;&nbsp;${params.value[1]}元&nbsp;&nbsp;&nbsp;${params.value[2]}%<br/>
            &nbsp;&nbsp;&nbsp;${params.value[3]}单<br/>
            `
            return result
          }
    },
    "dataset": {
        "dimensions": [
            "product-product",
            "value"
        ],
        "source": [
            [
                "倍健康重大疾病保险(2019版）",
                63440,
                1.31,
                15
            ],
            [
                "康乐一生重疾保险",
                64198.76,
                1.32,
                14
            ],
            [
                "国华财富增值终身寿险（万能型）A 款（2015） 0＜期交保费≤10000",
                75000,
                1.55,
                9
            ],
            [
                "君康颐养金生养老年金保险",
                76000,
                1.57,
                5
            ],
            [
                "长生长生福重大疾病保险",
                86663,
                1.79,
                11
            ],
            [
                "优康保终身重大疾病保险",
                90975,
                1.87,
                23
            ],
            [
                "君康尊享金生年金保险",
                100000,
                2.06,
                1
            ],
            [
                "信泰健康无忧重大疾病保险 -- 信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险",
                123467,
                2.54,
                19
            ],
            [
                "君康多倍宝（至尊版）重大疾病保险 君康多倍宝（至尊版）重大疾病保险君康多倍宝（至尊版）重大疾病保险",
                333141.4,
                6.86,
                65
            ],
            [
                "长生福多寿年金保险",
                3170806,
                65.32,
                18
            ]
        ]
    },
    "xAxis": {
        "type": "value"
    },
    "yAxis": {
        "type": "category",
        "axisLabel": {
            "interval": 0,
            "formatter": function(valueOrigin) {
              let result = productHandleTextForLong(valueOrigin)
              if (result.indexOf('\n') > 0) {
                result = `\n${result}`
              }
              return result
            }
        }
    },
    "series": [
        {
            "type": "bar",
            "barMaxWidth": "30px",
            "barGap": "15%",
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "right"
            }
        }
    ]
};