import React, { useState } from 'react';
import Importer from '../../lib';

const csvDefault = [
  {
    columnId: 1,
    columnName: 'Nome',
  },
  {
    columnId: 2,
    columnName: 'DN',
  },
  {
    columnId: 3,
    columnName: 'Telefone',
  },
  {
    columnId: 4,
    columnName: 'E-mail',
  },
  {
    columnId: 5,
    columnName: 'Matrícula',
  },
]

const userCsv = [
  {
    columnId: 1,
    columnName: 'Nome',
  },
  {
    columnId: 2,
    columnName: 'E-mail',
  },
  {
    columnId: 3,
    columnName: 'Matrícula',
  },
  {
    columnId: 4,
    columnName: 'Telefone',
  },
  {
    columnId: 5,
    columnName: 'DN',
  },
]

const App = () => {
  const [arrows, setArrows] = useState([]);

  return (
    <div style={{ margin: '0 300px' }}>
      <Importer 
        arrows={arrows}
        setArrows={setArrows}
        csvDefault={csvDefault}
        userCsv={userCsv}
      />
    </div>
  );
}

export default App;
