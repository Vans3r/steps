import { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    let formatted = '';
    if (value.length >= 1) formatted += value.slice(0, 2);
    if (value.length >= 3) formatted += '.' + value.slice(2, 4);
    if (value.length >= 5) formatted += '.' + value.slice(4, 8);

    setDate(formatted);
  };

  const validateDate = (dateString) => {
    const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = dateString.match(dateRegex);
    if (!match) return false;
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1; 
    const year = parseInt(match[3], 10);
    if (year < 1000 || year > 9999) return false;
    if (month < 0 || month > 11) return false;
    const date = new Date(year, month, day);
    return date.getFullYear() === year &&
           date.getMonth() === month &&
           date.getDate() === day;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateDate(date)) {
      alert('Введите корректную дату в формате дд.мм.гггг');
      return;
    }

    onSubmit({ date, distance });
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div>Дата(дд.мм.гггг)</div>
        <input
          className="date"
          type="text"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="form-group">
        <div>Пройдено км</div>
        <input
          className="distance"
          type="number"
          step="0.1"
          min="0"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
      </div>
      <button type="submit">OK</button>
    </form>
  );
};

export default Form;