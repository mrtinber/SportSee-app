//React
import { useState } from "react"

//Components
import { Aside } from "./Aside";

//Charts
import { LineChartSessions } from "../charts/LineChartSessions";
import { RadarChartPerformance } from "../charts/RadarChartPerformance";
import { BarChartActivity } from "../charts/BarChartActivity";
import { RadialChartScore } from "../charts/RadialChartScore";

//Models
import { useFetchUser } from "../../hooks/useFetchUser";

export function Content() {
    const [userId, setUserId] = useState(12)
    const { user, isLoading, error } = useFetchUser(userId)

    if (isLoading) {
        return <div className="content_message">Chargement...</div>;
    }

    if (error) {
        return <div className="content_message">Oups! Quelque chose n'a pas fonctionné!</div>
    }

    if (!user) {
        return <div className="content_message">Aucune donnée trouvée</div>;
    }

    function handleChangeUser() {
        if (userId === 12) {
            setUserId(18);
        } else {
            setUserId(12);
        }
    };

    return <div className="content">
        <div className='content_welcome'>
            <div className='content_welcome_row'>
                <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
                <button onClick={handleChangeUser}>Changer d'utilisateur</button>
            </div>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="content_container">
            <div className="content_container_charts">
                <div className="content_container_charts_activity">
                    <BarChartActivity userId={userId} />
                </div>
                <div className="content_container_charts_row">
                    <div className="chart_average">
                        <LineChartSessions userId={userId} />
                    </div>
                    <div className="chart_performance">
                        <RadarChartPerformance userId={userId} />
                    </div>
                    <div className="chart_score">
                        <RadialChartScore todayScore={user.todayScore} />
                    </div>
                </div>
            </div>
            <Aside
                calories={user.keyData.calorieCount}
                proteins={user.keyData.proteinCount}
                carbs={user.keyData.carbohydrateCount}
                lipids={user.keyData.lipidCount}
            />
        </div>
    </div>
}