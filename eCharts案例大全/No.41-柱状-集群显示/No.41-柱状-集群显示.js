var data = [25.75800949, 23.95989711, 21.44205776, 19.876543, 18.95560294, 17.53061205, 17.14961945, 17.13420881, 15.84446599
, 14.10581474,,30.75830986, 29.22356667, 29.00842517, 24.62223656, 21.66847027, 19.73636275, 19.73636275, 19.48309778
, 13.00824211, 12.91051385,,11.15261658, 10.85111736, 10.45952424, 9.420453501, 8.747156431, 7.969339975, 7.332110357
, 7.113695215, 7.075857331, 6.879768046];
function Data(p) {
  let arr = [];
  for(var i=0; i<data.length;i++) {
    var color="";
    if (i<=10) {
      color='#3ba272';
    }
    if (10<i && i<=20) {
      color='#fc8452';
    }
    if (21<i && i<=30) {
      color='#5470c6';
    }
    arr.push(
      {
        value: data[i],
        itemStyle: {
          color: color,
        },
        label: {
          show: true,
          fontSize: 10,
          position: 'top',
          formatter: p => {
            console.log(p)
            return p.data.value.toFixed(2);
          },
        },
      }
    );
  }
  return arr;
};
option = {
  legend: {
    top: 20,
    data: [
      {
        name: 'BP',
        itemStyle: {
          color: '#3ba272',
        },
      },
      {
        name: 'CC',
        itemStyle: {
          color: '#fc8452',
        },
      },
      {
        name: 'MF',
        itemStyle: {
          color: '#5470c6',
        },
      },
    ]
  },
  grid: {
    bottom: 340
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 1.2,
        color: '#333',
      },
    },
    axisLabel: {
      interval: 0,
      rotate: 65,
      formatter: p => {
        var c = p.split('')
        var b = c.splice(-1).join('')
        console.log(c.join(''));
        if (b == '1') {
          return '{color1|' + c.join('') + '}'
        }
        if (b === '2') {
          return '{color2|' + c.join('') + '}'
        }
        if (b === '3') {
          return '{color3|' + c.join('') + '}'
        }
      },
      rich: {
        color1: {
          color: '#3ba272',
        },
        color2: {
          color: '#fc8452',
        },
        color3: {
          color: '#5470c6',
        },
      },
    },
    axisTick: {
      show: false,
    },
    data: [
      'ncRNA processing1',
      'ncRNA metabolic process1',
      'RNA processing1',
      'nucleic acid metabolic process1',
      'DNA metabolic process1',
      'DNA replication1',
      'rRNA processing1',
      'rRNA metabolic process1',
      'ribosome biogenesis1',
      'DNA-dependent DNA replication1',
      '',
      'membrane-enclosed lumen2',
      'organelle lumen2',
      'intracellular organelle lumen2',
      'nuclear part2',
      'nuclear lumen2',
      'non-membrane-bounded organelle2',
      'intracellular non-membrane-bounded organelle2',
      'nucleolus2',
      'chromosome2',
      'extracellular matrix2',
      '',
      'RNA methyltransferase activity3',
      'transferase activity, transferring one-carbon groups3',
      'methyltransferase activity3',
      'cytokine binding3',
      'cytokine receptor activity3',
      'tRNA methyltransferase activity3',
      'nuclease activity3',
      'protein tyrosine kinase activity3',
      'S-adenosylmethionine-dependent methyltransferase activity3',
      'endonuclease activity3',
    ]
  },
  yAxis: {
    // name: 'Enrichmengt score',
    name: '-log（p-Value）',
    nameTextStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      align: 'right',
      verticalAlign: 'bottom',
      padding: [0,0,20,0],
    },
    offset: 1,
    nameGap: -100,
    nameRotate: 90,
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        width: 1.2,
        color: '#333',
      },
    },
    axisTick: {
      show: true,
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'BP',
      data: Data(data),
      type: 'bar'
    },
    {
      name: 'CC',
      data: [],
      barWidth: 0.1,
      type: 'bar'
    },
    {
      name: 'MF',
      data: [],
      barWidth: 0.1,
      type: 'bar'
    },
  ]
};
