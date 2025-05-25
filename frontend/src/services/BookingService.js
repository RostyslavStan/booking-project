export class BookingService {
    static STORAGE_KEY = 'movie_bookings';

    static saveBooking(movieId, bookingData) {
        const bookings = this.getAllBookings();
        if (!bookings[movieId]) {
            bookings[movieId] = [];
        }
        bookings[movieId].push(bookingData);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
    }

    static getBookingsByMovieId(movieId) {
        const bookings = this.getAllBookings();
        return bookings[movieId] || [];
    }

    static getAllBookings() {
        const bookings = localStorage.getItem(this.STORAGE_KEY);
        return bookings ? JSON.parse(bookings) : {};
    }

    static getBookedSeats(movieId) {
        const bookings = this.getBookingsByMovieId(movieId);
        return bookings.reduce((seats, booking) => {
            return [...seats, ...booking.seats];
        }, []);
    }
} 