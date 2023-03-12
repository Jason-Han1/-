var highPlan = [{
    "theName": "（SWSQ-2019-15107）贵宾权益系统2.1（前置）",
    "planBegin": "2019-07-01T13:00:00.000+0800",
    "planEnd": "2020-12-31T14:00:00.000+0800",
    "raleBegin": "2019-07-01T13:00:00.000+0800",
    "raleEnd": null
}, {
    "theName": "（SWSQ-2019-14960）4.0二期-神州数码融信-ESB系统（扫码取款）",
    "planBegin": "2019-07-02T13:00:00.000+0800",
    "planEnd": "2020-09-07T13:00:00.000+0800",
    "raleBegin": "2019-07-02T13:00:00.000+0800",
    "raleEnd": null
}, {
    "theName": "（SWSQ-2019-15105）个人客户CIF系统2019年优化—神码",
    "planBegin": "2019-07-08T13:00:00.000+0800",
    "planEnd": "2020-07-31T13:00:00.000+0800",
    "raleBegin": "2019-07-08T13:00:00.000+0800",
    "raleEnd": "2020-08-06T13:00:00.000+0800"
}, {
    "theName": "（SWSQ-2019-14955）手机银行4.0网点服务变更-大前置系统",
    "planBegin": "2019-07-03T13:00:00.000+0800",
    "planEnd": "2020-11-30T14:00:00.000+0800",
    "raleBegin": "2019-07-03T13:00:00.000+0800",
    "raleEnd": null
}, {
    "theName": "（SWSQ-2019-14956）网银征信查询项目--前置",
    "planBegin": "2019-07-03T13:00:00.000+0800",
    "planEnd": "2020-07-31T13:00:00.000+0800",
    "raleBegin": "2019-07-03T13:00:00.000+0800",
    "raleEnd": "2020-08-06T13:00:00.000+0800"
}, {
    "theName": "（SWSQ-2019-14992）网银互联项目商务",
    "planBegin": "2019-07-12T13:00:00.000+0800",
    "planEnd": "2020-07-31T13:00:00.000+0800",
    "raleBegin": "2019-07-12T13:00:00.000+0800",
    "raleEnd": "2020-08-06T13:00:00.000+0800"
}, {
    "theName": "（SWSQ-2019-14968）银联代付上收网关商务",
    "planBegin": "2019-07-17T13:00:00.000+0800",
    "planEnd": "2020-08-31T13:00:00.000+0800",
    "raleBegin": "2019-07-17T13:00:00.000+0800",
    "raleEnd": null
}, {
    "theName": "（SWSQ-2019-15110）中央社保卡完善项目（大前置）",
    "planBegin": "2019-07-15T13:00:00.000+0800",
    "planEnd": "2020-07-31T13:00:00.000+0800",
    "raleBegin": "2019-07-15T13:00:00.000+0800",
    "raleEnd": "2020-08-06T13:00:00.000+0800"
}, {
    "theName": "（SWSQ-2019-14966）民政局居民经济状况核实升级项目—前置",
    "planBegin": "2019-07-18T13:00:00.000+0800",
    "planEnd": "2020-08-31T13:00:00.000+0800",
    "raleBegin": "2019-07-18T13:00:00.000+0800",
    "raleEnd": null
}, {
    "theName": "（SWSQ-2019-14975）手机银行、微信银行客户信息更新项目-神州数码-手机银行前置开发",
    "planBegin": "2019-07-29T13:00:00.000+0800",
    "planEnd": "2020-01-28T14:00:00.000+0800",
    "raleBegin": "2019-07-29T13:00:00.000+0800",
    "raleEnd": "2020-07-24T13:00:00.000+0800"
}]
option = {
    grid: {
        containLabel: true,
        right: 25,
        left: 0,
        bottom: 0,
        top: 30
    },
    legend: {
        show: true,
        itemHeight: 6,
        right: 25,
        itemGap: 30,
        data: ['计划日期', '实际日期'],
        textStyle: {
            color: '#666'
        },
        selectedMode: false
    },
    xAxis: {
        type: 'time',
        scale: true,
        silent: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E1E1E2',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        minInterval: 3600 * 24 * 1000 * 30 * 3,
        axisLabel: {
            show: true,
            color: '#666666',
            formatter: (value, index) => {
                const v = new Date(value)
                const year = v.getFullYear()
                const month = (v.getMonth() + 1 < 10 ? '0' + (v.getMonth() + 1) : v.getMonth() + 1)
                return 'FY' + year.toString().substr(2, 2) + ' ' + month
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            width: 30,
            color: '#666666',
            formatter: function(name) {
                return (name.length > 8 ? (name.slice(0, 10) + '...') : name)
            }
        },
        data: highPlan.map(e => e.theName)
    },
    tooltip: {
        trigger: 'axis',
        formatter: (params) => {
            var res = ''
            var name = ''
            var start = ''
            var end = ''
            const arr = params.splice(0, 4)
            for (var i in arr) {
                var k = i % 2
                if (!k) {
                    start = arr[i].data ? arr[i].data : '-'
                }
                if (k) {
                    name = arr[i].seriesName
                    end = arr[i].data ? arr[i].data : '-'
                    res += name + ' : ' + end + '~' + start + '</br>'
                }
            }
            return arr[0].name + '</br>' + res
        },
        backgroundColor: 'rgba(71, 163, 271, 0.8)',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(150,150,150,0.1)'
            }
        }
    },
    series: [{
            barWidth: 12,
            name: '计划日期', // 结束
            type: 'bar',
            stack: '总量0',
            itemStyle: {
                color: '#D8DCFF',
                barBorderRadius: [0, 5, 5, 0]
            },
            zlevel: -1,
            data: highPlan.map(e => e.planEnd ? e.planEnd : ''),
            emphasis: {
                itemStyle: {
                    color: '#D8DCFF'
                }
            }
        },
        {
            barWidth: 12,
            name: '计划日期',
            type: 'bar',
            stack: '总量0',
            itemStyle: {
                color: '#fff'
            },
            zlevel: -1,
            z: 3,
            data: highPlan.map(e => e.planBegin ? e.planBegin : ''),
            emphasis: {
                itemStyle: {
                    color: '#fff'
                }
            }
        },
        {
            barWidth: 12,
            name: '实际日期',
            type: 'bar',
            stack: '总量1',
            itemStyle: {
                color: '#FFE4CF',
                barBorderRadius: [0, 5, 5, 0]
            },
            zlevel: -1,
            data: highPlan.map(e => e.raleEnd ? e.raleEnd : ''),
            emphasis: {
                itemStyle: {
                    color: '#FFE4CF'
                }
            }
        },
        {
            barWidth: 12,
            name: '实际日期',
            type: 'bar',
            stack: '总量1',
            itemStyle: {
                color: '#fff'
            },
            zlevel: -1,
            z: 3,
            data: highPlan.map(e => e.raleBegin ? e.raleBegin : '')
        },
        {
            name: '底部',
            data: highPlan.map(e => e.planBegin ? e.planBegin : ''),
            stack: '总量0',
            type: 'pictorialBar',
            barMaxWidth: '12',
            symbol: 'rect',
            symbolPosition: 'end',
            symbolOffset: [0, -8],
            symbolSize: [2, 12],
            itemStyle: {
                color: '#1D68CD'
            }
        },
        {
            name: '底部',
            data: highPlan.map(e => e.raleBegin ? e.raleBegin : ''),
            stack: '总量1',
            type: 'pictorialBar',
            barMaxWidth: '12',
            symbol: 'rect',
            symbolPosition: 'end',
            symbolOffset: [0, 8],
            symbolSize: [2, 12],
            itemStyle: {
                color: '#FC5B00'
            }
        }
    ]
};