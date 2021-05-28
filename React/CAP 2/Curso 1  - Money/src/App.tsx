import GlobalStyles from './styles/global'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import NewTransactionModal from './components/NewTransactionModal'
import Modal from 'react-modal'
import { TransationsContext } from './context/TransationsContext'

Modal.setAppElement('#root')

const App = (): JSX.Element => {
  const [inNewTransactionsModalOpen, setInNewTransactionsModalOpen] =
    useState(false)

  function handleOpenNewTransactionsModal() {
    setInNewTransactionsModalOpen(true)
  }
  function handleCloseNewTransactionsModal() {
    setInNewTransactionsModalOpen(false)
  }
  return (
    <>
      <TransationsContext.Provider value={[]}>
        <GlobalStyles />
        <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={inNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionsModal}
        />
      </TransationsContext.Provider>
    </>
  )
}

export default App
