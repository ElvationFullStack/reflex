import React, { Component } from 'react'
import "../style/catalog.css"
import Movie from './Movie'

const AllMovies = function (props) {
    return (
        <div>
            <p>Catalog:</p>
            <div className="display all">
                {props.movies.map(m => props.getMovieDisplay(m))}
            </div>
        </div>
    )
}

export class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            budget: 12
        }

    }

    getMovieDisplay = (movie, rented = false) => {
        return (
            <Movie
                movie={movie}
                key={movie.id}
                rented={rented}
                toggleRented={this.props.toggleRented}
                updateBudget={this.updateBudget}
                budget={this.state.budget}
            />)
    }
    handleInput = (e) => this.props.handleInput(e.target.value)

    getDisplayMovies = () => {
        console.log("--dddd", this.props.searchInput, "-----")
        // console.log(" inside getDisplayMovies",this.props.movies)
        let movies = this.props.movies
        let searchInput = this.props.searchInput.toLowerCase()

        return searchInput ?
            movies.filter(m => m.title.toLowerCase().includes(this.props.searchInput)) :
            movies
    }
    render() {
        return (
            <div className="catalog">
                <input value={this.props.searchInput} onChange={this.handleInput} className="search" placeholder="Search" />

                <span id="budget">Budget: ${this.state.budget}.00</span>

                <div className="movies">
                    <AllMovies movies={this.getDisplayMovies()} getMovieDisplay={this.getMovieDisplay} />
                </div>

            </div>
        );
    }
}

export default Catalog
