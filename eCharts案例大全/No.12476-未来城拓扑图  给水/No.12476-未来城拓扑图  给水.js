option = {
    toolbox: {
        show: true,
        left: '45%',
        feature: {
            dataZoom: {},
            dataView: {
                readOnly: false
            },
            //magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    title: {
        text: '未来城拓扑图',
        subtext: '给水'

    },
    xAxis: {
        type: 'value',
        minInterval: 0.0001,
        min: 501159.42,
        //max: 501310
        splitLine: {
            show: false
        }

    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        minInterval: 0.0001,
        min: 3733430 //6.941,

        //max: 3733660
    },

    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20

        /*orient: 'vertical',
        center:'right'top: '40%',
        left: 0,itemWidth: 12,
        itemHeight: 12,
        data: ['2016年', '2017年', '2018年'],
       
        textStyle: {
            color: colors,
            //fontSize: fontSize
        }*/
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross'
        },
        triggerOn: 'click',
        //backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        //borderColor: '#ccc',
        padding: 10,
        //textStyle: {
        //    color: '#000'
        //},
        formatter: function(params) {
            console.log(params);
            return params.seriesName + ' : ( ' +
                params.value[0] + ', ' +
                params.value[1] + ' )';
        },

        //extraCssText: 'width: 170px'
    },

    series: [{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline222' ,
					data: [[501231.121,3733658.375,'给水'],[501231.351,3733658.077]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline223' ,
					data: [[501272.620,3733669.084,'给水'],[501272.767,3733670.111]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline224' ,
					data: [[501211.472,3733614.366,'给水'],[501208.630,3733599.872],[501207.731,3733595.284],[501206.900,3733591.049],[501206.384,3733588.416],[501205.346,3733583.123],[501204.798,3733580.330],[501203.880,3733575.645],[501203.263,3733572.501],[501202.275,3733567.460],[501200.986,3733560.887],[501199.996,3733555.835],[501198.611,3733548.773],[501197.039,3733540.753],[501186.872,3733488.527]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline225' ,
					data: [[501215.371,3733634.250,'给水'],[501214.019,3733627.358],[501213.399,3733624.193],[501212.654,3733620.395],[501212.042,3733617.274],[501211.472,3733614.366],[501211.472,3733614.366]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline226' ,
					data: [[501216.438,3733639.693,'给水'],[501215.371,3733634.250]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline227' ,
					data: [[501193.156,3733541.514,'给水'],[501192.175,3733541.710]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline228' ,
					data: [[501193.156,3733541.514,'给水'],[501197.039,3733540.753]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline229' ,
					data: [[501197.038,3733549.081,'给水'],[501198.611,3733548.773]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline230' ,
					data: [[501198.550,3733556.118,'给水'],[501199.996,3733555.835]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline231' ,
					data: [[501199.182,3733561.241,'给水'],[501200.986,3733560.887]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline232' ,
					data: [[501200.561,3733567.796,'给水'],[501202.275,3733567.460]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline233' ,
					data: [[501201.605,3733572.826,'给水'],[501203.263,3733572.501]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline234' ,
					data: [[501202.127,3733575.989,'给水'],[501203.880,3733575.645]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline235' ,
					data: [[501203.098,3733580.663,'给水'],[501204.798,3733580.330]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline236' ,
					data: [[501203.594,3733583.467,'给水'],[501205.346,3733583.123]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline237' ,
					data: [[501204.619,3733588.762,'给水'],[501206.384,3733588.416]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline238' ,
					data: [[501205.326,3733591.358,'给水'],[501206.900,3733591.049]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline239' ,
					data: [[501206.417,3733595.542,'给水'],[501207.731,3733595.284]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline240' ,
					data: [[501207.181,3733600.156,'给水'],[501208.630,3733599.872]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline241' ,
					data: [[501209.896,3733614.675,'给水'],[501211.472,3733614.366]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline242' ,
					data: [[501210.488,3733617.579,'给水'],[501212.042,3733617.274]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline243' ,
					data: [[501211.460,3733620.629,'给水'],[501212.654,3733620.395]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline244' ,
					data: [[501212.060,3733624.455,'给水'],[501213.399,3733624.193]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline245' ,
					data: [[501213.592,3733627.442,'给水'],[501214.019,3733627.358]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline246' ,
					data: [[501214.088,3733634.501,'给水'],[501215.371,3733634.250]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline247' ,
					data: [[501215.076,3733639.960,'给水'],[501216.438,3733639.693]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline248' ,
					data: [[501216.438,3733639.693,'给水'],[501218.590,3733650.946]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline249' ,
					data: [[501226.609,3733649.476,'给水'],[501219.632,3733650.757],[501218.590,3733650.946]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline250' ,
					data: [[501185.984,3733483.560,'给水'],[501186.872,3733488.527]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline251' ,
					data: [[501226.609,3733649.476,'给水'],[501227.427,3733654.393]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline252' ,
					data: [[501193.349,3733474.810,'给水'],[501196.523,3733474.315],[501207.533,3733472.601],[501222.849,3733470.215],[501233.588,3733468.542],[501236.917,3733468.024],[501247.902,3733466.313],[501253.446,3733465.450],[501264.257,3733463.766]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline253' ,
					data: [[501226.609,3733649.476,'给水'],[501225.848,3733644.939],[501222.664,3733627.916],[501219.417,3733612.203],[501211.761,3733578.559],[501210.733,3733574.038],[501203.902,3733544.020],[501195.905,3733508.879],[501188.659,3733475.624]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline254' ,
					data: [[501289.178,3733645.576,'给水'],[501259.413,3733649.825],[501252.887,3733650.757],[501236.912,3733653.037],[501230.809,3733653.908],[501228.649,3733654.217],[501227.427,3733654.393]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline255' ,
					data: [[501289.272,3733646.347,'给水'],[501289.178,3733645.576]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline256' ,
					data: [[501259.514,3733650.581,'给水'],[501259.413,3733649.825]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline257' ,
					data: [[501252.940,3733651.196,'给水'],[501252.887,3733650.757]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline258' ,
					data: [[501237.099,3733654.501,'给水'],[501236.912,3733653.037]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline259' ,
					data: [[501231.351,3733658.077,'给水'],[501230.809,3733653.908]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline260' ,
					data: [[501229.313,3733658.880,'给水'],[501228.649,3733654.217]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline261' ,
					data: [[501311.767,3733664.513,'给水'],[501304.555,3733617.269]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline262' ,
					data: [[501254.804,3733672.690,'给水'],[501259.232,3733672.054],[501264.797,3733671.255],[501272.767,3733670.111],[501282.874,3733668.660],[501298.314,3733666.444],[501299.936,3733666.211],[501311.767,3733664.513]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline263' ,
					data: [[501299.811,3733665.245,'给水'],[501299.936,3733666.211]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline264' ,
					data: [[501298.163,3733665.397,'给水'],[501298.314,3733666.444]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline265' ,
					data: [[501282.746,3733667.706,'给水'],[501282.874,3733668.660]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline266' ,
					data: [[501264.680,3733670.368,'给水'],[501264.797,3733671.255]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline267' ,
					data: [[501259.120,3733671.237,'给水'],[501259.232,3733672.054]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline268' ,
					data: [[501254.652,3733671.460,'给水'],[501254.804,3733672.690]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline269' ,
					data: [[501300.151,3733617.916,'给水'],[501298.731,3733608.304],[501307.538,3733607.003],[501308.959,3733616.614]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline270' ,
					data: [[501297.055,3733638.744,'给水'],[501289.618,3733639.825],[501268.345,3733638.436],[501263.957,3733639.095],[501243.528,3733642.162],[501233.354,3733643.690],[501225.848,3733644.939]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline271' ,
					data: [[501296.932,3733637.813,'给水'],[501297.055,3733638.744]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline272' ,
					data: [[501289.395,3733638.321,'给水'],[501289.618,3733639.825]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline273' ,
					data: [[501268.238,3733637.751,'给水'],[501268.345,3733638.436]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline274' ,
					data: [[501263.816,3733637.995,'给水'],[501263.957,3733639.095]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline275' ,
					data: [[501243.326,3733640.542,'给水'],[501243.528,3733642.162]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline276' ,
					data: [[501233.249,3733642.915,'给水'],[501233.354,3733643.690]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline277' ,
					data: [[501290.352,3733604.742,'给水'],[501282.440,3733605.888],[501261.816,3733605.196],[501253.098,3733606.636],[501249.192,3733607.280],[501236.300,3733609.409],[501231.984,3733610.121],[501219.417,3733612.203]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline278' ,
					data: [[501290.243,3733603.989,'给水'],[501290.352,3733604.742]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline279' ,
					data: [[501282.284,3733604.811,'给水'],[501282.440,3733605.888]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline280' ,
					data: [[501261.582,3733603.778,'给水'],[501261.816,3733605.196]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline281' ,
					data: [[501252.824,3733604.978,'给水'],[501253.098,3733606.636]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline282' ,
					data: [[501249.024,3733606.263,'给水'],[501249.192,3733607.280]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline283' ,
					data: [[501236.106,3733608.234,'给水'],[501236.300,3733609.409]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline284' ,
					data: [[501231.756,3733608.737,'给水'],[501231.984,3733610.121]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline285' ,
					data: [[501288.066,3733618.213,'给水'],[501222.664,3733627.916]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline286' ,
					data: [[501288.066,3733618.213,'给水'],[501299.929,3733616.415]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline287' ,
					data: [[501210.893,3733574.008,'给水'],[501210.733,3733574.038]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline288' ,
					data: [[501209.979,3733543.097,'给水'],[501203.902,3733544.020]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline289' ,
					data: [[501200.420,3733508.158,'给水'],[501195.905,3733508.879]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline290' ,
					data: [[501282.748,3733568.231,'给水'],[501274.908,3733569.368],[501268.950,3733570.232],[501257.353,3733571.914],[501250.298,3733572.937],[501241.080,3733574.273],[501231.987,3733575.592],[501224.319,3733576.704],[501215.361,3733578.003],[501211.761,3733578.559]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline291' ,
					data: [[501282.665,3733567.570,'给水'],[501282.748,3733568.231]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline292' ,
					data: [[501274.766,3733568.421,'给水'],[501274.908,3733569.368]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline293' ,
					data: [[501268.482,3733566.619,'给水'],[501268.950,3733570.232]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline294' ,
					data: [[501256.760,3733567.578,'给水'],[501257.353,3733571.914]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline295' ,
					data: [[501249.961,3733570.403,'给水'],[501250.298,3733572.937]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline296' ,
					data: [[501240.563,3733570.415,'给水'],[501241.080,3733574.273]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline297' ,
					data: [[501231.499,3733571.820,'给水'],[501231.987,3733575.592]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline298' ,
					data: [[501223.891,3733572.923,'给水'],[501224.319,3733576.704]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline299' ,
					data: [[501215.062,3733575.962,'给水'],[501215.361,3733578.003]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline300' ,
					data: [[501277.839,3733532.995,'给水'],[501270.518,3733534.084],[501255.901,3733536.260],[501246.783,3733537.618],[501234.905,3733539.386],[501227.786,3733540.446],[501218.178,3733541.876],[501213.387,3733542.589],[501209.979,3733543.097],[501209.979,3733543.097]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline301' ,
					data: [[501277.762,3733532.476,'给水'],[501277.839,3733532.995]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline302' ,
					data: [[501270.465,3733533.701,'给水'],[501270.518,3733534.084]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline303' ,
					data: [[501255.463,3733533.023,'给水'],[501255.901,3733536.260]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline304' ,
					data: [[501246.412,3733534.748,'给水'],[501246.783,3733537.618]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline305' ,
					data: [[501234.591,3733537.254,'给水'],[501234.905,3733539.386]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline306' ,
					data: [[501227.485,3733538.114,'给水'],[501227.786,3733540.446]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline307' ,
					data: [[501217.838,3733539.456,'给水'],[501218.178,3733541.876]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline308' ,
					data: [[501213.070,3733540.318,'给水'],[501213.387,3733542.589]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline309' ,
					data: [[501209.639,3733540.430,'给水'],[501209.979,3733543.097]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline310' ,
					data: [[501200.265,3733507.168,'给水'],[501200.420,3733508.158]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline311' ,
					data: [[501268.593,3733498.551,'给水'],[501260.793,3733499.630],[501252.305,3733500.803],[501244.400,3733501.896],[501236.960,3733502.924],[501228.544,3733504.087],[501217.857,3733505.565],[501210.396,3733506.592],[501200.420,3733508.158]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline312' ,
					data: [[501268.505,3733497.914,'给水'],[501268.593,3733498.551]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline313' ,
					data: [[501260.669,3733498.733,'给水'],[501260.793,3733499.630]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline314' ,
					data: [[501252.159,3733499.745,'给水'],[501252.305,3733500.803]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline315' ,
					data: [[501236.737,3733501.310,'给水'],[501236.960,3733502.924]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline316' ,
					data: [[501244.261,3733500.888,'给水'],[501244.400,3733501.896]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline317' ,
					data: [[501228.335,3733502.578,'给水'],[501228.544,3733504.087]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline318' ,
					data: [[501217.692,3733504.374,'给水'],[501217.857,3733505.565]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline319' ,
					data: [[501210.220,3733505.432,'给水'],[501210.396,3733506.592]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline320' ,
					data: [[501193.349,3733474.810,'给水'],[501188.659,3733475.624]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline321' ,
					data: [[501264.098,3733462.741,'给水'],[501264.257,3733463.766]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline322' ,
					data: [[501253.310,3733464.479,'给水'],[501253.446,3733465.450]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline323' ,
					data: [[501247.695,3733465.035,'给水'],[501247.902,3733466.313]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline324' ,
					data: [[501236.712,3733466.563,'给水'],[501236.917,3733468.024]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline325' ,
					data: [[501233.335,3733467.055,'给水'],[501233.588,3733468.542]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline326' ,
					data: [[501222.674,3733468.974,'给水'],[501222.849,3733470.215]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline327' ,
					data: [[501207.286,3733471.063,'给水'],[501207.533,3733472.601]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline328' ,
					data: [[501196.234,3733472.432,'给水'],[501196.523,3733474.315]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline329' ,
					data: [[501193.175,3733473.649,'给水'],[501193.349,3733474.810]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline330' ,
					data: [[501267.246,3733435.764,'给水'],[501303.135,3733607.653]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline331' ,
					data: [[501185.151,3733488.785,'给水'],[501186.872,3733488.527]]},{
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 8,
					name: 'pline332' ,
					data: [[501209.639,3733540.430,'给水'],[501209.887,3733542.030]]},]
};