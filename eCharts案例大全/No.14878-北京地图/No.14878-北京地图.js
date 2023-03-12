var option = {
    bmap: {
        center: [116.424966,39.922018],
        zoom: 12,
        roam: true,
        enableMapClick: true
    }
}

myChart.setOption(option);
setTimeout(init, 0)

function init() {
    initMap();
    //makerPoint();
    getBoundary();
    //setTimeout(getBoundary, 1000)
}

function getMap() {
    return myChart.getModel().getComponent('bmap').getBMap();
}

function initMap() {
    var top_left_navigation = new BMap.NavigationControl({
        type: BMAP_NAVIGATION_CONTROL_SMALL
    });
    var map = getMap();

    map.disableDoubleClickZoom();
    return map;
}

var bj = ["中国","东城区","西城区","朝阳区","石景山区","丰台区","海淀区","昌平区","房山区","大兴区","通州区","平谷区","顺义区","怀柔区","密云区","延庆区","门头沟区"]	
  
function getBoundary(){       
	var map = getMap();
    for(var index = 0; index < bj.length; index++){
        var bdary = new BMap.Boundary();
	    bdary.get(bj[index], function(rs){       //获取行政区域
	        //map.clearOverlays();        //清除地图覆盖物       
    	    var count = rs.boundaries.length; //行政区域的点有多少个
    	    if (count === 0) {
    			alert('未能获取当前输入行政区域');
    			return ;
    	    }
            var pointArray = [];
    	    for (var i = 0; i < count; i++) {
    			var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#000000",fillColor:getRandomColor()}); //建立多边形覆盖物
    			map.addOverlay(ply);  //添加覆盖物
    			pointArray = pointArray.concat(ply.getPath());
    	    }    
			map.setViewport(pointArray);    //调整视野  
			              
		});
    }
}

function getRandomColor() {
    return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
}
