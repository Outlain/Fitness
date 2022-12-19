import LineGraphBench  from './LineGraphBench.js'
import LineGraphSquat from './LineGraphSquat.js'
import LineGraphDeadlift from './LineGraphDeadlift.js'
export const Overview = () => {

    return (
        <section>
            <div className="top"></div>
            <div className="top-paragraph-left"></div>
            <div className="top-paragraph-right">
                Goal
            </div>
            <div className="chart">
                <span>Bench<LineGraphBench/></span>
                <span>Squat<LineGraphSquat/></span>
                <span>Deadlift<LineGraphDeadlift/></span>
            </div>
            <div className="bottom-paragrpah"></div>
        </section>
    )
}