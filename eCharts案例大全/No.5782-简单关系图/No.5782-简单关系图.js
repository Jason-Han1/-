myChart.showLoading();
    myChart.hideLoading();
    var categories = [];
    for (var i = 0; i < 3; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }

    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animation: false,
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                data: [{
                name: 'node01',
                des: 'nodedes01',
                symbolSize: 10,
                category: 0,
            }, {
                name: 'node02',
                des: 'nodedes02',
                symbolSize: 10,
                category: 1,
            }, {
                name: 'node03',
                des: 'nodedes02',
                symbolSize: 10,
                category: 1,
            }],
                links: [{
                source: 'node01',
                target: 'node02',
                name: 'link01',
                des: 'link01des'
            }, {
                source: 'node01',
                target: 'node02',
                name: 'link02',
                des: 'link02des'
            }, {
                source: 'node01',
                target: 'node03',
                name: 'link03',
                des: 'link02des'
            }, {
                source: 'node02',
                target: 'node03',
                name: 'link03',
                des: 'link02des'
            }],
                categories: categories,
                roam: true,
                label: {
                    position: 'right'
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };

    myChart.setOption(option);