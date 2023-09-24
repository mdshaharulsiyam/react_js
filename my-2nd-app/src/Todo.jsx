export default function Todo({task,isdone}) {
    return (
        // <h2>task : {task}</h2>
        isdone?<h2>finished : {task}</h2>:<h4>working on task : {task}</h4>
    )
}