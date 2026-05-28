import './Table.css';

const Table = ({ data, onDelete }) => {
  const formatDate = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Некорректная дата';
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
  };
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Дата (дд.мм.гггг)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.date || index}>
            <td>{formatDate(row.date)}</td>
            <td>
              {row.distance} км
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDelete(row.date)}
                title="Удалить запись"
              >
                ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
