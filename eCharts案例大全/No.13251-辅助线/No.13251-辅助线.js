    /**
      * @param {} ttype：'num' \ 'percent' [string]
      * @param {} digit: 小数位数 [int]
      * @param {} millesimal: 是否显示千分位 [boolean]
      * @param {} show_text: 是否显示文字 [boolean]
      * @param {bool} isAxis: 是不是坐标轴
    */
function getNormalFormatterHandler (object) {
  let ttype = object.ttype
  let digit = object.digit || 0
  let millesimal = object.millesimal || false
  let showText = object.showText || false
  let isAxis = object.showAxis
  let self = this
  let formatter = function (params) {
    let value = 0
    if (typeof params !== 'object') {
      value = params
    } else {
      value = typeof params.data === 'object' ? params.data.value : params.data
    }
    let formatValue = ''
    if (ttype === 'num') {
      if (millesimal) {
        formatValue = typeof value === 'number' ? value.toFixed(digit).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,') : value
      } else {
        formatValue = typeof value === 'number' ? value.toFixed(digit) : value
      }
    } else if (ttype === 'percent') {
      formatValue = typeof value === 'number' ? (value * self.isFormatter(100)).toFixed(digit) + '%' : value
    }
    let arr = []
    if (isAxis) {
      arr.push(params.marker + params.name + '<br>')
    }
    if (showText) {
      arr.push(params.seriesName + '：')
    }
    if (params.seriesType === 'pie') {
      arr.push(formatValue + '\n(' + params.percent + '%)')
    } else {
      arr.push(formatValue)
    }
    if (arr.length === 1) {
      arr[0] = String(arr[0])
    }
    return arr.join('')
  }
  return formatter
}
var option = {
  "ext_js_list": [], 
  "title": {
    "y": "", 
    "text": "", 
    "textStyle": {
      "fontWeight": 700
    }, 
    "x": "center", 
    "show": false
  }, 
  "color": [
    "#577CAD", 
    "#FFA51B", 
    "#EF635C", 
    "#7FBAC4", 
    "#48A47D", 
    "#BCB52B", 
    "#B46A88", 
    "#B29688", 
    "#9FACA4", 
    "#6B6B6B"
  ], 
  "series": [
    {
      "markLine": {
        // "data": [], 
        symbol: 'none',
        "label": {
          "normal": {
            "position": "start", 
            "formatter": "{b} {c} ( {a} )", 
            "show": true,
            textStyle: {
               color: '#fff',
               fontStyle: 'normal',
               fontSize: 12,
              padding: 4,
               backgroundColor: '#4d87de',
            }
          }
        },
        lineStyle: {
            width: 2,
            color: '#4d87de'
        },
        emphasis: {
            label: {
                
            }
        },
        data: [
            {
                type: 'min'
            },
            {
                type: 'max'
            }
        ]
      }, 
      "name": "seq", 
      "itemStyle": {
        "normal": {
          "color": null
        }
      }, 
      "barMaxWidth": "100", 
      "field_id": "5b6410958aebae02c757ff02", 
      "tooltip": {
        "formatter": getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: true, showAxis: true})
      }, 
      "label": {
        "normal": {
          "position": "insideBottom", 
          "align": "center", 
          "formatter": getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
          "textBorderWidth": 2, 
          "show": true
        }
      }, 
      "barGap": "10%", 
      "data": [
        9313.982142857143, 
        9833.6875, 
        9704.52380952381, 
        8330.48, 
        10378.666666666666, 
        10358.883720930233, 
        9980.451612903225, 
        10873.363636363636, 
        9438.808510638299, 
        11027.58064516129, 
        8112.3050847457625, 
        8945.363636363636, 
        10571.157894736842, 
        10085.40625, 
        11411.018348623853, 
        10647.142857142857, 
        9664.107692307693, 
        8935.67857142857, 
        8559.95652173913, 
        9185.53125, 
        8971.75, 
        9179.722222222223, 
        12167.25, 
        9392.583333333334, 
        9337.661538461538, 
        8032.0204081632655, 
        10737.23076923077, 
        10662.861111111111, 
        8835.326530612245, 
        10246.594594594595, 
        9612.5, 
        9877.695652173914, 
        14074.176470588236, 
        9410.105263157895, 
        9066.277777777777, 
        16248.333333333334, 
        13753.558139534884, 
        13375.181818181818, 
        13197.541666666666, 
        13946.973684210527, 
        10120.222222222223, 
        8590.78947368421, 
        14900.0625, 
        14776.424242424242, 
        13814.538461538461, 
        10324.880952380952, 
        8403.307692307691, 
        10763.583333333334, 
        10233.232142857143, 
        9404.939393939394, 
        8473.54347826087, 
        9748.595744680852, 
        8390.095238095239, 
        11507.441176470587, 
        10127.976744186046, 
        8228.852459016394, 
        10487.244444444445, 
        9740.978723404256, 
        15348.727272727272, 
        14453.7, 
        9357.096153846154, 
        14209.148148148148, 
        13249.757575757576, 
        8279.793103448275, 
        5052.0, 
        10549.978494623656, 
        9471.0625, 
        10548.88, 
        8762.736842105263, 
        8729.794871794871, 
        10527.150943396226, 
        10268.327102803738, 
        7272.6875, 
        10806.681818181818, 
        10518.93220338983, 
        10321.904761904761, 
        12278.244897959185, 
        8161.4, 
        11133.076923076924, 
        10187.121212121212, 
        9263.58064516129, 
        9103.973684210527, 
        8621.23076923077, 
        10755.935483870968, 
        11417.4, 
        11194.722222222223, 
        9490.211764705882, 
        9914.682926829268, 
        9428.42857142857, 
        4814.820224719101, 
        10096.698412698413, 
        10669.0, 
        10420.314285714287, 
        9323.125, 
        10046.77049180328, 
        10436.275, 
        10039.309090909092, 
        10701.36, 
        10435.59677419355, 
        10891.741379310344, 
        10187.725490196079, 
        11063.466666666667, 
        10835.146341463415, 
        9227.045454545454, 
        10916.3125, 
        8721.06, 
        10697.731707317073, 
        11372.688524590163, 
        6285.639344262295, 
        7791.2307692307695, 
        10966.066666666668, 
        10047.322580645161, 
        9492.125, 
        8910.644736842105, 
        10010.67924528302, 
        10088.583333333334, 
        10892.857142857143, 
        9007.333333333334, 
        9612.411764705883, 
        9732.272727272728, 
        9882.781818181818, 
        12069.387096774193, 
        10054.0, 
        9827.763636363636, 
        8509.864406779661, 
        9245.142857142857, 
        9319.716981132075, 
        6971.056603773585, 
        5071.355263157895, 
        10755.277777777777, 
        8814.666666666666, 
        11115.558823529413, 
        10520.644444444444, 
        9860.74358974359, 
        10506.061538461538, 
        8431.973333333333, 
        13375.59090909091, 
        9319.844444444445, 
        10086.91489361702, 
        10642.97619047619, 
        7565.65306122449, 
        9818.479166666666, 
        10288.911764705883, 
        10932.407407407407, 
        9560.982456140351, 
        10282.17857142857, 
        10804.0, 
        9579.35, 
        8688.95652173913, 
        8944.32, 
        9255.628571428571, 
        12275.0, 
        8758.79746835443, 
        10230.7, 
        8546.229166666666, 
        11207.672897196262, 
        10271.3125, 
        918.6666666666666, 
        10026.378947368421, 
        8238.124223602485, 
        9610.373134328358, 
        9665.692307692309, 
        9833.391304347826, 
        9688.263157894737, 
        9823.166666666666, 
        10385.8, 
        10350.255319148937, 
        10552.441558441558, 
        9213.80303030303, 
        9748.24705882353, 
        9694.816091954022, 
        9675.25, 
        8026.9, 
        9694.64705882353, 
        9508.281690140846, 
        10195.25641025641, 
        9600.489361702128, 
        9837.03947368421, 
        6451.862068965517, 
        9832.805970149253, 
        9303.795918367347, 
        9874.28947368421, 
        11716.387096774193, 
        9864.531531531531, 
        9788.739130434782, 
        10055.982142857143, 
        9188.026315789473, 
        11104.390625, 
        10597.08888888889, 
        6837.1578947368425, 
        11023.867924528302, 
        9858.637931034482, 
        10878.764705882353, 
        9658.227272727272, 
        10354.045454545454, 
        5052.0, 
        11582.103448275862, 
        12130.6, 
        13471.8125, 
        11275.522727272728, 
        12387.555555555555, 
        13712.51724137931, 
        12554.6875, 
        6444.8, 
        11415.971428571429, 
        10701.411764705883, 
        6444.8, 
        17268.5, 
        14912.5625
      ], 
      "type": "bar", 
      "animation": false
    }
  ], 
  "yAxis": [
    {
      "nameLocation": "middle", 
      "axisTick": {
        "show": false
      }, 
      "scale": false, 
      "name": "", 
      "show": true, 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "formatter": getNormalFormatterHandler({ttype: 'num', digit: 2, millesimal: false, showText: false, showAxis: false}), 
        "show": true
      }, 
      "splitLine": {
        "lineStyle": {
          "color": "#e9e9e9"
        }
      }, 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "splitNumber": 5, 
      "axisLine": {
        "show": false
      }, 
      "nameGap": 35, 
      "type": "value"
    }
  ], 
  "tooltip": {
    "axisPointer": {
      "type": "shadow"
    }, 
    "trigger": "item", 
    "extraCssText": "border-radius: 0px;", 
    "textStyle": {
      "fontSize": 12
    }
  }, 
  "visualMap": [], 
  "grid": [
    {
      "top": 40, 
      "right": 20, 
      "bottom": 20, 
      "containLabel": true, 
      "left": 20
    }
  ], 
  "xAxis": [
    {
      "nameLocation": "middle", 
      "splitNumber": "10", 
      "minInterval": 1, 
      "name": "", 
      "show": true, 
      "data": [
        "\u4ebf\u4e30\u65f6\u4ee3\u5e7f\u573a", 
        "\u9f99\u76db\u6b27\u5c1a", 
        "\u676d\u5dde\u8427\u5c71\u673a\u573a", 
        "\u82cf\u5dde\u60a0\u65b9", 
        "\u9752\u6d66\u5bcc\u7ec5\u65f6\u4ee3", 
        "\u5609\u5c1a\u574a", 
        "\u6c47\u4eac\u56fd\u9645\u5e7f\u573a", 
        "\u4e34\u6c82\u767e\u8054", 
        "\u5927\u534e\u76ca\u5cf0", 
        "\u5609\u5174\u65ed\u8f89", 
        "\u91d1\u878d\u8857\u6d77\u4f26\u4e2d\u5fc3", 
        "\u65b0\u534e\u7ea2\u661f", 
        "\u5357\u4eac\u4e5d\u9704\u68a6\u5929\u5730", 
        "\u4e07\u8f89\u56fd\u9645", 
        "\u957f\u9633\u6b27\u5c1a", 
        "\u989b\u6865\u4e07\u8fbe", 
        "\u5b9d\u5c71\u9f99\u6e56", 
        "\u4e91\u5c71\u8def\u4e0a\u758f\u6c38\u8f89", 
        "\u5357\u901a\u5706\u878d", 
        "\u626c\u5dde\u4e07\u8fbe", 
        "\u82cf\u5dde\u4e2d\u5fc3", 
        "\u676d\u5dde\u897f\u6eaa\u94f6\u6cf0", 
        "\u5e38\u5dde\u94f6\u8c37\u5e7f\u573a", 
        "\u5357\u4eac\u4ed9\u6797\u91d1\u9e70", 
        "\u4e94\u89d2\u573a\u4e07\u8fbe", 
        "\u53e4\u53171699", 
        "\u5357\u4eac\u4e07\u8c37\u6167", 
        "\u5609\u5b9a\u65e5\u6708\u5149", 
        "\u798f\u5dde\u8def", 
        "\u957f\u98ce\u5927\u60a6\u57ce", 
        "\u5c1a\u4e50\u574a", 
        "\u65e0\u9521\u6ee8\u6e56\u4e07\u8fbe", 
        "\u82cf\u5dde\u9f99\u6e56\u72ee\u5c71\u5929\u8857", 
        "\u5357\u901a\u5370\u8c61\u57ce", 
        "\u676d\u5dde\u8427\u5c71\u94f6\u9686", 
        "\u5357\u4eac\u96e8\u82b1\u5ba2\u5385", 
        "\u51ef\u5fb7\u661f\u8d38", 
        "\u676d\u5dde\u6ee8\u6c5f\u9f99\u6e56", 
        "\u6843\u6d66\u65b0\u90bb\u5929\u5730", 
        "\u767e\u8054\u53c8\u4e00\u57ce", 
        "\u6d66\u6c5f\u534e\u4fa8\u57ce", 
        "\u5341\u5c1a\u574a", 
        "\u5b81\u6ce2\u4e1c\u90e8\u65b0\u57ce\u94f6\u6cf0", 
        "\u7530\u6797\u6c83\u5c14\u739b", 
        "\u5434\u6cfe\u519c\u5de5\u5546", 
        "\u6731\u6cfe\u516c\u56ed\u8def", 
        "\u5b81\u6ce2\u57ce\u968d\u5e99", 
        "\u65e0\u9521\u5bb6\u4e50\u798f", 
        "\u957f\u5b81\u6765\u798f\u58eb", 
        "\u8679\u6865\u98df\u5c1a", 
        "\u4e03\u5b9d\u51ef\u5fb7", 
        "\u6b63\u5927\u5e7f\u573a", 
        "\u5434\u6cfe\u5b9d\u9f99", 
        "\u5f20\u5bb6\u6e2f\u6768\u820d\u8001\u8857\u8857", 
        "\u4e45\u91d1\u5e7f\u573a", 
        "\u6021\u4e30\u57ce", 
        "\u73af\u9f99\u5546\u53a6", 
        "\u6708\u4eae\u6e7e", 
        "\u5b8f\u4f0a\u5e7f\u573a", 
        "\u5ddd\u6c99\u767e\u8054", 
        "\u5357\u4eac\u592b\u5b50\u5e99", 
        "\u5b9d\u5730\u5e7f\u573a", 
        "1788", 
        "\u4e16\u7eaa\u5927\u90fd\u6c47", 
        "\u5e38\u5dde\u6050\u9f99\u56ed", 
        "\u54c1\u5c0a\u56fd\u9645", 
        "\u5357\u4eac\u5efa\u90ba\u4e07\u8fbe", 
        "\u5e38\u719f\u5e38\u5ba2\u9686", 
        "\u5317\u827e\u8def", 
        "\u6ee8\u6c5f\u5b9d\u9f99", 
        "\u9752\u6d66\u5bcc\u7ec5\u56fd\u9645", 
        "\u4e03\u5b9d\u4e07\u79d1", 
        "\u5ddd\u6c99\u73b0\u4ee3\u5e7f\u573a", 
        "\u82cf\u5dde\u666f\u57ce", 
        "\u5ddd\u6c99\u5bb6\u4e50\u798f", 
        "\u5b81\u6ce2\u5929\u4e00", 
        "\u63a7\u6c5f\u65ed\u8f89", 
        "\u82cf\u901a\u5927\u6865\u4e1c\u533a", 
        "\u82cf\u901a\u5927\u6865\u897f\u533a", 
        "\u6dde\u5357\u5927\u660c", 
        "\u5e38\u5dde\u6c5f\u5357\u73af\u7403\u6e2f", 
        "\u4e03\u5b9d\u5b9d\u9f99", 
        "\u6d66\u4e1c\u4f73\u90bb\u574a", 
        "\u5357\u6865\u5927\u90fd\u60e0", 
        "\u676d\u5dde\u4e0b\u6c99\u5965\u83b1", 
        "\u5609\u5b9a\u767e\u8054", 
        "\u5b9d\u4e50\u6c47", 
        "\u6d66\u6c5f\u751f\u6d3b\u5e7f\u573a", 
        "\u677e\u6c5f\u5927\u5b66\u57ce", 
        "\u4e94\u89d2\u573a\u5408\u751f\u6c47", 
        "\u5927\u534e\u4e50\u8d2d", 
        "\u78a7\u6c5f\u5e7f\u573a", 
        "\u534f\u4fe1\u5e7f\u573a", 
        "\u5468\u6d66\u54c8\u90bb\u91cc", 
        "\u5929\u5c71\u767e\u76db", 
        "\u5b9d\u5c71\u5b9d\u9f99", 
        "\u65b0\u90bb\u751f\u6d3b\u9986", 
        "\u5949\u8d24\u5b9d\u9f99", 
        "\u6606\u5c71\u4e5d\u65b9\u57ce", 
        "\u4e2d\u539f\u6b27\u5c1a\u9910\u5385", 
        "\u5609\u5b9a\u535a\u4e50\u8def\u6b27\u5c1a", 
        "\u91d1\u5c71\u6b27\u5c1a", 
        "\u590f\u78a7\u8def", 
        "\u534e\u6f15\u65ed\u8f89", 
        "\u5357\u4eac\u6c64\u5c71\u5965\u7279\u83b1\u65af", 
        "\u5e38\u5dde\u4e5d\u6d32\u65b0\u4e16\u754c", 
        "\u676d\u5dde\u91d1\u6c99\u9f99\u6e56", 
        "\u6587\u5cf0\u5e7f\u573a", 
        "\u53e4\u5317\u5bb6\u4e50\u798f", 
        "\u676d\u5dde\u6587\u4e00\u8def", 
        "\u4e03\u5de7\u56fd", 
        "\u6b63\u5927\u4e50\u57ce", 
        "\u5929\u5c71\u6c47\u91d1", 
        "\u6c34\u4ea7\u8def\u4e16\u7eaa\u8054\u534e", 
        "\u5b9d\u5c71\u5bb6\u4e50\u798f", 
        "\u7530\u5c1a\u574a", 
        "\u91d1\u5c71\u533a\u4e07\u8fbe", 
        "\u5357\u4eac\u6c5f\u5b81\u91d1\u9e70\u5e97", 
        "\u5357\u4eac\u8679\u6865\u65b0\u57ce\u5e02", 
        "\u5357\u4eac\u4e2d\u6d77\u73af\u5b87\u57ce", 
        "\u5b9d\u5c71\u6613\u4e70\u5f97", 
        "\u5609\u5b9a\u57ce\u4e2d\u8def", 
        "\u5b81\u6ce2\u911e\u5dde\u4e07\u8fbe", 
        "\u4e50\u5473\u574a", 
        "\u6ee8\u6c5f\u767e\u8054", 
        "\u4e1c\u90ca\u767e\u8054", 
        "\u676d\u5dde\u897f\u6e56\u94f6\u6cf0", 
        "\u5357\u7fd4\u4e94\u5f69\u57ce", 
        "\u5b9c\u5609\u574a", 
        "\u5e38\u5dde\u53c8\u4e00\u57ce", 
        "\u6d66\u7535\u8def\u4e16\u7eaa\u8054\u534e", 
        "\u5357\u4eac\u592a\u5e73\u5546\u573a", 
        "\u6606\u5c71\u957f\u57ce\u56fd\u9645", 
        "\u5357\u4eac\u4e2d\u592e\u5546\u573a", 
        "\u738b\u5b50\u767e\u8d27", 
        "\u82cf\u5dde\u6cc9\u5c4b", 
        "\u5357\u4eac\u673a\u573a\u9910\u5385", 
        "\u5357\u4eac\u5546\u53a6", 
        "\u6c47\u66bb", 
        "\u5b81\u6ce2\u9f13\u697c", 
        "\u677e\u6c5f\u4e07\u8fbe", 
        "\u6668\u8fbe\u5e7f\u573a", 
        "\u5e38\u5dde\u5ef6\u9675\u897f\u8def", 
        "\u9999\u6e2f\u540d\u90fd", 
        "\u9f99\u9633\u5e7f\u573a", 
        "\u5357\u4eac\u5370\u8c61\u6c47", 
        "\u5357\u4eac\u9f99\u6c5f\u65b0\u57ce\u5e02", 
        "\u82cf\u5dde\u77f3\u8def\u5929\u8679", 
        "\u82cf\u5dde\u4e07\u79d1", 
        "\u8bfa\u4e9a\u65b0\u5929\u5730", 
        "\u5357\u4eac\u6c34\u5e73\u65b9", 
        "\u5357\u4eac\u5927\u6d0b", 
        "\u592a\u4ed3\u534e\u65ed", 
        "\u4e50\u8679\u574a", 
        "\u677e\u6c5f\u5730\u4e2d\u6d77", 
        "\u8679\u53e3\u9f99\u4e4b\u68a6", 
        "\u6708\u661f", 
        "\u676d\u5dde\u5cb3\u738b\u5e99\u5e97", 
        "\u5d07\u660e\u516b\u4e00\u5e7f\u573a", 
        "\u5357\u7fd4\u4e2d\u51b6\u7965\u817e", 
        "\u592a\u4ed3\u4e07\u8fbe", 
        "\u5468\u6d66\u4e07\u8fbe", 
        "\u5b89\u4ead\u5730\u94c1\u7ad9", 
        "\u4e50\u9882\u574a", 
        "\u4e1c\u65b9\u660e\u73e0", 
        "\u6dee\u6d77\u4e2d\u8def\u5df4\u9ece\u6625\u5929", 
        "\u91d1\u5c71\u767e\u8054", 
        "\u5929\u94a5\u6865", 
        "\u8574\u5ddd\u8def\u535c\u8702\u83b2\u82b1", 
        "\u5b9d\u5c71\u4e07\u8fbe", 
        "\u5149\u542f\u57ce", 
        "\u83b2\u82b1\u56fd\u9645", 
        "\u4e0a\u6d77\u5357\u7ad9\u5317\u5e7f\u573a", 
        "\u660c\u91cc\u8def", 
        "\u6865\u6893\u6e7e", 
        "\u4ef2\u76db", 
        "\u9752\u6d66\u5965\u7279\u83b1\u65af", 
        "\u6253\u6d66\u6865\u65e5\u6708\u5149", 
        "\u611a\u56ed", 
        "\u6211\u683c\u5e7f\u573a", 
        "\u8398\u5e84\u9f99\u4e4b\u68a6", 
        "\u6c5f\u6865\u4e07\u8fbe", 
        "\u6d66\u5efa\u5df4\u9ece\u6625\u5929", 
        "\u4e2d\u5c71\u516c\u56ed", 
        "\u4e9a\u65b0", 
        "\u6210\u5c71\u5df4\u9ece\u6625\u5929", 
        "\u661f\u6e38\u57ce", 
        "\u5927\u534e\u5df4\u9ece\u6625\u5929", 
        "\u897f\u90ca\u767e\u8054", 
        "\u6d59\u6c5f\u4e2d\u8def", 
        "\u5434\u6c5f\u8def", 
        "118\u5df4\u9ece\u6625\u5929", 
        "\u5b81\u6ce2\u8def", 
        "\u9ec4\u6cb3\u8def", 
        "\u9655\u897f\u5317\u8def", 
        "\u5e38\u5dde\u8fea\u8bfa\u6c34\u9547", 
        "\u65e0\u9521\u5b9c\u5bb6\u835f\u805a", 
        "\u9547\u6c5f\u4e07\u8fbe", 
        "\u5357\u4eac\u6c5f\u5317\u5927\u6d0b", 
        "\u60e0\u5357\u4e50\u8d2d", 
        "\u5e38\u5dde\u6ea7\u9633\u4e07\u8fbe", 
        "\u5357\u4eac\u4e07\u8fbe\u8302", 
        "\u4e9a\u7e41\u4e9a\u4e50\u57ce", 
        "\u676d\u5dde\u4e34\u5e73\u7406\u60f3\u94f6\u6cf0", 
        "\u9759\u5b89\u5927\u878d\u57ce", 
        "\u626c\u5dde\u4eac\u534e\u57ce", 
        "\u676d\u5dde\u4e34\u5e73\u94f6\u6cf0", 
        "\u5916\u6ee9\u91d1\u878d\u4e2d\u5fc3", 
        "\u82cf\u5dde\u91d1\u9e21\u6e56\u6b27\u5c1a"
      ], 
      "axisLabel": {
        "textStyle": {
          "color": "#787878", 
          "fontSize": 10
        }, 
        "inside": false, 
        "rotate": -45, 
        "show": true
      }, 
      "boundaryGap": [
        "10%", 
        "10%"
      ], 
      "nameTextStyle": {
        "color": "#787878", 
        "fontSize": 10
      }, 
      "nameGap": 35, 
      "axisLine": {
        "lineStyle": {
          "color": "#A6A6A6"
        }, 
        "show": true
      }, 
      "triggerEvent": true, 
      "z": 10, 
      "type": "category", 
      "axisTick": {
        "show": false
      }
    }
  ], 
  "dataZoom": [
    {
      "end": 100, 
      "bottom": "0%", 
      "show": true, 
      "xAxisIndex": [
        0
      ], 
      "start": 91.0, 
      "type": "slider"
    }
  ], 
  "toolbox": {
    "feature": {
      "restore": {
        "show": true
      }, 
      "saveAsImage": {
        "show": true
      }, 
      "dataView": {
        "readOnly": false, 
        "show": true
      }, 
      "mark": {
        "show": true
      }, 
      "myDownloadData": {
        "title": "\u4e0b\u8f7d\u6570\u636e", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.downloadData, 
        "show": true
      }, 
      "myShowOption": {
        "title": "\u7f16\u8f91", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.showOption, 
        "show": true
      }, 
      "myGoBack": {
        "title": "\u8fd4\u56de", 
        "icon": "image://http://echarts.baidu.com/images/favicon.png", 
        "onclick": self.goBack, 
        "show": false
      }
    }, 
    "show": false
  }, 
  "legend": {
    "textStyle": {
      "padding": 0, 
      "lineHeight": 10, 
      "fontSize": 10
    }, 
    "show": true, 
    "itemHeight": 12, 
    "itemGap": 5, 
    "padding": 0, 
    "itemWidth": 12, 
    "pageTextStyle": {}, 
    "data": [
      {
        "name": "seq", 
        "icon": "circle"
      }
    ], 
    "left": "left"
  }
}

myChart.on('click', function(params){console.log(params)})
