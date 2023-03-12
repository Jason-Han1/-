	/** @type {V2ViewType} */
	let ctx = this||{};
	var showData = {
	    text1:'电子分流率',
	    text2:'网点分流率',
	    value1:'60%',
	    value2:'40%',
	    pieData: [
	        {
	            value: 60
	        },
	        {
	            value: 40
	        },
	    ],
	}
	ctx.showData = ctx.showData||showData;
	const color = ["#FFD74C", "#2BFF7B"]
	const radius = [35, 20]
	const center = ['50%', '50%'];
	const pieData = ctx.showData.pieData;
	const rich = {
	  text: {
	      color: "rgba(0,0,0,0.45)",
	      fontSize: 14,
	      align: 'center',
	      verticalAlign: 'middle',
	      padding: 8
	  },
	  value: {
	      color: "rgba(0,0,0,0.85)",
	      fontSize: 30,
	      align: 'center',
	      marginTop: 3,
	      verticalAlign: 'middle',
	  },
	};
	const total = '300000';
	option = {
	    //   backgroundColor: "#ffffff",
	      color: color,
	    //   grid: {right: 0, left: 0, top: 0, bottom: 0},
	      series: [{
	          id: 'bg',
	          type: 'pie',
	          clockwise: false, //饼图的扇区是否是顺时针排布
	          radius,
	          center,
	          avoidLabelOverlap: false,
	     
	          silent: true,
	          data: [{
	              value: total,
	              name: "bg",
	              selected: false,
	              itemStyle: {
	                  color: pieData.length ? 'transparent' : 'rgba(0, 0, 0, 0.45)'
	              }
	          }]
	      }, {
	          type: 'pie',
	          bg: 'actual',
	          clockwise: false, //饼图的扇区是否是顺时针排布
	          minAngle: 2, //最小的扇区角度（0 ~ 360）
	          radius,
	          center,
	          avoidLabelOverlap: false,
	          itemStyle: { //图形样式
	              normal: {
	                  borderColor: 'rgba(0, 0, 0, 0)',
	                  borderWidth: 4,
	              },
	          },
	          labelLine:{
	                  normal:{
	                      show:false
	                  }
	          },
	        //   label: {
	        //       show: false,
	        //       position: 'center',
	        //       formatter: '{text|{b}}\n{value|{c}}',
	        //       rich,
	        //       emphasis: {
	        //           show: false
	        //       }
	        //   },
	          data: pieData
	      }]
    };