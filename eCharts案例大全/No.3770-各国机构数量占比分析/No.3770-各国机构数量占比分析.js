

let Data = [
        {
            "name": "美国",
            "count": 234
        },
        {
            "name": "英国",
            "count": 66
        },
        {
            "name": "中国",
            "count": 65
        },
        {
            "name": "日本",
            "count": 53
        },
        {
            "name": "德国",
            "count": 41
        },
        {
            "name": "意大利",
            "count": 25
        },
        {
            "name": "加拿大",
            "count": 23
        },
        {
            "name": "澳大利亚",
            "count": 23
        },
        {
            "name": "法国",
            "count": 22
        },
        {
            "name": "西班牙",
            "count": 21
        },
        {
            "name": "韩国",
            "count": 19
        },
        {
            "name": "荷兰",
            "count": 18
        },
        {
            "name": "瑞典",
            "count": 10
        },
        {
            "name": "芬兰",
            "count": 9
        },
        {
            "name": "瑞士",
            "count": 9
        },
        {
            "name": "奥地利",
            "count": 8
        },
        {
            "name": "丹麦",
            "count": 8
        },
        {
            "name": "印度",
            "count": 7
        },
        {
            "name": "葡萄牙",
            "count": 7
        },
        {
            "name": "新西兰",
            "count": 6
        },
        {
            "name": "以色列",
            "count": 6
        },
        {
            "name": "巴西",
            "count": 5
        },
        {
            "name": "希腊",
            "count": 5
        },
        {
            "name": "马来西亚",
            "count": 5
        },
        {
            "name": "波兰",
            "count": 5
        },
        {
            "name": "比利时",
            "count": 5
        },
        {
            "name": "匈牙利",
            "count": 4
        },
        {
            "name": "挪威",
            "count": 4
        },
        {
            "name": "南非",
            "count": 4
        },
        {
            "name": "新加坡",
            "count": 3
        },
        {
            "name": "俄罗斯",
            "count": 3
        },
        {
            "name": "土耳其",
            "count": 3
        },
        {
            "name": "泰国",
            "count": 2
        },
        {
            "name": "智利",
            "count": 2
        },
        {
            "name": "捷克",
            "count": 2
        },
        {
            "name": "克罗地亚",
            "count": 2
        },
        {
            "name": "伊朗",
            "count": 2
        },
        {
            "name": "爱尔兰",
            "count": 2
        },
        {
            "name": "阿根廷",
            "count": 2
        },
        {
            "name": "埃及",
            "count": 2
        }
    ];
Data.map( item => {
    item.value = item.count;
})
let title = "各国机构数量占比分析";
let data_total = 0 //总数
Data.forEach( item => data_total += item.value )
option = {
    backgroundColor: '#fff',
    color: ['#7A8FFF', '#50E696', '#28D278', '#FFD341', '#FFD29D', '#B797FF'],
    title: {
        itemGap: 10,
        text: title,
        // subtext: data_total,
        left: '52%',
        top: '40px',
        textAlign: 'center',
        textStyle: {
            fontWeight: '400',
            fontSize: 18,
            color: '#666'
        },
        subtextStyle: {
            fontFamily: 'Arial',
            fontWeight: '400',
            fontSize: 40,
            color: '#111',
        }
    },
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b} : {c} 人',
        // backgroundColor: "rgba(0,0,0,0.6)",
        // borderColor: "rgba(0,0,0,0.6)",
        padding: 15,
        textStyle: {
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
        },
    },
    legend: {
        itemGap: 32,
        icon: "circle",
        type: 'scroll',
        orient: 'vertical',
        right: 120,
        top: 105, // "center"
        bottom: 80,
        pageIconColor: "rgba(153,153,153,.8)",
        pageIconInactiveColor: "rgba(153,153,153,.3)",
        pageTextStyle: {
            color: "#666",
        },
        textStyle: {
            fontSize: '20px',
            color: '#77899c',
            rich: {
                icon: {
                    width: 14,
                    height: 14,
                    borderColor: 'red'
                },
                a: {
                    color: '#666',
                    width: 110,
                    padding: [0,0,0,0]
                },
                b: {
                    color: '#666',
                    width: 40,
                    align: 'right',
                    padding: [0,10,0,10],
                },
                c: {
                    color: '#999',
                    width: 60,
                    align: 'right',
                }
            }
        },
        formatter: (name) => {
            let target;
            for (let i = 0; i < Data.length; i++) {
                if (Data[i].name == name) {
                    target = Data[i].value;
                }
            }
            let em = '<div style="border: 1px solid #333;margin: 0 20px;"></div>';
            let split = ' | ';
            // return `{a|${name}}{b|${((target / data_total) * 100).toFixed(2) + "%"}}{c|${target} 人}`
            return `{a|${name}      ${((target / data_total) * 100).toFixed(2) + "%"}}{c|${target} }`
        },
    },
    series: [{
        itemStyle: {
            borderWidth: 1, //设置border的宽度有多大
            borderColor: '#fff',
        },
        center: ['34%', '50%'],
        name: title,
        type: 'pie',
        // radius: ['50%', '60%'], // ['55%', '70%']
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                formatter: '',
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
            },

        },
        data: Data
    }]
}