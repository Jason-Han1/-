var defaultFontSize = 14,
    defaultTextColor = '#636c72',
    defaultGlobalColor = ['#5d9cec', '#62c87f', '#f15755', '#fc863f', '#7053b6'],
    defaultFontFamily = 'microsoft yahei',
    defaultBackgroundColor = '#fff',
    defaultShadowColor = 'rgba(204, 214, 235, 0.247059)';

option = {
    title: {
        text: '访问来源',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 400
        }
    },
    backgroundColor: defaultBackgroundColor, // 背景色，默认无背景。
    color: defaultGlobalColor,// 调色盘颜色列表。
    textStyle: {// 全局字体样式
        color: defaultTextColor,
        fontSize: defaultFontSize
    },
    legend: {
        bottom: 0,
        left: 'center',
        width: 500,
        itemWidth: 14,
        itemHeight: 14,
        itemBorderRadius: 8,
        textStyle: {
            // color: "#d7d7d7"
        },
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },

    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: function(param) {
                        //  return param.name + ':\n' + Math.round(param.percent) + '%';
                        return Math.round(param.percent) + '%';
                    }
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
