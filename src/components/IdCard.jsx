function IdCard(props) {

    const birthDate = new Date(props.id.birth);

    return (

        <section className="box">
            <img src={props.id.picture} alt={props.id.firstName} />
            <div className="text">
                <p><strong>First name:</strong> {props.id.firstName}</p>
                <p><strong>Last name:</strong> {props.id.lastName}</p>
                <p><strong>Gender:</strong> {props.id.gender}</p>
                <p><strong>Heigth:</strong> {props.id.height * 100}m</p>
                <p><strong>Birth:</strong> {birthDate.toDateString()}</p>
            </div>
        </section>

    )

}

export default IdCard;