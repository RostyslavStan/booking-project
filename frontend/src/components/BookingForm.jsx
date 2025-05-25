import { useState } from "react";
import { BookingService } from '../services/BookingService';

export default function BookingForm({ selectedSeats, movieId, onSuccess, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "Ім'я обов'язкове";
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = "Телефон обов'язковий";
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Неправильний формат телефону";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email обов'язковий";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Неправильний формат Email";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

            BookingService.saveBooking(movieId, {
                seats: selectedSeats,
                ...formData,
                date: new Date().toISOString()
            });
            
            onSuccess();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h3>Заповніть дані для бронювання</h3>
            
            <div className="form-group">
                <label htmlFor="name">Ім'я</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-button">
                    Підтвердити бронювання
                </button>
                <button type="button" onClick={onCancel} className="cancel-button">
                    Скасувати
                </button>
            </div>
        </form>
    );
}
