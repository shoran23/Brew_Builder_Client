import React from 'react'
import Select from 'react-select'

class Malt extends React.Component {
    state = {
        maltAmount: 0,
        maltPercentage: 0
    }
    handleSelectChange = e => {
        this.props.handleRecipeState(this.props.recipeMaltList,e,this.props.index)
    }
    handleChangeAmount = (event) => {
        this.setState({[event.target.id]: event.target.value})
        let tempValue = Number(event.target.value)
        this.props.handleRecipeState(this.props.recipeMaltAmounts,tempValue,this.props.index)
    } 
    handleChangePercentages = (event) => {
        this.setState({[event.target.id]: event.target.value})
        let tempValue = Number(event.target.value)
        this.props.handleRecipeState(this.props.recipeMaltPercentages,tempValue,this.props.index)
    }
    handleDetailViewLocal = (state,malt) => {
        this.props.handleDetailView(state)
        this.props.handleDetail(malt.value)
    }
    render() {
        return (
            <div className='recipe-form-data-row'>
                <div className='recipe-form-data-column'>
                    <div className='recipe-form-data-label'>Amount(lbs)</div>
                    <input 
                        type="number"
                        name='maltAmount'
                        id='maltAmount'
                        value={this.props.recipeMaltAmounts[this.props.index]}
                        onChange={this.handleChangeAmount}
                    />
                </div>
                <div className='recipe-form-data-column'>
                    <div className='recipe-form-data-label'>Percentage(%)</div>
                    <input 
                        type="number"
                        name='maltPercentage'
                        id='maltPercentage'
                        value={this.props.recipeMaltPercentages[this.props.index]}
                        onChange={this.handleChangePercentages}
                    />
                </div>
                <div className='recipe-form-data-column'>
                    <div className='recipe-form-data-label'>Select Grain</div>
                    <Select
                        value={this.props.recipeMaltList[this.props.index]}
                        onChange={this.handleSelectChange}
                        options={this.props.maltList}
                    />
                </div>
                <div className='recipe-form-data-row' style={{width: 'auto', alignSelf: 'flex-end'}}>
                    <button className='recipe-form-data-view' onClick={() => this.handleDetailViewLocal(true,this.props.recipeMaltList[this.props.index])}>View</button>
                    <button className='recipe-form-data-delete' onClick={() => this.props.changeMaltArraySize('delete',this.props.index)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Malt