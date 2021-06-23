import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/movie.css'
export class Movie extends Component {
    render() {
        let movie = this.props.movie
        return (
            <div className="movie" key={movie.id} style={{ backgroundImage: `url(${movie.img})` }}>
                <Link key={movie.id} to={`/movies/${movie.id}`}></Link>
                <p>{movie.title}</p>
                {
                    // movie.isRented ? <i onClick={this.toggleRented} className="fas fa-minus-circle"></i> : <i onClick={this.toggleRented} className="fas fa-plus-circle"></i>
                }
            </div>
        )
    }
}

export default Movie
