import React from 'react';
import logo from '../../images/logo.png';
import Transition from 'react-transition-group/Transition';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "none",
}
const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
}
export default class HomeHeader extends React.Component {
    constructor() {
        super();
        this.state = {isShow: false}
    }
    changeShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    };
    changeType = (e) => {
        this.props.changeType(e.target.dataset.type);
    };
    render() {
        return (
            <div className="home-header">
                <div className="home-header-logo">
                    <img src={logo} alt="logo" />
                    <div className="home-header-btn" onClick={() => {this.changeShow()}}>
                        {this.state.isShow?<i className="iconfont icon-close"></i>:<i className="iconfont icon-menu"></i>}   
                    </div>
                </div>
                <Transition in={this.state.isShow} timeout={duration} onEnter={(node) => { node.style.display = 'block' }} onExited={(node) => { node.style.display = 'none' }}>
                {
                    (state) => (
                        <ul className="home-header-list" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }} onClick={this.changeType.bind(this)}>
                            <li data-type="0">all</li>
                            <li data-type="1">react</li>
                            <li data-type="2">webpack</li>
                        </ul>
                    )
                }
                </Transition>
            </div>
        )
    }
}