import React from 'react'
import './MovieFilter.css'

export default props => {
  const filters = [
    {key: 'popular', name: 'Popular'},
    {key: 'now_playing', name: 'Now Playing'},
    {key: 'upcoming', name: 'Upcoming'},
    {key: 'top_rated', name: 'Top Rated'}
  ]

  const listFilters = filters.map((filter) => 
    <div key={filter.key}>
      <span 
          className={`item ${filter.key === props.filter.key ? 'active' : ''}`} 
          onClick={() => {props.onFilterChange(filter)}}>
      {filter.name}
      </span>
    </div>
  )
  
  return (
    <div>
      <nav>
        {listFilters}
      </nav>
    </div>
  )
}