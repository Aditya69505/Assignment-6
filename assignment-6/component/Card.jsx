const card=({name,course,feedback})=>{

    return(
        <div className="card">
            <h2>{name}</h2>
            <h3>{course}</h3>
            <p>{feedback}</p>
        </div>

    )
}
export default card