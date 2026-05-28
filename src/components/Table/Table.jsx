import './Table.css'

const Table = ({ data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (гг-мм-дд)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.date}>
            <td>{row.date}</td>
            <td>{row.distance}</td>
            <td>
              <button onClick={() => onDelete(row.date)}>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
