const colorList = ['#1183ED ', '#00CF92', '#F78048', '#EF9D0F', '#EF4359'];

option = {
    // title: {
    // text: 'Cluster',
    // subtext: '3',
    // textStyle: {
    //     fontSize: 16,
    //     color: '#999',
    //     lineHeight: 20
    // },
    // subtextStyle: {
    //     fontSize: 28,
    //     color: '#333'
    // },
    // textAlign: 'center',
    // left: '39.8%',
    // top: '45%'
    // },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '10%',
        top: 'center',
        itemGap: 30,
        selectedMode: false,
        // icon: 'pin',
        icon: 'circle',
        data: ['博士研究生', '硕士研究生', '大学', '专科', '专科以下'],
        textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width: 100,
                },
                unum: {
                    color: '#4ed139',
                    width: 40,
                    align: 'right',
                },
            },
        },
        formatter(name) {
            return `{uname|${name}}{unum|value}`;
        },
    },
    color: colorList,
    series: [
        {
            name: '学历',
            type: 'pie',
            radius: [60, 90],
            center: ['40%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                borderWidth: 0,
                borderColor: '#fff',
            },
            data: [
                { name: '博士研究生', value: 40 },
                { name: '硕士研究生', value: 25 },
                { name: '大学', value: 18 },
                { name: '专科', value: 12 },
                { name: '专科以下', value: 5 },
            ],
        },
    ],
};
