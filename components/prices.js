class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    let list = '';

    if (this.state.currency === 'USD') {
      list = <li className="list-group-item">
        Bitcoin rate for {this.props.bpi.USD.description}
        : <span>{this.props.bpi.USD.code}</span>
        <strong> {this.props.bpi.USD.rate} </strong></li>
    } else if (this.state.currency === 'GBP') {
      list = <li className="list-group-item">
        Bitcoin rate for {this.props.bpi.GBP.description}
        : <span>{this.props.bpi.GBP.code}</span>
        <strong> {this.props.bpi.GBP.rate} </strong></li>
    }

    return (
      <div>
        <ul className="list-group">
          {list}
        </ul>
        <br />
        <select onChange={e => this.setState({ currency: e.target.value })}>
          <option value="USD"> USD </option>
          <option value="GBP"> GBP </option>
        </select>
      </div>
    )
  }
}

export default Prices;