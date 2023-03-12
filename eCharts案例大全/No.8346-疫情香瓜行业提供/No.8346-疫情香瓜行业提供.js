   myChart.on("click", eConsole);
        function eConsole() {
           //事件内容
        }

var data = {
    "name": "疫情\n期间\n停课\n不停\n学各\n领域\n应对\n措施",
    
    "children": [
        {
            "name": "教育机构",
            "children": [
                {"name": "赠送直播课"},
                {"name": "设立奖学金"},
                {"name": "提供免费心理辅导"},
                {"name": "提供免费数据支持"},
                {"name": "免费开放课程习题"},
                {"name": "免费开放精品课程"},
            ]
        },
        {
            "name": "互联网科技企业",
            "children": [
                {"name": "联合多家在线教育\n机构打造助学联盟" },
                {"name": "提供免费技术支持"},
                {"name": "提供免费线上授课平台"},
                {"name": "提供人工智能教育产品和服务"},
               
                
            ]
        },
   
        {
            "name": "OOT大屏端",
            "children": [
              {"name": "集合多方渠道联合\n策划线上教育产品" },
              {"name": "电视台定制教育类栏目"},
              {"name": "搭建有线电视端授课专区"}
            ]
        },
     
    ]
};

var option = {
    tooltip: {
        trigger: 'item', 
        triggerOn: 'mousemove'
    },
    series:[  {
             zoom:1,
            type: 'tree',
          
            scaleLimit: {min: 0.5, max: 3  }, 
    
    
    roam: true,

            
            id: 0,
            name: 'tree1',
            data: [data],

            top: '10%',
            left: '8%',
            bottom: '22%',
            right: '20%',

            symbolSize:20,

            edgeShape: 'polyline',
            edgeForkPosition: '40%',
            initialTreeDepth: 1,

            lineStyle: {color:'#f5ba8e',
                width: 4
              
            },

            label: {
                 normal: {
                show: true, //是否显示标签。
                position: [-35,-40], //标签的位置。['50%', '50%'] [x,y]
                textStyle: { //标签的字体样式
                    color: '#393939', //字体颜色
                    fontStyle: 'normal', //文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'normal', //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', //文字的字体系列
                    fontSize: 15, //字体大小
                }
            },
                
                backgroundColor: '#efefef',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            
            },

            leaves: {
                label: {
               
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
 itemStyle: {
            normal: {        
                borderColor: "#5db2d7",
                borderWidth: 5,
                color:"#f69595"
            }
        },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};
