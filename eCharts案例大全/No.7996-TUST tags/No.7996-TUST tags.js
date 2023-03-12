option = {
    title: {
        text: 'TUST tags',
        subtext: 'WSJ 001-300'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['汉语', '英语']
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
            data: ['PRO', 'DEF', 'HAS', 'REF', 'EMP', 'GRE', 'ITJ', 'HES', 'QUE', 
            'QUC', 'QUV', 'COL', 'IST', 'SST', 'PRI', 'DEG', 'INT', 'REL', 'SCO',
            'EQU', 'MOR', 'LES', 'TOP', 'BOT', 'ORD', 'CON', 'ROL', 'GRP', 'DXP',
	    'DXT', 'DXD', 'ALT', 'XCL', 'NIL', 'DIS', 'IMP', 'AND', 'NOT', 'NEC',
            'POS', 'SUB', 'COO', 'APP', 'BUT', 'PER', 'GPE', 'GPO', 'GEO', 'ORG',
            'ART', 'HAP', 'UOM', 'CTC', 'URL', 'LIT', 'NTH', 'EXS', 'ENS', 'EPS',
            'EXG', 'EXT', 'NOW', 'PST', 'FUT', 'PRG', 'PFT', 'DAT', 'DOM', 'YOC',
            'DOW', 'MOY', 'DEC', 'CLO', 'MAN', 'RES', 'AIM', 'OBJ', 'COM', 'MOD']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '汉语',
            type: 'bar',
            data: [118, 111, 4, 5, 2, 0, 0, 0, 3, 223, 32, 1, 194, 107, 18, 0, 23,
            0, 0, 9, 16, 0, 15, 0, 9, 1166, 200, 68, 144, 206, 0, 42, 5, 439, 30, 12,
            74, 47, 9, 61, 0, 268, 14, 21, 82, 135, 0, 1, 428, 100, 0, 230, 0, 0, 0, 0,
            783, 0, 0, 18, 122, 12, 0, 56, 18, 128, 0, 6, 29, 5, 28, 4, 2, 52, 10, 5, 78,
            9, 472]
        },
        {
            name: '英语',
            type: 'bar',
            data: [98, 396, 61, 4, 0, 0, 0, 0, 2, 229, 29, 1, 358, 43, 5, 3, 7, 810,
            0, 5, 34, 5, 18, 1, 20, 1106, 242, 41, 3, 20, 0, 35, 3, 690, 180, 6, 138, 
            44, 8, 24, 21, 27, 84, 13, 141, 132, 18, 3, 418, 81, 0, 122, 0, 0, 0, 0,
            232, 134, 197, 90, 95, 93, 41, 40, 1, 7, 0, 6, 30, 5, 29, 3, 1, 0, 0, 0, 0, 
            0, 0]
        }
    ]
};	
