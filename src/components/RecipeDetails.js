import React, { Component } from 'react'
import { recipe } from '../tempDetails';
export default class RecipeDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         recipe: recipe,
    //         url: `https://www.food2fork.com/api/get?key=546f06af8ea723fec448f14f878cbd2a&rId=${this.props.id}`
    //     }
    // }
    // async componentDidMount() {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipe: jsonData.recipe
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    state = {
        recipe: recipe
    };
    // async componentDidMount(){
    //     console.log(this.props.id);
    //     const id = this.props.id;
    //     const url = `https://www.food2fork.com/api/get?key=80be3d10db4e6a11148934c4e35f1fa7&rId=${id}`;
    //     try {
    //         const data = await fetch(url);
    //         const jsonData = await data.json();
    //         this.setState((state, props) => {
    //             return{recipe: jsonData.recipe}
    //         }, 
    //             () => {}
    //         );
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    render() {
        // console.log(this.state.recipe);
        const {
            image_url, publisher, publisher_url, source_url, title, ingredients
        } = this.state.recipe;
        const {handleIndex} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" 
                            onClick={() => handleIndex(1)}>back to recipe list</button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        <div className="col-10 col-md-6 mx-auto my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-capitalize text-warning text-slanted">published by {publisher}</h6>
                            <a href={publisher_url} target="_blank" 
                            rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
                            <a href={source_url} target="_blank" 
                            rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize">recipe url</a>
                            <ul className="list-group">
                                <h2 className="mt-3 mb-4 text-capitalize">ingredients</h2>
                                { ingredients.map((item, index) => {
                                    return(
                                        <li key={index} className="list-group-item text-slanted">{item}</li>
                                    )
                                }) }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
