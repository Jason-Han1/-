var uploadedDataURL = "/asset/get/s/data-1495285435151-S1mpA2TlZ.json";

$.getJSON(uploadedDataURL, function (linedata) {
var data = linedata[0]
var links = linedata[1]
var categories = linedata[2]
option = {
 
       title:{
        text: "",
        //subtext: '@'+user1+':'+cont,
		//sublink: 'http://m.weibo.cn/status/'+mid,
        top: "top",
        left: "center"
    },
		
      tooltip: {},
         legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
      toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
      series: [{
          name: 'TAZ',
          type: 'graph',
//layout: 'force',
			symbol:"circle",
          data:data ,
          edges:links ,
          categories: categories,
          focusNodeAdjacency: true,
          roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
          lineStyle: {
              normal: {
                  //color: 'target',
                  curveness: 0
              }
          }
      }]
  };
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
});