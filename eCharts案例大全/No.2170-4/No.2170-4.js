option = {
    tooltip: { trigger: 'item', backgroundColor: 'rgba(0,0,0,0.9)',
    formatter: function (params) {
				return (
					params.seriesName +
					'<br/>' +
					params.marker +
					'<span style="color:' +
					params.color +
					'">' +
					params.data['name'] +
					'\n' +
					params.data['value'] +
					'</span>'
				);
			},},
    legend: {
        selectedMode: false,
        orient: 'vertical',
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        right: '50',
        top: 'center',
        textStyle: { fontSize: 12, color: '#FFF' },
    },
    series: [
        {
            name: 'title',
            type: 'pie',
            roseType: 'radius',
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['23%', '50%'],
            center: ['35%', '50%'],
            color: [
                'rgba(82,254,255,1)',
                'rgba(158,232,185,1)',
                'rgba(28,157,255,1)',
                'rgba(129,120,234,1)',
                'rgba(255,255,170,1)',
                'rgba(255,255,170,1)',
            ],
            label: {      normal: {
                    formatter: ['{c|{c}}'].join('\n'),
                    rich: {
                        b: {
                            color: '#aab2cd',
                            lineHeight: 20,
                        },
                        c: {
                            color: '#3bd2fe',
                            fontFamily: 'Lato',
                            fontWeight: '100',
                            fontSize: 14,
                            height: 20,
                        },
                    },
                }, show: true, textStyle: { lineHeight: 25, color: '#FFF' } ,},
            labelLine: { show: true, color: '#FFF', length: 10, length2: 10 },
            itemStyle: { shadowBlur: 15, shadowColor: 'rgba(0, 0, 0, 0.3)', borderColor: '#0a1a2a' },
            data: [
                { value: 41, name: '未处理' },
                { value: 35, name: '待处理' },
                { value: 30, name: '暂停处理' },
                { value: 25, name: '待校验' },
                { value: 23, name: '已关闭' },
                { value: 22, name: '异常' },
            ],
        },
    ],
};
