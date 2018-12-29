import React from 'react';
import './businesstList.scss';
import Business from '../Business/business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map( (business) => {
                       return  <Business business={business}/>
                    })
                }
            </div>
        )
    }
}
export default BusinessList;