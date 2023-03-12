var uploadedDataURL = "/asset/get/s/data-1482909957601-HkA-FyWSx.json";//黑龙江地图json

//这地图还是有很多不完整的，只能算个简单的地图demo,适合刚接触地图的萌新吧~需要就看看吧
//下面是各个省份的地址 需要的话可以下载，用法是http://gallery.echartsjs.com/+后面的url,就可以下载了
//我一开也不知道的，乱搞就弄出来了，哈哈请叫我雷锋,就这样啦
/*
'上海': '/asset/get/s/data-1482909900836-H1BC_1WHg.json',
'河北': '/asset/get/s/data-1482909799572-Hkgu_yWSg.json',
'山西': '/asset/get/s/data-1482909909703-SyCA_JbSg.json',
'内蒙古': '/asset/get/s/data-1482909841923-rkqqdyZSe.json',
'辽宁': '/asset/get/s/data-1482909836074-rJV9O1-Hg.json',
'吉林': '/asset/get/s/data-1482909832739-rJ-cdy-Hx.json',
'黑龙江': '/asset/get/s/data-1482909803892-Hy4__J-Sx.json',
'江苏': '/asset/get/s/data-1482909823260-HkDtOJZBx.json',
'浙江': '/asset/get/s/data-1482909960637-rkZMYkZBx.json',
'安徽': '/asset/get/s/data-1482909768458-HJlU_yWBe.json',
'福建': '/asset/get/s/data-1478782908884-B1H6yezWe.json',
'江西': '/asset/get/s/data-1482909827542-r12YOJWHe.json',
'山东': '/asset/get/s/data-1482909892121-BJ3auk-Se.json',
'河南': '/asset/get/s/data-1482909807135-SJPudkWre.json',
'湖北': '/asset/get/s/data-1482909813213-Hy6u_kbrl.json',
'湖南': '/asset/get/s/data-1482909818685-H17FOkZSl.json',
'广东': '/asset/get/s/data-1482909784051-BJgwuy-Sl.json',
'广西': '/asset/get/s/data-1482909787648-SyEPuJbSg.json',
'海南': '/asset/get/s/data-1482909796480-H12P_J-Bg.json',
'四川': '/asset/get/s/data-1482909931094-H17eKk-rg.json',
'贵州': '/asset/get/s/data-1482909791334-Bkwvd1bBe.json',
'云南': '/asset/get/s/data-1482909957601-HkA-FyWSx.json',
'西藏': '/asset/get/s/data-1482927407942-SkOV6Qbrl.json',
'陕西': '/asset/get/s/data-1508990012125-SyVBnCCab.json',
'甘肃': '/asset/get/s/data-1482909780863-r1aIdyWHl.json',
'青海': '/asset/get/s/data-1482909853618-B1IiOyZSl.json',
'宁夏': '/asset/get/s/data-1482909848690-HJWiuy-Bg.json',
'新疆': '/asset/get/s/data-1482909952731-B1YZKkbBx.json',
'北京': '/asset/get/s/data-1482818963027-Hko9SKJrg.json',
'天津': '/asset/get/s/data-1482909944620-r1-WKyWHg.json',
'重庆': '/asset/get/s/data-1482909775470-HJDIdk-Se.json',
'香港': '/asset/get/s/data-1461584707906-r1hSmtsx.json',
'澳门': '/asset/get/s/data-1482909771696-ByVIdJWBx.json'
*/

//这个地图区域字体位置设置无效，不知道什么缘故，有大佬的话可以设置下哈哈哈


function city_hlj(){
    var name = 'hlj';
    myChart.showLoading();//数据没加载前加个loading状态
    $.get(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();//关闭loading
        echarts.registerMap(name, geoJson);//注册地图插件
        myChart.setOption(
            option = {
                title: {
                    text: "湖南省各市发文量",
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                backgroundColor: '#0c1564',
                tooltip: {//显示每个地区数据
					trigger: 'item',
					formatter: function(params){
						if(typeof(params.value)[2] == 'undefined'){
							return params.name + ' : ' + params.value;
						}else{
							return params.name + ' : ' + params.value[2];
						}
					}
				},
				series: [
					{
						type: 'map',
						mapType: name,
						selectedMode: 'single',//单选地图
						roam: false,//禁止缩放
						mapLocation: {//地图位置
							x: 'center',
							y: 'top',
							width: '50%'
						},
						itemStyle: {
							normal: {
								label: {
									show: true,
									textStyle: {
										color: '#f4e925'
									}
								},
								borderColor: '#3fdaff',//边界线颜色
								borderWidth: 2,//边界线大小
								shadowColor: 'rgba(63,218,255,0.5)',
								shadowBlur: 30,
								areaColor: 'transparent'//地区背景颜色
							},
							emphasis: {//选中或者悬浮状态
								label: {
									show: true,
									textStyle: {
										color: '#fff'//选中或者悬浮字体颜色
									}
								},
								areaColor: '#2b91b7'//选中或者悬浮区域颜色
							}
						},
						data: [
						    {name: '株洲市',value: 1197},
                            {name: '衡阳市',value: 1107},
                            {name: '常德市',value: 288},
                            {name: '张家界市',value: 102},
                            {name: '怀化市',value: 1947},
						],
						animation: false
					}
				]
            }
        );
    });
};
city_hlj();