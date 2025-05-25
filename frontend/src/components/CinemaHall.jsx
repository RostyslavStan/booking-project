import Seat from './Seat'
import { useState, useEffect } from "react"
import './CSS/CinemaHall.css'
import BookingForm from './BookingForm'
import { useParams } from 'react-router'
import { BookingService } from '../services/BookingService'

export default function CinemaHall() {
    const rows = 10
    const cols = 8
    const [selectedSeats, setSelectedSeats] = useState([])
    const [showForm, setShowForm] = useState(false)
    const {id} = useParams()
    const [bookedSeats, setBookedSeats] = useState([])

    useEffect(() => {
        const booked = BookingService.getBookedSeats(id)
        setBookedSeats(booked)
    }, [id])

    const toggleSeat = (seat) => {
        if (bookedSeats.includes(seat)) return
        setSelectedSeats(prev =>
            prev.includes(seat)
            ? prev.filter(s => s !== seat)
            : [...prev, seat]
        )
    }

    const renderSeats = () => {
        const seatElements = []
        
        for(let row = 1; row <= rows; row++) {
            for(let col = 1; col <= cols; col++) {
                const seatId = `R${row}C${col}`
                const isSelected = selectedSeats.includes(seatId)
                const isBooked = bookedSeats.includes(seatId)

                if (col === 4) {
                    seatElements.push(
                        <Seat
                            key={seatId}
                            isSelected={isSelected}
                            isBooked={isBooked}
                            onClick={() => toggleSeat(seatId)}
                        />
                    )
                    seatElements.push(
                        <div key={`aisle-${row}`} className="aisle"></div>
                    )
                } else {
                    seatElements.push(
                        <Seat
                            key={seatId}
                            isSelected={isSelected}
                            isBooked={isBooked}
                            onClick={() => toggleSeat(seatId)}
                        />
                    )
                }
            }
        }
        return seatElements
    }
    
    function handleBookingSuccess() {
        alert("Бронювання успішне")
        setShowForm(false)
        setSelectedSeats([])
        const booked = BookingService.getBookedSeats(id)
        setBookedSeats(booked)
    }
    return(
        <div className="cinema-hall">
            <div className="screen">SCREEN</div>
            <div className="grid">{renderSeats()}</div>
            <div className="entry-label">ВХІД</div>
            <button onClick={() => setShowForm(true)} disabled={selectedSeats.length === 0}>
                Забронювати
            </button>

            {showForm && (
                <div className='modal-overly' onClick={() => setShowForm(false)}>
                    <div className='modal' onClick={e => e.stopPropagation()}>
                        <BookingForm
                            selectedSeats={selectedSeats}
                            movieId={id}
                            onSuccess={handleBookingSuccess}
                            onCancel={() => setShowForm(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}