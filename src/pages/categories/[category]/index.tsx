import { useParams } from "react-router-dom"

const Category = () => {
  const { category } = useParams()
  return (
    <div className=''>
        Category {category?.toUpperCase()}
    </div>
  )
}

export default Category