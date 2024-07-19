import './App.css'

import { Table } from './components/table/Table'
import { TableProvider } from './providers/TableProvider';
import { TurnProvider } from './providers/TurnProvider';
import { HaveWinnerProvider } from './providers/HaveWinnerProvider';
import { CountWinsProvider } from './providers/CountWinsProvider';

function App() {
  
  
  return (
    <>
      <HaveWinnerProvider>
        <TurnProvider>
          <TableProvider>
            <CountWinsProvider>
              <Table/>
            </CountWinsProvider>
          </TableProvider>
        </TurnProvider>
      </HaveWinnerProvider>
    </>
  )
}

export default App
