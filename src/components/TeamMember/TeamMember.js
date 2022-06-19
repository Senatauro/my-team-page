import "./TeamMember.css";

export default function TeamMember(props) {
    return (
        <>
            <div className="team-member-card">
                <img className="team-member-card-img" src={props.member.photo} alt={props.member.name} />
                <p className="team-member-card-title">{props.member.title}</p>
                <h2 className="team-member-card-name">{props.member.name}</h2>
            </div>
        </>
    )
}