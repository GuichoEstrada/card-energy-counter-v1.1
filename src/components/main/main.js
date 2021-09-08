import React, {useState} from "react";
import "../main/main.styles.scss";

import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import AddBox from '@material-ui/icons/AddBox';
import Cached from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

// import TableFooter from '@material-ui/core/TableFooter';


const InputCurrency = ({value, onChange}) => {
    return <CurrencyTextField
        value={value}
        onChange={onChange}
    />
};

// PLAYER
const playerCardSum = tableData => {
    return tableData.reduce((sum, row) => sum + (row.playerCard ? row.playerCard : 0), 0);
  };
const playerEnergySum = tableData => {
  return tableData.reduce((sum, row) => sum + (row.playerEnergy ? row.playerEnergy : 0), 0);
};
// ENEMY
const enemyCardDeducted = tableData => {
    return tableData.reduce((sum, row) => sum + (row.enemyCardDeducted ? row.enemyCardDeducted : 0), 0);
  };
const enemyCardGained = tableData => {
  return tableData.reduce((sum, row) => sum + (row.enemyCardGained ? row.enemyCardGained : 0), 0);
};
const enemyEnergyDeducted = tableData => {
    return tableData.reduce((sum, row) => sum + (row.enemyEnergyDeducted ? row.enemyEnergyDeducted : 0), 0);
  };
const enemyEnergyGained = tableData => {
  return tableData.reduce((sum, row) => sum + (row.enemyEnergyGained ? row.enemyEnergyGained : 0), 0);
};

