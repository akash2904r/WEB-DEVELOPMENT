const Logo = ({ size, color, leading }) => {
  return (
    <div className={`logo ${size ? size : 'text-2xl'} text-${color} font-bold cursor-pointer ${leading && 'leading-9'}`}>
      <span className='text-green-600'>&lt;</span>
      <span>Pass</span>
      <span className='text-green-600'>OP/&gt;</span>
    </div>
  )
}

export default Logo
