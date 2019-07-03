import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const { recipes, handleDetails, value, hanleChange, handleSubmit, error } = this.props;
        return (
            <React.Fragment>
                <RecipeSearch value={value} hanleChange={hanleChange} handleSubmit={handleSubmit} />

                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                    </div>
                    <div className="row">
                    { error ? (<h1 className="text-danger text-center">{error}</h1>) : (
                        recipes.map(recipe => {
                                return(
                                    <Recipe key={recipe.recipe_id} recipe={recipe} 
                                        handleDetails={handleDetails} />
                                )
                            })
                        )}
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
