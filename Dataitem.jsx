function Dataitem(props)
{
    return(
        <div>
            <label htmlFor="title"><strong>Title:&nbsp; </strong></label>
            <span name="title">{props.title}</span>&nbsp; &nbsp; &nbsp; &nbsp; 
            <label htmlFor="description"><strong>Description:&nbsp; </strong> </label>
            <span name="description">{props.description}</span>
        </div>
    )
}
export default Dataitem;