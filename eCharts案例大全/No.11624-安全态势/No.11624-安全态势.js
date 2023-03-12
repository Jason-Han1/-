
var option = {
    type: "tree",
    backgroundColor: "#fff",
    toolbox: { //工具栏
      show: true,
      iconStyle: {
        borderColor: "#03ceda"
      },
      feature: {
        restore: {}
      }
    },
    tooltip: {//提示框
      trigger: "item",
      triggerOn: "mousemove",
      backgroundColor: "rgba(1,70,86,1)",
      borderColor: "rgba(0,246,255,1)",
      borderWidth: 0.5,
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        type: "tree",
        hoverAnimation: true, //hover样式
		data:[{
        	"name": "192.168.19.58",
        	"value": 0,
        	"children": [{
        		"name": "节点1",
        		
        			"symbol": "roundRect",
        		"value": 1,
        		"children": [{
        			"name": "节点1-1-1",
        			"value":1,
        		},{
        			"name": "节点1-1-1",
        			"value":1,
        		}],
        	
        	}],
        }],
		top: 80,
		bottom: 80,
        left: 0,
        right: 0,
        layout: "orthogonal",
        orient:"TB",
        symbol: "circle",
        symbolSize: 65,
					nodePadding: 20,
        animationDurationUpdate: 750,
        expandAndCollapse: true, //子树折叠和展开的交互，默认打开
        // initialTreeDepth: 2,
        roam: "scale", //是否开启鼠标缩放和平移漫游。scale/move/true
        focusNodeAdjacency: true,
        // edgeShape:"curve",
        // edgeForkPosition:"50%",
        itemStyle: {
          borderWidth: 1,
        },
        label: { //标签样式
          color: "#333",
          fontSize: 14,
        //   fontFamily: "SourceHanSansCN",
           position: "inside",
          rotate: 0,
        },
        lineStyle: {
          width: 1,
		  curveness:0,
        }
      }
    ]
  };