option = {
    tooltip: { show: false },
    grid: { left: 10, top: 10, bottom: 20, right: 10, containLabel: true },
    xAxis: {
        type: 'value',
        boundaryGap: false,
        max: 20, // Math.ceil(max / 4) * 5 || 10
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { show: false },
        axisLabel: { color: '#999' },
        splitLine: { lineStyle: { color: ['#CEEDFF'], type: [5, 8], dashOffset: 3 } },
    },
    yAxis: {
        type: 'category',
        data: [
            '头面部清洁、梳理',
            '协助更衣',
            '协助进食/水',
            '整理床位',
            '手、足部清洁',
            '口腔清洁',
            '床上洗发',
            '指/趾甲护理',
            '床上温水擦浴',
            '排泄护理',
        ],
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { fontSize: 14, color: '#666', margin: 16, padding: 0 },
        inverse: true,
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            showBackground: true,
            backgroundStyle: { color: 'rgba(82, 168, 255, 0.1)', borderRadius: [0, 8, 8, 0] },
            itemStyle: {
                color: '#52A8FF',
                normal: {
                    borderRadius: [0, 8, 8, 0],
                    color: function (params) {
                        // 定义一个颜色集合
                        let colorList = [
                            '#52A8FF',
                            '#00B389',
                            '#FFA940',
                            '#FF5A57',
                            '#29EFC4',
                            '#F8AEA4',
                            '#FFC53D',
                            '#009982',
                            '#C099FC',
                            '#F5855F',
                        ];
                        // 对每个bar显示一种颜色
                        return colorList[params.dataIndex];
                    },
                },
            },
            barMaxWidth: 16,
            label: { show: true, position: 'insideRight', offset: [-5, 2], color: '#fff' },
            data: [15, 12, 12, 11, 11, 11, 11, 7, 6, 3],
        },
    ],
};
