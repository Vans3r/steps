import { useState } from 'react';
import Form from './components/Form/Form.jsx';
import Table from './components/Table/Table.jsx';
import './App.css';

const App = () => {
  const [trainings, setTrainings] = useState([
    { date: '2019-07-17', distance: 5.7 },
    { date: '2019-07-18', distance: 14.2 },
    { date: '2019-07-19', distance: 3.4 },
  ]);
  const addOrUpdateTraining = (newTraining) => {
    const existingIndex = trainings.findIndex(
      (training) => training.date === newTraining.date
    );
    let updatedTrainings;
    if (existingIndex !== -1) {
      updatedTrainings = trainings.map((training, index) =>
        index === existingIndex
          ? {
              ...training,
              distance: training.distance + parseFloat(newTraining.distance)
            }
          : training
      );
    } else {
      updatedTrainings = [
        ...trainings,
        {
          date: newTraining.date,
          distance: parseFloat(newTraining.distance)
        }
      ];
    }
    updatedTrainings.sort((a, b) => new Date(b.date) - new Date(a.date));
    setTrainings(updatedTrainings);
  };
  const deleteTraining = (date) => {
    setTrainings(trainings.filter((training) => training.date !== date));
  };
  return (
    <div>
      <h1>Учёт тренировок</h1>
      <Form onSubmit={addOrUpdateTraining} />
      <Table
        data={trainings}
        onDelete={deleteTraining}
      />
    </div>
  );
};

export default App;
