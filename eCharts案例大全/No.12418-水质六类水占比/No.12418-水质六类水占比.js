option = {
    backgroundColor: '#2c343c',
    title: {
        text: '水质六类水占比',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend:{
        type:'plain',
        show:true,
        orient:'vertical',
        top:'center',
        right:'10%',
        height:70,
        textStyle:{
            color:'#FFF'
        },
        formatter:function(params){
          return params;
        },
        data:[
            {value:352, name:'一类'},
            {value:310, name:'二类'},
            {value:274, name:'三类'},
            {value:235, name:'四类'},
            {value:400, name:'五类'},
            {value:200, name:'六类'}
        ],
        
    },
   /* visualMap: {//视觉映射组件
        show:true,//默认，是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在。
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },*/
    series : [
        {
            name:'水质情况',
            type:'pie',
            radius : '55%',
            center: ['40%', '50%'],
            color:['#14C7F8','#15AAF1','#24B462','#FFD52E','#F97638','#FF2919'],
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    formatter: function(param) {
                        return param.name +'：'+param.value+ '\n' + Math.round(param.percent) + '%';
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    //color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            },
            data:[
                {value:352, name:'一类'},
                {value:310, name:'二类'},
                {value:274, name:'三类'},
                {value:235, name:'四类'},
                {value:400, name:'五类'},
                {value:200, name:'六类'}
            ],
        }
    ]
};