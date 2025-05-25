export default function Seat({isSelected, isBooked, onClick})
{
    return(
        <div 
        className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`} 
        onClick={onClick}></div>
    )
}