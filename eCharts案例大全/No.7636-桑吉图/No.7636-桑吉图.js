var data={        "nodes": [
            {
                "name": "交通局",
                "value": 10
            },
            {
                "name": "城市规划局",
                "value": 1
            },
            {
                "name": "admin",
                "value": 1
            },
            {
                "name": "asdad会话",
                "value": 1
            },
            {
                "name": "sasa",
                "value": 1
            },
            {
                "name": "xacsa",
                "value": 1
            },
            {
                "name": "sasas",
                "value": 1
            },
            {
                "name": "scasc",
                "value": 1
            },
            {
                "name": "asdd",
                "value": 1
            },
            {
                "name": "asda",
                "value": 1
            },
            {
                "name": "测试",
                "value": 1
            },
            {
                "name": "test",
                "value": 1
            },
            {
                "name": "city",
                "value": 1
            },
            {
                "name": "管理员",
                "value": 2
            },
            {
                "name": "dfsafdsafd",
                "value": 1
            },
            
            {
                "name": "测试b",
                "value": 2
            },
            {
                "name": "fdsafd",
                "value": 2
            },
            {
                "name": "内部人员专用q",
                "value": 1
            },
            {
                "name": "sas",
                "value": 1
            },
            {
                "name": "普通用户",
                "value": 1
            },
            {
                "name": "一般用户1",
                "value": 1
            }
        ],
        "links": [
            {
                "source": "交通局",
                "value": 1,
                "target": "asdad会话"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "sasa"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "xacsa"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "sasas"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "scasc"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "asdd"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "asda"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "测试"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "test"
            },
            {
                "source": "交通局",
                "value": 1,
                "target": "city"
            },
            {
                "source": "城市规划局",
                "value": 1,
                "target": "admin"
            },
            {
                "source": "admin",
                "value": 1,
                "target": "管理员"
            },
            {
                "source": "asdad会话",
                "value": 1,
                "target": "dfsafdsafd"
            },
            {
                "source": "sasa",
                "value": 1,
                "target": "测试b"
            },
            {
                "source": "xacsa",
                "value": 1,
                "target": "fdsafd"
            },
            {
                "source": "sasas",
                "value": 1,
                "target": "fdsafd"
            },
            {
                "source": "scasc",
                "value": 1,
                "target": "测试b"
            },
            {
                "source": "asdd",
                "value": 1,
                "target": "内部人员专用q"
            },
            {
                "source": "asda",
                "value": 1,
                "target": "sas"
            },
            {
                "source": "测试",
                "value": 1,
                "target": "普通用户"
            },
            {
                "source": "test",
                "value": 1,
                "target": "一般用户1"
            },
            {
                "source": "city",
                "value": 1,
                "target": "管理员"
            }
        ]}

console.log(data.nodes);

//var uploadedDataURL = "/asset/get/s/data-1461574766790-SyPd3Ljl.json";


myChart.showLoading();
//$.getJSON(uploadedDataURL, function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function(o){
                if(o.dataType!== "edge"){
                    return '';
                } else if(o.dataType == "node"){
                    return  o.data.name + o.data.value;
                } else {
                    return o.data.source + ' - ' + o.data.target + "：" + o.data.value + '%'
                }

            }

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                orient:'vertical',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                label:{
                    normal: {
                        position: 'inside',
                      align: 'center',
                      formatter: function(o){
                            return o.data.name +  (o.data.value? (' - ' + o.data.value ): '')
                        }
                    },
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });
//});