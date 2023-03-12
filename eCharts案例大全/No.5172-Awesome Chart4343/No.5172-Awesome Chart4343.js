option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};
// <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
//     <%@include file="../../jstl.jsp" %>
// <%
// String path = request.getContextPath();
// String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
// %>
// <input type="hidden" id="contextPath" value="<%=path%>" />
// <c:set var="ctx" value="/lbdpvdb"/>
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<meta charset="utf-8" />
// 		<title>双12看板</title>
// 		<script src="${ctx}/shuang12/2020/js/jquery-3.2.1.min.js" type="text/javascript" charset="utf-8"></script>
// 		<%-- <script src="${ctx}/shuang12/2020/js/swiper.min.js" type="text/javascript" charset="utf-8"></script> --%>
// 		<%-- <link rel="stylesheet" type="text/css" href="${ctx}/shuang12/2020/css/swiper.min.css"/> --%>
// 		<link rel="stylesheet" type="text/css" href="${ctx}/shuang12/2020/css/index.css"/>
// 		<link rel="stylesheet" type="text/css" href="${ctx}/shuang12/2020/css/animat.css"/>
// 	</head>
// 	<body>
// 		<div id="app">
// 			<div class="header">
// 				<div class="header-left">
// 					<div class="title">
// 						<span class="titleText">2021年全系统预收保费</span>
// 						<span class="titleYear"></span>
// 						<span class="titleTime"></span>
// 					</div>
// 					<div class="up-m-num">
// 						<div class="numScroll" id="numScroll1">
// 							<i class="num0"><b></b></i>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="header-right">
// 					<div class="name">
// 						<p class=nameText>双十二</p>
// 						<ul class="nameValue" id="numScroll2">
// 							<li class="number-item">
// 								<span>
// 									<i class="numberItem" style="transform: translate3d(-50%, 0, 0)">
// 										<i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i>
// 									</i>
// 								</span>
// 							</li>
// 						</ul>
// 					</div>
// 					<div>
// 						<p class="nameText">聚旺财</p>
// 						<ul class="nameValue" id="numScroll3">
// 							<li class="number-item">
// 								<span>
// 									<i class="numberItem" style="transform: translate3d(-50%, 0, 0)">
// 										<i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i>
// 									</i>
// 								</span>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 			<div class="down">
// 				<div class="down-box">
//                     <div class="top-num-wrap">
//                         <p class="down-title">财富金瑞</p>
//                         <ul class="nameValueCenter" id="numScroll4">
//                         	<li class="number-item">
// 								<span>
// 									<i class="numberItem" style="transform: translate3d(-50%, 0, 0)">
// 										<i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i>
// 									</i>
// 								</span>
// 							</li>
//                         </ul>
//                     </div>
//                     <div class="left">
//                     	<p class="box-title">财富销售排行</p>
//                         <div class="leaderboard-content hide1" id="content1">
//                             <ul class="leaderboard-item-wrap table1" data-id="timer1">
//                               <!-- <li class="leaderboard-item">
//                                     <div class="leaderboard-item-name">
//                                     	<div class="item-img"></div>
//                                     	<div class="item-title"><span>北京</span></div>
//                                     </div>
//                                     <div class="item-value"><span>82,000</span><span>万</span></div>
//                                 </li> -->
//                             </ul>
//                         </div>

//                     </div>
// 				</div>
//                 <div class="down-box">
//                     <div class="top-num-wrap">
//                     	<p class="down-title">金瑞人生</p>
//                     	<ul class="nameValueCenter" id="numScroll5">
//                     		<li class="number-item">
// 								<span>
// 									<i class="numberItem" style="transform: translate3d(-50%, 0, 0)">
// 										<i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i>
// 									</i>
// 								</span>
// 							</li>
//                     	</ul>
//                     </div>
//                     <div class="middle">
//                     	<p class="box-title">金瑞销售排行</p>
//                         <div class="leaderboard-content hide2">
//                             <ul class="leaderboard-item-wrap table2" data-id="timer2">
//                                 <!-- <li class="leaderboard-item">
//                                   <div class="leaderboard-item-name">
//                                     	<div class="item-img"></div>
//                                     	<div class="item-title"><span>北京</span></div>
//                                     </div>
//                                     <div class="item-value"><span>82,000</span><span>万</span></div>
//                                 </li> -->
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
// 				<div class="down-box">
//                     <div class="top-num-wrap">
//                         <p class="down-title">其他产品</p>
//                         <ul class="nameValueCenter" id="numScroll6">
//                         	<li class="number-item">
// 								<span>
// 									<i class="numberItem" style="transform: translate3d(-50%, 0, 0)">
// 										<i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i>
// 									</i>
// 								</span>
// 							</li>
//                         </ul>
//                     </div>
//                     <div class="right">
//                     	<p class="box-title">其他销售排行</p>
//                         <div class="leaderboard-content hide3">
//                             <ul class="leaderboard-item-wrap table3" data-id="timer3">
//                                 <!-- <li class="leaderboard-item">
//                                     <div class="leaderboard-item-name">
//                                     	<div class="item-img"></div>
//                                     	<div class="item-title"><span>北京</span></div>
//                                     </div>
//                                     <div class="item-value"><span>82,000</span><span>万</span></div>
//                                 </li> -->
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

// 			</div>
// 		</div>
// 	</body>
// 	<script src="${ctx}/shuang12/2020/js/animate.js" type="text/javascript" charset="utf-8"></script>
// </html>
