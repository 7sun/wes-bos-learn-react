import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish)
    this.form.reset();
  }

  render() {
    return (
      <form ref={ (form) => { this.form = form }}className='fish-edit'>
        <input ref={ (input) => { this.name = input }} type="text" placeholder="Fish Name"/>
        <input ref={ (input) => { this.price = input }} type="text" placeholder="Fish Price"/>
        <select ref={ (input) => { this.status = input }} type="text" placeholder="Fish Status">
          <option value="available">Fresh!</option>
          <option value="unavaiable">Sold Out!</option>
        </select>
        <textarea ref={ (input) => { this.desc = input }} type="text" placeholder="Fish Description"/>
        <input ref={ (input) => { this.image = input }} type="text" placeholder="Fish Image"/>
        <button type="submit" onClick={ (e) => this.createFish(e) }>+ Add Fish</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;