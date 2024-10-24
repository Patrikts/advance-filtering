function Input({ handleChange, value, title, name, color }) {
  return   (
    <label className='side-label-container'>
    <input onChange={handleChange} type='radio' name='test' />
    <span className='checkmark'></span>
  </label>

  )
}

export default Input;
