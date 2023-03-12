option = {
    //   title : {
    //     text: '饼图程序调用高亮示例',
    //     x: 'center'
    // },
    // tooltip: {
    //     // trigger: 'item',
    //     // formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },
    // legend: {
    //     // orient: 'vertical',
    //     // left: 'left',
    //     // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    // series : [
    //     {
    //         name: '访问来源',
    //         type: 'pie',
    //         radius : '55%',
    //         center: ['50%', '60%'],
    //         data:[
    //             {value:335, name:'直接访问'},
    //             {value:310, name:'邮件营销'},
    //             {value:234, name:'联盟广告'},
    //             {value:135, name:'视频广告'},
    //             {value:1548, name:'搜索引擎'}
    //         ],
    //         itemStyle: {
    //             emphasis: {
    //                 shadowBlur: 10,
    //                 shadowOffsetX: 0,
    //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
    //             }
    //         }
    //     }
    // ]
    "radar": {
        "center": ["50%", "50%"],
        "startAngle": 90,
        "splitNumber": 3,
        "name": {
            "formatter": "{value}",
            "fontSize": 14,
            "color": "#1890ff"
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": ["#141c42", "#141c42"]
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#153269",
                "width": 1
            }
        },
        "splitLine": {
            "lineStyle": {
                "color": "#ff0000",
                "width": 1
            }
        },
        "indicator": [{
            "text": "语文",
            "max": 100
        }, {
            "text": "数学",
            "max": 100
        }, {
            "text": "外语",
            "max": 100
        }, {
            "text": "物理",
            "max": 100
        }, {
            "text": "化学",
            "max": 100
        }]
    },
    "tooltip": {},
    "color": ["#00c2ff", "#f9cf67", "#e92b77"],
    "emphasis": {
        "lineStyle": {
            "width": 4
        }
    },
    "series": [{
        "name": "雷达图",
        "type": "radar",
        "data": [{
            "name": "三年级1班",
            "value": [85, 65, 55, 90, 82]
        }, {
            "name": "三年级2班",
            "value": [50, 20, 45, 30, 75]
        }, {
            "name": "三年级3班",
            "value": [37, 80, 12, 50, 25]
        }]
    }]
}

let currentIndex = -1;

setInterval(() => {
    let dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);