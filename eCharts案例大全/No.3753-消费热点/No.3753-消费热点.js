var colors = ['#435a9e', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4']
var data = [{
    legendName: ["面授课程", "网络课程", "直播课程", "课件资源", "在线刷题", '在线考试', '音频课程', '超值礼盒', '其他9', '其他10', '其他11', '其他12'],
    list: [{
        name: "面授课程",
        value: 12
    }, {
        name: "网络课程",
        value: 11
    }, {
        name: "直播课程",
        value: 10
    }, {
        name: "课件资源",
        value: 9
    }, {
        name: "在线刷题",
        value: 8
    }, {
        name: "在线考试",
        value: 7
    }, {
        name: "音频课程",
        value: 6
    }, {
        name: "超值礼盒",
        value: 5
    }]

}]
option = {
    title: {
        text: '消费热点',
        x: 'left',
        top: '0',
        textStyle: {
            color: '#2D3E53',
            fontSize: 16,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: colors,
    legend: {
        //图例
        show: true,
        textStyle: {
            color: '#2e95f3'
        },
        itemGap: 10,
        x: 'center',
        y: 'bottom',
        data: data[0].legendName
    },
    calculable: true,
    series: [{
        name: '消费热点',
        type: 'pie',
        label: {
            // 悬浮提示文字
            normal: {
                show: false,
                formatter: '{b} \n  {c} ({d}%)',

            }
        },
        // radius: [50, 250],
        radius: [50, '90%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
            borderRadius: 8
        },
        data: data[0].list
    }]
};