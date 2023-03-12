var data = [
            {
                "root": "service1",
                "clients": [
                    "service11",
                    "service12"
                ]
            },
            {
                "root": "service2",
                "clients": [
                    "service21",
                    "service22"
                ],
                "servers": [
                    "service12"
                ]
            }
        ];

function get_nodes(data) {
    var nodes = [];
    var tmp_nodes = [];
    for (var root_i in data) {
        tmp_nodes.push(data[root_i].root);
        nodes.push(
            {
                'name':data[root_i].root,
                'x':100,
                'y':(parseInt(root_i)+1)*100,
                'label': {
                    'normal': {
                        'show': true,
                        textStyle: {
                            'color': 'red',
                            'fontSize': 8
                        }
                    }
                }
            }
        );
        var clients = data[root_i].clients;
        var servers = data[root_i].servers;
        var coord_i = parseInt(root_i)+1;
        for (var client_i in clients) {
            if (tmp_nodes.indexOf(clients[client_i]) >= 0) {
                continue;
            }else{
                tmp_nodes.push(clients[client_i])
            }
            nodes.push(
                {
                    'name':clients[client_i],
                    'x':(parseInt(root_i)+1)*200,
                    'y':(parseInt(coord_i)+parseInt(client_i))*100,
                    'label': {
                        'normal': {
                            'show': true,
                            textStyle: {
                                'color': 'red',
                                'fontSize': 8
                            }
                        }
                    }
                }
            );
            coord_i += 1;
        }
        for (var server_i in servers) {
            if (tmp_nodes.indexOf(servers[server_i]) >= 0) {
                continue;
            }else{
                tmp_nodes.push(servers[server_i])
            }
            nodes.push(
                {
                    'name':servers[server_i],
                    'x':(parseInt(root_i)+1)*200,
                    'y': (parseInt(coord_i)+parseInt(server_i))*100,
                    'label': {
                        'normal': {
                            'show': true,
                            textStyle: {
                                'color': 'red',
                                'fontSize': 8
                            }
                        }
                    }
                }
            );
            coord_i += 1;
        }
    }
    return nodes;
}

function get_links(data) {
    var links = [];
    for (var root_i in data) {
        var clients = data[root_i].clients;
        var servers = data[root_i].servers;
        for (var client_i in clients) {
            links.push({'source': clients[client_i], 'target': data[root_i].root})
        }
        for (var server_i in servers) {
            links.push({'source': data[root_i].root, 'target': servers[server_i]})
        }
    }
    return links;
}

var option = {
    title: {
        text: '调用关系构建'
    },
    tooltip: {},
    series: [{
        type: 'graph',
        legendHoverLink: true,
        layout: 'none',
        focusNodeAdjacency: true,
        symbolSize: 50,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 8
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#ccc',
                borderColor: '#1af'
            }
        },
        data: get_nodes(data),
        links: get_links(data),
        lineStyle: {
            normal: {
                color: '#1af',
                opacity: 0.9,
                width: 2,
                curveness: 0.2
            }
        }
    }]
};
myChart.setOption(option);