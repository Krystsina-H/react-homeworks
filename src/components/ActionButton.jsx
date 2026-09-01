const ActionButton = ({ buttonText, func }) => {
  return (
    <div>
      <button onClick={func}>{buttonText}</button>
    </div>
  )
}
export default ActionButton
