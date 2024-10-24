import Input from "../../components/Input";
import "./Colors.css";

function Colors({handleChange}) {
  return (
    <div>
    <h2 className="sidebar-title-color-title">Colors</h2>
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' value="" name='test2'/>
      <span className='checkmark'></span>All
    </label>

<input 
  handleChange={handleChange}
  value="black"
  title="Black"
  name="test1"
  color="black"
/>
<input 
  handleChange={handleChange}
  value="blue"
  title="Blue"
  name="test1"
  color="blue"
/>
<input 
  handleChange={handleChange}
  value="red"
  title="Red"
  name="test1"
  color="red"
/>
<input 
  handleChange={handleChange}
  value="green"
  title="Green"
  name="test1"
  color="green"
/>

<label className="sidebar-label-container">

<input type="radio" onChange={handleChange} value="white" name="test1"/>

</label>

    </div>
  );
}

export default Colors;
