import { useEffect, useState } from "react"
import { LineChartComponent } from "./LineChart";
import { RadarChartComponent } from "./RadarChart";
import { Aside } from "./Aside";

const BASE_URL = 'http://localhost:3000'

type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};

type KeyData = {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
};

type UserData = {
    id: number;
    userInfos: UserInfos;
    todayScore: number;
    keyData: KeyData;
};

export function Content() {
    const [data, setData] = useState<UserData | null>(null)
    const [userId, setUserId] = useState(12)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(`${BASE_URL}/user/${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false)
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

    return <div className="content">
        <div className='content_welcome'>
            <h1>Bonjour {data.userInfos.firstName}</h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
            <button onClick={handleChangeUser}>Changer d'utilisateur</button>
        </div>
        <div className="content_container">
            <div className="content_container_charts">
                <div className="chart">
                    <LineChartComponent userId={userId} />
                </div>
                <div className="chart_performance">
                    <RadarChartComponent userId={userId} />
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