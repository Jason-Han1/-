/* canvans画布尺寸
    width: 1560px;
    height: 1246px;
    
    css:
    
    
    	.download_box{
    		position: relative;
    		// z-index: 2;
    	}
    	.download_boxs{
    		position: absolute;
    		right: 20px;
    		top: 20px;
    	}
        
    	.float_r_btn_nam{
    		font-size:18px;
    		font-family:PingFang SC;
    		font-weight:500;
    		line-height:30px;
    		color:rgba(166,166,166,1);
    		opacity:1;
    	}
    
    	.float_r_btn_down{
    		// width: 54px;
    		// height: 58px;
    	}
    	
    	.map_wrap{}//无样式，只是语义化名称
    
    html:
    
		<div class="map_wrap relative">
			<div id="map_container" style="height: 1246px;"></div>
			<div class="download_box download_boxs" onclick='downloadFileByBase64(down_map_base64, "监测范围")'>
				<div class=" flex_c">
					<!-- 54 * 58 -->
					<img src="../img/down.png" alt="" class="float_r_btn_img float_r_btn_down">
					<span class="float_r_btn_nam">下载</span>
				</div>
			</div>
		</div>
		
	js:
    
    	var down_map_base64 = '';
    
    	function map_echarts(){
    		// echarts
    		var dom = document.getElementById("map_container");
    		if(!dom){
    			return;
    		}
    
    		var myChart = echarts.init(dom);
    		var app = {};
    		option = null;
    		if (option && typeof option === "object") {
    		    myChart.setOption(option, true);
    		}
    		// console.log('map myChart', myChart);
    		// console.log('map myChart.getDataURL ', myChart.getDataURL);
    		// console.log('map myChart.getDataURL() ', myChart.getDataURL());
    		setTimeout(function() { 
    			console.log('map myChart', myChart);
    			down_map_base64 = myChart.getDataURL?myChart.getDataURL():myChart;
    		},1*1000);
    	}
    	map_echarts();
    	
    	function down_map(){
    		// alert(123);
    		if(!down_map_base64){
    			// aler('空值');
    			aler('地图图片未生成');
    			return;
    
    		}
    		downloadFileByBase64(down_map_base64);
    	}
    
    	function dataURLtoBlob(dataurl) {
    	    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    	        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    	    while (n--) {
    	        u8arr[n] = bstr.charCodeAt(n);
    	    }
    	    return new Blob([u8arr], { type: mime });
    	}
    	 
    	function downloadFile(url,name='123'){
    	    var a = document.createElement("a")
    	    a.setAttribute("href",url)
    	    a.setAttribute("download",name)
    	    a.setAttribute("target","_blank")
    	    let clickEvent = document.createEvent("MouseEvents");
    	    clickEvent.initEvent("click", true, true);  
    	    a.dispatchEvent(clickEvent);
    	}
    	 
    	function downloadFileByBase64(base64,name){
    	    var myBlob = dataURLtoBlob(base64)
    	    var myUrl = URL.createObjectURL(myBlob)
    	    downloadFile(myUrl,name)
    	}
*/
option = {
    title: {
        text: '监测范围',
        text: '{a| } 监测范围', // 富文本
        top: 25,
        textStyle: {
            fontSize: 26,
            fontWeight: 'normal',
            lineHeight: 27,
            verticalAlign: 'center',
            rich: {
                a: {
                    width: 4,
                    height: 27,
                    // lineHeight: 27,
                    backgroundColor: '#5d71cd',
                    verticalAlign: 'center',
                    // borderRadius: 8,
                },
                b: {
                    width: 13,
                },
            },
        },
    },




    // 提示框组件 tooltip
    tooltip: {
        // trigger: 'item',
        // formatter 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
        // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
        formatter: '{a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）',
        formatter: function(params, ticket, callback) {
            // return params.seriesName+'<br />'+params.name+'：'+params.value
            return `
		            	
            	<div class='map_tooltip_box'>
            		<div class='map_tooltip_title ta_c'>${params.name}</div>
            		<div class='map_tooltip_tip'>文章总数: 55555</div>
            		<div class='map_tooltip_infos flex flex_wrap'>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_wx'></div>
            				<div class='map_tooltip_info_txt'>微信公众号: 1220</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_user'></div>
            				<div class='map_tooltip_info_txt'>客户端: 6532</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_wb'></div>
            				<div class='map_tooltip_info_txt'>微博: 1546</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_web'></div>
            				<div class='map_tooltip_info_txt'>网站: 4565</div>
            			</div>
            		</div>
            	</div>

            `;
        },

        // extraCssText 额外附加到浮层的 css 样式
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
    },

    // legend 图例组件 - 图例: 例如柱状图颜色对应解释
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['文章总数'],

        textStyle: {
            // fontWeight: 'bold',
            fontSize: 15,
        },

    },


    // backgroundColor: 'red',
    legend: {
        show: true,
        selectedMode: false,

        // orient: 'vertical',
        icon: 'none',

        // itemWidth : 236,// 图标的宽度
        itemGap: 100, // 172 158 150 default: 10 , 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        // width: 236*4+172*3,
        // height: 134,// 无效
        top: 134 / 2 + 110, // 20 '20%' 'top', 'middle', 'bottom'
        top: 110,
        left: 77,



        formatter: function(name) {
            console.log('map legend formatter', arguments);
            // return 'Legend formatter  ' + name;
            return `{top|\n}{name|${name}}\n{num|614}`;
        },
        textStyle: {
            // backgroundColor: 'red',// 背景图片无效
            borderRadius: 16, // 背景图片无效
            rich: {
                top: {
                    height: 15,
                },
                name: {
                    // width: '100%',
                    // width: 236,
                    // width: 200,
                    width: 236 - 30, // 容器总宽度减去padding

                    // height: 134,
                    // backgroundColor: 'red',

                    // width:'96px',
                    height: 45,
                    fontSize: 32,
                    fontFamily: 'PingFang SC',
                    // fontWeight:'bold',
                    // lineHeight: 45,
                    // verticalAlign: 'bottom',
                    color: 'rgba(255,255,255,1)',
                    // margin: [11,0,0,0],// 无效, 无此参数
                    padding: [0, 0, 0, 24],

                },
                num: {
                    height: 70,
                    fontSize: 45,
                    fontFamily: 'PingFang SC',
                    fontWeight: 'bold',
                    color: 'rgba(255,255,255,1)',
                    padding: [0, 0, 0, 80],
                },
            },
        },
        data: [{
                name: '公众号',

                // formatter 无效
                formatter: function(name) {
                    return 'legend data formatter ' + name;
                },

                textStyle: {
                    width: 236,
                    height: 134,
                    // borderColor: 'red',
                    // lineHeight: 134,
                    // backgroundImg: 'url(../img/img 47@2x.png)',
                    backgroundColor: {
                        image: '../img/img 47@2x.png',
                        image: '../img/img 471@2x.png',
                        // 本地生成图片有跨域问题, 请放到线上查看, 或者转化成base64 
                        image: 'http://pc.wangjiangwei.top/01-private_jobs/01-popular_feelings/code/img/img 471@2x.png',

                    },
                    backgroundColor: '#0FCA8A',
                    // borderRadius: 50, // 背景图片无效
                    color: 'blue',
                },
            },
            {
                name: '微博',
                textStyle: {
                    width: 236,
                    height: 134,
                    backgroundColor: {
                        image: '../img/img 42@2x.png',
                        image: '../img/img 472@2x.png',
                        // 本地生成图片有跨域问题, 请放到线上查看, 或者转化成base64 
                        image: 'http://pc.wangjiangwei.top/01-private_jobs/01-popular_feelings/code/img/img 472@2x.png',
                    },
                    backgroundColor: '#F8A7A7',
                },
            },
            {
                name: '客户端',
                textStyle: {
                    width: 236,
                    height: 134,
                    backgroundColor: {
                        image: '../img/img 43@2x.png',
                    },
                    backgroundColor: '#4996F7',
                },
            },
            {
                name: '网站',
                textStyle: {
                    width: 236,
                    height: 134,
                    backgroundColor: {
                        image: '../img/img 44@2x.png',
                    },
                    backgroundColor: '#FAAF3A',
                },
            },
        ],

        // textStyle:{
        // 	// fontWeight: 'bold',
        // 	fontSize: 15,
        // },
    },


    // color 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
    // color: ['#C3D5E6'],


    // visualMap: {
    //     // min: 0,
    //     // max: 2500,
    //     // left: 'left',
    //     // top: 'bottom',
    //     // text: ['高', '低'], // 文本，默认为数值文本
    //     // calculable: true,

    //     color: ['#C3D5E6'],
    //     // inRange: {
    //     //     color: ['#C3D5E6'],
    //     // },
    // },
    // // toolbox 工具栏
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     // feature: {
    //     //     mark: { show: true },
    //     //     dataView: { show: true, readOnly: false },
    //     //     restore: { show: true },
    //     //     saveAsImage: { show: true }
    //     // }
    // },

    // toolbox: {
    //     feature: {
    //         saveAsImage: {
    //         	name:'下载',
    //         	title:'下载',
    //         }
    //     }
    // },

    series: [{
            // name: '地图 serie_name',
            type: 'map',
            name: '公众号',

            zoom: 1, // number 当前视角的缩放比例。
            // aspectScale: 0.75,// number这个参数用于 scale 地图的长宽比。 最终的 aspect 的计算方式是：geoBoundingRect.width / geoBoundingRect.height * aspectScale

            top: 340,
            // bottom: 0,
            // left: 0,
            // right: 0,

            // showLegendSymbol 在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 legend 组件时生效
            showLegendSymbol: false,

            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    // areaColor:"#CF362F",
                }
            },
            itemStyle: {
                normal: {
                    // borderWidth: .5,//区域边框宽度
                    borderColor: '#FFFFFF', //区域边框颜色
                    areaColor: "#C3D5E6", //区域颜色
                },
                emphasis: {
                    // borderWidth: .10,
                    // borderColor: '#CF362F',
                    areaColor: "#5A66CA", //区域颜色
                }
            },
            data: [
                // { name: '北京', 
                //    	value: [
                //     	{
                //     		name: '微信公众号',
                //     		value: 123,
                //     	},
                //     	{
                //     		name: '微博',
                //     		value: 123,
                //     	},
                //     	{
                //     		name: '客户端',
                //     		value: 123,
                //     	},
                //     	{
                //     		name: '网站',
                //     		value: 123,
                //     	},
                //     ] 
                // },
                {
                    name: '北京',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '天津',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '上海',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '重庆',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '河北',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '河南',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '云南',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '辽宁',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '黑龙江',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '湖南',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '安徽',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '山东',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '新疆',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '江苏',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '浙江',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '江西',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '湖北',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '广西',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '甘肃',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '山西',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '内蒙古',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '陕西',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '吉林',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '福建',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '贵州',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '广东',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '青海',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '西藏',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '四川',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '宁夏',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '海南',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '台湾',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '香港',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: '澳门',
                    value: Math.round(Math.random() * 1000)
                },
                {
                    name: "南海诸岛",
                    value: 0,
                    itemStyle: {
                        normal: {
                            opacity: 0,
                            label: {
                                show: false
                            }
                        }
                    }
                },
            ]
        },

        {
            type: 'map',
            name: '微博',
        },
        {
            type: 'map',
            name: '客户端',
        },
        {
            type: 'map',
            name: '网站',
        },
    ],
};