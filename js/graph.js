// Highcharts.chart('employment-pie', {
//     chart: {
//         type: 'bar'
//     },
//     title: {
//         text: '',
//         align: 'left'
//     },
    
//     xAxis: {
//         categories: ['Education','Health and Social Care','Science and technology'],
//         title: {
//             text: null
//         }
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Migrants (millions)',
//             align: 'high'
//         },
//         labels: {
//             overflow: 'justify'
//         }
//     },
//     tooltip: {
//         valueSuffix: ' millions'
//     },
//     plotOptions: {
//         bar: {
//             dataLabels: {
//                 enabled: false
//             }
//         }
//     },
//     // legend: {
//     //     layout: 'vertical',
//     //     align: 'right',
//     //     verticalAlign: 'top',
//     //     x: -40,
//     //     y: 80,
//     //     floating: true,
//     //     borderWidth: 1,
//     //     backgroundColor:
//     //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
//     //     shadow: true
//     // },
//     credits: {
//         enabled: false
//     },
//     series: [{
//         name: 'Migrants',
//         data: [47, 12, 59]
//     }]
// });







var chart = Highcharts.chart('employment-pie', {
        chart: {
        type: 'pie',
        backgroundColor: 'transparent'
    },
    credits: {
        enabled: false
    },
    exporting: {
    enabled: false
  },
    title: {
        text: '10 Employment sectors'
    },
   
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
            name: 'All sectors',

            

                    data: [['Arts, culture and media', 20],['Business, law and administration', 20],['Cleaning and security', 20],['Construction and trades', 20],['Education', 20],['Farming and food production', 20],['Health and social care', 20],['Retail and leisure', 20],['Science and technology', 20],['Senior management']],
        colors: ["#f6d491", "#e6b453", "#bf9441", "#997328"],
    }]

});

$('#btnAllSectors').click(function () {
    chart.series[0].setData([['Arts, culture and media', 20],['Business, law and administration', 20],['Cleaning and security', 20],['Construction and trades', 20],['Education', 20],['Farming and food production', 20],['Health and social care', 20],['Retail and leisure', 20],['Science and technology', 20],['Senior management']]);
    chart.setTitle({text: "10 Employment sectors"});
   // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 

});

$('#btnEducation').click(function () {
    chart.series[0].setData([['Teaching and Educational Professionals',107]]);
    chart.setTitle({text: "Education (30% migrants)"});
    // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 
});

$('#btnHealth').click(function () {
    chart.series[0].setData([['Health Professionals',47], ['Therapy Professionals',12], ['Nursing and Midwifery Professionals',59]]);
    chart.setTitle({text: "Health and Social Care (20% migrants)"});
   // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 

});

$('#btnScience').click(function () {
    chart.series[0].setData([['Natural and Social Science Professionals',11], ['Engineering Professionals',11], ['Information Technology and Telecommunications Professionals',60], ['Conservation and Environment Professionals',1], ['Research and Development Managers',1]]);
     chart.setTitle({text: "Science and technology (10% migrants)"});
     // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 

});

$('#btnBusiness').click(function () {
    chart.series[0].setData([['Business, Research and Administrative Professionals',34], ['Legal Professionals',13], ['Architects, Town Planners and Surveyors',7], ['Welfare Professionals',9], ['Librarians and Related Professionals',2], ['Quality and Regulatory Professionals',9]]);
     chart.setTitle({text: "Business, law and administration (5% migrants)"});
     // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 

});