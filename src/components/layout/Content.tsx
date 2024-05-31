//React
import { useEffect, useState } from "react"

//Components
import { Aside } from "./Aside";

//Charts
import { LineChartSessions } from "../charts/LineChartSessions";
import { RadarChartPerformance } from "../charts/RadarChartPerformance";
import { BarChartActivity } from "../charts/BarChartActivity";
import { RadialChartScore } from "../charts/RadialChartScore";

// Usecases
import { getUser } from "../../domain/usecases/getUser";

//Models
import { User } from "../../domain/models/User";

// Utils
import { scoreInPercentage } from "../../domain/utils/scoreInPercentage";

export function Content() {
    const [user, setUser] = useState<User | null>(null)
    const [userId, setUserId] = useState(12)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userData = await getUser({ userId });
                setUser(userData);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Oups! Quelque chose n'a pas fonctionné!</div>
    }

    if (!user) {
        return <div>Aucune donnée trouvée</div>;
    }

    function handleChangeUser() {
        if (userId === 12) {
            setUserId(18);
        } else {
            setUserId(12);
        }
    };

    const normalizedScore = scoreInPercentage(user)

    return <div className="content">
        <div className='content_welcome'>
            <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
            <button onClick={handleChangeUser}>Changer d'utilisateur</button>
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
                        <RadialChartScore todayScore={normalizedScore} />
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