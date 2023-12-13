//DENGUE// 
var dengue1 = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(dengue1, {
  
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2022',
      data: [52404, 248850, 480990, 319366, 348660],
      backgroundColor: [
        '#F16B10',
        '#ffa467',
        '#ED9C10',
        '#08655e',
        '#003a34'
      ],
      
    }]
  },
  options: {
    responsive: true,
  }
});


var dengue2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(dengue2, {
  type: 'line',
  
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'],
    datasets: [{
      label: '2019',
      data: [15, 111, 494, 33, 187],
      borderColor: '#fb573b'
    },
    {
      label: '2020',
      data: [17, 40, 168, 200, 149],
      borderColor: '#ffa467'

    },
    {
      label: '2021',
      data: [20, 44, 76, 47, 59],
      borderColor: '#ED9C10'
    },
    {
      label: '2022',
      data: [14, 41, 156, 109, 62],
      borderColor: '#eac761'
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Distribuição dos óbitos confirmados, por região'
      }
    }
});



//ZIKA VÍRUS

var zika1 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(zika1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2022',
      data: [628, 7691, 431, 167, 287],
      backgroundColor: [
        '#F16B10',
        '#ffa467',
        '#ED9C10',
        '#08655e',
        '#003a34'
      ]
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos da Zika. Brasil, 2022'
      }
    }
});

var zika2 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(zika2, {
  type: 'line',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'],
    datasets: [{
      label: '2019',
      data: [0, 5, 2, 0, 1],
      borderColor: '#fb573b'
    },
    {
      label: '2020',
      data: [0, 4, 0, 0, 0],
      borderColor: '#ffa467'

    },
    {
      label: '2021',
      data: [0, 6, 0, 0, 0],
      borderColor: '#ED9C10'
    },
    {
      label: '2022',
      data: [0, 3, 2, 0, 0],
      borderColor: '#eac761'
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Distribuição dos óbitos confirmados, por região'
      }
    }
});



//CHIKUNGUNYA

var chikungunya1 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(chikungunya1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2022',
      data: [4987, 148447, 14237, 728, 6118],
      backgroundColor: [
        '#F16B10',
        '#ffa467',
        '#ED9C10',
        '#08655e',
        '#003a34'
      ]
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos da Chikungunya. Brasil, 2022'
      }
    }
});

var chikungunya2 = document.getElementById('myChart6').getContext('2d');
var myChart6 = new Chart(chikungunya2, {
  type: 'line',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'],
    datasets: [{
      label: '2015',
      data: [0, 11, 5, 0, 0],
      borderColor: '#fb573b'
    },
    {
      label: '2016',
      data: [1, 219, 17, 0, 2],
      borderColor: '#eac761'

    },
    {
      label: '2017',
      data: [7, 162, 21, 0, 2],
      borderColor: '#ED9C10'
    },
    {
      label: '2018',
      data: [01, 13, 22, 1, 8],
      borderColor: '#ffa467'
    },
    {
      label: '2019',
      data: [0, 30, 70, 0, 1],
      borderColor: '#003a34'
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Distribuição dos óbitos confirmados, por região'
      }
    }
});


//MALÁRIA

