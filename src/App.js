import { useState, useEffect }  from 'react';
import Select from "react-select"
import Recipe from './food'
// import Dropdownbox from './dropdown';
import './App.css';


const App = () => {

  const app_id = "158540c6";
  const app_key = "4cc951f3ecf74138534e62890c0537ce";

  const mealtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
  ];

  const dietoptions = [
    { value: '', label: 'anything' },
    { value: 'balanced', label: 'balanced' },
    { value: 'high-fiber', label: 'high-fiber' },
    { value: 'high-protein', label: 'high-protein' },
    { value: 'low-fat', label: 'low-fat' },
    { value: 'low-carb', label: 'low-carb' },
    { value: 'low-sodium', label: 'low-sodium' },
  ];

  const dishtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Biscuits and cookies', label: 'balanced' },
    { value: 'Bread', label: 'Bread' },
    { value: 'Main course', label: 'Main course' },
    // { value: 'Pancakes', label: 'Pancakes' },
    { value: 'Desserts', label: 'Desserts' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Starter', label: 'Starter' },
  ];

  const cuisinetypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Indian', label: 'Indian' },
    { value: 'American', label: 'American' },
    { value: 'Asian', label: 'Asian' },
    { value: 'French', label: 'French' },
    { value: 'Mediterranean', label: 'Mediterranean' },
    { value: 'Middle%20Eastern', label: 'Middle Eastern' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Central%20Europe', label: 'Central Europe' },
    { value: 'Eastern%20Europe', label: 'Eatern Europe' },
    { value: 'British', label: 'British' },
    { value: 'Mexcian', label: 'Mexican' },
  ];
  
  const [recipes, setrecipes] = useState([])
  const [search, setsearch] = useState('')
  const [submit,setsubmit] = useState('')
  const [meal,setmeal] = useState('')
  const [mealty,setmealty] = useState('')
  const [diet,setdiet] = useState('')
  const [deitty,setdietty] = useState('')
  const [dish,setdish] = useState('')
  const [dishty,setdishty] = useState('')
  const [cuisine,setcuisine] = useState('')
  const [cuisinety,setcuisinety] = useState('')

  // const expreq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${app_id}&app_key=${app_key}&cuisineType=Indian&mealType=Lunch&dishType=Main%20course&imageSize=REGULAR`
  
  useEffect(() => {
    getreciepe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[submit])

  const getreciepe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submit}&app_id=${app_id}&app_key=${app_key}${deitty}${cuisinety}${mealty}${dishty}`)
    const data = await response.json()
    // console.log(data.hits[0].recipe.label)
    // console.log(data.hits[1].recipe.label)
    console.log(data.hits)
    
    setrecipes(data.hits)
  } 

  const research = (e) =>{
    
    setsearch(`${e.target.value}`)
  
  } 

  const mealtype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setmeal(' ') 
    }else {
    setmeal(`&mealType=${selectedOption.value}`)
    }
  }

  const diettype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setdiet(' ') 
    }else {
       setdiet(`&diet=${selectedOption.value}`)
    }
  }

  const dishtype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setdish(' ') 
    }else {
       setdish(`&dishType=${selectedOption.value}`)
    }
  }

  const cuisinetype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setcuisine(' ') 
    }else {
       setcuisine(`&cuisineType=${selectedOption.value}`)
    }
  }

  const getsubmit = e =>{
    e.preventDefault(search)
    setsubmit(`${search}`)
    setmealty(`${meal}`)
    setdietty(`${diet}`)
    setdishty(`${dish}`)
    setcuisinety(`${cuisine}`)
    setsearch('')
  }

  return (
    <div className="h-s grid place-items-center text-white">

      <div className="upbar" id='upbar'>
        <h3 className="idfc" id='upbar'>Cook<span className='bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>Genie</span> - food recipe generator</h3>      
        <nav>
            <ul className="nav_bar">
               <li><a href="#home"><b>Home</b></a></li>
               <li><a href="#about"><b>About me</b></a></li>
               <li><a href="#contact"><b>Contact</b></a></li>
            </ul>
        </nav>
      </div>

      <div className='pro'>
        <h1 className='title'>Eliminate mealtime uncertainties<br />with Cook<span className='bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>Genie</span></h1>
      </div>

      <div className='mainform'>
      <form  className='my-2rem space-y-[1rem] shadow-md rounded px-8 pt-6 pb-8 mb-4  text-white border-2 border-slate-500 rounded-xl' onSubmit={getsubmit}>
        <div>
          <span id='types'>Search : </span><br/><br/><input className='dark:text-black rounded  py-2 px-3' type = "text" placeholder='search' value={search} onChange={research}/>
        </div>

        <div className='my-1rem' id='options'>
          <span id='types'>Meal Type : </span><br/><br/><Select className='text-black' options={mealtypeoptions} onChange={mealtype} styles={{width:'36vw'}} />
        </div>

        <div className='my-1rem' id='options'>
          <span id='types'>Diet Type :</span><br/><br/><Select className='text-black' options={dietoptions} onChange={diettype}/>
        </div>

        <div className='my-1rem' id='options'>
          <span id='types'>Dish Type : </span><br/><br/><Select className='text-black' options={dishtypeoptions} onChange={dishtype}/>
        </div>

        <div className='my-1rem' id='options'>
          <span id='types'>Cuisine Type : </span><br/><br/><Select className='text-black' options={cuisinetypeoptions} onChange={cuisinetype}/>
        </div><br />

        <button className='py-2 px-4 text-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-lg font-medium ml-8 ' type='submit' >
          <b className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >Search </b>
        </button>
      </form> 
      </div>


      <div className='output_recipe'>
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.calories} 
        title ={recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
      
      {/* <footer>Made with lust by <a href='https://charandevreddy.github.io/portfolio/'>Charan Dev Reddy</a></footer> */}
      
    </div>
  );
}

export default App;
