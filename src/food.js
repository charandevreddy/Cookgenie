




const recipe = ({title,calories,image,ingredients}) =>{
    return (
        <div className='my-2rem space-y-[1rem] shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-black'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt = ""/>
            {/* {console.log(recipe)} */}
        </div>
        
    )

}

export default recipe;