import React from 'react'

class Lane extends React.Component {
    render() {
        return (
            <img className={this.props.classNick} src={this.props.imgURL} alt={this.props.laneName} onClick={e => {
                this.props.clicked(e.target.alt);
            }} />
        )
    }   
}

export default Lane;