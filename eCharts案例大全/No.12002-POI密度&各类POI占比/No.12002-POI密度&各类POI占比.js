var weilai = [
    {name: '科研教育', value: 5},
    {name: '金融服务', value: 1},
    {name: '政府机构', value: 0},
    {name: '酒店住宿', value: 1},
    {name: '医疗健康', value: 0},
    {name: '休闲娱乐', value: 0},
    {name: '餐饮', value: 0},
    {name: '购物', value: 1},
    {name: '旅游', value: 0}
];
var huairou = [
    {name: '科研教育', value: 31},
    {name: '金融服务', value: 13},
    {name: '政府机构', value: 24},
    {name: '酒店住宿', value: 7},
    {name: '医疗健康', value: 54},
    {name: '休闲娱乐', value: 23},
    {name: '餐饮', value: 73},
    {name: '购物', value: 125},
    {name: '旅游', value: 0}
];
var yizhuang = [
    {name: '科研教育', value: 82},
    {name: '金融服务', value: 51},
    {name: '政府机构', value: 31},
    {name: '酒店住宿', value: 57},
    {name: '医疗健康', value: 59},
    {name: '休闲娱乐', value: 152},
    {name: '餐饮', value: 202},
    {name: '购物', value: 207},
    {name: '旅游', value: 0}
];
var zhongguancun = [
    {name: '科研教育', value: 1303},
    {name: '金融服务', value: 288},
    {name: '政府机构', value: 187},
    {name: '酒店住宿', value: 366},
    {name: '医疗健康', value: 445},
    {name: '休闲娱乐', value: 1301},
    {name: '餐饮', value: 1837},
    {name: '购物', value: 1802},
    {name: '旅游', value: 179}
];
option = {
    title: {
        text: '各类POI占比',
        textStyle: {
            fontSize: 20,
            fontWeight: 'normal'
        },
        left: '30%',
        bottom: '0%'
    },
    toolbox: {
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        left: '45%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0],
        name: 'POI密度(个/平方公里)',
        nameLocation: 'center',
        nameGap: 30,
        nameTextStyle: {
            fontSize: 20
        }
    },
    yAxis: {
        type: 'category',
        data: ['中关村科学城', '亦庄经开区', '怀柔科学城', '未来科技城'],
        inverse: true,
        axisLabel: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        axisTick: {
            show: false
        }
    },
    legend: {
        show: true,
        data: ['科研教育', '金融服务', '政府机构', '酒店住宿', '医疗健康', '休闲娱乐', '餐饮', '购物', '旅游'],
        orient: 'vertical',
        left: '12%',
        top: 'center',
        itemGap: 30,
        itemWidth: 40,
        itemHeight: 20,
        textStyle: {
            fontSize: 16
        }
    },
    series: [{
        name: 'poi密度',
        type: 'bar',
        data: [137.27, 13.3, 3.38, 0.79],
        label: {
            show: true,
            position: 'right'
        }
    }, {
        name: 'zgc',
        type: 'pie',
        radius: [40, 90],
        center: ['35%', '15%'],
        label: {
            position: 'inside',
            formatter: function(param) {
                if (param.percent > 5) {
                    return param.percent + '%'
                } else {
                    return ''
                }
            },
            fontSize: 14
        },
        data: zhongguancun
    }, {
        name: 'yz',
        type: 'pie',
        radius: [40, 90],
        center: ['35%', '38%'],
        label: {
            position: 'inside',
            formatter: function(param) {
                if (param.percent > 5) {
                    return param.percent + '%'
                } else {
                    return ''
                }
            },
            fontSize: 14
        },
        data: yizhuang
    }, {
        name: 'hr',
        type: 'pie',
        radius: [40, 90],
        center: ['35%', '61%'],
        label: {
            position: 'inside',
            formatter: function(param) {
                if (param.percent > 5) {
                    return param.percent + '%'
                } else {
                    return ''
                }
            },
            fontSize: 14
        },
        data: huairou
    }, {
        name: 'wl',
        type: 'pie',
        radius: [40, 90],
        center: ['35%', '84%'],
        label: {
            position: 'inside',
            formatter: function(param) {
                if (param.percent > 5) {
                    return param.percent + '%'
                } else {
                    return ''
                }
            },
            fontSize: 14
        },
        data: weilai
    }]
};