import { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, distance });
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div>Дата (дд.мм.гггг)</div>
        <input
          className="date"
          type="date"
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
