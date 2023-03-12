        var nodes = null, index = 0;
        var option = {
            series: [{
                type: 'tree',
                left: '2%',
                right: '2%',
                top: '10%',
                bottom: '10%',
                symbol: 'roundRect',
                symbolSize: 50,
                label: { fontSize: 30 },
                animation: false,
                orient: 'vertical',
                initialTreeDepth: -1,
                lineStyle: { width: 10, color: 'green' },
                data: [{
                    name: 'AA',
                    children: [{
                        name: 'BB',
                        children: [{
                            name: 'CC'
                        }, {
                            name: 'DD',
                        },
                        {
                            name: 'EE',
                            children: [
                                { name: 'EE1' },
                                { name: 'EE2' }
                            ]
                        }
                        ]
                    }]
                }]
            }]
        };

        myChart.setOption(option);
        nodes = option.series[0].data;
        setTimeout(changeNode, 100);
        function changeNode() {
            if (index >= nodes.length) {
                if (nodes[index - 1].children) {
                    nodes = nodes[index - 1].children;
                } else {
                    nodes = option.series[0].data;
                }
                index = 0;
            }
            var node = nodes[index];
            index++;
            if (node.name.substring(0, 1) != ' ') {
                node.name = ' ' + node.name + ' ';
            } else {
                flag = 1;
                node.name = node.name.substring(1, node.name.length - 1);
            }
            node.lineStyle = { color: getColor(), width: 15 };
            myChart.setOption(option, true, false);
            setTimeout(changeNode, 100);
        }
        function getColor() {
            return '#' + [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)].map(item => { var item = '0' + item.toString(16); return item.substring(item.length - 2); }).join('');
        }