var malaria1 = document.getElementById('myChart7').getContext('2d');
var myChart7 = new Chart(malaria1, {
  type: 'bar',
  data: {
    labels: ['AC', 'AM', 'AP', 'MA', 'MT', 'PA', 'RO', 'RR', 'TO'],
    datasets: [{
      label: '2021',
      data: [4051, 23667, 934, 28, 2199, 8109, 5596, 12199, 0],
      backgroundColor: [
        '#F16B10',
        '#ffa467',
        '#ED9C10',
        '#08655e',
        '#003a34',
        '#73b06f',
        '#d83018',
        '#eac761'
      ]
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Casos de janeiro a junho. Brasil, 2021'
      }
    }
});

var malaria2 = document.getElementById('myChart8').getContext('2d');
var myChart8 = new Chart(malaria2, {
  type: 'line',
  data: {
    labels: ['AL', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MS', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RS', 'SC', 'SE', 'SP'],
    datasets: [{
      label: '2021',
      data: [0, 11, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 8],
      borderColor: '#fb573b',
      backgroundColor: ['#feb89f']
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Casos de janeiro a junho. Brasil, 2021'
      }
    }
});



//LEISHMANIOSE

var leishmaniose1 = document.getElementById('myChart9').getContext('2d');
var myChart9 = new Chart(leishmaniose1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2019',
      data: [480, 1241, 323, 13, 129],
      backgroundColor: ['#F16B10', '#F16B10', '#F16B10', '#F16B10', '#F16B10']
    },
    {
      label: '2020',
      data: [308, 959, 256, 7, 90],
      backgroundColor: ['#ffa467', '#ffa467', '#ffa467', '#ffa467', '#ffa467']
    },
    {
      label: '2021',
      data: [265, 775, 233, 6, 83],
      backgroundColor: ['#ED9C10', '#ED9C10', '#ED9C10', '#ED9C10', '#ED9C10']
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos da Leishmaniose. Brasil, 2019 a 2021'
      }
    }
});

var leishmaniose2 = document.getElementById('myChart10').getContext('2d');
var myChart10 = new Chart(leishmaniose2, {
  type: 'line',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'],
    datasets: [{
      label: '2018',
      data: [59, 156, 57, 1, 16],
      borderColor: '#fb573b'
    },
    {
      label: '2019',
      data: [36, 112, 39, 0, 20],
      borderColor: '#eac761'
    },
    {
      label: '2020',
      data: [21, 107, 23, 2, 12],
      borderColor: '#ED9C10'
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Óbitos de leishmaniose, por região. Brasil, 2018 a 2020'
      }
    }
});




//DOENÇA DE CHAGAS

var chagas1 = document.getElementById('myChart11').getContext('2d');
var myChart11 = new Chart(chagas1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2020',
      data: [138, 3, 4, 4, 1],
      backgroundColor: ["#F16B10", "#ffa467", "#ED9C10", "#08655e", "#003a34"]
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos da Doença de Chagas, por região. Brasil, 2020'
      }
    }
});

var chagas2 = document.getElementById('myChart12').getContext('2d');
var myChart12 = new Chart(chagas2, {
    type: 'doughnut',
    data: {
      labels: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
      datasets: [
        {
          backgroundColor: ["#F16B10", "#ffa467", "#ED9C10", "#08655e", "#003a34"],
          data: [38, 400, 862, 98, 348]
        }
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Óbitos registrados pela Doença de Chagas. Brasil, 2020'
      }
    }
});


//TUBERCULOSE

var tuberculose1 = document.getElementById('myChart13').getContext('2d');
var myChart13 = new Chart(tuberculose1, {
    type: 'doughnut',
    data: {
      labels: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
      datasets: [
        {
          backgroundColor: ["#F16B10", "#ffa467","#ED9C10","#08655e","#003a34"],
          data: [9998, 20465, 35028, 8795, 3771]
        }
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Indicador epidemiológico de casos, por região'
      }
    }
});

var tuberculose2 = document.getElementById('myChart14').getContext('2d');
var myChart14 = new Chart(tuberculose2, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: 'Sexo feminino',
      data: [3477, 6618, 10667, 2860, 1068],
      backgroundColor: ['#08655e', '#08655e', '#08655e', '#08655e', '#08655e']
    },
      {
      label: 'Sexo masculino',
      data: [6519, 13843, 24355, 5933, 2703],
      backgroundColor: ['#ffa467', '#ffa467', '#ffa467', '#ffa467', '#ffa467',]
    }]
  },
  options: {
    responsive: true,
  }
});


//LEPTOSPIROSE

var leptospirose1 = document.getElementById('myChart15').getContext('2d');
var myChart15 = new Chart(leptospirose1, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: '2021',
      data: [512, 614, 1063, 1387, 74],
      backgroundColor: [
        '#F16B10',
        '#ffa467',
        '#ED9C10',
        '#08655e',
        '#003a34'
      ]
    }]
  },
  options: {
      title: {
        display: true,
        text: ''
      }
    }
});

