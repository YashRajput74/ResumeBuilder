export default function Achievements({data}){
    return (
        <div>
            <h2>Achievements</h2>
            {data.achievements.map((achievement,index)=>{
                <div className="achievement" key={index}>
                    <h3>{achievement.Title}</h3>
                    <p>{achievement.Description}</p>
                </div>
            })}
        </div>
    )
}