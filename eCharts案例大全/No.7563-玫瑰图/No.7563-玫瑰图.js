    /*
    使用多重饼图，构造伪玫瑰图
    主要是for循环构造图像数据
    以及使用 color: "transparent" 图像颜色透明
    */
    
    //圆环比例为alist数值在总体的百分比
    var alist = [106.32, 10.8, 18.61, 9.87, 15.22, 75.27];
    //扇形高度为blist数值决定
	var blist = [4.306, 5.495, 8.8, 3.2, 1.62, 2.25];
	//blist数值*length = 图像高度
	var length = 10;
    //clist为一个对比参考数值，未参加图形构造属性
	var clist = [4.05, 2.95, 5, 2.1, 1.62, 2.25];
	var pname = '资产配置';
	var tcname = ['自营贷款','贴现','固定期限类','灵活期限类','存放央行','存放同业'];
	var colorlist = ['#368BFF','#FCFF00','#FEC619','#01FEE3','#FF3F3A','#00FE06']
	var msg = new Array();
	for(i=0;i<alist.length;i++){
	    var ms = new Array();
	    if(i == 0){//添加一组标题数据
	        var ns = new Array();
	        for(j=0;j<alist.length;j++){
    	        ns.push({
                    value: alist[j],
                    name: tcname[j],
                    hoverAnimation:false,
                    itemStyle: {
                        color: colorlist[j]
                    }
                });
	        }
            msg.push({
    	        name: pname,
    	        type: 'pie',
    	        radius: [0,0],
    	        center: ['50%', '50%'],
    	        data:ns,
    	        label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
    	    });
	    }
	    for(j=0;j<alist.length;j++){//封装构造数据
	        if(i == j){
	            ms.push({
	                value: alist[j],
	                name: tcname[j],
	               // hoverAnimation:false,
	                itemStyle: {
	                   // color: colorlist[i],
	                },
	                label: {
	                    color: "rgba(255,255,255,.45)",
	                    fontSize: 12,
	                    formatter: '{a|'+tcname[i]+"({d}%)}",
	                    rich: {
	                        a: {
	                            color: "#fff",
	                            fontSize: 12,
	                            lineHeight: 12
	                        },
	                    }
	                }
	            });
	        }else{
	            ms.push({
	                value: alist[j],
	                name: tcname[j],
	                itemStyle: {
	                    color: "transparent"
	                }
	            });
	        }
	    }
	    msg.push({
	        name: pname,
	        type: 'pie',
	        radius: [50, 50 + blist[i] * length],
	        center: ['50%', '50%'],
	        data:ms,
	    });
	}

	option = {
	    backgroundColor: "#03141c",
	    title: {
	        text: "资产配置",
	        x: 'center',
	        y: 'center',
	        textStyle: {
	            color: "#fff",
	            fontSize: 14,
	            fontWeight: 'normal'
	        },
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function (v) {
	        	var key = v.dataIndex;
		        return tcname[key]+":<br>金额: "+alist[key]+" 亿元<br>加权平均利率: "+blist[key]+"%<br>市场参考利率: "+clist[key]+"%";
	         }
	    },
	    color: colorlist,
	    legend: {
	        x: 'center',
	        y: '80%',
	        textStyle: {
	            color: '#fff',
	        },
	        data: tcname
	    },
	    calculable: true,
	    series: msg
	};