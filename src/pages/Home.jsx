import React, { useState } from 'react'
import Header from '../component/Header'
import ExploreMenu from '../component/ExploreMenu/ExploreMenu'
import FoodList from '../component/FoodItems/FoodList';
import AppDownload from '../component/App-Download/AppDownload';

const Home = () => {

  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory ={setCategory} />
      <FoodList category = {category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
