//https://echarts.apache.org/examples/zh/editor.html?c=line-stack&theme=light


data = {
  "xwddata": {
    "网站总流量 webtotalflow:": "10.03",
    "网络访问次数 webvisitnum:": 9175586,
    "攻击Ip attackip:": 114,
    "拦截攻击次数 interceptattacknum:": 320
  },
  "qqzxdata": {
    "业务规则异常": {
      "未注册使用的接口": 57,
      "注册接口无调用量": 173
    },
    "业务监测统计": {
      "接口异常总量": 1705,
      "使用接口数": 186,
      "接口调用总量": 4317134,
      "注册接口数": 334,
      "datail": [
        {
          "time": "2020-09-18",
          "invokeNum": 653132,
          "failNum": 193,
          "failPer": "0.00030"
        },
        {
          "time": "2020-09-19",
          "invokeNum": 513563,
          "failNum": 170,
          "failPer": "0.00033"
        },
        {
          "time": "2020-09-20",
          "invokeNum": 566239,
          "failNum": 23,
          "failPer": "0.00004"
        },
        {
          "time": "2020-09-21",
          "invokeNum": 603616,
          "failNum": 166,
          "failPer": "0.00028"
        },
        {
          "time": "2020-09-22",
          "invokeNum": 736938,
          "failNum": 219,
          "failPer": "0.00030"
        },
        {
          "time": "2020-09-23",
          "invokeNum": 616888,
          "failNum": 922,
          "failPer": "0.00149"
        },
        {
          "time": "2020-09-24",
          "invokeNum": 626758,
          "failNum": 12,
          "failPer": "0.00002"
        }
      ]
    }
  },
  "jkmdata": {
    "weekData": {
      "sfzdyl": 1946020,
      "sjhdyl": 27450747,
      "dyl": 29396767,
      "ycdyl": 190,
      "detail": [
        {
          "dataDay": 20200918,
          "dyl": 4301500,
          "sfzdyl": 317964,
          "sjhdyl": 3983536,
          "dyycl": 0,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200919,
          "dyl": 3776222,
          "sfzdyl": 140338,
          "sjhdyl": 3635884,
          "dyycl": 4,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200920,
          "dyl": 3946596,
          "sfzdyl": 290210,
          "sjhdyl": 3656386,
          "dyycl": 0,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200921,
          "dyl": 4093623,
          "sfzdyl": 324695,
          "sjhdyl": 3768928,
          "dyycl": 106,
          "dyycper": "0.00003"
        },
        {
          "dataDay": 20200922,
          "dyl": 4356536,
          "sfzdyl": 342639,
          "sjhdyl": 4013897,
          "dyycl": 14,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200923,
          "dyl": 4434982,
          "sfzdyl": 329093,
          "sjhdyl": 4105889,
          "dyycl": 6,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200924,
          "dyl": 4487308,
          "sfzdyl": 201081,
          "sjhdyl": 4286227,
          "dyycl": 60,
          "dyycper": "0.00001"
        }
      ]
    },
    "lastWeekData": {
      "sfzdyl": 2606128,
      "sjhdyl": 20215530,
      "dyl": 22821658,
      "ycdyl": 302,
      "detail": [
        {
          "dataDay": 20200911,
          "dyl": 2739385,
          "sfzdyl": 560387,
          "sjhdyl": 2178998,
          "dyycl": 32,
          "dyycper": "0.00001"
        },
        {
          "dataDay": 20200912,
          "dyl": 2367728,
          "sfzdyl": 270799,
          "sjhdyl": 2096929,
          "dyycl": 144,
          "dyycper": "0.00006"
        },
        {
          "dataDay": 20200913,
          "dyl": 2392195,
          "sfzdyl": 314126,
          "sjhdyl": 2078069,
          "dyycl": 0,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200914,
          "dyl": 3207643,
          "sfzdyl": 383155,
          "sjhdyl": 2824488,
          "dyycl": 5,
          "dyycper": "0.00000"
        },
        {
          "dataDay": 20200915,
          "dyl": 3820777,
          "sfzdyl": 388909,
          "sjhdyl": 3431868,
          "dyycl": 22,
          "dyycper": "0.00001"
        },
        {
          "dataDay": 20200916,
          "dyl": 4234518,
          "sfzdyl": 365960,
          "sjhdyl": 3868558,
          "dyycl": 94,
          "dyycper": "0.00002"
        },
        {
          "dataDay": 20200917,
          "dyl": 4059412,
          "sfzdyl": 322792,
          "sjhdyl": 3736620,
          "dyycl": 5,
          "dyycper": "0.00000"
        }
      ]
    }
  }
}

weekData = data.jkmdata.weekData.detail.map(function(item){
                return item.dyl
            })
lastWeekData = data.jkmdata.lastWeekData.detail.map(function(item){
                return item.dyl
            })

option = {
    title: {
        text: '健康码调用量同比',
        left: 20
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [ '上周','本周']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周五','周六', '周日','周一', '周二', '周三', '周四']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '本周',
            type: 'line',
            data: weekData
        },
        {
            name: '上周',
            type: 'line',
            data: lastWeekData
        }

    ]
};