const Notification = ({message}) => {
    if (!message) {
    return null
  }

  return (
    <div className='msg'>
      {message}
    </div>
  )
}

export default Notification