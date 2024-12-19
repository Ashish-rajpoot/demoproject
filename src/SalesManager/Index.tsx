import NavbarS from './NavbarS'
import StateCards from './StateCards'
import TableArea from './TableArea/TableArea'

export const Index = () => {
  return (
    <div className='p-4 relative'>
      <div className="border-2 rounded-2xl  ">
        <NavbarS/>
        <StateCards/>
        <TableArea/>
      </div>
    </div>
  )
}
