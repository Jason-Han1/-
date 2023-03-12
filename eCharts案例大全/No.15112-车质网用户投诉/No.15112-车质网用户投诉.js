option = {
    title : {
        text: '车质网用户投诉',
        subtext: '测试数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[{"name": "\u79bb\u5408\u5668", "value": 850}, {"name": "\u8f66\u8eab\u9644\u4ef6\u53ca\u7535\u5668", "value": 9418}, {"name": "\u914d\u4ef6\u4e89\u8bae", "value": 272}, {"name": "\u8f6e\u80ce", "value": 1166}, {"name": "\u53d1\u52a8\u673a", "value": 7623}, {"name": "\u9500\u552e\u6b3a\u8bc8", "value": 458}, {"name": "\u5176\u4ed6\u539f\u56e0", "value": 432}, {"name": "\u53d8\u901f\u5668", "value": 6183}, {"name": "\u4eba\u5458\u6280\u672f", "value": 913}, {"name": "\u670d\u52a1\u6536\u8d39", "value": 156}, {"name": "\u5236\u52a8\u7cfb\u7edf", "value": 1583}, {"name": "\u8f6c\u5411\u7cfb\u7edf", "value": 1737}, {"name": "\u670d\u52a1\u6001\u5ea6", "value": 2105}, {"name": "\u524d\u540e\u6865\u53ca\u60ac\u6302\u7cfb\u7edf", "value": 2459}, {"name": "\u627f\u8bfa\u4e0d\u5151\u73b0", "value": 593}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
