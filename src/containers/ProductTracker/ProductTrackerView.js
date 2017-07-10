import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class ProductTracker extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.renderTracker = this.renderTracker.bind(this);
    }

     handleClick(event){
        this.props.fetchSingleData(event.target.value);
    }

    renderTracker(trackerData){
        const ticker = trackerData[0].product_name;
        const type = trackerData[0].classification_type;
        const price = trackerData[0].product_description;
        return(
            <tr key={ticker}>
                <td>{ticker}</td>
                <td>{type}</td>
                <td>{price}</td>
                <td>
                    <Link to={`/product?q=${ticker}`} >
                        <button value={ticker} onClick={(e)=>this.handleClick(e)} className="btn btn-info"> 
                            test 
                        </button>
                    </Link>
                </td>
            </tr>
        );
    }

    render() {
        return (

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>LinkTo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tracker.map(this.renderTracker)}
                    </tbody>    
                </table>

        );
    }
}

export default ProductTracker;