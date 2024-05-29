import { useEffect, useState } from "react"
import { LineChartComponent } from "../charts/LineChart";
import { RadarChartComponent } from "../charts/RadarChart";
import { Aside } from "./Aside";
import { BarChartComponent } from "../charts/BarChart";
import { RadialChartComponent } from "../charts/RadialChart";
import { getUser } from "../../usecases/getUser";
import { User } from "../../variables/types";

const normalizeScore = (data: User): number => {
    return data.todayScore !== undefined ? data.todayScore : data.score !== undefined ? data.score : 0;
};

export function Content() {
    const [data, setData] = useState<User | null>(null)
    const [userId, setUserId] = useState(12)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            
            try {
                const userData = await getUser({userId});
                setData(userData);
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
    
    if (!data) {
        return <div>Aucune donnée trouvée</div>;
    }
    
    function handleChangeUser() {
        if (userId === 12) {
            setUserId(18);
        } else {
            setUserId(12);
        }
    };

    const normalizedScore = normalizeScore(data)

    return <div className="content">
        <div className='content_welcome'>
            <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
            <button onClick={handleChangeUser}>Changer d'utilisateur</button>
        </div>
        <div className="content_container">
            <div className="content_container_charts">
                <div className="content_container_charts_activity">
                    <BarChartComponent userId={userId} />
                </div>
                <div className="content_container_charts_row">
                    <div className="chart_average">
                        <LineChartComponent userId={userId} />
                    </div>
                    <div className="chart_performance">
                        <RadarChartComponent userId={userId} />
                    </div>
                    <div className="chart_score">
                        <RadialChartComponent todayScore={normalizedScore} />
                    </div>
                </div>
            </div>
            <Aside
                calories={data.keyData.calorieCount}
                proteins={data.keyData.proteinCount}
                carbs={data.keyData.carbohydrateCount}
                lipids={data.keyData.lipidCount}
            />
        </div>
    </div>
}