import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const SearchMovie = ({ titre, rate }) => {
    return (
        <div className="search">
            
                <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    onChange={(e) => titre(e.target.value)}
                />
                 <StarRatingComponent
                starCount={10}
                onStarClick={(r) => rate(r)}
                
                />  
            </div>

                  
    

    )

};
export default SearchMovie;