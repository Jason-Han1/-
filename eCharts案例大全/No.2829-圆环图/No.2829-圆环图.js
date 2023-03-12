const payload = {
    id: 'left-center-1',
    title: '年龄占比',
    toolTip: false,
    data: {
        total: '197',
        data: ['1', '32', '57', '67', '40'],
        x: ['35岁以下', '35-40岁', '40-45岁', '45-50岁', '50岁以上'],
    },
};

data = [];

const color = ['#2F7DF2', '#F9CA3C', '#2E5CF2', '#34E9A3', '#F63048', '#F97A3C', '#2FD9F2', '#A9DB32', '#6151F1'];

payload.data.x.forEach((item, index) => {
    data.push({ value: payload.data.data[index], name: item, label: { color: color[index] } });
});

const tooltip = payload.toolTip !== undefined ? payload.toolTip : true;

option = {
    backgroundColor: 'transparent',
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true,
    },
    tooltip: {
        show: tooltip,
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        // 轴触发提示才有效
        axisPointer: {
            type: 'shadow',
        },
        shadowStyle: {
            color: 'rgba(157, 168, 245, 0.1)',
        },
        formatter(data) {
            var tmp = ['<h5 class="echarts-tip-h5">' + data.name + '</h5>'];
            tmp.push(
                '<div class="echarts-tip-div"><div class="left">' +
                    data.marker +
                    ' 人数：</div><div class="right">' +
                    data.value +
                    '</div></div>'
            );
            let html1 = '';
            html1 += '<div class="echarts-tip-div">';
            html1 += '<div class="left">' + data.marker + ' 占比：</div>';
            html1 += '<div class="right">' + data.percent + '%</div>';
            html1 += '</div>';
            tmp.push(html1);
            return tmp.join('');
        },
    },
    series: [
        {
            name: payload.title,
            type: 'pie',
            radius: ['60%', '71%'],
            minAngle: 8,
            itemStyle: {
                color(params) {
                    return color[params.dataIndex];
                },
            },
            labelLine: {
                length2: 40,
            },
            label: {
                position: 'outer',
                alignTo: 'none',
                bleedMargin: 5,
                formatter: '{a|{c}} {b|{d}%} \n {b}',
                padding: -40,
                rich: {
                    a: {
                        padding: [0, 0, 5, 0],
                        fontSize: 14,
                        color: '#fff',
                        lineHeight: 20,
                    },
                    b: {
                        padding: [0, 0, 5, 0],
                        lineHeight: 20,
                    },
                },
            },
            data,
        },
    ],
};
