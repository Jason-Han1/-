option = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
			alwaysShowContent:true,
                    backgroundColor:'rgba(50,50,50,0.7)',
                    hideDelay:100,
                    triggerOn:'mousemove|click',
                    enterable:true,
                    position:['60%','70%'],
        trigger: 'item',
        formatter: "{a} <br/><div id='mainH' onclick='mainHClick()'>{b} </div>: {c} ({d}%)"
		//return '{a}<div id="mainH" onclick="mainHClick()" >222222大区名称：'+params.data.name+'大区'+'</div><br/>'+'年累容量：'+params.data.merge+'/MW'+'<br/>'+'未开工容量：'+params.data.dataone+'/MW'+'<br/>'+'在建容量：'+params.data.datatwo+'/MW';
    },

    visualMap: {
        //show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
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
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};