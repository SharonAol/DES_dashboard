var barOptions_stacked = {
    hover :{
        animationDuration:10
    },
    scales: {
        xAxes: [{
            label:"Duration",
            ticks: {
                beginAtZero:true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:false
            },
            gridLines: {
            }, 
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            stacked: true
        }]
    },
    legend:{
        display:false
    },
};

var ctx = document.getElementById("mypillars");
var myChart = new Chart(ctx, {    
    type: 'horizontalBar',
    data: {
        labels: ["1.Condition of school building", "2.Classroom infrastucture", "3.Sanitary facilities", "4.Timetabling","5.Teacher deployment","6.Disciplinary policy","7.Inclusive school practice","8.Gender Sensitive School"],
        
        datasets: [{
            data: [1,2,3,1,3,2,2,3],
            backgroundColor: "rgba(63,103,126,0)",
            hoverBackgroundColor: "rgba(50,90,100,0)"
            
        },{
            data: [1,1,1,1,1,1,1,1],
            backgroundColor: ['red', 'green', 'blue', 'yellow','orange','purple','cyan','pink'],
        }]
    },
    options: barOptions_stacked,
});

// this part to make the tooltip only active on your real dataset
var originalGetElementAtEvent = myChart.getElementAtEvent;
myChart.getElementAtEvent = function (e) {
    return originalGetElementAtEvent.apply(this, arguments).filter(function (e) {
        return e._datasetIndex === 1;
    });
}
