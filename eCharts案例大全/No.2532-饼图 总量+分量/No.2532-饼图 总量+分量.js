var data = [
    {
        name: '当年增长',
        value: 20000,
        color: ['#FE805A', '#FF4340', '#552B29'],
    },
    {
        name: '公司',
        value: 10000,
        color: ['#3CFFD3', '#1E83FF', '#004378'],
    },
    {
        name: '零售',
        value: 5000,
        color: ['#FFDB47', '#FAB000', '#6C570F'],
    },
    {
        name: '银行卡',
        value: 5000,
        color: ['#BBFDFF', '#8DFBFF', '#004378'],
    },
];

var titleArr = [],
    seriesArr = [];
data.forEach(function (item, index) {
    titleArr.push({
        text: item.name == '当年新增' ? item.name + '→' : item.name,
        left: index * 20 + 20 + '%',
        top: '65%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '12',
            color: item.color[0],
            textAlign: 'center',
        },
    });
    let value = (item.value + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        itemStyle: {
            normal: {
                color: item.color[3],
                shadowColor: item.color[3],
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [index * 20 + 20 + '%', '50%'],
        data: [
            {
                // 饼图内部文字相关设置
                value: item.value,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [
                                {
                                    offset: 0,
                                    color: item.color[0], // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: item.color[1], // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                },
                label: {
                    normal: {
                        formatter: function (params) {
                            return '在线统计' + '\n' + params.value;
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'lighter',
                            color: "rgba(210, 216, 221, 1)",
                        },
                    },
                },
            },
            // 剩余内容
            {
                value: 100000 - item.value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: item.color[2],
                    },

                    emphasis: {
                        scale: false,
                        // color: item.color[3],
                    },
                },
            },
        ],
    });
});

option = {
    backgroundColor: 'rgba(0, 46, 82, 1)',
    title: titleArr,
    series: seriesArr,
    tooltip: {
        show: true,
        trigger: 'item',
        // axisPointer: {
        //   type: "none",
        // },
        formatter: function (params) {
            console.log(params);
            let value = (params.data.value + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
            return params.seriesName + ' : ' + value;
        },
    },
};