export default function App() {

    const tableData = [
        {
          "turn": 1,
          "playerCard": 6,
          "playerEnergy": 3,
          "enemyCardDeducted": '',
          "enemyCardGained": '',
          "enemyEnergyDeducted": '',
          "enemyEnergyGained": '',
        },
      ];

    const [win, setWin] = useState(0);
    const addWin = () => setWin(win + 1);
    const minusWin = () => {
        if (win <=0) {
            alert("Win record cannot be negative.");
        } else {
            setWin(win - 1);
        }
    };

    const [lose, setLose] = useState(0);
    const addLose = () => setLose(lose + 1);
    const minusLose = () => {
        if (lose <=0) {
            alert("Lose record cannot be negative.");
        } else {
            setLose(lose - 1);
        }
    };
    const [draw, setDraw] = useState(0);
    const addDraw = () => setDraw(draw + 1);
    const minusDraw = () => {
        if (draw <=0) {
            alert("Draw record cannot be negative.");
        } else {
            setDraw(draw - 1);
        }
    };

    const [turn, setTurn] = useState(2);
    const addTurn = () => setTurn(turn + 1);

  const [state, setState] = React.useState(tableData);

  const removeRowHandler = index => () => {
      setState(prevState => {
          const newTableData = [...prevState];
          newTableData.splice(index, 1);
          return newTableData;
      });
  };

  const addRow = () => {
      setState(prevState => {
          addTurn();
          console.log(turn)
          const newTableData = [...prevState, {turn: Math.trunc(turn), playerCard: 3, playerEnergy: 2}];
          
          return newTableData;
      });
  };

  const reset = () => {
    setTurn(2)
    setState(prevState => {
        const newTableData = [{
          ...prevState,
          "turn": 1,
          "playerCard": 6,
          "playerEnergy": 3,
          "enemyCardDeducted": '',
          "enemyCardGained": '',
          "enemyEnergyDeducted": '',
          "enemyEnergyGained": '',
        }];
        return newTableData;
    });
};

  
  const changeValueHandlerWithProblem = (index, value, prop) => {
    setState(prevState => {
        prevState[index][prop] = value;
         return [...prevState];
    });
};

  const changeValueHandler = (index, value, prop) => {
      setState(prevState => {
          prevState[index][prop] = value;
          return prevState;
      });
  };

  const TableEditRow = ({row, index, changeValueHandler, }) => {
    const [turn, setTurn] = React.useState(row.turn ? row.turn : '');
    const [playerCard, setPlayerCard] = React.useState(row.playerCard ? row.playerCard : '');
    const [playerEnergy, setPlayerEnergy] = React.useState(row.playerEnergy ? row.playerEnergy : '');
    const [enemyCardDeducted, setenemyCardDeducted] = React.useState(row.enemyCardDeducted ? row.enemyCardDeducted : '');
    const [enemyCardGained, setenemyCardGained] = React.useState(row.enemyCardGained ? row.enemyCardGained : '');
    const [enemyEnergyDeducted, setenemyEnergyDeducted] = React.useState(row.enemyEnergyDeducted ? row.enemyEnergyDeducted : '');
    const [enemyEnergyGained, setenemyEnergyGained] = React.useState(row.enemyEnergyGained ? row.enemyEnergyGained : '');

    const onChangeWithProblem = (setter, prop) => (event, value) => {
        setter(value);
        changeValueHandlerWithProblem(index, value, prop);
    };

  

    return <TableRow className='scrollable-row'>

        <TableCell align="center">
            <input
                value={turn}
                onChange={onChangeWithProblem(setTurn, 'turn')}
            />
        </TableCell>

        <TableCell align="center">
            <InputCurrency
                value={playerCard}
                onChange={onChangeWithProblem(setPlayerCard, 'playerCard')}
            />
        </TableCell>
        
        <TableCell align="center">
            <InputCurrency
                value={playerEnergy}
                onChange={onChangeWithProblem(setPlayerEnergy, 'playerEnergy')}
            />
        </TableCell>

        <TableCell align="center">
            <InputCurrency
                value={enemyCardDeducted}
                onChange={onChangeWithProblem(setenemyCardDeducted, 'enemyCardDeducted')}
            />
        </TableCell>
        
        <TableCell align="center">
            <InputCurrency
                value={enemyCardGained}
                onChange={onChangeWithProblem(setenemyCardGained, 'enemyCardGained')}
            />
        </TableCell>

        <TableCell align="center">
            <InputCurrency
                value={enemyEnergyDeducted}
                onChange={onChangeWithProblem(setenemyEnergyDeducted, 'enemyEnergyDeducted')}
            />
        </TableCell>
        
        <TableCell align="center">
            <InputCurrency
                value={enemyEnergyGained}
                onChange={onChangeWithProblem(setenemyEnergyGained, 'enemyEnergyGained')}
            />
        </TableCell>
  
        <TableCell align="center" className="MuiTableCell-paddingNone">

            <IconButton aria-label="delete" className='btn-icon' onClick={removeRowHandler(index)}>
                <DeleteIcon  />
            </IconButton>

        </TableCell>
    </TableRow>
};
const totalEnemyCards = playerCardSum(state) + enemyCardGained(state) - enemyCardDeducted(state)
const totalEnemyEnergy = playerEnergySum(state) + enemyEnergyGained(state) - enemyEnergyDeducted(state)
  return (
    <div className="App">
      <div className='record-container'>
        <div className='record-option'>
            <button className='circle minus grow' onClick={minusWin}></button>
            <button className="btn btn-win">Win: {win}</button>
            <button className='circle plus grow' onClick={addWin}></button>
        </div>
        <div className='record-option'>
            <button className='circle minus grow' onClick={minusLose}></button>
            <button className="btn btn-lose">Lose: {lose}</button>
            <button className='circle plus grow' onClick={addLose}></button>
        </div>
        <div className='record-option'>
            <button className='circle minus grow' onClick={minusDraw}></button>
            <button className="btn btn-draw">Draw: {draw}</button>
            <button className='circle plus grow' onClick={addDraw}></button>
        </div>
      </div>
      <TableContainer component={Paper}>
                <Table  aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}>
                                
                            </TableCell>
                            <TableCell align="center" colSpan={1}>
                                <h2 className="legend">Total Cards: <br/><br/><span>{playerCardSum(state)}</span></h2>
                            </TableCell>
                            <TableCell align="center" colSpan={1}>
                                <h2 className="legend">Total Energy: <br/><br/><span>{playerEnergySum(state)}</span></h2>
                            </TableCell>
                            <TableCell align="center" colSpan={2}>
                                <h2 className="legend">Enemy Cards: <br/><br/><span>{totalEnemyCards}</span></h2>
                            </TableCell>
                            <TableCell align="center" colSpan={2}>
                                <h2 className="legend">Enemy Energy: <br/><br/><span>{totalEnemyEnergy}</span></h2>
                            </TableCell>

                            <TableCell align="center" colSpan={3}>
                                <IconButton aria-label="reset" className='reset-btn fourth' onClick={reset} >
                                    <Cached/>
                                    Reset
                                </IconButton>
                                <IconButton aria-label="add" className='reset-btn fourth' onClick={addRow} >
                                    <AddBox/>
                                    Next Turn
                                </IconButton>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell align="center">Turn #</TableCell>
                            <TableCell align="center">Total Card</TableCell>
                            <TableCell align="center">Total Energy</TableCell>
                            <TableCell align="center">Enemy Card <br/>Deducted</TableCell>
                            <TableCell align="center">Enemy Card <br/>Gained</TableCell>
                            <TableCell align="center">Enemy Energy <br/>Deducted</TableCell>
                            <TableCell align="center">Enemy Energy <br/>Gained</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {state.map((row, index) =>
                            <TableEditRow key={'TableEditRow' + index}
                                row={row}
                                index={index}
                                changeValueHandler={changeValueHandler}
                                changeValueHandlerWithProblem={changeValueHandlerWithProblem}
                            />
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  );
}