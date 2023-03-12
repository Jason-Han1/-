let dataPieAccesInfo = [{
        value: 934,
        name: '机柜'
    },
    {
        value: 436,
        name: '路由器'
    },
    {
        value: 620,
        name: '交换机'
    },
    {
        value: 252,
        name: '服务器'
    },
    {
        value: 312,
        name: 'PDU'
    },

];

let total = 0;
dataPieAccesInfo.forEach(function(val, idx, arr) {
    total += val.value;
})
option = {
    // backgroundColor: '#02102b',
    color: ['#e062ae', "#67e0e3", "#37a2da", "#ffdb5c", "#ff9f7f"],
    title: {
        text: '总资产',
        subtext: '2685',
        textStyle: {
            color: '#4effff',
            fontSize: 12,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 12,
            color: ['#85c7e3']
        },
        x: 'center',
        y: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid: {
        left: '5px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '5px', // 与容器顶部的距离
        bottom: '5px', // 与容器底部的距离
    },
    legend: {
        // orient: 'vertical',
        icon: "vertical",
        // right: '1%',
        bottom: "1%",
        data: ['机柜', '路由器', '交换机', '服务器', 'PDU'],
        itemGap: 20,
        itemWidth: 15,
        itemHeight: 8,
        formatter: function(name) {

            let target, percent;
            for (let i = 0; i < dataPieAccesInfo.length; i++) {
                if (dataPieAccesInfo[i].name === name) {
                    target = dataPieAccesInfo[i].value;
                    percent = ((target / total) * 100).toFixed(1);
                }
            }
            let arr = [percent + '% ' + ' {yellow|' + target + '}', ' {blue|' + name + '}'];
            return arr.join("\n")

        },
        textStyle: {
            lineHeight: 20,
            color: '#f0f4f6',
            align: 'right',
            rich: {
                yellow: {
                    color: '#00b5f3',
                    fontWeight: "bold"

                },
                blue: {
                    color: '#97c8ea',
                    align: 'right',

                },
            }

        },
    },
    series: [{
        name: '资产设备统计',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['50%', '50%'],
        data: dataPieAccesInfo,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        labelLine: {
            show: true,
            length: 5,
            length2: 5,
            lineStyle: {
                color: '#40b3f1',
                width: 2
            }
        },
        label: {
            normal: {
                formatter: "{d}%",
                color: '#c3e5f0',

            },

        },
    }]
};