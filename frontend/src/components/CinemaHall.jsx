import Seat from './Seat'
import { useState } from "react"
import './CSS/CinemaHall.css'

export default function CinemaHall() {
    const rows = 10
    const cols = 8
    const [selectedSeats, setSelectedSeats] = useState([])

    const toggleSeat = (seat) => {
        setSelectedSeats(prev =>
            prev.includes(seat)
            ? prev.filter(s => s !== seat)
            :[...prev, seat]
        )
    }

    const renderSeats = () => {
        const seatElements = []
        
        for(let row = 1; row <= rows; row++) {
            for(let col = 1; col <= cols; col++) {
                const seatId = `R${row}C${col}`
                const isSelected = selectedSeats.includes(seatId)

                if (col === 4) {
                    seatElements.push(
                        <Seat
                        key={seatId}
                        isSelected={isSelected}
                        onClick={() => toggleSeat(seatId)}/>
                    )
                    seatElements.push(
                        <div key={`aisle-${row}`} className="aisle"></div>
                    )
                } else {
                    seatElements.push(
                        <Seat
                        key={seatId}
                        isSelected={isSelected}
                        onClick={() => toggleSeat(seatId)}/>
                    )
                }
            }
        }
        return seatElements
    }
    
    return(
        <div className="cinema-hall">
            <div className="screen">SCREEN</div>
            <div className="grid">{renderSeats()}</div>
            <div className="entry-label">ВХІД</div>
        </div>
    )
}