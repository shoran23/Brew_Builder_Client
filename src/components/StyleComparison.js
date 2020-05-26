import React from 'react'
import ZingChart from 'zingchart-react'

class StyleComparison extends React.Component {
    state = {
        chartLabel: "Please Select a Parameter Above",
        config: {
            type: 'bar',
            series: [{
              values: [0]
            }]
          }
    }
    handleChartedValue = state => {
        let valueArr = []
        let labelArr = []
        if(state === 'IBU'){
            valueArr.push(this.props.ibu)
            valueArr.push(this.props.selectedStyle.value.ibu_low)
            valueArr.push(this.props.selectedStyle.value.ibu_high)
        } else if(state === 'SRM'){
            valueArr.push(this.props.srm)
            valueArr.push(this.props.selectedStyle.value.srm_low)
            valueArr.push(this.props.selectedStyle.value.srm_high)
        } else if(state === "O.G.") {
            valueArr.push(this.props.og)
            valueArr.push(this.props.selectedStyle.value.og_low)
            valueArr.push(this.props.selectedStyle.value.og_high)
        } else if(state === "F.G.") {
            valueArr.push(this.props.fg)
            valueArr.push(this.props.selectedStyle.value.fg_low)
            valueArr.push(this.props.selectedStyle.value.fg_high)
        } else if (state === "A.B.V.") {
            valueArr.push(this.props.avb)
            valueArr.push(this.props.selectedStyle.value.alc_by_vol_low)
            valueArr.push(this.props.selectedStyle.value.alc_by_vol_high)
        }
        labelArr.push(`Recipe ${state}`)
        labelArr.push(`Style Min ${state}`)
        labelArr.push(`Style Max ${state}`)
        this.setState({config:
            {
                type: 'bar',
                series: [{
                    values: valueArr
                }],
                "scale-x": {values: labelArr}
            }
        })
        this.setState({chartLabel: `Compare ${state}`})
    }
    render() {

        console.log('Style Comparison - Selected Style: ',this.props.selectedStyle)

        return (
            <div className='view-background'>
                <div className='view'>
                    <h2>Style Comparison</h2>
                    <div className='form-data-row'>
                        <button onClick={() => this.handleChartedValue('IBU')}>IBU</button>
                        <button onClick={() => this.handleChartedValue('SRM')}>SRM</button>
                        <button onClick={() => this.handleChartedValue('O.G.')}>O.G.</button>
                        <button onClick={() => this.handleChartedValue('F.G.')}>F.G.</button>
                        <button onClick={() => this.handleChartedValue('A.B.V.')}>A.B.V.</button>
                    </div>
                    <h3>{this.state.chartLabel}</h3>
                    <ZingChart 
                        data={this.state.config}
                    />
                    <button onClick={() => this.props.handleStyleCompare(false)}>Close</button>
                </div>

            </div>
        )
    }
}
export default StyleComparison