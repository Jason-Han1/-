var data = 400; //数值大小
var max = 500; //满刻度大小
option = {
    title: {
        text: '30-40岁\n80%',
        top: '45%',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 18,
            lineHeight: 32,
        }
    },
    backgroundColor: '#000',
    "color": ["#fff", '#fff', 'rgba(255,255,255,.2)'],
    "series": [    {
         "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["44%", "48%"],
        "hoverAnimation": false,
          data:[{ 
                value:100,
                "name": "",
                "label": {
                    show: false
                },
                labelLine: {
                   show: false
                },
                     itemStyle: {
                  normal: {
                    color: '#105B70',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
            }]
    },{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["42%", "50%"],
        "hoverAnimation": false,
        "data": [{
                "name": "",
                "value": data,
                 itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#80FFFA' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#003EA4' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
            },
            { //画中间的图标
                "name": "",
                "value": 0,
                "label": {
                    position: 'inside',
                    backgroundColor: {
                        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACMklEQVQ4ja2VzWoUQRDHfz3TO7tZ9LALQtYgqBDNCyjRkFcwJ4+iD6FHn8C8hObgwZP4BuJX9AUMYgxI2KiQPaib3fnYlpqpjr3jCIIpKKY/qv9d1fWvGuOco0EMEKn6scgMcPr14zmxtbk/LOutQEPALNC8DhwCyqFYQRaArmonsBOACTBWPVLwQoGPDY2CJcApoLdbcOH5lDsjx2rqGIhRYtjvG16tt9m6GLMHjIAfQKpeOv+GAtYGTgNnnk64uZNz1xi6sd6GnhBXnGN82bK50eEJ8A34Dkxl26q91TB7AvY+537LYMpHNNVtKFjmIDN0xUaC3+jwWJ+iDNvq28nZ7sec8+KZgLUNLBq4msCiIh4U8DaFgyoFRmw/5GwvW36qh3kUAr5IuSVhymQQwY0OnIt/p1rGsiZ7Mhfblym3NXklGzzPZNI5dFyPNcwrrepbl3BPbCVpyoTyjiggsE0dSz7dPswmGcSVjdimjrOag8h7+F9iqoTMkdmXUS4889SQBPxNhoXSp3qCL0HFzCJdF7ZP+hGvPTXeZdW3LuGe2PYM21o9guGioD7H11psCWllMpzBsyl8LqrrRWUsa7KXKcHXEh5qGWaeh8eAlyyfpAJK0oLZL+DrrIHY1detWDaXLbt1QKcOSKGPynKawE7OvcKwIAANpXe0YnmgpTfSs3lYy778/mgOh47VzLEkHiSGYd/wZr3No4bmMAd4Yu2r3rHrDVY89qT9pwZ7sr8A4BctEAtqmGllYAAAAABJRU5ErkJggg=='
                    },
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    padding: 30
                }
            },
            { //画剩余的刻度圆环
                "name": "",
                "value": max - data,
                "label": {
                    show: false
                },
                labelLine: {
                   show: false
                },
                     itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
            }
        ]
    },

    ]
}