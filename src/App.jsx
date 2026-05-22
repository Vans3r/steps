import { useState } from 'react';
import Form from './components/Form/Form.jsx';
import Table from './components/Table/Table.jsx';
import './App.css'

const App = () => {
  const [trainings, setTrainings] = useState([
    { date: '20.07.2019', distance: 5.7 },
    { date: '19.07.2019', distance: 14.2 },
    { date: '18.07.2019', distance: 3.4 },
  ]);

  const addOrUpdateTraining = (newTraining) => {
    const existing = trainings.find(
      (training) => training.date === newTraining.date
    );

    if (existing) {
      setTrainings(trainings.map((training) =>
        training.date === newTraining.date
          ? { ...training, distance: training.distance + parseFloat(newTraining.distance) }
          : training
      ));
    } else {
      setTrainings([
        ...trainings,
        { date: newTraining.date, distance: parseFloat(newTraining.distance) },
      ]).sort((a, b) => new Date(b.date) - new Date(a.date));
    }
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
