var data={"nodes": [
      {"name": "六学"},
      {"name": "灵堂卖片"},
      {"name": "文体两开花"},
      {"name": "中美合拍...多多关注"},

      {"name": "复读机"},
      {"name": "全国唯一的两张身份证"},
      {"name": "黑周星驰"},
      {"name": "你这是要向全国人民谢罪的"},
      {"name": "什么叫做国际巨星"},
      {"name": "说到...我就想起了..."},
      {"name": "吴承恩故居"},
      {"name": "章承恩"},
      {"name": "六小龄童故居"},
      
   ],
   "links": [
      {"source": "六学", "target": "灵堂卖片", "value": 1},
      {"source": "灵堂卖片", "target": "文体两开花", "value": 3},
      {"source": "灵堂卖片", "target": "中美合拍...多多关注", "value": 3},
      
      {"source": "六学", "target": "复读机", "value": 1},
      {"source": "复读机", "target": "说到...我就想起了...", "value": 3},
      {"source": "复读机", "target": "中美合拍...多多关注", "value": 1},
      {"source": "复读机", "target": "文体两开花", "value": 1},
     
      {"source": "六学", "target": "吴承恩故居", "value": 1},
      {"source": "吴承恩故居", "target": "章承恩", "value": 1},
      {"source": "吴承恩故居", "target": "六小龄童故居", "value": 1},     
      
      {"source": "六学", "target": "黑周星驰", "value": 1},
      {"source": "黑周星驰", "target": "你这是要向全国人民谢罪的", "value": 1},
      
      {"source": "六学", "target": "全国唯一的两张身份证", "value": 1},
      {"source": "六学", "target": "什么叫做国际巨星", "value" : 1},
      {"source": "六学", "target": "师徒四人走穴事件", "value" : 1},
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
            triggerOn: 'mousemove'

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
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