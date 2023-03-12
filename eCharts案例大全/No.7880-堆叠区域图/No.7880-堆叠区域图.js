
/* 根据毫秒格式化时间 */
var formatDateTime = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    var minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + s;
};
var data = [
        {
          time: '1587626607226',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 153297,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 360,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 85,  "cpuTotalUsage" : 23,  "gatewayRtt" : 36,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87267857,  "txAudioKBitrate" : 42,  "lastmileDelay" : 16,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 176,  "userCount" : 5,  "duration" : 2759,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.57299999999999995,  "rxBytes" : 135439112},
        },
        {
          time: '1587626613229',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 155761,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 374,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 81,  "cpuTotalUsage" : 52,  "gatewayRtt" : 11,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87497756,  "txAudioKBitrate" : 41,  "lastmileDelay" : 13,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 210,  "userCount" : 5,  "duration" : 2765,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.59699999999999998,  "rxBytes" : 135734940},
        },
        {
          time: '1587626621228',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 155889,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 360,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 83,  "cpuTotalUsage" : 25,  "gatewayRtt" : 20,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87696805,  "txAudioKBitrate" : 42,  "lastmileDelay" : 12,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 145,  "userCount" : 5,  "duration" : 2773,  "cpuAppUsage" : 6,  "memTotalUsage" : 0.59799999999999998,  "rxBytes" : 136126856},
        },
        {
          time: '1587626623226',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 155073,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 353,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 83,  "cpuTotalUsage" : 24,  "gatewayRtt" : 3,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87745751,  "txAudioKBitrate" : 40,  "lastmileDelay" : 10,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 138,  "userCount" : 5,  "duration" : 2775,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.59699999999999998,  "rxBytes" : 136223844},
        },
        {
          time: '1587626601225',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 153585,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 390,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 85,  "cpuTotalUsage" : 22,  "gatewayRtt" : 83,  "txPacketLossRate" : 2,  "memoryAppUsageRatio" : 5,  "txBytes" : 87059433,  "txAudioKBitrate" : 39,  "lastmileDelay" : 14,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 183,  "userCount" : 5,  "duration" : 2753,  "cpuAppUsage" : 5,  "memTotalUsage" : 60699999999999998,  "rxBytes" : 135147159},
        },
        {
          time: '1587626619228',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 156353,  "rxPacketLossRate" : 1,  "rxVideoKBitrate" : 376,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 83,  "cpuTotalUsage" : 32,  "gatewayRtt" : 24,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87646229,  "txAudioKBitrate" : 41,  "lastmileDelay" : 12,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 140,  "userCount" : 5,  "duration" : 2771,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.60699999999999998,  "rxBytes" : 136027820},
        },
        {
          time: '1587626609225',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 153265,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 380,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 85,  "cpuTotalUsage" : 22,  "gatewayRtt" : 5,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87347536,  "txAudioKBitrate" : 42,  "lastmileDelay" : 14,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 252,  "userCount" : 5,  "duration" : 2761,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.60699999999999998,  "rxBytes" : 135543530},
        },
        {
          time: '1587626617225',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 162577,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 331,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 81,  "cpuTotalUsage" : 49,  "gatewayRtt" : 23,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87596006,  "txAudioKBitrate" : 41,  "lastmileDelay" : 12,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 138,  "userCount" : 5,  "duration" : 2769,  "cpuAppUsage" : 6,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 135924402},
        },
        {
          time: '1587626627228',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 0,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 559,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 83,  "cpuTotalUsage" : 25,  "gatewayRtt" : 373,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87850873,  "txAudioKBitrate" : 41,  "lastmileDelay" : 12,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 151,  "userCount" : 5,  "duration" : 2779,  "cpuAppUsage" : 6,  "memTotalUsage" : 0.59699999999999998,  "rxBytes" : 136427389},
        },
        {
          time: '1587626611227',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 156017,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 320,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 81,  "cpuTotalUsage" : 36,  "gatewayRtt" : 6,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87428381,  "txAudioKBitrate" : 41,  "lastmileDelay" : 13,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 253,  "userCount" : 5,  "duration" : 2763,  "cpuAppUsage" : 9,  "memTotalUsage" : 0.60599999999999998,  "rxBytes" : 135632090},
        },
        {
          time: '1587626615224',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 162529,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 358,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 81,  "cpuTotalUsage" : 54,  "gatewayRtt" : 15,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87547110,  "txAudioKBitrate" : 41,  "lastmileDelay" : 12,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 142,  "userCount" : 5,  "duration" : 2767,  "cpuAppUsage" : 7,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 135833219},
        },
        {
          time: '1587626625225',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 155073,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 182,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 83,  "cpuTotalUsage" : 21,  "gatewayRtt" : 7,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87797735,  "txAudioKBitrate" : 42,  "lastmileDelay" : 10,  "memAppUsage" : 0.056000000000000001,  "txVideoKBitrate" : 149,  "userCount" : 5,  "duration" : 2777,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 136274103},
        },
        {
          time: '1587626629227',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 155121,  "rxPacketLossRate" : 2,  "rxVideoKBitrate" : 364,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 82,  "cpuTotalUsage" : 23,  "gatewayRtt" : 8,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87900071,  "txAudioKBitrate" : 41,  "lastmileDelay" : 14,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 140,  "userCount" : 5,  "duration" : 2781,  "cpuAppUsage" : 6,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 136528022},
        },
        {
          time: '1587626631228',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 154561,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 340,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 82,  "cpuTotalUsage" : 23,  "gatewayRtt" : 12,  "txPacketLossRate" : 0,  "memoryAppUsageRatio" : 5,  "txBytes" : 87958995,  "txAudioKBitrate" : 39,  "lastmileDelay" : 12,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 176,  "userCount" : 5,  "duration" : 2783,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 136622116},
        },
        {
          time: '1587626603251',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 153361,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 326,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 84,  "cpuTotalUsage" : 23,  "gatewayRtt" : 68,  "txPacketLossRate" : 3,  "memoryAppUsageRatio" : 5,  "txBytes" : 87127343,  "txAudioKBitrate" : 40,  "lastmileDelay" : 15,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 202,  "userCount" : 5,  "duration" : 2755,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.59599999999999997,  "rxBytes" : 135237611},
        },
        {
          time: '1587626605225',
          eventId: 'rtc_stats',
          userId: '1426704877',
          eventParam:
            {  "memoryAppUsageInKbytes" : 153377,  "rxPacketLossRate" : 0,  "rxVideoKBitrate" : 371,  "rxAudioKBitrate" : 0,  "memoryTotalUsageRatio" : 84,  "cpuTotalUsage" : 23,  "gatewayRtt" : 83,  "txPacketLossRate" : 3,  "memoryAppUsageRatio" : 5,  "txBytes" : 87206918,  "txAudioKBitrate" : 42,  "lastmileDelay" : 15,  "memAppUsage" : 0.053999999999999999,  "txVideoKBitrate" : 252,  "userCount" : 5,  "duration" : 2757,  "cpuAppUsage" : 5,  "memTotalUsage" : 0.57099999999999995,  "rxBytes" : 135339794},
        },
      ];
var series = {};
var xAxis = [];
var legend = [];

data.forEach(function(item,idx){
    /* 
    当为第一条数据时  添加图例数据  也可以直接写上面
    当为第一条数据时  创建所有数据的对象集
    */
    if(idx == 0){
        for(var key in item.eventParam){
            legend.push(key)
            series[key] = [item.eventParam[key]]
        }
    }else{
        /* 直接找数据集里对应的字段 追加数据 */
        
        for(var key in item.eventParam){
            series[key].push(item.eventParam[key])
        }
    }
    
    /* 添加时间集 */
    xAxis.push(formatDateTime(new Date(Number(item.time))))
    
})
option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: legend
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                interval:10,    /* 时间分割 x轴每相隔多少条数据显示一个label */
            },
            data:xAxis
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: []
};

/* 添加折线数据 */
for(var key in series){
    option.series.push({
            name: key,
            type: 'line',
            stack: '数值',
            areaStyle: {},
            data: series[key]
        })
}
console.log(option)
