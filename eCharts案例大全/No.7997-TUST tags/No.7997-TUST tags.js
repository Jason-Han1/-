option = {
    title: {
        text: 'TUST tags',
        subtext: 'WSJ 001-300'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Ratio']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['PRO', 'DEF', 'HAS', 'REF', 'GRE', 'ITJ', 'HES', 'QUE', 
            'QUC', 'QUV', 'COL', 'IST', 'SST', 'PRI', 'DEG', 'INT', 'REL', 'SCO',
            'EQU', 'MOR', 'LES', 'TOP', 'BOT', 'ORD', 'CON', 'ROL', 'GRP',
	     'DXD', 'ALT', 'XCL', 'NIL', 'DIS', 'IMP', 'AND', 'NOT', 'NEC',
            'POS', 'SUB', 'APP', 'BUT', 'PER', 'GPE', 'GPO', 'GEO', 'ORG',
            'ART', 'HAP', 'UOM', 'CTC', 'URL', 'LIT', 'NTH', 'EXS', 'ENS', 'EPS',
            'EXG', 'EXT', 'NOW', 'PST', 'FUT', 'DAT', 'DOM', 'YOC',
            'DOW', 'MOY', 'DEC', 'CLO']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Ratio',
            type: 'bar',
            data: [1.25, 0.29, 0.07, 1.29, 1, 1, 1, 1.55, 1.01, 1.14, 1.03, 0.56, 		    2.57, 3.72, 0, 3.4, 
            0, 1, 1.86, 0.49, 0, 0.86, 0, 0.47, 1.09, 0.85, 1.72, 1, 1.24, 	    1.72, 0.66, 0.17, 2.07,
            0.55, 1.1, 1.16, 2.63, 0, 0.17, 1.67, 0.6, 1.06, 0, 0.34, 1.06, 1.28, 	    1, 1.95, 1, 1, 1, 1,
            3.49, 0, 0, 0.21, 1.33, 0.13, 0, 1.45, 1, 1.03, 1, 1.03, 1, 		    1.38, 2.07],
	    markLine: {
	        itemStyle: {
                    color: 'black',
                    borderWidth: 1,
                    borderType: 'dashed'
                },
		data: [
			 {
        yAxis: 1.2
    },
    {yAxis: 0.83333}
    ]
	    }
        }    ]
};	
