var app = angular.module('ispcApp', [
    'ui.grid',
    'ui.grid.autoResize',
    'angularMoment',
    'ngAnimate',
    'ui.bootstrap'
]);

app.controller('GridCtrl',[
        '$scope',
        'uiGridConstants',
        function($scope, uiGridConstants){
            console.log("thats NG");
            var testDate = new Date("09/30/2015 17:00");
            $scope.humanDF = "MMM, Do YYYY h:mm a";
            $scope.numberDF = "MM/DD/YYYY h:mm a";

            $scope.gridOpts = {
                data: 'gridData',
                enableFiltering: true,
                enableHorizontalScrollbar: 2,
                enableVerticalScrollbar : 1,
                rowTemplate: 'Scripts/uiGrid/gridRowTemplate.html',
                columnDefs: [
                    {
                        displayName: 'Start',
                        field: 'start',
                        type: 'date',
                        cellFilter: 'dateFilter : "MM/DD/YYYY h:mm a"',
                        width: 175
                    },{
                        displayName: 'End',
                        field: 'end',
                        type: 'date',
                        cellFilter: 'dateFilter : "MM/DD/YYYY h:mm a"',
                        width: 175
                    },{
                        displayName: 'Location',
                        field: 'location',
                        width: 115
                    },{
                        displayName: 'Event',
                        field: 'description',
                        width: 600
                    },{
                        displayName: 'Sponsored by',
                        field: 'sponsor',
                        //width: 150
                    }
                ]
            };
            $scope.gridData = [
                {
                    description: 'Global Game Jam',
                    start: '01/29/2016 17:00',
                    end: '01/31/2016 17:00',
                    location: '225 SSB',
                    sponsor: 'IS Department'
                },
                {
                    description: 'IS Mentoring Club Meeting: Resume Writing and Interviewing Skills',
                    start: '02/16/2016 17:30',
                    end: '02/16/2016 20:00',
                    location: '204 ESH',
                    sponsor: 'IS Mentoring Club'
                },
                {
                    description: 'Information Systems Career Conference. An exclusive job fair and career conference for IS students and IS Advisory Board companies',
                    start: '02/19/2016 10:00',
                    end: '02/19/2016 14:00',
                    location: 'JC Penney Conference Center',
                    sponsor: 'IS Department'
                },
                {
                    description: 'ISPC Meeting – IT Integration During Mergers and Acquisitions',
                    start: '02/22/2016 19:00',
                    end: '02/22/2016 20:30',
                    location: '204 ESH',
                    sponsor: 'ISPC'
                },
                {
                    description: 'ISPC Meeting - Business Process Modeling',
                    start: '03/14/2016 17:30',
                    end: '03/14/2016 19:00',
                    location: '204 ESH',
                    sponsor: 'ISPC'
                },
                {
                    description: 'IS Mentoring Club Meeting: Internships and Co-ops',
                    start: '03/23/2016 17:30',
                    end: '03/23/2016 20:00',
                    location: '204 ESH',
                    sponsor: 'IS Mentoring Club'
                },
                {
                    description: 'BlueMix for Girls event for Pattonville High School students – IS students will serve as volunteers to help the Pattonville girls complete a cloud development exercise',
                    start: '04/08/2016 08:00',
                    end: '04/08/2016 13:00',
                    location: '005 ESH',
                    sponsor: 'IS Department'
                },
                {
                    description: 'IS Mentoring Club Meeting: A Day in the Life of an IS Professional',
                    start: '04/21/2016 17:30',
                    end: '04/21/2016 20:00',
                    location: '204 ESH',
                    sponsor: 'IS Mentoring Club'
                },
                {
                    description: 'ISPC Meeting: Open Source Software Development',
                    start: '04/27/2016 19:00',
                    end: '04/27/2016 21:00',
                    location: '204 ESH',
                    sponsor: 'ISPC'
                },
                {
                    description: 'Women IS students will attend the Grace Hopper Conference for Women Technologists in Houston where they will network, learn about new research and practice, as well as participate in a job fair',
                    start: '10/19/2016',
                    end: '10/21/2016',
                    location: 'Houston, TX',
                    sponsor: 'IS Department'
                },
                {
                    description: 'Women\u0027s Hackathon',
                    start: '11/05/2016 08:00',
                    end: '11/05/2016 19:00',
                    location: '103 & 104 ESH',
                    sponsor: 'IS Department'
                },
                {
                    description: 'STLCyberCon 2016 – A cybersecurity Conference in 003 ESH and 005 ESH; 8.00 am – 4.00 pm. Distinguished researchers and practitioners will provide insights into a variety of topics related to cybersecurity – Free and open to ISAB members, ISAB company representatives, faculty, and students. http://stlcybercon.org',
                    start: '11/18/2016 08:00',
                    end: '11/18/2016 16:00',
                    location: '003 & 005 ESH',
                    sponsor: 'IS Department'
                },
                //{
                //    description: 'Semantic Web and Linked Data',
                //    start: '09/30/2015 17:00',
                //    end: '09/30/2015 19:00',
                //    location: '005 ESH',
                //    sponsor: 'ISPC'
                //},
                //{
                //    description: 'BlueMix for Girls event for Normandy High School students - IS students will serve as volunteers to help the NHS girls complete a cloud development exercise',
                //    start: '10/09/2015 08:00',
                //    end: '10/09/2015 13:00',
                //    location: '005 ESH',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'Grace Hopper Conference for Women Technologists in Houston where the students will network, learn about new research and practice, as well as participate in a job fair with over 350 companies',
                //    start: '10/14/2015 08:30',
                //    end: '10/16/2015 23:59',
                //    location: 'Houston, TX',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'IS Mentoring Club Meeting: Internships and Co-ops',
                //    start: '10/14/2015 17:00',
                //    end: '11/14/2015 20:00',
                //    location: '126 SSB',
                //    sponsor: 'IS Mentoring Club'
                //},
                //{
                //    description: 'Software Quality',
                //    start: '10/27/2015 17:30',
                //    end: '10/27/2015 19:00',
                //    location: '005 ESH',
                //    sponsor: 'ISPC'
                //},
                //{
                //    description: 'Open Source Software Development',
                //    start: '11/05/2015 17:00',
                //    end: '11/05/2015 21:30',
                //    location: '003 ESH',
                //    sponsor: 'ISPC'
                //},
                //{
                //    description: 'Women\'s Hackathon',
                //    start: '11/07/2015 08:00',
                //    end: '11/07/2015 19:00',
                //    location: '103/104 ESH',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'Ribbon Cutting for the Cybersecurity Lab (204 ESH) President Wolfe and Chancellor George will visit',
                //    start: '11/10/2015 17:00',
                //    end: '10/10/2015 19:00',
                //    location: '005 ESH',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'IT Service Management Forum (itSMF) of St. Louis',
                //    start: '11/12/2015 17:30',
                //    end: '11/12/2015 20:30',
                //    location: '131 SSB',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'A Day in the Life of an IS Professional',
                //    start: '11/12/2015 17:30',
                //    end: '11/12/2015 20:00',
                //    location: '204 ESH',
                //    sponsor: 'IS Mentoring Club'
                //},
                //{
                //    description: 'Cybersecurity Lab Open House and Ice Cream Social for IS students with the faculty and ISAB',
                //    start: '11/13/2015 14:00',
                //    end: '11/13/2015 15:00',
                //    location: '005 ESH',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'Git and GitHub',
                //    start: '11/17/2015 17:30',
                //    end: '11/17/2015 19:00',
                //    location: '005 ESH',
                //    sponsor: 'ISPC'
                //},
                //{
                //    description: 'Cybersecurity Conference - Distinguished researchers and practitioners will provide insights into a variety of topics related to offensive and defensive cybersecurity.',
                //    start: '11/20/2015 08:00',
                //    end: '11/20/2015 17:00',
                //    location: '103/104 ESH',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'Global Game Jam',
                //    start: '01/29/2016 17:00',
                //    end: '01/31/2016 17:00',
                //    location: '222 SSB',
                //    sponsor: 'IS Department'
                //},
                //{
                //    description: 'Information Systems Career Conference - An exclusive job fair and career conference for IS students and IS Advisory Board companies',
                //    start: '02/18/2016 10:00',
                //    end: '02/18/2016 14:00',
                //    location: 'JC Penney Conference Center',
                //    sponsor: 'IS Department'
                //}
            ];

            $scope.toggle = function (type) {
                switch (type){
                    case 'date':
                        if($scope.currentDF == $scope.humanDF){
                            $scope.currentDF = $scope.numberDF;
                        }else{
                            $scope.currentDF = $scope.humanDF;
                        }
                        console.log($scope.currentDF);
                        break;
                    case '':
                        console.log(type);
                        break;

                }

            };
        }
    ])
    .filter('dateFilter', function(){
        return function(input, format){
            var dateFormat = format;
            var df = "MM/DD/YYYY";
            if (dateFormat) {
                df = dateFormat;
            }
            return moment(input).format(df);
        }
    })
;

app.controller('CollapseCtrl',
        function ($scope) {
            $scope.isCollapsed = true;
        }
    )
;