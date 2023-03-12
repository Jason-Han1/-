//粘贴option到下方
option = {
  "toolbox": false,
  "tooltip": {
    "trigger": "item",
    "format": "{a} <br/>{b} : {c} ({d}%)"
  },
  "title": {
    "text": "单位性质统计",
    "left": "center",
    "textStyle": {
      "align": "center"
    }
  },
  "legend": {
    "data": [
      "供应",
      "加工",
      "存储",
      "生产",
      "销售"
    ],
    "left": "left",
    "orient": "vertical"
  },
  "series": [
    {
      "name": "数量",
      "type": "pie",
      "data": [
        {
          "name": "存储",
          "value": "3613.0"
        },
        {
          "name": "供应",
          "value": "653.0"
        },
        {
          "name": "加工",
          "value": "353.0"
        },
        {
          "name": "销售",
          "value": "3054.0"
        },
        {
          "name": "生产",
          "value": "2327.0"
        }
      ],
      "center": [
        "50%",
        "50%"
      ]
    }
  ]
}
//输入修改的option
let newOpyion={
    "title":false,
    "legend": {
    "left": "center",
    "orient": "horizontal"
  },
    "series": [
    {
      "name": "数量",
      "type": "pie",
      "data": [
        {
          "name": "存储",
          "value": "3613.0"
        },
        {
          "name": "供应",
          "value": "653.0"
        },
        {
          "name": "加工",
          "value": "353.0"
        },
        {
          "name": "销售",
          "value": "3054.0"
        },
        {
          "name": "生产",
          "value": "2327.0"
        }
      ],
      "center": [
        "50%",
        "50%"
      ]
    }
  ]
}







const emptyTarget = value => Array.isArray(value) ? [] : {}
const clone = (value, options) => deepmerge(emptyTarget(value), value, options)

function combineMerge (target, source, options){
  const destination = target.slice()

  source.forEach(function (e, i) {
    if (typeof destination[i]==='undefined') {
      const cloneRequested = options.clone!==false
      const shouldClone = cloneRequested && options.isMergeableObject(e)
      destination[i] = shouldClone ? clone(e, options) : e
    } else if (options.isMergeableObject(e)) {
      destination[i] = deepmerge(target[i], e, options)
    } else if (target.indexOf(e)=== -1) {
      destination.push(e)
    }
  })
  return destination
}

option=deepmerge( option,newOpyion,	{ arrayMerge: combineMerge });
