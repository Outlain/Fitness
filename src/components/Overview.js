// import MyBarChart from './graphs/BarGraph.js'
import MyLineChart from './graphs/LineGraph.js'
import MyDoughnutChart from './graphs/DonughtGraph.js'
// import MyBarChart from './graphs/BarGraph.js'
import MyAreaChart from './graphs/AreaChart.js'
export const Overview = () => {

    return (
        <div className="main-wrapper">
            <div className="sidebar"></div>
            <div className="main-page-wrapper">
                <div className="main-page-top">Welcome to your Health/Workout dashboard : 'Username'</div>
                <div className="main-page-middle-top-left">
                    <div className="main-page-three-top centering-flex text-white ">Max Squat</div>
                    <div className="main-page-three-bottom main-page-three-master">
                        <span className='centering-flex text-white '>375</span>
                        <span className='centering-flex text-white '><MyAreaChart excercise={{ excercise :'Squat Weight', name:'Squat'}} /></span>
                    </div>
                </div>
                <div className="main-page-middle-top-middle">
                    <div className="main-page-three-top centering-flex text-white ">Max Bench</div>
                    <div className="main-page-three-bottom main-page-three-master">
                        <span className='centering-flex text-white '>275</span>
                        <span className='centering-flex text-white '><MyAreaChart excercise={{excercise :'Bench Weight', name: 'Bench'}}/></span>
                    </div>
                </div>
                <div className="main-page-middle-top-right">
                    <div className="main-page-three-top centering-flex text-white ">Max Deadlift</div>
                    <div className="main-page-three-bottom main-page-three-master">
                        <span className='centering-flex text-white '>475</span>
                        <span className='centering-flex text-white '><MyAreaChart excercise={{excercise :'Deadlift Weight', name: 'Deadlift'}}/></span>
                    </div>
                </div>
                <div className="main-page-middle-bottom-left"><MyLineChart /></div>
                <div className="main-page-middle-bottom-right"><MyDoughnutChart /></div>
                <div className="main-page-bottom"></div>
            </div>
        </div>
    )
}