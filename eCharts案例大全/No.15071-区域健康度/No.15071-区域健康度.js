labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom',
                fontSize:30,
            }
        },
        labelLine: {
            show: true
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '分'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center',
            textStyle: {
                color:'#c00',//低于60红色,
                fontSize:30,
            }
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

//----------------------------------
labelTop_s = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom',
                fontSize:9,
            }
        },
        labelLine: {
            show: true
        }
    }
};
var labelFromatter_precent = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom_s = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center',
            textStyle: {
                color:'#c00',//低于60红色,
                fontSize:14,
            }
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

option = {
    title: {
        text: '区域健康度',
        subtext: '长沙-芙蓉区-XXX小区  更新时间：2017-7-18 15:00',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    /*
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['健康用户', '质差用户', 'Wifi接入', '网线接入']
    },*/
    series: [{
        name: '健康度',
        type: 'pie',
        selectedMode: 'single',
        center: ['100', '140'],
        radius: ['60', '75'],
        itemStyle: labelFromatter,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom
        }, {
            value: 33,
            name: '健康度',
            selected: false,
            itemStyle: labelTop
        }]

    },{
        name: '质差用户占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['240', '100'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '质差用户占比',
            selected: false,
            itemStyle: labelTop_s
        }]

    },{
        name: '卡顿时长占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['340', '100'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '卡顿时长占比',
            selected: false,
            itemStyle: labelTop_s
        }]

    },{
        name: '卡顿次数占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['440', '100'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '卡顿次数占比',
            selected: false,
            itemStyle: labelTop_s
        }]

    },{
        name: '质差用户占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['240', '200'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '响应时长',
            selected: false,
            itemStyle: labelTop_s
        }]

    },{
        name: '卡顿时长占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['340', '200'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '切换时长',
            selected: false,
            itemStyle: labelTop_s
        }]

    },{
        name: '卡顿次数占比',
        type: 'pie',
        selectedMode: 'single',
        center: ['440', '200'],
        radius: ['35', '45'],
        itemStyle: labelFromatter_precent,
        data: [{
            value: 67,
            name: 'other',
            selected: false,
            itemStyle: labelBottom_s
        }, {
            value: 33,
            name: '切换时长达标率',
            selected: false,
            itemStyle: labelTop_s
        }]

    }]
};