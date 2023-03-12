function roundDatas(num, size, starname, color) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        datas.push({
            name: 'circle' + i,

        });
    }

    var mark = Math.floor(Math.random() * num);

    datas[mark] = {
        name: 'circle' + mark,
        symbolSize: size,
        itemStyle: {
            normal: {
                color: color,
                opacity: 1
            }
        },
        label: {
            normal: {
                show: true,
                formatter: starname,

            }
        }
    };

    return datas;

}

function linkDatas(num) {
    var ldatas = [];
    for (var i = 0; i < num; i++) {
        ldatas.push({
            source: 'circle' + i,
            target: 'circle' + (i + 1)
        });
    }
    ldatas.push({
        source: 'circle' + (i - 1),
        target: 'circle0'
    })
    return ldatas;

}

function starSeries(circlesize, data, link, flag) {
    var star = {
        type: 'graph',
        //layout: 'circular',
        layout: 'force',
        /*
        force: {
            repulsion: 90,
            gravity: 0.2
        },
        */
        draggable: true,
        circular: {
            rotateLabel: flag
        },
        itemStyle: {
            normal: {
                color: '#1d1626',
                opacity: 0.3
            }
        },
        lineStyle: {
            normal: {
                color: '#1d1626',
                width: 3
            }
        },
        symbol: 'circle',
        symbolSize: 1,
        width: circlesize,
        height: circlesize,
        data: data,
        links: link
    };
    return star;
}
option = {
    backgroundColor: '#1d1626',
    series: [
        starSeries('0%', roundDatas(1, 60, 'girl`sname', '#f173ac'), linkDatas(1), false),
        starSeries('50%', roundDatas(100, 50, '卡哇伊', '#72baa7'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '才女', '#b4532a'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '天生丽质', '#00BFFF'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '孩子气', '#FF5809'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '小家碧玉', '#e0861a'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '干练', '#33a3dc'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '天使', '#0370c8'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '风趣', '#EE82EE'), linkDatas(100), false),
        starSeries('50%', roundDatas(100, 50, '阳光', '#6f60aa'), linkDatas(100), false),
    ]
}
myChart.setOption(option)