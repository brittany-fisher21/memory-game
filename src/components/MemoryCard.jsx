import React from 'react';
import './MemoryCard.css';


class MemoryCardBack extends React.Component {
    constructor (state) {
        super(state);
        this.state = {isFlipped: false};
        
    } 
    
    clickHandler() {
        
            this.setState({isFlipped: !this.state.isFlipped});
    }
    
    render() {         
        const memoryCardInnerClass = 'MemoryCardInner' + (!!this.state.isFlipped ? 'flipped' : '');
        return (
            <div className='MemoryCard' onClick={this.clickHandler.bind(this)} >
                <div className={memoryCardInnerClass}> 
                    <div className='MemoryCardFront'> '▲'</div>
                        <div className='MemoryCardBack'> 
                        <img src="/digitalcrafts-logo-white-y.png" alt="digitalcraft logo" className="DCLogo" />
                </div>
            </div> 
        </div> 
    
        )
    }

}

export default MemoryCardBack;
