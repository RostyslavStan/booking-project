export default function Seat({isSelected, onClick})
{
    return(
        <div 
        className={`seat ${isSelected ? 'selected' : 'available'}`} 
        onClick={onClick}></div>
    )
}