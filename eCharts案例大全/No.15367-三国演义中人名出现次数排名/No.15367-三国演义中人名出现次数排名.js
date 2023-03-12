option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "三国演义中人名出现次数排名",
        subtext: "ZBH",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '三国演义',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: [100,500],
            edgeLength:[50,200],
            gravity:0.1
        },
        tooltip:{
          formatter:function(params){
              var sub2="",sub1="";
              if(!!params.data.subtext1){
                  sub1=params.data.subtext1+'<br />'
              }
              if(!!params.data.subtext2){
                  sub2=params.data.subtext2
              }
              if(sub1||sub2){
                return sub1+sub2;
              }
          }  
        },
        data: [{
            "name": "刘备2239",
            "value": 20,
            subtext:'mings',
            subtext2:'mingssss',
            "symbolSize": 40,
            "draggable": "true"
        },{
            "name": "关羽",
            // "x": 0,
            // y: 0,
            "symbolSize": 10,
            "draggable": "true",
            "value":20
        },{
            "name": "曹操",
            // "x": 0,
            // y: 0,
            "symbolSize": 30,
            "draggable": "true",
            "value":20,
            // symbolOffset:['50%','50%']   
        },{
            "name": "许褚",
            "value": 100,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "典韦",
            "value": 100,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "玄德",
            "value": 20,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "曹冲",
            "value": 50,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "张辽",
            "value": 50,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "关云",
            "value": 20,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "张飞",
            "value": 20,
            "symbolSize": 10,
            "draggable": "true"
        },{
            "name": "云长",
            "value": 10,
            "symbolSize": 10,
            "draggable": "true"
        }],
        links: [{
            "source": "刘备2239",
            "target": "曹操",
            value:30,
            subtext1:'ming'  
        },{
            "source": "刘备2239",
            "target": "张飞",
            value:300
        },{
            "source": "关羽",
            "target": "云长",
            value:300
        },{
            "source": "刘备2239",
            "target": "关云",
            value:300
        },{
            "source": "刘备2239",
            "target": "玄德",
            value:300
        },{
            "source": "刘备2239",
            "target": "关羽",
            value:300
        },{
            "source": "曹操",
            "target": "典韦",
            value:300
        },{
            "source": "曹操",
            "target": "许褚",
            value:300
        },{
            "source": "曹操",
            "target": "曹冲",
            value:300
        },{
            "source": "曹操",
            "target": "张辽",
            value:300
        }],
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        },
        label: {
            normal: {

                show: true,
                position: 'top',
                formatter:function(params){
                        return params.data.subtext2
                    }

            }
        }
    }]
};