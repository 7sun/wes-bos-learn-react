import React from 'react';
import AddFishForm from './addFishForm'

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(updatedFish, key)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]

    return(
      <div key={key} className="fish-edit">
        <input type="text" value={fish.name} name="name" onChange={(e) => this.handleChange(e, key)} placeholder="Fish Name"/>
        <input type="text" value={fish.price} name="price" onChange={(e) => this.handleChange(e, key)} placeholder="Fish Price"/>
        <select type="text" value={fish.status} name="status" onChange={(e) => this.handleChange(e, key)} placeholder="Fish Status">
          <option value="available">Fresh!</option>
          <option value="unavaiable">Sold Out!</option>
        </select>
        <textarea type="text" value={fish.desc} name="desc" onChange={(e) => this.handleChange(e, key)} placeholder="Fish Description"/>
        <input type="text" value={fish.image} name="image" onChange={(e) => this.handleChange(e, key)} placeholder="Fish Image"/>
        <button onClick={(e) => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={ this.props.addFish }/>
        <button onClick={ () => this.props.loadSamples() }>Load Samples</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;