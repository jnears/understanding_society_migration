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
        enabled: true
    },
    
    exporting: {
    enabled: false
  },
    title: {
        text: '10 Employment sectors'
    },
   
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
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
            data: [
                ['Arts, culture and media', 45],
                ['Business, law and administration', 327],
                ['Cleaning and security', 229],
                ['Construction and trades', 426],
                ['Education', 173],
                ['Farming and food production', 7],
                ['Health and social care', 318],
                ['Retail and leisure', 254],
                ['Science and technology', 118],
                ['Senior management', 179]],
        colors: ["#f6d491", "#e6b453", "#bf9441", "#997328"],
    }]

});

$('#btnAllSectors').click(function () {
    chart.series[0].setData([
        ['Arts, culture and media', 45],
        ['Business, law and administration', 327],
        ['Cleaning and security', 229],
        ['Construction and trades', 426],
        ['Education', 173],
        ['Farming and food production', 7],
        ['Health and social care', 318],
        ['Retail and leisure', 254],
        ['Science and technology', 118],
        ['Senior management', 179]
    ]);
    chart.setTitle({text: "10 Employment sectors"});


});

$('#btnArts').click(function () {
    chart.series[0].setData([
        ['Media Professionals',10],
        ['Design Occupations',8],
        ['Artistic, Literary and Media Occupations',27]
    ]);
    chart.setTitle({text: "Arts, Culture and Media (2.17% of migrants)"});
   
});

$('#btnEducation').click(function () {
    chart.series[0].setData([
        ['Teaching and Educational Professionals',107],
        ['Childcare',66]
    ]);
    chart.setTitle({text: "Education (8.33% of migrants)"});
});

$('#btnCleaning').click(function () {
    chart.series[0].setData([
        ['Elementary Cleaning Occupations',85],
        ['Elementary Security Occupations',43],
        ['Housekeeping and Related Services',7],
        ['Elementary Storage Occupations',22],
        ['Other Elementary Services Occupations',62],
        ['Protective Service Occupations',5],
        ['Cleaning and Housekeeping Managers and Supervisors',5]
    ]);
    chart.setTitle({text: "Cleaning and Security  (11.03% of migrants)"});
});


$('#btnConstruction').click(function () {
    chart.series[0].setData([
        ['Elementary Process Plant Occupations',30],
        ['Elementary Construction Occupations',1],
        ['Assemblers and Routine Operatives',34],
        ['Construction Operatives',10],
        ['Building Finishing Trades',4],
        ['Plant and Machine Operatives',18],
        ['Metal Forming, Welding and Related Trades',2],
        ['Metal Machining, Fitting and Instrument Making Trades',11],
        ['Other Skilled Trades',8],
        ['Vehicle Trades',5],
        ['Electrical and Electronic Trades',11],
        ['Construction and Building Trades',29],
        ['Textiles and Garments Trades',4],
        ['Transport Associate Professionals',1],
        ['Mobile Machine Drivers and Operatives',12],
        ['Printing Trades',2],
        ['Sales, Marketing and Related Associate Professionals',68],
        ['Public Services and Other Associate Professionals',33],
        ['Road Transport Drivers',125],
        ['Other Drivers and Transport Operatives',7],
        ['Process Operatives',11]
    ]);
    chart.setTitle({text: "Construction and Trades (20.52% of migrants)"});
});




$('#btnFarming').click(function () {
    chart.series[0].setData([
        ['Agricultural and Related Trades',4],
        ['Animal Care and Control Services',1],
        ['Elementary Agricultural Occupations',2]
    ]);
    chart.setTitle({text: "Farming and Food Production (0.34% migrants)"});

});


$('#btnHealth').click(function () {
    chart.series[0].setData([
        ['Health Professionals',47],
        ['Health Associate Professionals',17],
        ['Welfare and Housing Associate Professionals',20],
        ['Caring Personal Services',154],
        ['Welfare Professionals',9],
        ['Therapy Professionals',12],
        ['Nursing and Midwifery Professionals',59]
    ]);
    chart.setTitle({text: "Health and Social Care (15.32% migrants)"});
});


$('#btnBusiness').click(function () {
    chart.series[0].setData([

        ['Legal Professionals',13],
        ['Business, Research and Administrative Professionals',34],
        ['Architects, Town Planners and Surveyors',7],
        ['Administrative Occupations: Government and Related Organisations', 7],
        ['Administrative Occupations: Finance',73],
        ['Secretarial and Related Occupations',29],
        ['Legal Associate Professionals',8],
        ['Administrative Occupations: Office Managers and Supervisors',12],
        ['Administrative Occupations: Records',18],
        ['Elementary Administration Occupations',16],
        ['Other Administrative Occupations',50],
        ['Business, Finance and Related Associate Professionals', 49],
        ['Librarians and Related Professionals',2],
        ['Quality and Regulatory Professionals',9]

        ]);
     chart.setTitle({text: "Business, law and administration (15.75% migrants)"});
});

$('#btnManagement').click(function () {
    chart.series[0].setData([
        ['Chief Executives and Senior Officials',5],
        ['Production Managers and Directors',14],
        ['Functional Managers and Directors',60],
        ['Financial Institution Managers and Directors',2],
        ['Managers and Directors in Transport and Logistics',3],
        ['Senior Officers in Protective Services',1],
        ['Health and Social Services Managers and Directors',3],
        ['Managers and Directors in Retail and Wholesale',  10],
        ['Managers and Proprietors in Agriculture Related Services',0],
        ['Managers and Proprietors in Hospitality and Leisure Services',7],
        ['Managers and Proprietors in Health and Care Services',3],
        ['Managers and Proprietors in Other Services',71]]);  
     chart.setTitle({text: "Senior Management (8.62% migrants)"});
});

$('#btnRetail').click(function () {
    chart.series[0].setData([
        ['Food Preparation and Hospitality Trades',41],
        ['Leisure and Travel Services',10],
        ['Hairdressers and Related Services',9],
        ['Sales Assistants and Retail Cashiers',89],
        ['Sales Related Occupations',14],
        ['Sales', 9],
        ['Customer Service Occupations',57],
        ['Customer Service Managers and Supervisors',5],
        ['Elementary Sales Occupations',12],
        ['Sports and Fitness Occupations',8],       
    ]);  
     chart.setTitle({text: "Retail and Leisure (12.242% migrants)"});
});

$('#btnScience').click(function () {
    chart.series[0].setData([
        ['Natural and Social Science Professionals',11],
        ['Engineering Professionals',11],
        ['Information Technology and Telecommunications Professionals',60],
        ['Information Technology Technicians',18],
        ['Science, Engineering and Production Technicians',16],
        ['Conservation and Environment Professionals',1],
        ['Research and Development Managers',1],
        ]);  
     chart.setTitle({text: "Science and technology (5.68% migrants)"});
});