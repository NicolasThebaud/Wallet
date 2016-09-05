const React = require('react')

let Detail = React.createClass({
	render() { return (
		<div>
			<div>
				<span className="line-title">{this.props.data.name}</span>
				<span className="line-balance">{this.props.data.balance}</span>
			</div>
			<div>
				<div className="row">
					<div className="col s10"><p className="line-title"></p></div>
					<div className="col s2"><p className="p-padding"></p></div>
				</div>
			</div>
		</div>
	)}
})

module.exports = React.createClass({
	render() { return (
		<div>
			{(this.props.data || []).map(function(obj) {
				return (
					<Detail key={obj.id} data={obj}/>
				)
			})}
		</div>
	)}
})