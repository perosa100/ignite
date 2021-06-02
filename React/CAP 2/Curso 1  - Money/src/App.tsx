import GlobalStyles from './styles/global'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import NewTransactionModal from './components/NewTransactionModal'
import Modal from 'react-modal'
import { TransationsProvider } from './hooks/useTransactions'

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
      <TransationsProvider>
        <GlobalStyles />
        <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={inNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionsModal}
        />
      </TransationsProvider>
    </>
  )
}

export default App
