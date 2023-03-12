
var datas;
	function setData(){
	    var data =[];
	    var data2={};
	    var data3 =[]
	    for(var i=0;i<3;i++){
	        data[i]=Math.floor(Math.random()*100+50)
	    }
	    data2['name']='发票风险预测';
	    data2['value']=data;
	    data3[0]=data2;
	    return data3;

	}
	datas=setData();
	option = {
	    title: {
	        text: '基础雷达图'
	    },
	    backgroundColor: '#0F111C',     //底图背景颜色
	    tooltip: {},
	    legend: {//图例
	        data: ['发票风险预测'],    //图例数据项
	        orient: 'vertical',                     //图例列表的布局朝向可选：'horizontal''vertical'      
	        
	        right: 100,                             //图例组件离容器右侧的距离
	        top: 300,                               //图例组件离容器上侧的距离
	        
	        
	        itemWidth:100,                          //图例标记的图形宽度
	        itemHeight:30,                          //
	        

	        textStyle:{          //图例的文本样式                   
	            color:'#fff',    //文本颜色
	            fontSize:20      //文本字体大小
	        }
	        
	    },
	    radar: {
	        //shape: 'circle', //雷达图绘制类型，支持 'polygon' 和 'circle'。默认polygon
	        splitNumber:3,     //指示器轴的分割段数
	        name: {       //雷达图每个指示器名称的配置项。
	            
	            color: '#fff',      //文字的颜色
	            borderRadius: 5,    //文字块的圆角
	            padding: [3, 5],    //文字块的内边距
	            fontSize:25,        //文本字体大小
	           
	        },
	        splitLine: { //坐标轴在 grid 区域中的分隔线。
	            show:true, //是否显示分隔线。默认数值轴显示，类目轴不显示
	            lineStyle: {//分隔线样式
	                // 使用深浅的间隔色
	                color: ['#aaa', '#ddd']
	            }
	        },
	        splitArea: {
	            show: true,  //坐标轴在 grid 区域中的分隔区域，默认不显示。
	            areaStyle: { //分隔区域的样式设置。
	                    color: ['rgba(114, 172, 209, 0.2)',
	                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
	                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
	                    shadowColor: 'rgba(0, 0, 0, 0.3)',
	                    shadowBlur: 1,
	                    opacity:0.2
	            }
	       },
	        indicator: [//雷达图的指示器，用来指定雷达图中的多个变量（维度），如下示例。
	           { name: '发票领用', max: 190},
	           { name: '开具发票', max: 190},
	           { name: '发票结存', max: 190}
	         
	        ]
	    },
	    series: [{
	        name: '预算 vs 开销（Budget vs spending）',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.4}}},
	        label: {
	                normal: {
	                    borderWidth: 10,
	                    distance: 20,
	                    align: 'center',
	                    verticalAlign: 'middle',
	                    borderRadius: 1,
	                    borderColor: '#E8A61F',
	                    backgroundColor: '#E8A61F',
	                    show: true,
	                    position: 'top',
	                    formatter: function(params){
    	                   if(params.dimensionIndex==0){
    	                       params.value=params.value<100?'正常':'发票领用超额风险';
    	                   }
    	                   if(params.dimensionIndex==1){
    	                       params.value=params.value<100?'正常':'开具发票超额风险';
    	                   }
    	                   if(params.dimensionIndex==2){
    	                       params.value=params.value<100?'正常':'发票结存超额风险';
    	                   }
    	                   console.log(params);
    	                   return params.value;
	                    },
	                    color: '#000'
	                }
	            },
	        data : datas
	    }]
	};