import ActionButton from './components/ActionButton'
import ClickPractice from './components/ClickPractice'
import FormPractice from './components/FormPractice'
import InputPractice from './components/InputPractice'

function App() {
  return (
    <div>
      <ClickPractice />
      <InputPractice />
      <FormPractice />
      <ActionButton
        buttonText={'Сохранить'}
        func={() => {
          console.log('Сохранено')
        }}
      />
      <ActionButton
        buttonText={'Удалить'}
        func={() => {
          console.log('Удалено')
        }}
      />
    </div>
  )
}

export default App
