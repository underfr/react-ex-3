export default function Day({day, className, onClick}){
    return (
        <div className={className} onClick={onClick}>
            {day}
        </div>
    )
}