var data1 = {
    "name": "北京",
    "children": [{
        "name": "西城",
        "children": [{
            "name": "新街口",
            "children": [{
                "name": "新街口大厦",
                "value": 6714
            }, {
                "name": "护国寺小吃新街口店",
                "value": 743
            }]
        }, {
            "name": "月坛",
            "children": [{
                "name": "人民公社月坛店",
                "value": 3534
            }, {
                "name": "月坛公园",
                "value": 3416
            }]
        }]
    }, {
        "name": "东城",
        "children": [{
            "name": "南锣鼓巷",
            "children": [{
                "name": "话说南锣",
                "value": 6714
            }, {
                "name": "南锣往事",
                "value": 743
            }]
        }, {
            "name": "东四",
            "children": [{
                "name": "东四博物馆",
                "value": 3534
            }, {
                "name": "东四故居",
                "value": 3416
            }]
        }]
    }]
};
var data2 = {
    "name": "世界",
    "children": [{
        "name": "中国",
        "children": [{
                "name": "北京",
                "value": 743
            },
            {
                "name": "广州",
                "value": 7743
            }
        ]
    }]
};
var option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    series: [{
            type: 'tree',
            id: 'tree1',

            data: [data1],
roam: true,
calculable: false,
            left: '2%',
            right: '2%',
            top: '50%',
            bottom: '20%',

            symbol: 'emptyCircle',

            orient: 'vertical',
layerPadding: 30,
                    //结点间距
                    nodePadding: 20,
            expandAndCollapse: true,
            initialTreeDepth: 1,

            label: {
                normal: {
                    position: 'right',
                    width: '200px',
                    height: 80,
                    borderWidth: 1,
                    borderColor: '#999',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 14
                },
                emphasis: {
                    borderColor: 'blue'
                }
            },
            itemStyle: {
                color: 'red',
                borderWidth: 100,
                background: '#fff',
                emphasis: {
                    color: 'orange',
                }
            },

            // leaves: {
            //     label: {
            //         normal: {
            //             position: 'bottom',
            //             rotate: -90,
            //             verticalAlign: 'middle',
            //             align: 'left'
            //         }
            //     }
            // },

            animationDurationUpdate: 750
        },
        {
            type: 'tree',
            id: 'tree2',
            data: [data2],

            left: '2%',
            right: '2%',
            top: '50%',
            bottom: '92%',

            symbol: 'image://data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAWABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9KfHHjdPC0KQwqs1/KNyI33UX+8f6CuH/AOEx8Uf2V/bP2+L7L9o+z+V5a53bd3Tb0x75p/jY2Ufjy7OrpcvZmJPLFsRu+6vrxjO6r/m+Gv8AhB93k6j/AGb9vxtynm+Zs69cbcV9ZRo0aFGm/Z8zla7snv0R8tWq1a1aovacqjeyvbbqzpvA/jdPFMLwzKsN/ENzov3XX+8P6iiuK8Emyk8eWh0hLlLMRP5guSN33W9OMZ20V42Y0IUK1qasmr27Hr5fWnWo3m7tO1+53HjTwVF4rgR0cQXsQwkhGQR/db2/lXmf9n6l5H/CPebb+V9o87PP38beuOmPaiivWyqrOVOUJO6jqvI8rNKcY1IzirOW/memeC/BUXhSB3dxPeyjDyAYAH91fb+dFFFfO16k6tRzm7s+goU40qajBWR//9k=',
symbolSize: 20,
            orient: 'BT',

            expandAndCollapse: true,
            initialTreeDepth: 1,

            label: {
                normal: {
                    position: 'top',
                    // rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                }
            },

            // leaves: {
            //     label: {
            //         normal: {
            //             position: 'bottom',
            //             rotate: -90,
            //             verticalAlign: 'middle',
            //             align: 'left'
            //         }
            //     }
            // },

            animationDurationUpdate: 750
        }
    ]
};
