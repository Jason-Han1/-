	/** @type {V2ViewType} */
	var ctx = this||{};
	var showData ={
	    value: 0.854,
	    text: '良好'
	};
	ctx.showData = ctx.showData||showData;
	var liqColor = [];
	
	if(ctx.showData.value < 0.25) {
	    liqColor =[
	  {
	    offset: 0,
	    color: 'rgba(173,183,204,1)', // 0% 处的颜色
	  },
	  {
	    offset: 1,
	    color: "rgba(119,153,201,1)", // 100% 处的颜色
	  },
	];
	}else if(ctx.showData.value >= 0.25 && ctx.showData.value <0.5){
	    liqColor =[
	  {
	    offset: 0,
	    color: 'rgba(255,163,31,1)', // 0% 处的颜色
	  },
	  {
	    offset: 1,
	    color: "rgba(255,143,76,1)", // 100% 处的颜色
	  },
	];
	}else if(ctx.showData.value >= 0.5 && ctx.showData.value <0.75){
	    liqColor =  [
	  {
	    offset: 0,
	    color: 'rgba(75,219,255,1)', // 0% 处的颜色
	  },
	  {
	    offset: 1,
	    color: "rgba(45,139,255,1)", // 100% 处的颜色
	  },
	];
	}else{
	    liqColor = [
	  {
	    offset: 0,
	    color: 'rgba(60,255,106,1)', // 0% 处的颜色
	  },
	  {
	    offset: 1,
	    color: "rgba(0,240,255,1)", // 100% 处的颜色
	  },
	];
	}
	
	option = {
	    // grid:{
	    //                 x:5,
	    //                 y:5,
	    //                 x2:5,
	    //                 y2:5,},
	    //   backgroundColor: "#0A1432",
	    title: {
	        text: isNaN(ctx.showData.value)?'--':((ctx.showData.value * 100).toFixed(2) + "{a|%}"),
	        textStyle: {
	            fontSize: 16,
	            fontFamily: "hanyikaku",
	            fontWeight: "normal",
	            color: "#fff",
	            rich: {
	                a: {
	                    fontSize: 16,
	                     fontFamily: "hanyikaku",
	                },
	            },
	        },
	        x: "center",
	        y: "50%",
	    },
	    graphic: [{
	        type: "group",
	        left: "center",
	        top: "30%",
	        children: [{
	            type: "text",
	            z: 100,
	            left: "10",
	            top: "middle",
	            style: {
	                fill: "#fff",
	                text: ctx.showData.text,
	                font: "16px Microsoft YaHei",
	            },
	        }, ],
	    }, ],
	    series: [{
	        type: "liquidFill",
	        radius: "90",
	        center: ["50%", "50%"],
	        data: [ctx.showData.value],
	        backgroundStyle: {
	            color: "#1a3d6d",
	        },
	        outline: {
	            borderDistance: 0,
	            itemStyle: {
	                borderWidth: 2,
	                borderColor: "#0E51A1",
	                shadowBlur: 10,
	                shadowColor: "#000",
	            },
	        },
	        // color: 'red',
	        color: [{
	            type: "linear",
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops:liqColor,
	            globalCoord: false,
	        }],
	        label: {
	            normal: {
	                formatter: "",
	            },
	        },
	    }, ],
	}
	// return option;
