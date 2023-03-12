<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<script type="text/javascript" src="js/echarts.min.js" ></script>
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<title></title>		
		<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="bootstrap-table.js"></script>
		<script>
			function goBackChinaMap(){
				$('#china_map').css('display','block');
        		$('#city_map').css('display','none');
				$('#proe_map').css('display','none');
			}
			function goBackProeMap(){
				$('#china_map').css('display','none');
        		$('#city_map').css('display','none');
				$('#proe_map').css('display','block');
			}
		</script>
		<style>
			.Hotel_yd{box-shadow: 10px 10px 5px #888888;}
			legend{padding:0em;border:0;width:auto;font-weight:bold;font-size:1}
		</style>
	</head>
	<body>
		<div id="Hotel_yd" class="Hotel_yd" style="display:none;Z-index:9999; position:absolute; left:0px; top:0px;">
			
		</div>
		<div id="main" class="container-fluid">
			<div class="row">
				<div id="graphic" class="col-xs-6 col-sm-6 col-md-6">
					<img src="./find.png" alt="tulip" id="tulip" style="margin-left:0px;display:none"/>
					<div id="china_map" onmouseout="" style="display: block;"></div>
					<div id="proe_map" onmouseout="" style="width:860px;height:900px; none;"></div>
					<div id="city_map" onmouseout="" style="display: none;"></div>
					<div class="retPro" style="z-index:999;position: absolute;top:50px;left:10px;display: block;">
						<a href="javascript:void(0);" onclick="goBackChinaMap()" style="height:30px;background:#fff;line-height: 30px;border:1px solid #ccc;padding:5px 10px;margin-left:20px;border-radius:5px;cursor: pointer;color:#393939;text-decoration:none;">
							返回全国
						</a>
					</div>
					<div class="retPro" style="z-index:999;position: absolute;top:50px;left:110px;display: block;">
						<a href="javascript:void(0);" onclick="goBackProeMap()" style="height:30px;background:#fff;line-height: 30px;border:1px solid #ccc;padding:5px 10px;margin-left:20px;border-radius:5px;cursor: pointer;color:#393939;text-decoration:none;">
							返回本省
						</a>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6" onmouseover="clearCanvas()">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12">
							<div class="col-xs-6 col-sm-6 col-md-6">
								<div id="pie" class="pie" style="height:300px"></div>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-6">
								<div id="bar" class="bar" style="height:300px"></div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-12">
							<legend><font size="4">审计组列表</font></legend>
							<table id="table"></table>
						</div>
					</div>
				</div>
			</div>
		</div>
			
		<script>
			var china_map;
			var proe_map;
			var city_map;
			var cityname = '';
			$().ready(function(){				
					var t = $(window).height() ;
					var l = $(window).width()/2;
					var css = {
						width: l,  
						height: t
					};
					$("#china_map").css(css);
					$("#proe_map").css(css);
					$("#city_map").css(css);
					$.get('json/china.json', function (mapJson) {
				   		echarts.registerMap('china', mapJson);
					    initMap();
					});
			});

			function getMousePos(event) {
			   var e = event || window.event;
			   var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			   var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			   var x = e.pageX || e.clientX + scrollX;
			   var y = e.pageY || e.clientY + scrollY;
			   //alert('x: ' + x + '\ny: ' + y);
			   return { 'x': x, 'y': y };
			}

			function clearCanvas()  
			{ 
				//var c=document.getElementById("myCanvas");  
				//var cxt=c.getContext("2d");  
				//cxt.clearRect(0,0,c.width,c.height); 
				var Hotel_yd=document.getElementById("Hotel_yd");
				var tempCanvas=document.getElementById("myCanvas");
				if(tempCanvas){
					Hotel_yd.removeChild(tempCanvas);
				}
			}

			function mouseoverEvent(param,type,parent){
				var t = $(window).height() ;
				var l = $(window).width();
				//alert(l+"----"+t);//1479  693
				var ss = [87.68, 43.77];

				var pos = {x:0,y:0};
				pos.x=l/7.5;
				pos.y=t/2.5;
				pos = china_map.convertToPixel('geo', [87.68, 43.77]); 
				if(param.name=="新疆"){
					pos.x=l/7.5;
					pos.y=t/2.5;
				}else if(param.name=="西藏"){
					pos.x=l/6.4;
					pos.y=t/1.7;
				}else if(param.name=="甘肃"){
					pos.x=l/5;
					pos.y=t/2.3;
				}else if(param.name=="青海"){
					pos.x=l/4.9;
					pos.y=t/2;
				}else if(param.name=="四川"){
					pos.x=l/4.01;
					pos.y=t/1.67;
				}else if(param.name=="云南"){
					pos.x=l/4.1;
					pos.y=t/1.46;
				}else if(param.name=="宁夏"){
					pos.x=l/3.72;
					pos.y=t/2.09;
				}else if(param.name=="陕西"){
					pos.x=l/3.43;
					pos.y=t/1.98;
				}else if(param.name=="重庆"){
					pos.x=l/3.58;
					pos.y=t/1.68;
				}else if(param.name=="贵州"){
					pos.x=l/3.66;
					pos.y=t/1.53;
				}else if(param.name=="广东"){
					pos.x=l/3.16;
					pos.y=t/1.39;
				}else if(param.name=="广西"){
					pos.x=l/3.51;
					pos.y=t/1.4;
				}else if(param.name=="海南"){
					pos.x=l/3.37;
					pos.y=t/1.28;
				}else if(param.name=="内蒙古"){
					pos.x=l/2.89;
					pos.y=t/2.81;
				}else if(param.name=="黑龙江"){
					pos.x=l/2.43;
					pos.y=t/3.53;
				}else if(param.name=="吉林"){
					pos.x=l/2.48;
					pos.y=t/2.69;
				}else if(param.name=="辽宁"){
					pos.x=l/2.68;
					pos.y=t/2.44;
				}else if(param.name=="山西"){
					pos.x=l/3.22;
					pos.y=t/2.13;
				}else if(param.name=="河南"){
					pos.x=l/3.16;
					pos.y=t/1.87;
				}else if(param.name=="湖北"){
					pos.x=l/3.24;
					pos.y=t/1.72;
				}else if(param.name=="湖南"){
					pos.x=l/3.29;
					pos.y=t/1.55;
				}else if(param.name=="香港"){
					pos.x=l/3.17;
					pos.y=t/1.4;
				}else if(param.name=="澳门"){
					pos.x=l/3.15;
					pos.y=t/1.41;
				}else if(param.name=="北京"){
					pos.x=l/2.98;
					pos.y=t/2.35;
				}else if(param.name=="天津"){
					pos.x=l/2.92;
					pos.y=t/2.28;
				}else if(param.name=="河北"){
					pos.x=l/3.03;
					pos.y=t/2.15;
				}else if(param.name=="山东"){
					pos.x=l/2.86;
					pos.y=t/2.04;
				}else if(param.name=="安徽"){
					pos.x=l/2.92;
					pos.y=t/1.76;
				}else if(param.name=="江苏"){
					pos.x=l/2.77;
					pos.y=t/1.82;
				}else if(param.name=="江西"){
					pos.x=l/3;
					pos.y=t/1.55;
				}else if(param.name=="上海"){
					pos.x=l/2.7;
					pos.y=t/1.73;
				}else if(param.name=="浙江"){
					pos.x=l/2.77;
					pos.y=t/1.62;
				}else if(param.name=="福建"){
					pos.x=l/2.88;
					pos.y=t/1.49;
				}else if(param.name=="台湾"){
					pos.x=l/2.73;
					pos.y=t/1.41;
				}

				document.getElementById("Hotel_yd").style.left = (pos.x-200)+"px";
				document.getElementById("Hotel_yd").style.top = pos.y+"px";
				//document.getElementById("Hotel_yd").style.left =(param.event.offsetX-200)+"px";
				//document.getElementById("Hotel_yd").style.top =(param.event.offsetY)+"px";
				document.getElementById("Hotel_yd").style.display ="block";

				var Hotel_yd=document.getElementById("Hotel_yd");
				var drawing=document.getElementById("myCanvas");
				if(drawing){
					Hotel_yd.removeChild(drawing);
				}
				drawing = document.createElement('canvas'); 
				drawing.id = "myCanvas"; 
				drawing.width = 200; 
				drawing.height = 120; 
				drawing.style.zIndex = 8; 
				drawing.style.position = "absolute"; 
				//drawing.style.border   = "1px solid";
				Hotel_yd.appendChild(drawing);
				
				//确定浏览器支持<canvas>元素  
				if(drawing.getContext){
					//clearCanvas();
					//取得绘图上下文对象的引用，“2d”是取得2D上下文对象  
					var context=drawing.getContext("2d");
					context.clearRect(0,0,200,120);
					//开始路径  
					context.beginPath();

					context.lineWidth = 0; 
					
				
					/*rect(x,y,width,height):从点（x,y）开始绘制一个矩形路径*/  
					//context.fillRect(0,10,140,90);

					context.shadowOffsetX = 2; // 设置水平位移
					context.shadowOffsetY = 2; // 设置垂直位移
					context.shadowBlur = 5; // 设置模糊度
					context.shadowColor = "rgba(0,0,0,0.5)"; // 设置阴影颜色

					context.strokeStyle = "#E4EAF6";
					context.lineWidth = 0;
					context.fillStyle ="#D1D9F0";
					context.fillRect(0,10,180,110);
					context.fillStyle ="#E1EAF3";
					context.fillRect(3,10,180,107);      
					//context.strokeRect(0,10,140,90);								
					context.clearRect(0,0,180,10);
					context.clearRect(180,0,20,120);
					
					context.stroke();
					
					context.beginPath();
					
					context.shadowOffsetX = 0; // 设置水平位移
					context.shadowOffsetY = 0; // 设置垂直位移
					context.shadowBlur = 0; // 设置模糊度
					context.shadowColor = "rgba(0,0,0,0.5)"; // 设置阴影颜色

					
					context.font = "bold 14px Arial";
					context.fillStyle = 'black';
					//context.fillText("<a href='http://www.baidu.com'>百度</a>",60,40);
					context.font = "bold 14px Arial";
					context.fillStyle = 'black';
					context.fillText(param.name+"：",20,40);
					context.font = "14px Arial";
					context.fillStyle = 'black';
					context.fillText("审计进点：",20,60);
					context.fillStyle = 'red';
					context.fillText("123",90,60);
					context.fillStyle = 'black';
					context.fillText("结束现场审计：",20,80);
					context.fillStyle = 'red';
					context.fillText("136",120,80);
					context.fillStyle = 'black';
					context.fillText("审计报告签发：",20,100);
					context.fillStyle = 'red';
					context.fillText("564",120,100);
					context.fillStyle = 'black';
					
					context.fillStyle = 'rgba(255, 251, 240, 0.3)';
					//context.fillStyle = 'rgba(255, 251, 240, 1)';
					//context.strokeStyle = "#FFFFFF";//线条的颜色

					context.moveTo(200,0);
					context.lineTo(0,10);
					context.lineTo(180,10);
					context.moveTo(200,0);
					context.fill(); 
					context.stroke();
					
					context.beginPath();
					context.fillStyle = 'rgba(255, 251, 240, 0.6)';
					context.moveTo(200,0);
					context.lineTo(180,10);
					context.lineTo(180,100);
					context.moveTo(200,0);
					context.fill();

					//context.fillText("广东省：\n审计地点：234\n审计数量：1234\n审核签发：1234",10,30);
					//最后必须调用stroke()方法，这样才能把图像绘制到画布上。  
					context.stroke();					

					if(type!="city"){
						var img=document.getElementById("tulip");
						context.drawImage(img,160,25);
						bindEvent(param,drawing,type,parent);
					}
				}
			}

			function bindEvent(param,drawing,type,parent){
				if(type=="china"){
					drawing.addEventListener('click',function(e) {
						var x= e.offsetX;
						var y= e.offsetY;

						if((x>=160&&x<=170)&&(y>=25&&y<=35)){
							var count = 0;
							if(count==0){								
								setTimeout(function () {
										$('#china_map').css('display','none');
										$('#city_map').css('display','none');
										$('#proe_map').css('display','block');
								}, 500);
								//选择省的单击事件
								var selectProe = param.name;
								//    调取后台数据
								$.get('json/'+selectProe+'/'+selectProe+'.json', function (Citymap) {
										echarts.registerMap(selectProe, Citymap);
										var myChartProe = echarts.init(document.getElementById('proe_map'));
										proe_map = myChartProe;
										myChartProe.setOption({
											tooltip: {											
												backgroundColor: '#E4EAF6',
												enterable:true,
												//alwaysShowContent:true,
												hideDelay:100,
												borderRadius: 5,//边框圆角
												padding: 14, // [5, 10, 15, 20] 内边距
												textStyle:{
													color:'#000'
												},
												show: false,
												position: function(point, params, dom, rect, size){
													return [10,10];
												},
												trigger: 'item',
												formatter: function (result){//回调函数，参数params具体格式参加官方API
												   return "<div><b>"+result.name+"</b><br />审计进点：<font color='red'>"+result.name+"</font><br />结束现场审计：<font color='red'>"+result.value+"</font><br />审计报告签发：<font color='red'>"+result.value+"</font></div>";
												}
											},
											dataRange:{  
												min:0,  
												max:50,  
												text:['高','低'],  
												realtime:false,
												calculable:false,
												splitNumber:0,
												itemWidth:10,
												show:false,
												itemHeight:60,
												color:['lightskyblue','#f2f2f2']
											}, 
											title:{
												//text:selectProe+'数据总览',
												//subtext:'',
												x:'center',
												y:'top',
												textAlign:'left'
											},
											series: [{
												type: 'map',
												map: selectProe ,//要和echarts.registerMap（）中第一个参数一致
												scaleLimit: { min: 0.8, max: 1.9 },//缩放
												 mapLocation:{  
													y:60  
												},  
												itemSytle:{  
													emphasis:{label:{show:false}}  
												}, 
												label: {
													normal: {
														show: true
													},
													emphasis: {
														show: true
													}
												},
												data : [
													{name:'大方县',value:'5'},  
													{name:'金沙县',value:'0'},  
													{name:'织金县',value:'10'},  
													{name:'七星关区',value:'30'},  
													{name:'纳雍县',value:'50'},  
													{name:'赫章县',value:'15'}
												]//dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
											}]
										})

										var pie = echarts.init(document.getElementById('pie'),'light');
										var pieoption = {
													title : {
														text: '按阶段统计',
														x:'left'
													},
													tooltip : {
														trigger: 'item',
														formatter: "{a} <br/>{b} : {c} ({d}%)"
													},
													legend: {
														orient : 'vertical',
														x : 'right',
														data:['直接访问','邮件营销','联盟广告']
													},
													toolbox: {
														show : false,
														feature : {
															mark : {show: true},
															dataView : {show: true, readOnly: false},
															magicType : {
																show: true, 
																type: ['pie', 'funnel'],
																option: {
																	funnel: {
																		x: '25%',
																		width: '50%',
																		funnelAlign: 'left',
																		max: 1548
																	}
																}
															},
															restore : {show: true},
															saveAsImage : {show: true}
														}
													},
													calculable : true,
													series : [
														{
															name:'访问来源',
															type:'pie',
															radius : '50%',
															center: ['40%', '50%'],
															itemStyle: {
																normal: {
																	label: {
																		show: true,
																		formatter: '{d}%'
																	},
																	labelLine: {
																		show: true,
																		length:0.001
																	}
																}
															},
															data:[
																{value:335, name:'直接访问'},
																{value:310, name:'邮件营销'},
																{value:234, name:'联盟广告'}
															]
														}
													]
												};
										pie.setOption(pieoption,true);

										var bar = echarts.init(document.getElementById('bar'),'light');
										var baroption = {
													title : {
														text: '按机关统计'
													},
													tooltip : {
														trigger: 'axis'
													},
													toolbox: {
														show : false,
														feature : {
															mark : {show: true},
															dataView : {show: true, readOnly: false},
															magicType : {show: true, type: ['line', 'bar']},
															restore : {show: true},
															saveAsImage : {show: true}
														}
													},
													calculable : true,
													xAxis : [
														{
															type : 'category',
															data : ['1月','2月']
														}
													],
													yAxis : [
														{
															type : 'value'
														}
													],
													series : [
														{
															name:'蒸发量',
															type:'bar',
															data:[2.0, 4.9],
															markPoint : {
																data : [
																	{type : 'max', name: '最大值'},
																	{type : 'min', name: '最小值'}
																]
															},
															markLine : {
																data : [
																	{type : 'average', name: '平均值'}
																]
															}
														},
														{
															name:'降水量',
															type:'bar',
															data:[2.6, 5.9, 9.0, 26.4],
															markPoint : {
																data : [
																	{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
																	{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
																]
															},
															markLine : {
																data : [
																	{type : 'average', name : '平均值'}
																]
															}
														}
													]
												};
										
										bar.setOption(baroption,true);

										var data = [{
												"num": 1,
												"audit_name": "张三",
												"audit_money" : "100"
											},
											{
												"num": 1,
												"audit_name": "张三12341",
												"audit_money" : "100"
											}
										];
										$("#table").bootstrapTable('load',data);

										myChartProe.on('mouseover', function (param) {
											mouseoverEvent(param,'proe',selectProe);
										});

										myChartProe.on('click',function(rel){											
											var pie = echarts.init(document.getElementById('pie'),'light');
											var pieoption = {
														title : {
															text: '按阶段统计',
															x:'left'
														},
														tooltip : {
															trigger: 'item',
															formatter: "{a} <br/>{b} : {c} ({d}%)"
														},
														legend: {
															orient : 'vertical',
															x : 'right',
															data:['直接访问','邮件营销']
														},
														toolbox: {
															show : false,
															feature : {
																mark : {show: true},
																dataView : {show: true, readOnly: false},
																magicType : {
																	show: true, 
																	type: ['pie', 'funnel'],
																	option: {
																		funnel: {
																			x: '25%',
																			width: '50%',
																			funnelAlign: 'left',
																			max: 1548
																		}
																	}
																},
																restore : {show: true},
																saveAsImage : {show: true}
															}
														},
														calculable : true,
														series : [
															{
																name:'访问来源',
																type:'pie',
																radius : '50%',
																center: ['40%', '50%'],
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			formatter: '{d}%'
																		},
																		labelLine: {
																			show: true,
																			length:0.001
																		}
																	}
																},
																data:[
																	{value:335, name:'直接访问'},
																	{value:310, name:'邮件营销'}
																]
															}
														]
													};
											pie.setOption(pieoption,true);

											var bar = echarts.init(document.getElementById('bar'),'light');
											var baroption = {
														title : {
															text: '按机关统计'
														},
														tooltip : {
															trigger: 'axis'
														},
														toolbox: {
															show : false,
															feature : {
																mark : {show: true},
																dataView : {show: true, readOnly: false},
																magicType : {show: true, type: ['line', 'bar']},
																restore : {show: true},
																saveAsImage : {show: true}
															}
														},
														calculable : true,
														xAxis : [
															{
																type : 'category',
																data : ['1月','2月']
															}
														],
														yAxis : [
															{
																type : 'value'
															}
														],
														series : [
															{
																name:'蒸发量',
																type:'bar',
																data:[2.0, 4.9, 7.0, 23.2],
																markPoint : {
																	data : [
																		{type : 'max', name: '最大值'},
																		{type : 'min', name: '最小值'}
																	]
																},
																markLine : {
																	data : [
																		{type : 'average', name: '平均值'}
																	]
																}
															},
															{
																name:'降水量',
																type:'bar',
																data:[2.6, 5.9],
																markPoint : {
																	data : [
																		{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
																		{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
																	]
																},
																markLine : {
																	data : [
																		{type : 'average', name : '平均值'}
																	]
																}
															}
														]
													};
											
											bar.setOption(baroption,true);

											var data = [{
													"num": 1,
													"audit_name": "张三",
													"audit_money" : "100"
												}
											];
											$("#table").bootstrapTable('load',data);

										})
									});
								}
								clearCanvas();
						}
					});
				}else if(type=="proe"){
					drawing.addEventListener('click',function(e) {
						var x= e.offsetX;
						var y= e.offsetY;

						if((x>=160&&x<=170)&&(y>=25&&y<=35)){
							var count = 0;
							if(count==0){								
								setTimeout(function () {
										$('#china_map').css('display','none');
										$('#city_map').css('display','block');
										$('#proe_map').css('display','none');
								}, 500);
								
								//选择市的单击事件
								var selectCity = param.name;
								
								//调取后台数据
								$.get('json/'+parent+'/'+selectCity+'.json', function (Citymap) {
										echarts.registerMap(selectCity, Citymap);
										var myChartCity = echarts.init(document.getElementById('city_map'));
										city_map = myChartCity;
										myChartCity.setOption({
											tooltip: {											            
												backgroundColor: '#E4EAF6',
												enterable:true,
												//alwaysShowContent:true,
												hideDelay:100,
												borderRadius: 5,//边框圆角
												padding: 14, // [5, 10, 15, 20] 内边距
												textStyle:{
													color:'#000'
												},
												show: false,
												position: function(point, params, dom, rect, size){
													return [10,10];
												},
												trigger: 'item',
												formatter: function (result){//回调函数，参数params具体格式参加官方API
												   return "<div><b>"+result.name+"</b><br />审计进点：<font color='red'>"+result.name+"</font><br />结束现场审计：<font color='red'>"+result.value+"</font><br />审计报告签发：<font color='red'>"+result.value+"</font></div>";
												}
											},
											dataRange:{  
												min:0,  
												max:50,  
												text:['高','低'],  
												realtime:false,
												show:false,
												calculable:false,
												splitNumber:0,
												itemWidth:10,
												itemHeight:60,
												color:['lightskyblue','#f2f2f2']
											}, 
											title:{
												//text:selectCity+'数据总览',
												//subtext:'',
												x:'center',
												y:'top',
												textAlign:'left'
											},
											series: [{
												type: 'map',
												map: selectCity ,//要和echarts.registerMap（）中第一个参数一致
												scaleLimit: { min: 0.8, max: 1.9 },//缩放
												 mapLocation:{  
													y:60  
												},  
												itemSytle:{  
													emphasis:{label:{show:false}}  
												}, 
												label: {
													normal: {
														show: true
													},
													emphasis: {
														show: true
													}
												},
												data : [
													{name:'大方县',value:'5'},  
													{name:'金沙县',value:'0'},  
													{name:'织金县',value:'10'},  
													{name:'七星关区',value:'30'},  
													{name:'纳雍县',value:'50'},  
													{name:'赫章县',value:'15'}
												]//dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
											}]
										})
										
										
										myChartCity.on('mouseover', function (param) {
											mouseoverEvent(param,'city',selectCity);
										});
										myChartCity.on('click',function(rel){											
											if(cityname == rel.name){
												var pieoption = {
														title : {
															text: '按阶段统计',
															x:'left'
														},
														tooltip : {
															trigger: 'item',
															formatter: "{a} <br/>{b} : {c} ({d}%)"
														},
														legend: {
															orient : 'vertical',
															x : 'right',
															data:['直接访问','邮件营销','联盟广告']
														},
														toolbox: {
															show : false,
															feature : {
																mark : {show: true},
																dataView : {show: true, readOnly: false},
																magicType : {
																	show: true, 
																	type: ['pie', 'funnel'],
																	option: {
																		funnel: {
																			x: '25%',
																			width: '50%',
																			funnelAlign: 'left',
																			max: 1548
																		}
																	}
																},
																restore : {show: true},
																saveAsImage : {show: true}
															}
														},
														calculable : true,
														series : [
															{
																name:'访问来源',
																type:'pie',
																radius : '50%',
																center: ['40%', '50%'],
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			formatter: '{d}%'
																		},
																		labelLine: {
																			show: true,
																			length:0.001
																		}
																	}
																},
																data:[
																	{value:335, name:'直接访问'},
																	{value:310, name:'邮件营销'},
																	{value:234, name:'联盟广告'}
																]
															}
														]
													};
												
												var pie = echarts.init(document.getElementById('pie'),'light');
												pie.setOption(pieoption,true);

												//var bar = echarts.init(document.getElementById('bar'),'light');
												var baroption = {
															title : {
																text: '按机关统计'
															},
															tooltip : {
																trigger: 'axis'
															},
															toolbox: {
																show : false,
																feature : {
																	mark : {show: true},
																	dataView : {show: true, readOnly: false},
																	magicType : {show: true, type: ['line', 'bar']},
																	restore : {show: true},
																	saveAsImage : {show: true}
																}
															},
															calculable : true,
															xAxis : [
																{
																	type : 'category',
																	data : ['1月','2月']
																}
															],
															yAxis : [
																{
																	type : 'value'
																}
															],
															series : [
																{
																	name:'蒸发量',
																	type:'bar',
																	data:[2.0, 4.9],
																	markPoint : {
																		data : [
																			{type : 'max', name: '最大值'},
																			{type : 'min', name: '最小值'}
																		]
																	},
																	markLine : {
																		data : [
																			{type : 'average', name: '平均值'}
																		]
																	}
																},
																{
																	name:'降水量',
																	type:'bar',
																	data:[2.6, 5.9, 9.0, 26.4],
																	markPoint : {
																		data : [
																			{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
																			{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
																		]
																	},
																	markLine : {
																		data : [
																			{type : 'average', name : '平均值'}
																		]
																	}
																}
															]
														};
												
												var bar = echarts.init(document.getElementById('bar'),'light');
												bar.setOption(baroption,true);

												var data = [{
														"num": 1,
														"audit_name": "张三",
														"audit_money" : "100"
													},
													{
														"num": 1,
														"audit_name": "张三12341",
														"audit_money" : "100"
													}
												];
												$("#table").bootstrapTable('load',data);
												cityname = '';
											}else{
												var pieoption = {
														title : {
															text: '按阶段统计县',
															x:'left'
														},
														tooltip : {
															trigger: 'item',
															formatter: "{a} <br/>{b} : {c} ({d}%)"
														},
														legend: {
															orient : 'vertical',
															x : 'right',
															data:['直接访问']
														},
														toolbox: {
															show : false,
															feature : {
																mark : {show: true},
																dataView : {show: true, readOnly: false},
																magicType : {
																	show: true, 
																	type: ['pie', 'funnel'],
																	option: {
																		funnel: {
																			x: '25%',
																			width: '50%',
																			funnelAlign: 'left',
																			max: 1548
																		}
																	}
																},
																restore : {show: true},
																saveAsImage : {show: true}
															}
														},
														calculable : true,
														series : [
															{
																name:'访问来源',
																type:'pie',
																radius : '50%',
																center: ['40%', '50%'],
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			formatter: '{d}%'
																		},
																		labelLine: {
																			show: true,
																			length:0.001
																		}
																	}
																},
																data:[
																	{value:335, name:'直接访问'}
																]
															}
														]
													};
													
												var pie = echarts.init(document.getElementById('pie'),'light');
												pie.setOption(pieoption,true);

												//var bar = echarts.init(document.getElementById('bar'),'light');
												var baroption = {
															title : {
																text: '按机关统计'
															},
															tooltip : {
																trigger: 'axis'
															},
															toolbox: {
																show : false,
																feature : {
																	mark : {show: true},
																	dataView : {show: true, readOnly: false},
																	magicType : {show: true, type: ['line', 'bar']},
																	restore : {show: true},
																	saveAsImage : {show: true}
																}
															},
															calculable : true,
															xAxis : [
																{
																	type : 'category',
																	data : ['1月']
																}
															],
															yAxis : [
																{
																	type : 'value'
																}
															],
															series : [
																{
																	name:'蒸发量',
																	type:'bar',
																	data:[2.0, 4.9],
																	markPoint : {
																		data : [
																			{type : 'max', name: '最大值'},
																			{type : 'min', name: '最小值'}
																		]
																	},
																	markLine : {
																		data : [
																			{type : 'average', name: '平均值'}
																		]
																	}
																},
																{
																	name:'降水量',
																	type:'bar',
																	data:[2.6],
																	markPoint : {
																		data : [
																			{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
																			{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
																		]
																	},
																	markLine : {
																		data : [
																			{type : 'average', name : '平均值'}
																		]
																	}
																}
															]
														};
												
												var bar = echarts.init(document.getElementById('bar'),'light');
												bar.setOption(baroption,true);

												var data = [{
														"num": 1,
														"audit_name": "县1",
														"audit_money" : "100"
													},
													{
														"num": 2,
														"audit_name": "县12341",
														"audit_money" : "100"
													},
													{
														"num": 3,
														"audit_name": "县12341",
														"audit_money" : "100"
													}
												];
												$("#table").bootstrapTable('load',data);
												cityname = rel.name;
											}
										})
									});
							}
							clearCanvas();
						}
					});
				}
			}

			function initMap(){
				var chart = echarts.init(document.getElementById('china_map'));//在id为mainMap的dom元素中显示地图
				china_map = chart;
				chart.setOption({
					tooltip: {
						backgroundColor: '#E4EAF6',
						enterable:true,
						//alwaysShowContent:true,
						hideDelay:100,
						borderRadius: 5,//边框圆角
						padding: 14, // [5, 10, 15, 20] 内边距
						textStyle:{
							color:'#000'
						},
						show: false,
						position: function(point, params, dom, rect, size){
							return [10,10];
						},
						trigger: 'item',
						formatter: function (result){//回调函数，参数params具体格式参加官方API									
						   var pos = getMousePos();
						   return "<div><b>"+result.name+"</b><br />审计进点：<font color='red'>"+result.name+"</font><br />结束现场审计：<font color='red'>"+result.value+"</font><br />审计报告签发：<font color='red'>["+pos.x+","+pos.y+"]</font></div>";
						}
					},
					dataRange:{  
						min:0,  
						max:50,  
						splitNumber:0,
						text:['高','低'],  
						realtime:false,
						calculable:false,
						selectedMode:false,
						realtime:false,
						show:false,
						itemWidth:10,
						itemHeight:60,
						color:['#C8E5C6','#F6E5EB','#F18779','#F9C6C5','#C9E4F5','#96CFEA']
					}, 
					title:{
						text:'',
						//subtext:'',
						x:'center',
						y:'top',
						textAlign:'left'
					},
					series: [{
						type: 'map',
						map: 'china',//要和echarts.registerMap（）中第一个参数一致
						scaleLimit: { min: 0.8, max: 1.9 },//缩放
						mapLocation:{  
							y:60  
						},  
						itemSytle:{  
							emphasis:{label:{show:false}}  
						}, 
						label: {
							normal: {
								show: true
							},
							emphasis: {
								show: true
							}
						},
						data : [								
							{name: '新疆',value: 1},
							{name: '黑龙江',value: 1},
							{name: '西藏',value: 10},
							{name: '内蒙古',value: 10},
							{name: '福建',value: 10},
							{name: '广西',value: 10},
							{name: '青海',value: 40},
							{name: '贵州',value: 40},
							{name: '重庆',value: 40},
							{name: '宁夏',value: 40},
							{name: '河北',value: 40},
							{name: '吉林',value: 40},
							{name: '台湾',value: 40},
							{name: '香港',value: 40},
							{name: '澳门',value: 40},
							{name: '江西',value: 40},
							{name: '安徽',value: 40},
							{name: '湖北',value: 40},
							{name: '甘肃',value: 50},
							{name: '山西',value: 50},
							{name: '山东',value: 50},
							{name: '浙江',value: 50},
							{name: '云南',value: 50},
							{name: '四川',value: 17},
							{name: '陕西',value: 17},
							{name: '湖南',value: 17},
							{name: '广东',value: 17},
							{name: '辽宁',value: 17},
							{name: '北京',value: 30},
							{name: '天津',value: 30},
							{name: '上海',value: 30},
							{name: '河南',value: 30},
							{name: '江苏',value: 30},
							{name: '海南',value: 30}
						]
					}]
				});

				chart.on('mouseover', function (param) {
					mouseoverEvent(param,'china','');
				});

				chart.on('click', function (result) {//回调函数，点击时触发，参数params格式参加官方API						
					var pie = echarts.init(document.getElementById('pie'),'light');
					var pieoption = {
								title : {
									text: '按阶段统计',
									x:'left'
								},
								tooltip : {
									trigger: 'item',
									formatter: "{a} <br/>{b} : {c} ({d}%)"
								},
								legend: {
									x : 'right',
									y : 'center',
									left:'300',
									orient : 'vertical',
									padding: 5,
									itemWidth: 20,
									itemHeight: 15,
									itemGap: 8,
									data:['审计通知书制发','审计进点','结束现场审计','设计宝宝报送达被设计单位','主管业务司复核审计报告完成','法规司审理审计报告完成','署审计业务会议审定','审计报告签发']
								},
								toolbox: {
									show : false,
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										magicType : {
											show: true, 
											type: ['pie', 'funnel'],
											option: {
												funnel: {
													x: '25%',
													width: '50%',
													funnelAlign: 'left',
													max: 1548
												}
											}
										},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								calculable : true,
								series : [
									{
										name:'访问来源',
										type:'pie',
										radius : '50%',
										center: ['40%', '50%'],
										itemStyle: {
											normal: {
												label: {
													show: true,
													formatter: '{d}%'
												},
												labelLine: {
													show: true,
													length:0.001
												}
											}
										},
										data:[
											{value:4, name:'审计通知书制发'},
											{value:5, name:'审计进点'},
											{value:4, name:'结束现场审计'},
											{value:5, name:'设计宝宝报送达被设计单位'},
											{value:18, name:'主管业务司复核审计报告完成'},
											{value:26, name:'法规司审理审计报告完成'},
											{value:27, name:'署审计业务会议审定'},
											{value:11, name:'审计报告签发'}
										]
									}
								],
								color: ['#F4BC43','#FF8D20','#ED5851','#CB52F5','#7355F1','#5790E9','#52CDF9','#50E7EE']
							};
					pie.setOption(pieoption,true);

					window.onresize = pie.resize;

					var bar = echarts.init(document.getElementById('bar'),'light');
					var baroption = {
								title : {
									text: '按机关统计'
								},
								tooltip : {
									trigger: 'axis'
								},
								toolbox: {
									show : false,
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										magicType : {show: true, type: ['line', 'bar']},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								grid: {  //整个图的上下左右的调整        
									left: '10%',        
									right: '4%',        
									top:  '20%',        
									bottom: '10%',
									containLabel: true
								},
								calculable : true,
								xAxis : [
									{
										type : 'category',
										data : ['署本部','特派办','派出局',{value: '省厅',
												textStyle: {
													color: 'blue',
													fontWeight: 'bolder'
												}}]
									}
								],
								yAxis : [
									{
										type : 'value'
									}
								],
								series : [
									{
										name:'蒸发量',
										type:'bar',
										barMaxWidth:30,
										barCateGoryGap:'1%',
										itemStyle: {
											normal: {
												color: function(params) { 
													var colorList = ['#56CDEF','#C756F0','#FF8C1D','#EF5756']; 
													return colorList[params.dataIndex] 
												}
											},
										},
										data:[350000, 300000, 220000, 100000]
									}
								]
							};
					
					bar.setOption(baroption,true);

					bar.on('click', function (result) {
						alert(1);
					});

					$('#table').bootstrapTable({
												columns: [{
													field: 'num',
													title: '序号'
												}, {
													field: 'p_name',
													title: '项目名称',
													formatter:function(value, row, index){  
														return '<span style="color:#397CC2">'+value+'</span>';
													}
												}, {
													field: 'q_money',
													title: '问题金额（万元）'
												}, {
													field: 'audit_addr',
													title: '审计地点'
												}]
											});
					var data = [{
									"num": 1,
									"p_name": "xxxx水库工程审计",
									"q_money" : "1239,123.00",
									"audit_addr" : "北京"
								},
								{
									"num": 2,
									"p_name": "xxxx水电站审计",
									"q_money" : "239,123.00",
									"audit_addr" : "上海"
								},
								{
									"num": 3,
									"p_name": "xxxxx水利工程审计",
									"q_money" : "1239,123.00",
									"audit_addr" : "武汉"
								},
								{
									"num": 4,
									"p_name": "xxxx水库工程审计",
									"q_money" : "239,123.00",
									"audit_addr" : "长沙"
								},
								{
									"num": 5,
									"p_name": "xxxx水电站审计",
									"q_money" : "167,123.00",
									"audit_addr" : "青岛"
								},
								{
									"num": 6,
									"p_name": "xxxx水库工程审计",
									"q_money" : "1239,123.00",
									"audit_addr" : "北京"
								},
								{
									"num": 7,
									"p_name": "xxxx水电站审计",
									"q_money" : "239,123.00",
									"audit_addr" : "上海"
								},
								{
									"num": 8,
									"p_name": "xxxxx水利工程审计",
									"q_money" : "1239,123.00",
									"audit_addr" : "武汉"
								},
								{
									"num": 9,
									"p_name": "xxxx水库工程审计",
									"q_money" : "239,123.00",
									"audit_addr" : "长沙"
								},
								{
									"num": 10,
									"p_name": "xxxx水电站审计",
									"q_money" : "167,123.00",
									"audit_addr" : "青岛"
								},
								{
									"num": 11,
									"p_name": "xxxx水库工程审计",
									"q_money" : "178,456.00",
									"audit_addr" : "北京"
								}
							];
					$("#table").bootstrapTable('load',data);					
				});
				
				var pie = echarts.init(document.getElementById('pie'),'light');
				var pieoption = {
							title : {
								text: '按阶段统计',
								x:'left'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend: {
								x : 'right',
								y : 'center',
								left:'300',
								orient : 'vertical',
								padding: 5,
								itemWidth: 20,
								itemHeight: 15,
								itemGap: 8,
								data:['审计通知书制发','审计进点','结束现场审计','设计宝宝报送达被设计单位','主管业务司复核审计报告完成','法规司审理审计报告完成','署审计业务会议审定','审计报告签发']
							},
							toolbox: {
								show : false,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType : {
										show: true, 
										type: ['pie', 'funnel'],
										option: {
											funnel: {
												x: '25%',
												width: '50%',
												funnelAlign: 'left',
												max: 1548
											}
										}
									},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							series : [
								{
									name:'访问来源',
									type:'pie',
									radius : '50%',
									center: ['40%', '50%'],
									itemStyle: {
										normal: {
											label: {
												show: true,
												formatter: '{d}%'
											},
											labelLine: {
												show: true,
												length:0.001
											}
										}
									},
									data:[
										{value:4, name:'审计通知书制发'},
										{value:5, name:'审计进点'},
										{value:4, name:'结束现场审计'},
										{value:5, name:'设计宝宝报送达被设计单位'},
										{value:18, name:'主管业务司复核审计报告完成'},
										{value:26, name:'法规司审理审计报告完成'},
										{value:27, name:'署审计业务会议审定'},
										{value:11, name:'审计报告签发'}
									]
								}
							],
							color: ['#F4BC43','#FF8D20','#ED5851','#CB52F5','#7355F1','#5790E9','#52CDF9','#50E7EE']
						};
				pie.setOption(pieoption,true);

				window.onresize = pie.resize;

				var bar = echarts.init(document.getElementById('bar'),'light');
				var baroption = {
							title : {
								text: '按机关统计'
							},
							tooltip : {
								trigger: 'axis'
							},
							toolbox: {
								show : false,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType : {show: true, type: ['line', 'bar']},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							grid: {  //整个图的上下左右的调整        
								left: '10%',        
								right: '4%',        
								top:  '20%',        
								bottom: '10%',
								containLabel: true
							},
							calculable : true,
							xAxis : [
								{
									type : 'category',
									data : ['署本部','特派办','派出局',{value: '省厅',
											textStyle: {
												color: 'blue',
												fontWeight: 'bolder'
											}}]
								}
							],
							yAxis : [
								{
									type : 'value'
								}
							],
							series : [
								{
									name:'蒸发量',
									type:'bar',
									barMaxWidth:30,
									barCateGoryGap:'1%',
									itemStyle: {
										normal: {
											color: function(params) { 
												var colorList = ['#56CDEF','#C756F0','#FF8C1D','#EF5756']; 
												return colorList[params.dataIndex] 
											}
										},
									},
									data:[350000, 300000, 220000, 100000]
								}
							]
						};
				
				bar.setOption(baroption,true);

				bar.on('click', function (result) {
					alert(1);
				});

				$('#table').bootstrapTable({
											columns: [{
												field: 'num',
												title: '序号'
											}, {
												field: 'p_name',
												title: '项目名称',
												formatter:function(value, row, index){  
													return '<span style="color:#397CC2">'+value+'</span>';
												}
											}, {
												field: 'q_money',
												title: '问题金额（万元）'
											}, {
												field: 'audit_addr',
												title: '审计地点'
											}]
										});
				var data = [{
								"num": 1,
								"p_name": "xxxx水库工程审计",
								"q_money" : "1239,123.00",
								"audit_addr" : "北京"
							},
							{
								"num": 2,
								"p_name": "xxxx水电站审计",
								"q_money" : "239,123.00",
								"audit_addr" : "上海"
							},
							{
								"num": 3,
								"p_name": "xxxxx水利工程审计",
								"q_money" : "1239,123.00",
								"audit_addr" : "武汉"
							},
							{
								"num": 4,
								"p_name": "xxxx水库工程审计",
								"q_money" : "239,123.00",
								"audit_addr" : "长沙"
							},
							{
								"num": 5,
								"p_name": "xxxx水电站审计",
								"q_money" : "167,123.00",
								"audit_addr" : "青岛"
							},
							{
								"num": 6,
								"p_name": "xxxx水库工程审计",
								"q_money" : "1239,123.00",
								"audit_addr" : "北京"
							},
							{
								"num": 7,
								"p_name": "xxxx水电站审计",
								"q_money" : "239,123.00",
								"audit_addr" : "上海"
							},
							{
								"num": 8,
								"p_name": "xxxxx水利工程审计",
								"q_money" : "1239,123.00",
								"audit_addr" : "武汉"
							},
							{
								"num": 9,
								"p_name": "xxxx水库工程审计",
								"q_money" : "239,123.00",
								"audit_addr" : "长沙"
							},
							{
								"num": 10,
								"p_name": "xxxx水电站审计",
								"q_money" : "167,123.00",
								"audit_addr" : "青岛"
							},
							{
								"num": 11,
								"p_name": "xxxx水库工程审计",
								"q_money" : "178,456.00",
								"audit_addr" : "北京"
							}
						];
				$("#table").bootstrapTable('load',data);
			}

			//$(window).resize(function() {
				//window.location.reload();
				

				//china_map.resize();
				//proe_map.resize();
				//city_map.resize();
			//});

			$(window).resize(function() {
				var t = $(window).height() ;
				var l = $(window).width()/2;
				var css = {
					width: l,  
					height: t
				};
				$("#china_map").css(css);
				$("#proe_map").css(css);
				$("#city_map").css(css);
				china_map.resize();
				proe_map.resize();
				city_map.resize();
			});
								
		</script>
	</body>
</html>
