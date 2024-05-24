type AsideProps = {
    calories: number;
    proteins: number;
    carbs: number; 
    lipids: number;
}

export function Aside({calories, proteins, carbs, lipids}: AsideProps) {
    return <aside>
        <div className="aside_container">
            <img src="./calories-icon.svg" alt="" />
            <div className="aside_container_text">
                <h2>{calories}kCal</h2>
                <h3>Calories</h3>
            </div>
        </div>
        <div className="aside_container">
            <img src="./protein-icon.svg" alt="" />
            <div className="aside_container_text">
                <h2>{proteins}g</h2>
                <h3>Protéines</h3>
            </div>
        </div>
        <div className="aside_container">
            <img src="./carbs-icon.svg" alt="" />
            <div className="aside_container_text">
                <h2>{carbs}g</h2>
                <h3>Glucides</h3>
            </div>
        </div>
        <div className="aside_container">
            <img src="./fat-icon.svg" alt="" />
            <div className="aside_container_text">
                <h2>{lipids}g</h2>
                <h3>Lipides</h3>
            </div>
        </div>
    </aside>
}