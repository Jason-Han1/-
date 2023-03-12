option = {
    backgroundColor: 'transparent',
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
        },
    },
    series: {
        type: 'sankey',
        layout: 'none',
        layoutIterations: 0,
        emphasis: {
            focus: 'adjacency',
        },
        lineStyle: {
            color: 'source',
            opacity: 0.45,
            curveness: 0.5,
        },
        itemStyle: {
            color: '#1f77b4',
            borderColor: '#1f77b4',
        },
        label: {
            color: 'rgba(0,0,0,1)',
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight:700
        },
        data: [
            {
                name: '华南',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
             {
                name: '华东',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '华北',
                itemStyle: {
                    color: 'rgba(198,89,17)',
                    borderColor: 'rgba(198,89,17)',
                },
            },
            {
                name: '华中',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '西北',
                itemStyle: {
                    color: 'rgba(112,173,71)',
                    borderColor: 'rgba(112,173,71)',
                },
            },
            {
                name: '西南',
                itemStyle: {
                    color: 'rgba(117,113,113)',
                    borderColor: 'rgba(117,113,113)',
                },
            },
            {
                name: '深圳',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '北京',
                itemStyle: {
                    color: 'rgba(198,89,17)',
                    borderColor: 'rgba(198,89,17)',
                },
            },
            {
                name: '广州',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '上海',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '济南',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '东莞',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '珠海',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '青岛',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '无锡',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '厦门',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '成都',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '杭州',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '金华',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '南京',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '西安',
                itemStyle: {
                    color: 'rgba(112,173,71)',
                    borderColor: 'rgba(112,173,71)',
                },
            },
            {
                name: '中山',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '天津',
                itemStyle: {
                    color: 'rgba(198,89,17)',
                    borderColor: 'rgba(198,89,17)',
                },
            },
            {
                name: '苏州',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '威海',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '武汉',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '银川',
                itemStyle: {
                    color: 'rgba(112,173,71)',
                    borderColor: 'rgba(112,173,71)',
                },
            },
            {
                name: '贵阳',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '佛山',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '东营',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '舟山',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '郑州',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '烟台',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '嘉兴',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '三亚',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '宁波',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '潍坊',
                itemStyle: {
                    color: 'rgba(198,89,17)',
                    borderColor: 'rgba(198,89,17)',
                },
            },
            {
                name: '合肥',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '湖州',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '枣庄',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '太原',
                itemStyle: {
                    color: 'rgba(198,89,17)',
                    borderColor: 'rgba(198,89,17)',
                },
            },
            {
                name: '海口',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '长沙',
                itemStyle: {
                    color: 'rgba(0,176,80)',
                    borderColor: 'rgba(0,176,80)',
                },
            },
            {
                name: '淄博',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '聊城',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '常州',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '济宁',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '南宁',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '梅州',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '遵义',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '南昌',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '宿迁',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '福州',
                itemStyle: {
                    color: 'rgba(48,84,150)',
                    borderColor: 'rgba(48,84,150)',
                },
            },
            {
                name: '桂林',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '惠州',
                itemStyle: {
                    color: 'rgba(112,48,160)',
                    borderColor: 'rgba(112,48,160)',
                },
            },
            {
                name: '拉萨',
                itemStyle: {
                    color: 'rgba(117,113,113)',
                    borderColor: 'rgba(117,113,113)',
                },
            },
        ],
        links: [
            { source: '深圳', target: '华南', value: 1 },
            { source: '北京', target: '华北', value: 1 },
            { source: '广州', target: '华南', value: 1 },
            { source: '上海', target: '华东', value: 1 },
            { source: '济南', target: '华东', value: 1 },
            { source: '东莞', target: '华南', value: 1 },
            { source: '珠海', target: '华南', value: 1 },
            { source: '青岛', target: '华东', value: 1 },
            { source: '无锡', target: '华东', value: 1 },
            { source: '厦门', target: '华东', value: 1 },
            { source: '成都', target: '华中', value: 1 },
            { source: '杭州', target: '华东', value: 1 },
            { source: '金华', target: '华东', value: 1 },
            { source: '南京', target: '华东', value: 1 },
            { source: '西安', target: '西北', value: 1 },
            { source: '中山', target: '华南', value: 1 },
            { source: '天津', target: '华北', value: 1 },
            { source: '苏州', target: '华东', value: 1 },
            { source: '威海', target: '华东', value: 1 },
            { source: '武汉', target: '华中', value: 1 },
            { source: '银川', target: '西北', value: 1 },
            { source: '贵阳', target: '华中', value: 1 },
            { source: '佛山', target: '华南', value: 1 },
            { source: '东营', target: '华东', value: 1 },
            { source: '舟山', target: '华东', value: 1 },
            { source: '郑州', target: '华中', value: 1 },
            { source: '烟台', target: '华东', value: 1 },
            { source: '嘉兴', target: '华东', value: 1 },
            { source: '三亚', target: '华南', value: 1 },
            { source: '宁波', target: '华东', value: 1 },
            { source: '潍坊', target: '华北', value: 1 },
            { source: '合肥', target: '华东', value: 1 },
            { source: '湖州', target: '华东', value: 1 },
            { source: '枣庄', target: '华东', value: 1 },
            { source: '太原', target: '华北', value: 1 },
            { source: '海口', target: '华南', value: 1 },
            { source: '长沙', target: '华中', value: 1 },
            { source: '淄博', target: '华东', value: 1 },
            { source: '聊城', target: '华东', value: 1 },
            { source: '常州', target: '华东', value: 1 },
            { source: '济宁', target: '华东', value: 1 },
            { source: '南宁', target: '华南', value: 1 },
            { source: '梅州', target: '华南', value: 1 },
            { source: '遵义', target: '华东', value: 1 },
            { source: '南昌', target: '华东', value: 1 },
            { source: '宿迁', target: '华东', value: 1 },
            { source: '福州', target: '华东', value: 1 },
            { source: '桂林', target: '华南', value: 1 },
            { source: '惠州', target: '华南', value: 1 },
            { source: '拉萨', target: '西南', value: 1 },
        ],
    },
};
