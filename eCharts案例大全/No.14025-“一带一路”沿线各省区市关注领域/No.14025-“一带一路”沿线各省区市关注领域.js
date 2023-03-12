data = [{
    "value": 6766,
    "name": "对外经贸合作"
}, {
    "value": 6619,
    "name": "科技"
}, {
    "value": 6094,
    "name": "金融"
}, {
    "value": 5248,
    "name": "能源"
}, {
    "value": 5132,
    "name": "文化体育"
}, {
    "value": 5126,
    "name": "基础设施"
}, {
    "value": 5106,
    "name": "物流"
}, {
    "value": 4986,
    "name": "教育"
}, {
    "value": 4130,
    "name": "铁路"
}, {
    "value": 3501,
    "name": "国内贸易"
}, {
    "value": 2666,
    "name": "旅游"
}, {
    "value": 2557,
    "name": "电力"
}, {
    "value": 2485,
    "name": "民航"
}, {
    "value": 2256,
    "name": "环境保护"
}, {
    "value": 2216,
    "name": "重大项目"
}, {
    "value": 2213,
    "name": "信息产业"
}, {
    "value": 2210,
    "name": "农林牧渔业"
}, {
    "value": 2202,
    "name": "公路"
}, {
    "value": 2146,
    "name": "航空航天"
}, {
    "value": 2018,
    "name": "医药卫生"
}];
var data_name = [];
var data_value = [];
for (var m in data) {
    data_name.push(data[m]['name'])
    data_value.push(data[m]['value'])
}
option = {
    backgroundColor: "#000",
    title: {
        text: '“一带一路”沿线各省区市关注领域',
        subtext:'纯属虚构',
        left: '50%',
        top:'30',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
            fontFamily: '宋体'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: data_name,
        axisTick: {
            alignWithLabel: true
        },
        "axisLabel": {
            interval: 0,
            rotate: 45,
            show: true,
            splitNumber: 20,
            textStyle: {
                fontFamily: "微软雅黑",
                fontSize: '14px',
                color: "#fff",
                fontWeight: 'normal',

            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
    }],
    // itemStyle:{
    //     normal:{
    //         color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
    //     }
    // },
    series: [{
        name: '值',
        type: 'bar',
        barWidth: '60%',
        data: data_value,
        itemStyle: {
            normal: {
                color: function(d) {
                    return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16);
                }
            }
        },
    }]
};