var leptospirose2 = document.getElementById('myChart16').getContext('2d');
var myChart16 = new Chart(leptospirose2, {
    type: 'doughnut',
    data: {
      labels: ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
      datasets: [
        {
          backgroundColor: ["#F16B10", "#ffa467","#ED9C10","#08655e","#003a34"],
          data: [30, 76, 134, 63, 7]
        }
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Índice de mortalidade pela leptospirose no Brasil em 2020'
      }
    }
});



  //HANSENÍASE


var hanseniase1 = document.getElementById('myChart17').getContext('2d');
var myChart17 = new Chart(hanseniase1, {
  type: 'line',
  data: {
    labels: ['0 a 4', '5 a 9', '10 a 14', '15 a 16', '20 a 29', '30 a 39', '40 a 49', '50 a 59', '60 a 69', '70 a 79', '80 ou mais'],
    datasets: [{
      label: 'Sexo Masculino',
      data: [183, 1571, 3272, 3656, 9165, 14267, 15167, 16040, 13787, 6903, 2214],
      borderColor: '#5d917d'
    },
    {
      label: 'Sexo Feminino',
      data: [169, 1376, 3080, 3463, 7200, 11429, 13865, 13547, 9093, 4274, 1638],
      borderColor: '#fb573b'
    }]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Segundo faixa etária e sexo. Brasil, 2016 a 2020'
      }
    }
});




var hanseniase2 = document.getElementById('myChart18').getContext('2d');
var myChart18 = new Chart(hanseniase2, {
  type: 'bar',
  data: {
    labels: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste' ],
    datasets: [{
      label: 'Brancos',
      data: [3450, 8667, 7286, 2625, 8492],
      backgroundColor: ['#F16B10', '#F16B10', '#F16B10', '#F16B10', '#F16B10']
    },
      {
      label: 'Pretos',
      data: [2628, 7212, 2366, 199, 2865],
      backgroundColor: ['#ffa467', '#ffa467', '#ffa467', '#ffa467', '#ffa467']
    },
    {
      label: 'Amarelos',
      data: [516, 466, 155, 21, 221],
      backgroundColor: ['#ED9C10', '#ED9C10', '#ED9C10', '#ED9C10', '#ED9C10']
    },
    {
      label: 'Pardos',
      data: [17306, 34590, 6829, 865, 14965],
      backgroundColor: ['#08655e', '#08655e', '#08655e', '#08655e', '#08655e']
    },
    {
      label: 'Indígenas',
      data: [259, 174, 37, 7, 132],
      backgroundColor: ['#003a34', '#003a34', '#003a34', '#003a34', '#003a34']
    }]
  },
   options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Proporção de novos casos, segundo raça/cor e região. Brasil, 2016 a 2020'
      }
    }
});



//ESQUISTOSSOMOSE

var esquistossomose1 = document.getElementById('myChart19').getContext('2d');
var myChart19 = new Chart(esquistossomose1, {
  type: 'line',
  data: {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [{
      label: '2013 - 2019',
      data: [40.752, 37.729, 30.525, 18.900, 21.962, 15.076, 13.273],
      borderColor: '#08655e'
    }
    ]
  },
  options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos de esquistossomose. Brasil, 2013 a 2019.'
      }
    }
});



//ASCARIDÍASE

var ascaridiase1 = document.getElementById('myChart20').getContext('2d');
var myChart20 = new Chart(ascaridiase1, {
  type: 'bar',
  data: {
    labels: ['PA', 'MA', 'PI', 'CE', 'RN', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES'],
    datasets: [{
      label: '2015-2019',
      data: [73, 32222, 3, 9071, 2171, 23460, 44127, 8304, 3865, 5242, 657],
      backgroundColor: ['#F16B10', '#ffa467', '#ED9C10', '#08655e', '#003a34', '#9dc09d', '#ffcc50', '#ff9460', '#64c27b', '#F16B10', '#ED9C10']
    }]
  },
   options: {
      title: {
        display: true,
        fontSize: 17,
        text: 'Número de casos de pessoas infectadas com Ascaris lumbricoides. Brasil, 2015 a 2019.'
      }
    }
});
