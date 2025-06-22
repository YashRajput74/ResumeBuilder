import { useResume } from "../../context/ResumeContext";

export default function Avatar() {
    const { data, style } = useResume();
    return (
        <div className="avatar" style={style?.avatar?.box}>
            <div className="profile-card" style={style?.avatar?.card}>
                <div className="profile-image" style={style?.avatar?.imageDiv}>
                    <img src={data.profilePhoto} alt="Lorna Alvarado" style={style?.avatar?.image}/>
                </div>
                <h2 className="name" style={style?.avatar?.heading}>{data.firstName} <br /> {data.lastName}</h2>
                <p className="position" style={style?.avatar?.position}>{data.position}</p>
            </div>

        </div>
    )
}