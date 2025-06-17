export default function PersonalInfo({ data }) {
    return (
        <div className="personalInfo">
            <h1>{data.name}</h1>
            <p>{data.summary}</p>
        </div>
    );
}
