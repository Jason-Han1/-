option = {
    title: {
        text: '漏斗分析图',
        subtext: '网站用户行为统计－纯属虚构',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            return '最近'
        }
    },
    backgroundColor: '#000237',
    color: ['#f7c778', '#d77169', '#c14f60', '#4d9564', '#215b85', ],
  
    series : [
        {
            name:'漏斗图',
            type:'funnel',
            x: '10%',
            y: 60,
            //x2: 80,
            y2: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '40%',
            maxSize: '100%',
            sort : 'descending', // 'ascending', 'descending'
            gap :0,
            data:[
                {value:60, name:'需求y',part:'HWS'},
                {value:40, name:'需求f',part:'CI'},
                {value:20, name:'需求s',part:'CO'},
                {value:80, name:'需求c',part:'CD'},
                {value:100, name:'需求a',part:'SE'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: true,
            label: {
                normal: {
                    color:'#fff',
                    formatter: function (params) {
                        return '{part|'+params.data.part+'}' + params.name + ' 变更{style|'+ params.value + '}次';
                    },
                    position: 'center',
                    rich:{
                        style:{
                            fontSize:'20px'
                        },
                        part:{
                            color:'#eee',
                            marginLeft:'10px'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 30,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
        
    ]
};
